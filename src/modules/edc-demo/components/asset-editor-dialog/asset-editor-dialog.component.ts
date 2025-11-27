import { Component, Inject, OnInit } from '@angular/core';
import { AssetInput, JsonLdObject} from "@think-it-labs/edc-connector-client";
import { MatDialogRef } from "@angular/material/dialog";
import { StorageType } from "../../models/storage-type";
import { AssetType } from '../../models/asset-type';
import { SubmodelType } from '../../models/submodel-type';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import {AppConfigService, AppConfig} from "../../../app/app-config.service";

@Component({
  selector: 'edc-demo-asset-editor-dialog',
  templateUrl: './asset-editor-dialog.component.html',
  styleUrls: ['./asset-editor-dialog.component.scss']
})
export class AssetEditorDialog implements OnInit {

  config?: AppConfig;
  id: string = '';
  version: string = '';
  name: string = '';
  contenttype: string = 'application/json';

  assetTypeId: string = '';
  submodelTypeId: string = '';

  //storageTypeId: string = 'AzureStorage';
  storageTypeId: string = 'HttpData';
  account: string = '';
  //container: string = 'src-container';
  container: string = '';
  blobname: string = '';
  baseUrl: string = '';
  semanticId: string = '';
  news_submodel_path: string = '';

  isEditMode = false;

  constructor(private dialogRef: MatDialogRef<AssetEditorDialog>,
      private configService: AppConfigService,
      @Inject('STORAGE_TYPES') public storageTypes: StorageType[],
      @Inject('ASSET_TYPES') public assetTypes: AssetType[],
      @Inject('SUBMODEL_TYPES') public submodelTypes: SubmodelType[],
      @Inject(MAT_DIALOG_DATA) assetInfo:AssetInput) {
        this.id = assetInfo['@id'] || "";
        if(this.id) {
          this.isEditMode = true;
          this.name = assetInfo.properties.optionalValue('edc','name');
          this.contenttype = assetInfo.properties.optionalValue('edc','contenttype');
          this.version = assetInfo.properties.optionalValue('edc','version');
          this.assetTypeId = this.getOptionalValue(assetInfo.properties["http://purl.org/dc/terms/type"]);
          this.semanticId = this.getOptionalValue(assetInfo.properties["https://admin-shell.io/aas/3/0/HasSemantics/semanticId"]);
          this.baseUrl = assetInfo.dataAddress.baseUrl;
          this.storageTypeId = assetInfo.dataAddress.type;
        }
  }

  ngOnInit(): void {
    this.config = this.configService.getConfig();
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
      assetInput.dataAddress.proxyBody = "false";
      assetInput.dataAddress.proxyMethod = "false";
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
      assetInput.dataAddress.proxyBody = "false";
      assetInput.dataAddress.proxyMethod = "false";
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
      assetInput.dataAddress.proxyBody = "false";
      assetInput.dataAddress.proxyMethod = "false";
    } else if(this.assetTypeId === "DemandAndCapacityNotificationApi") {
      // properties
      assetInput.properties = {
        "name": this.name,
        "dct:type": {
          "@id": "cx-taxo:DemandAndCapacityNotificationApi"
        },
        "cx-common:version": "1.0"
      }
      // dataAddress
      assetInput.dataAddress.proxyPath = "true";
      assetInput.dataAddress.proxyQueryParams = "false";
      assetInput.dataAddress.proxyBody = "true";
      assetInput.dataAddress.proxyMethod = "true";
      //assetInput.dataAddress.authKey = "x-api-key";
      //assetInput.dataAddress.authCode = "test";
    }

    return assetInput;
  }

  // added by nri 2025.3.7 End
  onAssetTypeChange(): void {
    this.id = "" ;
    this.name = "" ;
    this.baseUrl = "";
    if(this.assetTypeId === "EcuCSRDataPushFeedbackNotification") {
      this.id = "ecu-csr-data-push-feedback-api" ;
      this.name = "ecu-csr-data-push-feedback-api" ;
      this.version = "2.1";
      this.semanticId = "";
    } else if(this.assetTypeId === "DigitalTwinRegistry") {
      this.id = "dtr" ;
      this.name = "dtr" ;
      this.version = "";
      this.semanticId = "";
      this.baseUrl = this.config?.dtrHost + "/api/v3" || ''; 
    } else if(this.assetTypeId === "PcfExchange") {
      this.id = "pcf-exchange" ;
      this.name = "pcf-exchange" ;
      this.version = "3.0";
      this.semanticId = "urn:samm:io.catenax.pcf:7.0.0#Pcf";
      this.baseUrl = this.config?.aasxHost || '';
      this.news_submodel_path = localStorage.getItem('news_submodel_path') || '';
      if(this.news_submodel_path) {
        this.baseUrl = this.baseUrl + this.news_submodel_path;
      }
    } else if(this.assetTypeId === "Submodel") {
      this.id = "submodel-" ;
      this.name = "submodel-" ;
      this.version = "3.0";
      // this.semanticId = "urn:bamm:io.catenax.asset_tracker_links:1.0.0#AssetTrackerLinks";
      this.semanticId = "urn:samm:io.catenax.pcf:7.0.0#Pcf";
      this.baseUrl = this.config?.aasxHost || '';
      this.news_submodel_path = localStorage.getItem('news_submodel_path') || '';
      if(this.news_submodel_path) {
        this.baseUrl = this.baseUrl + this.news_submodel_path;
      }
    } else if(this.assetTypeId === "DemandAndCapacityNotificationApi") {
      this.id = "demand-capacity-notification-api@" + this.config?.counterPartyId || '';
      this.name = "demand-capacity-notification-api@" + this.config?.counterPartyId || '';
      this.version = "1.0";
      this.semanticId = "";
    }
  }

  onSubmodelTypeChange(): void {
    this.id = "submodel-" ;
    this.name = "submodel-" ;
    this.baseUrl = (this.config?.aasxHost || '') + '/submodels';
    this.semanticId = "";
    if(this.submodelTypeId === "PartTypeInformation") {
      this.id = "submodel-PartTypeInformation" ;
      this.name = "submodel-PartTypeInformation" ;
      this.semanticId = "urn:samm:io.catenax.part_type_information:1.0.0#PartTypeInformation";
    } else if(this.submodelTypeId === "ItemStock") {
      this.id = "submodel-ItemStock" ;
      this.name = "submodel-ItemStock" ;
      this.semanticId = "urn:samm:io.catenax.item_stock:2.0.0#ItemStock";
    } else if(this.submodelTypeId === "PlannedProductionOutput") {
      this.id = "submodel-PlannedProductionOutput" ;
      this.name = "submodel-PlannedProductionOutput" ;
      this.semanticId = "urn:samm:io.catenax.item_stock:2.0.0#PlannedProductionOutput";
    } else if(this.submodelTypeId === "DeliveryInformation") {
      this.id = "submodel-DeliveryInformation" ;
      this.name = "submodel-DeliveryInformation" ;
      this.semanticId = "urn:samm:io.catenax.delivery_information:2.0.0#DeliveryInformation";
    } else if(this.submodelTypeId === "DaysOfSupply") {
      this.id = "submodel-DaysOfSupply" ;
      this.name = "submodel-DaysOfSupply" ;
      this.semanticId = "urn:samm:io.catenax.days_of_supply:2.0.0#DaysOfSupply";
    } else if(this.submodelTypeId === "ShortTermMaterialDemand") {
      this.id = "submodel-ShortTermMaterialDemand" ;
      this.name = "submodel-ShortTermMaterialDemand" ;
      this.semanticId = "urn:samm:io.catenax.short_term_material_demand:1.0.0#ShortTermMaterialDemand";
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
