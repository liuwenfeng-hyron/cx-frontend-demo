import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import {BusinessBackEndService} from "../../services/businessBackEnd.service";
import {MatDialogRef} from '@angular/material/dialog';
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.scss']
})
export class FileUploadDialog implements OnInit {
  id: string = '';
  autoLinkToEdc : boolean = false;
  selectedFile: File | null = null;  
  uploadStatus: string = '';
  response: any;
  err: any;


  constructor(private apiService: BusinessBackEndService,
    private notificationService: NotificationService,    
    private dialogRef: MatDialogRef<FileUploadDialog>) {
      
  }

  private showError(error: any, errorMessage: string) {
    this.notificationService.showError(errorMessage);
    console.error(error);
  }

  ngOnInit(): void {
    
  }

  onCancel() {
    let changeData: boolean = false;
    if(this.uploadStatus.includes("Successful")) {
      changeData = true;
    }
    this.dialogRef.close({ changeData});
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] || null;
    this.uploadStatus = '';
  }

  uploadFile() {
    this.uploadStatus = '';
    this.response = {};
    this.err = {};
    if (!this.selectedFile) {
      this.uploadStatus = 'Please select a File';
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    if(this.autoLinkToEdc) {
      formData.append('autoLinkToEdc', "Y");
    }
    this.apiService.uploadFile(formData)
      .subscribe({
        next: (response) => {
          console.log('Upload successful', response);
          this.uploadStatus = 'File Upload Successful';
          this.response = response;
        },
        error: (err) => {
          console.error('Upload Failed', err);
          this.uploadStatus = 'File Upload Failed';
          this.err = err;
        }
      });
  }
}