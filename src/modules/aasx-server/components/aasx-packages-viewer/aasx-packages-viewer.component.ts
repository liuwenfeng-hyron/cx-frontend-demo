import {Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {first, map, switchMap} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {NotificationService} from "../../../edc-demo/services/notification.service";
import {ConfirmationDialogComponent, ConfirmDialogModel} from "../../../edc-demo/components/confirmation-dialog/confirmation-dialog.component";
import {AasxPackageService} from "../../services/aasx-package.service";
import {AasxPackage} from '../../models/aasx-package';
import {AasxPackageUploadDialog} from '../aasx-package-upload-dialog/aasx-package-upload-dialog.component';

@Component({
  selector: 'aasx-server-packages-viewer',
  templateUrl: './aasx-packages-viewer.component.html',
  styleUrls: ['./aasx-packages-viewer.component.scss']
})
export class AasxPackagesViewerComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  columns: string[] = ['packageId', 'aasIds', 'action'];
  searchText = '';
  offset = 0;
  pageSize = 10;
  isTransferring = false;
  private fetch$ = new BehaviorSubject(null);
  filteredPackages$: Observable<AasxPackage[]> = of();
  
  constructor(private apiService: AasxPackageService,
              private notificationService: NotificationService,
              private readonly dialog: MatDialog) {

  }

  private showError(error: any, errorMessage: string) {
    this.notificationService.showError(errorMessage);
    console.error(error);
  }

  ngOnInit(): void {
    this.filteredPackages$ = this.fetch$
      .pipe(  
        switchMap(() => {
          const packages$ = this.apiService.getPackages();
          return !!this.searchText ?
            packages$.pipe(map(packages => packages.filter(pk => pk.aasIds[0]?.toLowerCase().includes(this.searchText.toLowerCase()))))
            :
            packages$;
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

  onUpload() {
      const dialogRef = this.dialog.open(AasxPackageUploadDialog, {data: ""});
      dialogRef.afterClosed().pipe(first()).subscribe((result: { changeData?: boolean }) => {
        if(result?.changeData) {
          this.fetch$.next(null);
        }
    })
  }

  onDownload(id: string) {
    
  }

  onUpdate(id: string) {
    const dialogRef = this.dialog.open(AasxPackageUploadDialog, {data: id});
    dialogRef.afterClosed().pipe(first()).subscribe((result: { changeData?: boolean }) => {
        if(result?.changeData) {
          this.fetch$.next(null);
        }
    })
  }

  onDelete(id: string) {
    const dialogData = ConfirmDialogModel.forDelete("Package By PackageId", `"${id}"`)
    const ref = this.dialog.open(ConfirmationDialogComponent, {maxWidth: "120%", data: dialogData});

    ref.afterClosed().subscribe({
      next: res => {
        if (res) {
          this.apiService.deletePackage(id).subscribe({
            next: () => this.onSearch(),
            error: err => this.showError(err, "This Package cannot be deleted"),
            complete: () => this.notificationService.showInfo("Successfully deleted")
          });
        }
      }
    });
  }
}