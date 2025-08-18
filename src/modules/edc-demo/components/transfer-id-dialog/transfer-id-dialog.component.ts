import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import {BusinessBackEndService} from "../../services/businessBackEnd.service";
import {MatDialogRef} from '@angular/material/dialog';
import {NotificationService} from "../../services/notification.service";
import {TransferIdInput} from '../../models/file-status';

@Component({
  selector: 'transfer-id-dialog',
  templateUrl: './transfer-id-dialog.component.html',
  styleUrls: ['./transfer-id-dialog.component.scss']
})
export class TransferIdDialog implements OnInit {
  id: string = '';
  autoLinkToEdc : boolean = false;
  selectedFile: File | null = null;  
  uploadStatus: string = '';
  sChecked: boolean = false;
  response: any;
  isEditMode = false;

  transferIdInput : TransferIdInput= {
    id : "",
    transferId : "",
    bpn : "",
    edcUrl : ""
  }

  constructor(private apiService: BusinessBackEndService,
    private notificationService: NotificationService,    
    private dialogRef: MatDialogRef<TransferIdDialog>,
    @Inject(MAT_DIALOG_DATA) transferIdInput:TransferIdInput) {
      this.transferIdInput = transferIdInput;
      if(transferIdInput.id) {
        this.isEditMode = true;
      }
  }

  private showError(error: any, errorMessage: string) {
    this.notificationService.showError(errorMessage);
    console.error(error);
  }

  ngOnInit(): void {
    
  }

  onSave():void {
    const transferIdInput: TransferIdInput = this.transferIdInput;
    this.dialogRef.close({transferIdInput});
  }

  onUpdate():void {
    const transferIdInput: TransferIdInput = this.transferIdInput;
    this.dialogRef.close({transferIdInput});
  }  
}