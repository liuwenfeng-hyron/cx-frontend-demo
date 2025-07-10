import { Component, Inject, OnInit } from '@angular/core';
import { Asset } from "@think-it-labs/edc-connector-client";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";


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
}