import { Component, Inject, OnInit } from '@angular/core';
import { AssetInput, JsonLdObject} from "@think-it-labs/edc-connector-client";
import { MatDialogRef } from "@angular/material/dialog";
import { StorageType } from "../../models/storage-type";
import { AssetType } from '../../models/asset-type';
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

  assetTypeId: string = '';

  //storageTypeId: string = 'AzureStorage';
  storageTypeId: string = 'HttpData';
  account: string = '';
  //container: string = 'src-container';
  container: string = '';
  blobname: string = '';
  baseUrl: string = '';
  semanticId: string = '';

  isEditMode = false;

  constructor(private dialogRef: MatDialogRef<AssetEditorDialog>,
      @Inject('STORAGE_TYPES') public storageTypes: StorageType[],
      @Inject('ASSET_TYPES') public assetTypes: AssetType[],
      @Inject(MAT_DIALOG_DATA) assetInfo:AssetInput) {
        this.id = assetInfo['@id'] || "";
        if(this.id) {
          this.isEditMode = true;
          this.name = assetInfo.properties.optionalValue('edc','name');
          this.contenttype = assetInfo.properties.optionalValue('edc','contenttype');
          this.version = assetInfo.properties.optionalValue('edc','version');
          this.assetTypeId = this.getOptionalValue(assetInfo.properties["http://purl.org/dc/terms/type"]);
          this.baseUrl = assetInfo.dataAddress.baseUrl;
          this.storageTypeId = assetInfo.dataAddress.type;
        }
  }

  ngOnInit(): void {
  }

  onSave() {
    const assetInput: AssetInput = this.getAssetInput();
    this.dialogRef.close({ assetInput });
  }

  // added by nri 2025.3.7 Start
  onUpdate() {
    const assetInput: AssetInput = this.getAssetInput();
    this.dialogRef.close({ assetInput });
  }

  getAssetInput(): AssetInput {
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

    if(this.assetTypeId === "EcuCSRDataPushNotification") {
      // properties
      assetInput.properties = {
        "name": this.name,
        "cx-common:version": this.version,
        "dct:type": {
          "@id": "bmw:EcuCertificateSigningRequestDataPushNotification"
        }
      }
      // dataAddress
      assetInput.dataAddress.proxyPath = "true";
      assetInput.dataAddress.proxyQueryParams = "true";
      assetInput.dataAddress.proxyBody = "true";
      assetInput.dataAddress.proxyMethod = "true";
    } else if(this.assetTypeId === "EcuCSRDataPushFeedbackNotification") {
      // properties
      assetInput.properties = {
        "name": this.name,
        "cx-common:version": this.version,
        "dct:type": {
          "@id": "bmw:EcuCertificateSigningRequestDataPushFeedbackNotification"
        }
      }
      // dataAddress
      assetInput.dataAddress.proxyPath = "true";
      assetInput.dataAddress.proxyQueryParams = "true";
      assetInput.dataAddress.proxyBody = "true";
      assetInput.dataAddress.proxyMethod = "true";
    } else if(this.assetTypeId === "DigitalTwinRegistry") {
      // properties
      assetInput.properties = {
        "name": this.name,
        "asset:prop:type": "data.core.digitalTwinRegistry",
        "dct:type": {
          "@id": "cx-taxo:DigitalTwinRegistry"
        },
        "cx-common:version": "3.0"
      }
      // dataAddress
      assetInput.dataAddress.proxyPath = "true";
      assetInput.dataAddress.proxyQueryParams = "true";
      assetInput.dataAddress.proxyBody = "true";
      assetInput.dataAddress.proxyMethod = "true";
    } else if(this.assetTypeId === "PcfExchange") {
      // properties
      assetInput.properties = {
        "name": this.name,
        "dct:type": {
          "@id": "cx-taxo:PcfExchange"
        },
        "cx-common:version": "3.0",
        "aas-semantics:semanticId": {
          "@id": this.semanticId
        }
      }
      // dataAddress
      assetInput.dataAddress.proxyPath = "true";
      assetInput.dataAddress.proxyQueryParams = "true";
      assetInput.dataAddress.proxyBody = "true";
      assetInput.dataAddress.proxyMethod = "true";
    } else if(this.assetTypeId === "Submodel") {
      // properties
      assetInput.properties = {
        "name": this.name,
        "dct:type": {
          "@id": "cx-taxo:Submodel"
        },
        "cx-common:version": "3.0",
        "aas-semantics:semanticId": {
          "@id": this.semanticId
        }
      }

      // dataAddress
      assetInput.dataAddress.proxyPath = "true";
      assetInput.dataAddress.proxyQueryParams = "true";
      assetInput.dataAddress.proxyBody = "true";
      assetInput.dataAddress.proxyMethod = "true";
    }

    return assetInput;
  }

  // added by nri 2025.3.7 End
  onAssetTypeChange(): void {
    if(this.assetTypeId === "EcuCSRDataPushFeedbackNotification") {
      this.version = "2.1";
      this.semanticId = "";
    } else if(this.assetTypeId === "DigitalTwinRegistry") {
      this.version = "";
      this.semanticId = "";
    } else if(this.assetTypeId === "PcfExchange") {
      this.version = "3.0";
      this.semanticId = "urn:samm:io.catenax.pcf:7.0.0#Pcf";
    } else if(this.assetTypeId === "Submodel") {
      this.version = "3.0";
      this.semanticId = "urn:bamm:io.catenax.asset_tracker_links:1.0.0#AssetTrackerLinks";
    }
  }

  getOptionalValue(types: JsonLdObject): any {
      if (types && Array.isArray(types) && types.length > 0) {
        const firstType = types[0];
        if (firstType && typeof firstType === 'object' && '@id' in firstType) {
          return this.processString(firstType['@id']);
        }
      }
    }
  
    processString(value: string): string {
      if (typeof value !== 'string') {
        return value; 
      }
  
      return value
        .replace('http://bmwgroup.com/catenax/taxonomy#', '')
        .replace('https://w3id.org/catenax/taxonomy#', '')
        .replace('EcuCertificateSigningRequestDataPushFeedbackNotification', 'EcuCSRDataPushFeedbackNotification')
        .replace('EcuCertificateSigningRequestDataPushNotification', 'EcuCSRDataPushNotification')
    }
}
