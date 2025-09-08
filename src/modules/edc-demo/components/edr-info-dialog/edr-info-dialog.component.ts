import { Component, Inject, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { EdcConnectorClient, JsonLdObject } from "@think-it-labs/edc-connector-client";
import { ProxyController } from "../../../mgmt-api-client";
import {environment} from '../../../../environments/environment';
import {EdrController} from "../../../mgmt-api-client";
import {AppConfigService, AppConfig} from "../../../app/app-config.service";

@Component({
  selector: 'edr-info-dialog',
  templateUrl: './edr-info-dialog.component.html',
  styleUrls: ['./edr-info-dialog.component.scss']
})
export class EdrInfoDialog implements OnInit {

  id: string  = '';
  edrinfo: JsonLdObject  | null = null;
  realData: string  | null = null;
  config?: AppConfig;
  apiKey = "";
  private edrService: EdrController;
  private proxyService: ProxyController;

  //private edrService = this.edcConnectorClient.management.edrs;
  // private edrService = new EdrController(this.edcConnectorClient.createContext(this.apiKey, this.edcConnectorClient.addresses));
  // private proxyService = new ProxyController(this.configService);
  
  constructor(private configService: AppConfigService, private edcConnectorClient: EdcConnectorClient, private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) id:string) {
    this.id = id;
    this.config = this.configService.getConfig();
    this.apiKey = this.config?.apiKey || '';
    this.edrService = new EdrController(this.edcConnectorClient.createContext(this.apiKey, this.edcConnectorClient.addresses));
    this.proxyService = new ProxyController(this.configService);
  }

  ngOnInit(): void {
    // EDR取得
    this.edrService.dataAddress(this.id).then((data: any) =>{
      this.edrinfo = data;
      // 実データ取得
      const requestBody= {
        "transferProcessId": this.id
      };
      this.proxyService.request(requestBody).then((data: any) =>{
        this.realData = data;
      });
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