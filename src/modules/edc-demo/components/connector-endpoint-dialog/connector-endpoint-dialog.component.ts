import { Component, OnInit } from '@angular/core';
import { JsonLdObject } from "@think-it-labs/edc-connector-client";
import { ConnectorEndpointController } from "../../../mgmt-api-client";
import { MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'connector-endpoint-dialog',
  templateUrl: './connector-endpoint-dialog.component.html',
  styleUrls: ['./connector-endpoint-dialog.component.scss']
})
export class ConnectorEndpointDialog implements OnInit {

  tokeninfo: JsonLdObject  | null = null;
  connectorinfo: any;
  authorization: string = "";

  private connectorEndpointService = new ConnectorEndpointController();
  
  constructor(private dialogRef: MatDialogRef<ConnectorEndpointDialog>) {
  }

  ngOnInit(): void {
    const requestBody= {
      
    };

    this.connectorEndpointService.getAccessToken().then((data: any) =>{
      this.tokeninfo = data;
      if(this.tokeninfo) {
        this.authorization = this.tokeninfo["token_type"] + " " + this.tokeninfo["access_token"];
        this.connectorEndpointService.request(requestBody, this.authorization.toString()).then((data: any) =>{
          this.connectorinfo = data;
        });
      }
    }); 
  }

  onSelect(bpn:string, endpoint:string) {
    const selectResult: any = {
      "bpn": bpn,
      "endpoint": endpoint
    };

    this.dialogRef.close({ selectResult });
  }

}