import {Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {first, map, switchMap} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {NotificationService} from "../../../edc-demo/services/notification.service";
import {ConfirmationDialogComponent, ConfirmDialogModel} from "../../../edc-demo/components/confirmation-dialog/confirmation-dialog.component";
import {ShellService} from "../../services/shell.service";
import {Shell} from '../../models/shell';
import {ShellDetail} from "../shell-detail/shell-detail.component";
import {ShellEditorDialog} from "../shell-editor-dialog/shell-editor-dialog.component";


@Component({
  selector: 'aasx-server-shells-viewer',
  templateUrl: './shells-viewer.component.html',
  styleUrls: ['./shells-viewer.component.scss']
})
export class ShellsViewerComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // columns: string[] = ['id', 'idShort', 'thumbnail', 'assetKind', 'submodelCount', 'modelType', 'action'];
  columns: string[] = ['id', 'idShort', 'thumbnail', 'assetKind', 'submodelCount', 'action'];
  searchText = '';
  offset = 0;
  pageSize = 10;
  isTransferring = false;
  private fetch$ = new BehaviorSubject(null);
  filteredShells$: Observable<Shell[]> = of();
  
  constructor(private apiService: ShellService,
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
    this.filteredShells$ = this.fetch$
        .pipe(  
          switchMap(() => {
            const shells$ = this.apiService.getShells();
            return !!this.searchText ?
              shells$.pipe(map(shells => shells.filter(shell => shell.idShort.toLowerCase().includes(this.searchText.toLowerCase()))))
              :
              shells$;
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
    this.dialog.open(ShellDetail, {data: id});
  }

  onCreate() {
      const dialogRef = this.dialog.open(ShellEditorDialog, {data: "", disableClose: true});
      dialogRef.afterClosed().pipe(first()).subscribe((result: { newShell?: Shell }) => {
          const newShell = result?.newShell;
          if (newShell) {
            if (newShell.id === null || newShell.id.trim() === "") {
              this.showError({}, "This Shell cannot be created : ID is null or an empty string");
            } else {
              this.apiService.createShell(newShell, newShell.id).subscribe({
                  next: () => this.onSearch(),
                  error: err => this.showError(err, "This Shell cannot be created"),
                  complete: () => this.notificationService.showInfo("Successfully created"),
                })
            }            
          }
      })
  }

  onUpdate(id: string) {
    const dialogRef = this.dialog.open(ShellEditorDialog, {data: id, disableClose: true});
    dialogRef.afterClosed().pipe(first()).subscribe((result: { newShell?: Shell, changeThumbnail?: boolean }) => {
        const newShell = result?.newShell;
        if (newShell) {
          if (newShell.id === null || newShell.id.trim() === "") {
            this.showError({}, "This Shell cannot be updated : ID is null or an empty string");
          } else {
            this.apiService.updateShell(id, newShell).subscribe({
              next: () => this.fetch$.next(null),
              error: err => this.showError(err, "This Shell cannot be updated"),
              complete: () => this.notificationService.showInfo("Successfully updated"),
            })
          }
        } else if(result?.changeThumbnail) {
          this.fetch$.next(null);
        }
    })
  }

  onDelete(id: string) {
    const dialogData = ConfirmDialogModel.forDelete("Shell By ID", `"${id}"`)
    const ref = this.dialog.open(ConfirmationDialogComponent, {maxWidth: "120%", data: dialogData});

    ref.afterClosed().subscribe({
      next: res => {
        if (res) {
          this.apiService.deleteShell(id).subscribe({
            next: () => this.onSearch(),
            error: err => this.showError(err, "This Shell cannot be deleted"),
            complete: () => this.notificationService.showInfo("Successfully deleted")
          });
        }
      }
    });
  }
}