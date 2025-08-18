import { Component, Inject, OnInit } from '@angular/core';
import { Asset } from "@think-it-labs/edc-connector-client";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { JsonLdObject } from '@think-it-labs/edc-connector-client';

@Component({
  selector: 'edc-demo-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.scss']
})
export class AssetDetail implements OnInit {

  asset: Asset;

  constructor(@Inject(MAT_DIALOG_DATA) assetInfo:Asset) {
    this.asset = assetInfo;
  }

  ngOnInit(): void {
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