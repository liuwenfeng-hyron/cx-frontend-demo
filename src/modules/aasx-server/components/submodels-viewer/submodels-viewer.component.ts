import {Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {first, map, switchMap} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {NotificationService} from "../../../edc-demo/services/notification.service";
import {ConfirmationDialogComponent, ConfirmDialogModel} from "../../../edc-demo/components/confirmation-dialog/confirmation-dialog.component";
import {SubmodelService} from "../../services/submodel.service";
import {Submodel} from '../../models/submodel';
import {SubmodelDetail} from "../submodel-detail/submodel-detail.component";
import {SubmodelEditorDialog} from "../submodel-editor-dialog/submodel-editor-dialog.component";


@Component({
  selector: 'aasx-server-submodels-viewer',
  templateUrl: './submodels-viewer.component.html',
  styleUrls: ['./submodels-viewer.component.scss']
})
export class SubmodelsViewerComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  columns: string[] = ['id', 'idShort', 'kind', 'action'];
  searchText = '';
  offset = 0;
  pageSize = 10;
  isTransferring = false;
  private fetch$ = new BehaviorSubject(null);
  filteredSubmodels$: Observable<Submodel[]> = of();
  
  constructor(private apiService: SubmodelService,
              private notificationService: NotificationService,
              private readonly dialog: MatDialog) {

  }

  private showError(error: any, errorMessage: string) {
    this.notificationService.showError(errorMessage);
    console.error(error);
  }

  ngOnInit(): void {
    this.filteredSubmodels$ = this.fetch$
        .pipe(
          switchMap(() => {
            const submodels$ = this.apiService.getSubmodelsMetadata();
            return !!this.searchText ?
              submodels$.pipe(map(submodels => submodels.filter(submodel => submodel.idShort.toLowerCase().includes(this.searchText.toLowerCase()))))
              :
              submodels$;
          }));
  }
  
  onSearch() {
    this.offset = 0;
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = this.pageSize;
    this.fetch$.next(null);
  }

  onPageChange(event: any) {
    this.offset = event.pageIndex * event.pageSize;
    this.pageSize = event.pageSize;
  }

  isBusy() {
    return this.isTransferring;
  }

  onShowDetail(id: string) {
    this.dialog.open(SubmodelDetail, {data: id});
  }

  onCreate() {
      const dialogRef = this.dialog.open(SubmodelEditorDialog, {data: ""});
      dialogRef.afterClosed().pipe(first()).subscribe((result: { newSubmodel?: Submodel }) => {
          const newSubmodel = result?.newSubmodel;
          if (newSubmodel) {
            let id = newSubmodel.id;
            this.apiService.createSubmodel(newSubmodel, id).subscribe({
              next: () => this.onSearch(),
              error: err => this.showError(err, "This Submodel cannot be created"),
              complete: () => this.notificationService.showInfo("Successfully created"),
            })
          }
      })
  }

  onUpdate(id: string) {
    const dialogRef = this.dialog.open(SubmodelEditorDialog, {data: id});
    dialogRef.afterClosed().pipe(first()).subscribe((result: { newSubmodel?: Submodel }) => {
        const newSubmodel = result?.newSubmodel;
        if (newSubmodel) {
          this.apiService.updateSubmodel(id, newSubmodel).subscribe({
            next: () => this.fetch$.next(null),
            error: err => this.showError(err, "This Submodel cannot be updated"),
            complete: () => this.notificationService.showInfo("Successfully updated"),
          })
        }
    })
  }

  onDelete(id: string) {
    const dialogData = ConfirmDialogModel.forDelete("Submodel By ID", `"${id}"`)
    const ref = this.dialog.open(ConfirmationDialogComponent, {maxWidth: "120%", data: dialogData});

    ref.afterClosed().subscribe({
      next: res => {
        if (res) {
          this.apiService.deleteSubmodel(id).subscribe({
            next: () => this.onSearch(),
            error: err => this.showError(err, "This Submodel cannot be deleted"),
            complete: () => this.notificationService.showInfo("Successfully deleted")
          });
        }
      }
    });
  }
}