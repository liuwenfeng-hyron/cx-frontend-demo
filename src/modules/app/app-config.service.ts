import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {environment} from '../../environments/environment';

export interface AppConfig {
  // Added By Lujianzhou On 20250123 Start
  dataPlaneProxyApiUrl: string;
  // Added By Lujianzhou On 20250123 End
  managementApiUrl: string;
  catalogUrl: string;
  storageAccount: string;
  storageExplorerLinkTemplate: string;
  theme: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  config?: AppConfig;
  edcId: string | null ='';  
  constructor(private http: HttpClient) {}

  loadConfig(): void /* Promise<void> */ {
/*    return this.http
      .get<AppConfig>('/assets/config/app.config.json')
      .toPromise()
      .then(data => {
        this.config = data;
      });
     */
    this.config = environment
    console.log(this.config.managementApiUrl)
    // temp test 2025.1.24 start
    //localStorage.setItem('edcId', 'edc001'); // do it in edc Management page
    
    this.edcId = localStorage.getItem('edcId');
    console.log('edcId:' + this.edcId);
    // doto get edcInfo from DB by edcId

    // temp test 2025.1.24 end
    /*this.config.managementApiUrl = environment.managementApiUrl;
    this.config.catalogUrl = environment.catalogUrl;
    this.config.storageAccount = environment.storageAccount;
    this.config.storageExplorerLinkTemplate = environment.storageExplorerLinkTemplate;
    this.config.theme = environment.theme;*/
  }

  getConfig(): AppConfig | undefined {
    return this.config;
  }
}
