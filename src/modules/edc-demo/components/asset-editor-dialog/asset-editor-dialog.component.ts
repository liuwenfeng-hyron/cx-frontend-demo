import { Component, Inject, OnInit } from '@angular/core';
import { AssetInput } from "@think-it-labs/edc-connector-client";
import { MatDialogRef } from "@angular/material/dialog";
import { StorageType } from "../../models/storage-type";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'edc-demo-asset-editor-dialog',
  templateUrl: './asset-editor-dialog.component.html',
  styleUrls: ['./asset-editor-dialog.component.scss']
})
export class AssetEditorDialog implements OnInit {

  id: string = '';
  version: string = '';
  name: string = '';
  contenttype: string = 'application/json';

  //storageTypeId: string = 'AzureStorage';
  storageTypeId: string = 'HttpData';
  account: string = '';
  //container: string = 'src-container';
  container: string = '';
  blobname: string = '';
  baseUrl: string = '';

  isEditMode = false;

  constructor(private dialogRef: MatDialogRef<AssetEditorDialog>,
      @Inject('STORAGE_TYPES') public storageTypes: StorageType[],
      @Inject(MAT_DIALOG_DATA) assetInfo:AssetInput) {
        this.id = assetInfo['@id'] || "";
        if(this.id) {
          this.isEditMode = true;
          this.name = assetInfo.properties.optionalValue('edc','name');
          this.contenttype = assetInfo.properties.optionalValue('edc','contenttype');
          this.version = assetInfo.properties.optionalValue('edc','version');
          this.baseUrl = assetInfo.dataAddress.baseUrl;
          this.storageTypeId = assetInfo.dataAddress.type;
        }
  }

  ngOnInit(): void {
  }

  onSave() {
    const assetInput: AssetInput = {
      "@id": this.id,
      properties: {
        "name": this.name,
        "contenttype": this.contenttype,
        "version": this.version, // added by nri 2025.2.13
      },
      dataAddress: {
        "type": this.storageTypeId,
        "name": this.name,
        "baseUrl": this.baseUrl,
        "proxyPass": "true"
      }
    };

    this.dialogRef.close({ assetInput });
  }

  // added by nri 2025.3.7 Start
  onUpdate() {
    const assetInput: AssetInput = {
      "@id": this.id,
      properties: {
        "name": this.name,
        "contenttype": this.contenttype,
        "version": this.version,
      },
      dataAddress: {
        "type": this.storageTypeId,
        "name": this.name,
        "baseUrl": this.baseUrl,
        "proxyPass": "true"
      }
    };

    this.dialogRef.close({ assetInput });
  }
  // added by nri 2025.3.7 End
}
