/**
 * EDC REST API
 * EDC REST APIs - merged by nri 2025.2.10
 *
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Injectable } from '@angular/core';
import { Observable, from }  from 'rxjs';
import {EdcConnectorClient} from "@think-it-labs/edc-connector-client";
import {PartnerGroupInput} from '../../mgmt-api-client';
import {PartnerGroupsController} from "../../mgmt-api-client";
import {AppConfigService, AppConfig} from "../../app/app-config.service";

@Injectable({
  providedIn: 'root'
})
export class PartnerGroupService {
    config?: AppConfig;
    apiKey = "";
    private controller: PartnerGroupsController;
      
    constructor(private edcConnectorClient: EdcConnectorClient, private configService: AppConfigService) {
        this.config = this.configService.getConfig();
        this.apiKey = this.config?.apiKey || '';
        this.controller = new PartnerGroupsController(this.edcConnectorClient.createContext(this.apiKey, this.edcConnectorClient.addresses));
    }

    public getPartnerGroup(bpn: string): Promise<any> {
        return this.controller.get(bpn);
    }

    public getPartnerGroup2(bpn: string): Observable<any> {
        return from(this.controller.get(bpn));
    }

    public createPartnerGroup(partnerGroupEntryDto: PartnerGroupInput): Observable<any> {
        return from(this.controller.create(partnerGroupEntryDto));
    }

    public removePartnerGroup(bpn: string): Observable<any> {
        if (bpn === null || bpn === undefined) {
            throw new Error('Required parameter bpn was null or undefined when calling removeAsset.');
        }
        return from(this.controller.delete(bpn));
    }

    public updatePartnerGroup(partnerGroupEntryDto: PartnerGroupInput): Observable<any> {
        return from(this.controller.update(partnerGroupEntryDto))
    }
}
