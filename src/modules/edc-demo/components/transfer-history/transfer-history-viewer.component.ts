import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {TransferProcessService} from "../../../mgmt-api-client";
import {TransferProcess} from "../../../mgmt-api-client/model";
import {AppConfigService} from "../../../app/app-config.service";
import {ConfirmationDialogComponent, ConfirmDialogModel} from "../confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {EdrInfoDialog} from "../edr-info-dialog/edr-info-dialog.component";

@Component({
  selector: 'edc-demo-transfer-history',
  templateUrl: './transfer-history-viewer.component.html',
  styleUrls: ['./transfer-history-viewer.component.scss']
})
export class TransferHistoryViewerComponent implements OnInit {
  pageIndex = 0;
  pageSize = 50;
  offset = 0;
  limit = 90000000;
  ttlCount = 0;
  //columns: string[] = ['id', 'state', 'lastUpdated', 'connectorId', 'assetId', 'contractId', 'action'];
  columns: string[] = ['id', 'state', 'lastUpdated', 'type','assetId', 'contractId', 'action'];
  transferProcesses$: Observable<TransferProcess[]> = of([]);
  storageExplorerLinkTemplate: string | undefined;

  constructor(private transferProcessService: TransferProcessService,
              private dialog : MatDialog,
              private appConfigService: AppConfigService) {
  }

  ngOnInit(): void {
    this.loadTransferProcesses();
    // Added By ljz On 2025.8.27 Start
    this.transferProcesses$.subscribe((dataArray) => {
      const currentItemCount = dataArray.length;
      this.ttlCount = currentItemCount;
    });
    this.limit = this.pageSize;
    this.loadTransferProcesses();
    // Added By ljz On 2025.8.27 End
    this.storageExplorerLinkTemplate = this.appConfigService.getConfig()?.storageExplorerLinkTemplate
  }

  onDeprovision(transferProcess: TransferProcess): void {

    const dialogData = new ConfirmDialogModel("Confirm deprovision", `Deprovisioning resources for transfer [${transferProcess["@id"]}] will take some time and once started, it cannot be stopped.`)
    dialogData.confirmColor = "warn";
    dialogData.confirmText = "Confirm";
    dialogData.cancelText = "Abort";
    const ref = this.dialog.open(ConfirmationDialogComponent, {maxWidth: '120%', data: dialogData});

    ref.afterClosed().subscribe(res => {
      if (res) {
       this.transferProcessService.deprovisionTransferProcess(transferProcess["@id"]!).subscribe(() => this.loadTransferProcesses());
      }
    });
  }

  showStorageExplorerLink(transferProcess: TransferProcess) {
    return transferProcess.dataDestination?.properties?.type === 'AzureStorage' && transferProcess.state === 'COMPLETED';
  }

  showDeprovisionButton(transferProcess: TransferProcess) {
    return ['COMPLETED', 'PROVISIONED', 'REQUESTED', 'REQUESTED_ACK', 'IN_PROGRESS', 'STREAMING'].includes(transferProcess.state!);
  }

  loadTransferProcesses() {
    //  this.transferProcesses$ = this.transferProcessService.queryAllTransferProcesses();
    // if need to sort the result, you can write like this (by ljz 2024.11.19)
    this.transferProcesses$ = this.transferProcessService.queryAllTransferProcesses({"offset": this.offset, "limit": this.limit, "sortField" :  "stateTimestamp", "sortOrder" : "DESC"});
  }

  asDate(epochMillis?: number) {
    // 例: 2025/8/16
    return epochMillis ? new Date(epochMillis).toLocaleDateString() : '';
    // 例: 2025/8/16 16:49:07
    // return epochMillis ? new Date(epochMillis).toLocaleString() : '';
    // 例(UTC): Wed, 27 Aug 2025 09:24:27 GMT
    // return epochMillis ? new Date(epochMillis).toUTCString() : '';
  }

  // Added By ljz On 2024.11.12 Start
  // EDR情報を表示する
  onGetDataAddressClick(id: string): void {
    this.dialog.open(EdrInfoDialog, {data: id, enterAnimationDuration:'1000ms'});   
  }
  // Added By ljz On 2024.11.12 End

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.offset = event.pageIndex * this.pageSize;
    this.limit = this.pageSize;
    this.loadTransferProcesses();
  }
}
