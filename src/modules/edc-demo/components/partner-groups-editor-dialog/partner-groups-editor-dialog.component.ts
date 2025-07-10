import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import {PartnerGroupInput} from '../../../mgmt-api-client';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";


@Component({
  selector: 'edc-demo-partner-groups-editor-dialog',
  templateUrl: './partner-groups-editor-dialog.component.html',
  styleUrls: ['./partner-groups-editor-dialog.component.scss']
})
export class PartnerGroupsEditorDialog implements OnInit {

  id: string = '';
  groups: string = '';
  isEditMode = false;

  constructor(private dialogRef: MatDialogRef<PartnerGroupsEditorDialog>, @Inject(MAT_DIALOG_DATA) pgi:PartnerGroupInput) {   
    this.id = pgi['@id']?.toString() || '';
    this.groups = pgi['tx:groups']?.toString() || '';
    if(this.id) {
      this.isEditMode = true;
    }

  }

  ngOnInit(): void {    
  }

  onSave() {
    const partnerGroupInput: PartnerGroupInput = {
      "@id": this.id,
      "tx:groups": this.groups.split(",")
    };

    this.dialogRef.close({ partnerGroupInput });
  }
}
