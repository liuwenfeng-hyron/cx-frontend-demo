import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import {AasxPackageService} from "../../services/aasx-package.service";
import {MatDialogRef} from '@angular/material/dialog';
import {NotificationService} from "../../../edc-demo/services/notification.service";

@Component({
  selector: 'aasx-package-upload-dialog',
  templateUrl: './aasx-package-upload-dialog.component.html',
  styleUrls: ['./aasx-package-upload-dialog.component.scss']
})
export class AasxPackageUploadDialog implements OnInit {
  id: string = '';
  selectedFile: File | null = null;  
  uploadStatus: string = '';
  err: any;

  constructor(private apiService: AasxPackageService,
    private notificationService: NotificationService,    
    private dialogRef: MatDialogRef<AasxPackageUploadDialog>,
    @Inject(MAT_DIALOG_DATA) id:string) {
      this.id = id;
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
    if (!this.selectedFile) {
      this.uploadStatus = 'Please select a Aasx File';
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    this.apiService.uploadPackage(this.id, formData)
      .subscribe({
        next: (response) => {
          this.uploadStatus = 'Aasx File Upload Successful';
        },
        error: (err) => {
          console.error('Upload Failed', err);
          this.uploadStatus = 'Aasx File Upload Failed';
          this.err = err;
        }
      });
  }
}