import { Component, Inject, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { EdcConnectorClient, JsonLdObject } from "@think-it-labs/edc-connector-client";
import { ProxyController } from "../../../mgmt-api-client";
import {environment} from '../../../../environments/environment';
import {EdrController} from "../../../mgmt-api-client";

@Component({
  selector: 'edr-info-dialog',
  templateUrl: './edr-info-dialog.component.html',
  styleUrls: ['./edr-info-dialog.component.scss']
})
export class EdrInfoDialog implements OnInit {

  id: string  = '';
  edrinfo: JsonLdObject  | null = null;
  realData: string  | null = null;

  //private edrService = this.edcConnectorClient.management.edrs;
  private edrService = new EdrController(this.edcConnectorClient.createContext(environment.apiKey, this.edcConnectorClient.addresses));
  private proxyService = new ProxyController();
  
  constructor(private edcConnectorClient: EdcConnectorClient, private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) id:string) {
    this.id = id;
  }

  ngOnInit(): void {
    // EDR取得
    this.edrService.dataAddress(this.id).then((data: any) =>{
      this.edrinfo = data;
    });
    // 実データ取得
    const requestBody= {
      "transferProcessId": this.id
    };
    this.proxyService.request(requestBody).then((data: any) =>{
      this.realData = data;
    });
  }

  onDowndload():void {
    // 実データ取得
    const requestBody= {
      "transferProcessId": this.id
    };
    this.proxyService.requestBlob(requestBody).then((data: Blob) =>{
      let fileName = 'realDataByTransferId'+ this.id;
      const url = window.URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }
}