import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {first, map, switchMap} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {BusinessBackEndService} from "../../services/businessBackEnd.service";
import {TransferIdDialog} from "../transfer-id-dialog/transfer-id-dialog.component";
import {NotificationService} from "../../services/notification.service";
import {TransferIdResponse, TransferIdRecord, TransferIdInput} from '../../models/file-status';

@Component({
  selector: 'edc-demo-transfer-id-viewer',
  templateUrl: './transfer-id-viewer.component.html',
  styleUrls: ['./transfer-id-viewer.component.scss']
})
export class TransferIdViewer implements OnInit {

  columns: string[] = ['transferId', 'bpn', 'edcUrl'];
  isTransferring = false;
  searchCond = {
    "bpn" : "",
    "pageNum" : "1",
    "pageSize" : "10"
  }
  pageSize = 10;
  private fetch$ = new BehaviorSubject(null);
  transferIdRecord$: Observable<TransferIdRecord[]> = of([]);
  // transferIdResponse$: Observable<TransferIdResponse> = of();
  
  constructor(private apiService: BusinessBackEndService,
              private notificationService: NotificationService,
              private readonly dialog: MatDialog) {

  }

  private showError(error: string, errorMessage: string) {
    this.notificationService.showError(errorMessage);
    console.error(error);
  }

  ngOnInit(): void {
    this.transferIdRecord$ = this.fetch$
        .pipe(
          switchMap(() => {
            const fileStatus$ = this.apiService.getTransferId(this.searchCond);
            return fileStatus$;
          }));
  }

  isBusy() {
    return this.isTransferring;
  }

  onSearch() {
    this.fetch$.next(null);
  }

  onCreate() {
    const transferIdInput : TransferIdInput= {
      id : "",
      transferId : "",
      bpn : "",
      edcUrl : ""
    }
    const dialogRef = this.dialog.open(TransferIdDialog, {data: transferIdInput});
    dialogRef.afterClosed().pipe(first()).subscribe((result: { transferIdInput?: TransferIdInput }) => {
      const newTransferIdInput = result?.transferIdInput;
      if (newTransferIdInput) {
        this.apiService.setTransferId(newTransferIdInput).subscribe({
          next: ()=> this.fetch$.next(null),
          error: err => this.showError(err, "This TransferId Record cannot be created"),
          complete: () => this.notificationService.showInfo("Successfully created"),
        })
      }
    })  
  }

  onUpdate(transferIdRecord: TransferIdRecord) {   
    const transferIdInput : TransferIdInput= {
      id : transferIdRecord.id,
      transferId : transferIdRecord.transferId,
      bpn : transferIdRecord.bpn,
      edcUrl : transferIdRecord.edcUrl
    }

    const dialogRef = this.dialog.open(TransferIdDialog, {data: transferIdInput});
    dialogRef.afterClosed().pipe(first()).subscribe((result: { transferIdInput?: TransferIdInput }) => {
      const newTransferIdInput = result?.transferIdInput;
      if (newTransferIdInput) {
        this.apiService.updateTransferId(newTransferIdInput).subscribe({
          next: ()=> this.fetch$.next(null),
          error: err => this.showError(err, "This TransferId Record cannot be created"),
          complete: () => this.notificationService.showInfo("Successfully created"),
        })
      }
    }) 
  }
}