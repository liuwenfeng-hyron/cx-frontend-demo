import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { lastValueFrom } from 'rxjs';
import {environment} from '../../environments/environment';

export interface AppConfig {
  // 1.cofinityX(beta)
  cofinityXcentralidpUrl:  string;
  cofinityX_client_id:  string;
  cofinityX_grant_type:  string;
  cofinityX_client_secret:  string;
  cofinityXbackendUrl:  string;
  // 2.EDC
  apiKey:  string;
  managementApiUrl:  string;
  catalogUrl:  string;
  dataPlaneProxyApiUrl:  string;
  // 3.Dashboard
  counterPartyAddress:  string;
  counterPartyId:  string;
  theme:  string;
  // 4.keycloak
  keycloak_url: string;
  keycloak_realm: string;
  keycloak_clientId: string;
  // 5.NRI backend
  backendServerUrl: string;
  // 6.DTR
  dtrUrl: string;
  dtrTenant: string;
  // 7.assxServer
  assxServerUrl: string;
  // 8.WAF
  wafCheckUrl: string;

  storageAccount: string;
  storageExplorerLinkTemplate: string;
  enddpointOverride: string;
  receiverHttpEndpoint: string;
  production: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  config?: AppConfig;
  constructor(private http: HttpClient) {}

  // loadConfig2(): void /* Promise<void> */ {
  //   this.config = environment
  //   console.log(this.config.managementApiUrl)
  // }

  async loadConfig(): Promise<AppConfig> {
    const data = await lastValueFrom(
      this.http.get<AppConfig>('/assets/config/app.config.json')
    );
    this.config = data;
    return this.config;
  }

  getConfig(): AppConfig | undefined {
    return this.config;
  }
}
