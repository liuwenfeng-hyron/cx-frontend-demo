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
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  columns: string[] = ['id', 'idShort', 'kind', 'action'];
  searchText = '';
  offset = 0;
  pageIndex = 0;
  pageSize = 10;
  isTransferring = false;
  private fetch$ = new BehaviorSubject(null);
  filteredSubmodels$: Observable<Submodel[]> = of();
  
  constructor(private apiService: SubmodelService,
              private notificationService: NotificationService,
              private readonly dialog: MatDialog) {

  }

  private showError(error: any, errorMessage: string) {
    console.error(error);
    if (error?.error?.Messages?.[0]?.Text) {
      errorMessage = errorMessage + " : " + error.error.Messages[0].Text;
    }
    this.notificationService.showError(errorMessage);
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
    this.pageIndex = 0;
    // this.paginator.pageIndex = 0;
    // this.paginator.pageSize = this.pageSize;
    this.fetch$.next(null);
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.offset = event.pageIndex * event.pageSize;
  }

  isBusy() {
    return this.isTransferring;
  }

  onShowDetail(id: string) {
    this.dialog.open(SubmodelDetail, {data: id});
  }

  onCreate() {
      const dialogRef = this.dialog.open(SubmodelEditorDialog, {data: "", disableClose: true});
      dialogRef.afterClosed().pipe(first()).subscribe((result: { newSubmodel?: Submodel }) => {
          const newSubmodel = result?.newSubmodel;
          if (newSubmodel) {
            if (newSubmodel.id === null || newSubmodel.id.trim() === "") {
              this.showError({}, "This Submodel cannot be created : ID is null or an empty string");
            } else {
              this.apiService.createSubmodel(newSubmodel, newSubmodel.id).subscribe({
                next: () => this.onSearch(),
                error: err => this.showError(err, "This Submodel cannot be created"),
                complete: () => this.notificationService.showInfo("Successfully created"),
              })
            }
          }
      })
  }

  onUpdate(id: string) {
    const dialogRef = this.dialog.open(SubmodelEditorDialog, {data: id, disableClose: true});
    dialogRef.afterClosed().pipe(first()).subscribe((result: { newSubmodel?: Submodel }) => {
        const newSubmodel = result?.newSubmodel;
        if (newSubmodel) {
          if (newSubmodel.id === null || newSubmodel.id.trim() === "") {
            this.showError({}, "This Submodel cannot be updated : ID is null or an empty string");
          } else {
            this.apiService.updateSubmodel(id, newSubmodel).subscribe({
              next: () => this.fetch$.next(null),
              error: err => {
                console.log('update error:', err);
                //this.showError(err, "This Submodel cannot be updated")
                const isConcurrencyIssue =
                    err.status === 500 &&
                    err.error &&
                    Array.isArray(err.error.Messages) &&
                    err.error.Messages.some(
                      (msg: any) =>
                        msg.Text &&
                        (
                          msg.Text.includes('expected to affect') ||
                          msg.Text.includes('actually affected') ||
                          msg.Text.includes('data may have been modified')
                        )
                    );

                  if (isConcurrencyIssue) {
                    console.log('isConcurrencyIssue，Try again to do the update...');

                    // try again 
                    this.apiService.updateSubmodel(id, newSubmodel).subscribe({
                      next: () => {
                        this.fetch$.next(null);
                        this.notificationService.showInfo('Successfully updated');
                      },
                      error: (err2) => {
                        this.showError(err2, 'This Submodel cannot be updated（after try again）');
                      }
                    });

                  } else {
                    this.showError(err, 'This Submodel cannot be updated');
                  }
              },
              complete: () => this.notificationService.showInfo("Successfully updated"),
            })
          }
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