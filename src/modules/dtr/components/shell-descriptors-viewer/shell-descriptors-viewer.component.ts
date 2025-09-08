import {Component, OnInit,ViewChild} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {first, map, switchMap} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {NotificationService} from "../../../edc-demo/services/notification.service";
import {ConfirmationDialogComponent, ConfirmDialogModel} from "../../../edc-demo/components/confirmation-dialog/confirmation-dialog.component";
import {ShellDescriptorService} from "../../services/shell-descriptor.service";
import {ShellDescriptor} from '../../models/shell-descriptor';
import {ShellDescriptorDetail} from "../shell-descriptor-detail/shell-descriptor-detail.component";
import {ShellDescriptorEditorDialog} from "../shell-descriptor-editor-dialog/shell-descriptor-editor-dialog.component";
import {SubmodelDescriptorEditorDialog} from "../submodel-descriptor-editor-dialog/submodel-descriptor-editor-dialog.component";
import {SubmodelDescriptor} from '../../models/submodel-descriptor';


@Component({
  selector: 'dtr-shell-descriptors-viewer',
  templateUrl: './shell-descriptors-viewer.component.html',
  styleUrls: ['./shell-descriptors-viewer.component.scss']
})
export class ShellDescriptorsViewerComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  columns: string[] = ['id', 'idShort', 'displayName', 'action'];
  searchText = '';
  offset = 0;
  pageSize = 10;
  isTransferring = false;
  private fetch$ = new BehaviorSubject(null);
  filteredShellDescriptors$: Observable<ShellDescriptor[]> = of([]);
  
  constructor(private apiService: ShellDescriptorService,
              private notificationService: NotificationService,
              private readonly dialog: MatDialog) {

  }

  private showError(error: any, errorMessage: string) {
    console.error(error);
    if (error?.error?.messages?.[0]?.text) {
      errorMessage = errorMessage + " : " + error.error.messages[0].text;
    }
    this.notificationService.showError(errorMessage);
  }

  ngOnInit(): void {
    this.filteredShellDescriptors$ = this.fetch$
      .pipe(
        switchMap(() => {
          const shellDescs$ = this.apiService.getShellDescriptors();
          return !!this.searchText ?
            shellDescs$.pipe(map(shellDescs => shellDescs.filter(shellDesc => shellDesc.idShort.toLowerCase().includes(this.searchText.toLowerCase()))))
            :
            shellDescs$;
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
    this.dialog.open(ShellDescriptorDetail, {data: id});
  }

  onCreate() {
    const dialogRef = this.dialog.open(ShellDescriptorEditorDialog, {data: "", disableClose: true});
    dialogRef.afterClosed().pipe(first()).subscribe((result: { shellDescriptor?: ShellDescriptor }) => {
        const newShellDescriptor = result?.shellDescriptor;
        if (newShellDescriptor) {
          if (newShellDescriptor.id === null || newShellDescriptor.id.trim() === "") {
            this.showError({}, "This Shell Descriptor cannot be created : ID is null or an empty string");
          } else {
              this.apiService.createShellDescriptor(newShellDescriptor).subscribe({
              next: () => this.onSearch(),
              error: err => this.showError(err, "This Shell Descriptor cannot be created"),
              complete: () => this.notificationService.showInfo("Successfully created"),
            })
          }          
        }
    })
  }

  onUpdate(id: string) {
    const dialogRef = this.dialog.open(ShellDescriptorEditorDialog, {data: id, disableClose: true});
    dialogRef.afterClosed().pipe(first()).subscribe((result: { shellDescriptor?: ShellDescriptor }) => {
        const newShellDescriptor = result?.shellDescriptor;
        if (newShellDescriptor) {
          if (newShellDescriptor.id === null || newShellDescriptor.id.trim() === "") {
            this.showError({}, "This Shell Descriptor cannot be updated : ID is null or an empty string");
          } else {
            this.apiService.updateShellDescriptor(id, newShellDescriptor).subscribe({
              next: () => this.onSearch(),
              error: err => this.showError(err, "This Shell Descriptor cannot be updated"),
              complete: () => this.notificationService.showInfo("Successfully updated"),
            })
          }
        }
    })
  }

  onDelete(id: string) {
    const dialogData = ConfirmDialogModel.forDelete("Shell Descriptor By ID", `"${id}"`)
    const ref = this.dialog.open(ConfirmationDialogComponent, {maxWidth: "120%", data: dialogData});

    ref.afterClosed().subscribe({
      next: res => {
        if (res) {
          this.apiService.deleteShellDescriptor(id).subscribe({
            next: () => this.onSearch(),
            error: err => this.showError(err, "This Shell Descriptor cannot be deleted"),
            complete: () => this.notificationService.showInfo("Successfully deleted")
          });
        }
      }
    });
  }

  onAddSubmodelDescriptor(id: string) {
    const dialogRef = this.dialog.open(SubmodelDescriptorEditorDialog, {data: id});
    dialogRef.afterClosed().pipe(first()).subscribe((result: { submodelDescriptor?: SubmodelDescriptor }) => {
        const newSubmodelDescriptor = result?.submodelDescriptor;
        if (newSubmodelDescriptor) {
          this.apiService.addSubmodelDescriptor(id, newSubmodelDescriptor).subscribe({
            next: () => this.onSearch(),
            error: err => this.showError(err, "This Submodel Descriptor cannot be added"),
            complete: () => this.notificationService.showInfo("Successfully added"),
          })
        }
    })
  }
}