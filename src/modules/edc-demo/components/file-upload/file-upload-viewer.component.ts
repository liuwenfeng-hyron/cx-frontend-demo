import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {first, map, switchMap} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {BusinessBackEndService} from "../../services/businessBackEnd.service";
import {FileUploadDialog} from "../file-upload-dialog/file-upload-dialog.component";
import {NotificationService} from "../../services/notification.service";
import {FileStatusResponse, FileStatus} from '../../models/file-status';

@Component({
  selector: 'edc-demo-file-upload-viewer',
  templateUrl: './file-upload-viewer.component.html',
  styleUrls: ['./file-upload-viewer.component.scss']
})
export class FileUploadViewer implements OnInit {

  columns: string[] = ['no', 'fileName', 'messageId', 'uploadTime', 'uploadStatus', 'feedbackMessageId', 'feedbackTime', 'feedbackFirstDownloadTime'];
  isTransferring = false;
  searchCond = {
    "startDate" : "2025-08-07T00:00",
    "endDate" : "2025-08-07T23:59",
    "messageId" : "",
    "pageNum" : "1",
    "pageSize" : "10",
    "sortOrder" : "DESC"
  }
  pageIndex = 0;
  pageSize = 10;
  isLoading: boolean = false;
  private fetch$ = new BehaviorSubject(null);
  filteredFileStatus$: Observable<FileStatus[]> = of([]);
  fileStatusResponse$: Observable<FileStatusResponse> = of();
  
  constructor(private apiService: BusinessBackEndService,
              private notificationService: NotificationService,
              private readonly dialog: MatDialog) {

  }

  private showError(error: string, errorMessage: string) {
    this.notificationService.showError(errorMessage);
    console.error(error);
  }

  ngOnInit(): void {
    const today = new Date();
    const isoDate = today.toISOString().slice(0, 16);
    this.searchCond.startDate = isoDate;
    this.searchCond.endDate = isoDate;
    this.fileStatusResponse$ = this.fetch$
        .pipe(
          switchMap(() => {
            const fileStatus$ = this.apiService.getFileStatus(this.searchCond);
            if(this.isLoading) {
                setTimeout(() => {
                console.log('after 1 s');
                this.isLoading = false;
              }, 1000);
            }
            return fileStatus$;
          }));
  }

  isBusy() {
    return this.isTransferring;
  }

  onSearch() {
    this.isLoading = true;
    this.fetch$.next(null);
  }

  onUpload() {
    const dialogRef = this.dialog.open(FileUploadDialog, {data: ""});
    dialogRef.afterClosed().pipe(first()).subscribe(
      (result: { fileName: string, fileId: string }) => {
        this.fetch$.next(null);
    })
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.searchCond.pageNum = event.pageIndex + 1;
    this.searchCond.pageSize = event.pageSize;
    this.fetch$.next(null);
  }

  onDownloadSendFile(messageId: string):void {
    this.apiService.downloadFile('/file/download-json', messageId);
  }

  onDownloadFeedbackFile(feedbackMessageId: string):void {
    this.apiService.downloadFile('/file/download-feedback', feedbackMessageId);
  }

  onDownloadCsvFile():void {
    this.apiService.downloadCsvFile('/file/download-csv', this.searchCond);
  }
}