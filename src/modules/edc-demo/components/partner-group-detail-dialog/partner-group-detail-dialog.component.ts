import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'edc-demo-partner-group-detail-dialog',
  templateUrl: './partner-group-detail-dialog.component.html',
  styleUrls: ['./partner-group-detail-dialog.component.scss']
})
export class PartnerGroupDetailDialogComponent implements OnInit {

  groupId: string = '';
  bpns: string[] = [];
  bpnsKey: string = 'https://w3id.org/tractusx/v0.0.1/ns/bpns';

  constructor(
    private dialogRef: MatDialogRef<PartnerGroupDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.groupId = data['@id'];
    this.bpns = data[this.bpnsKey] || [];
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
