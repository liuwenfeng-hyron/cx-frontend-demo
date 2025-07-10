import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {first, map, switchMap} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {PartnerGroupInput} from "../../../mgmt-api-client";
import {PartnerGroupsEditorDialog} from "../partner-groups-editor-dialog/partner-groups-editor-dialog.component";
import {ConfirmationDialogComponent, ConfirmDialogModel} from "../confirmation-dialog/confirmation-dialog.component";
import {NotificationService} from "../../services/notification.service";
import {PartnerGroupService} from "../../../mgmt-api-client";


@Component({
  selector: 'edc-demo-partner-groups-viewer',
  templateUrl: './partner-groups-viewer.component.html',
  styleUrls: ['./partner-groups-viewer.component.scss']
})
export class PartnerGroupsViewerComponent implements OnInit {

  partnerGroupsInfo: any;
  searchText = '';
  isTransferring = false;
  
  constructor(private partnerGroupsService: PartnerGroupService,
              private notificationService: NotificationService,
              private readonly dialog: MatDialog) {

}

  private showError(error: string, errorMessage: string) {
    this.notificationService.showError(errorMessage);
    console.error(error);
  }

  ngOnInit(): void {
  }

  isBusy() {
    return this.isTransferring;
  }

  async onSearch() {
    this.partnerGroupsInfo = null;
    this.partnerGroupsInfo = await this.partnerGroupsService.getPartnerGroup(this.searchText);
  }  

  onDelete(bpn: string) {
      const dialogData = ConfirmDialogModel.forDelete("partnerGroupByBPN", `"${bpn}"`)
      const ref = this.dialog.open(ConfirmationDialogComponent, {maxWidth: "120%", data: dialogData});
  
      ref.afterClosed().subscribe({
        next: res => {
          if (res) {
            this.partnerGroupsService.removePartnerGroup(bpn).subscribe({
              next: () => {this.searchText=bpn; this.onSearch();},
              error: err => this.showError(err, "This partnerGroup cannot be deleted"),
              complete: () => this.notificationService.showInfo("Successfully deleted")
            });
          }
        }
      });
  }

  onCreate() {
      const pgi: PartnerGroupInput = {
        "@id": "",
        "tx:groups": []
      };
      const dialogRef = this.dialog.open(PartnerGroupsEditorDialog, {data: pgi});
      dialogRef.afterClosed().pipe(first()).subscribe((result: { partnerGroupInput?: PartnerGroupInput }) => {
          const newPartnerGroup = result?.partnerGroupInput;
          if (newPartnerGroup) {
            this.partnerGroupsService.createPartnerGroup(newPartnerGroup).subscribe({
              //next: () => this.onSearch(),
              error: err => this.showError(err, "This PartnerGroup cannot be created"),
              complete: () => this.notificationService.showInfo("Successfully created"),
            })
          }
      })
  }

  onUpdate(pgi: PartnerGroupInput) {
    const dialogRef = this.dialog.open(PartnerGroupsEditorDialog, {data: pgi});
    dialogRef.afterClosed().pipe(first()).subscribe((result: { partnerGroupInput?: PartnerGroupInput }) => {
        const newPartnerGroup = result?.partnerGroupInput;
        if (newPartnerGroup) {
          this.partnerGroupsService.updatePartnerGroup(newPartnerGroup).subscribe({
            next: () => this.onSearch(),
            error: err => this.showError(err, "This PartnerGroup cannot be updated"),
            complete: () => this.notificationService.showInfo("Successfully updated"),
          })
        }
    })
}

}