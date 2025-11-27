import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {NavigationComponent} from './components/navigation/navigation.component';
import {EdcDemoModule} from '../edc-demo/edc-demo.module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {AppConfigService} from "./app-config.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CONNECTOR_CATALOG_API, CONNECTOR_MANAGEMENT_API} from "./variables";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {EdcApiKeyInterceptor} from "./edc.apikey.interceptor";
import {environment} from "../../environments/environment";
import { EdcConnectorClient } from "@think-it-labs/edc-connector-client";

import { KeycloakService } from 'keycloak-angular';
import { AuthService } from './keycloak.service';
import { initializeKeycloak } from "./init/keycloak-init.factory";
import {UserInfoComponent} from './components/userinfo/userinfo.component';
import {DtrModule} from '../dtr/dtr.module';
import {AasxServerModule} from '../aasx-server/aasx-server.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    EdcDemoModule,
    MatSnackBarModule,
    DtrModule,
    AasxServerModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    UserInfoComponent,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (configService: AppConfigService) => () => configService.loadConfig(),
      deps: [AppConfigService],
      multi: true
    },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    {
      provide: CONNECTOR_MANAGEMENT_API,
      useFactory: (s: AppConfigService) => s.getConfig()?.managementApiUrl,
      deps: [AppConfigService]
    },
    {
      provide: CONNECTOR_CATALOG_API,
      useFactory:  (s: AppConfigService) => s.getConfig()?.catalogUrl,
      deps: [AppConfigService]
    },
    {
      provide: 'HOME_CONNECTOR_STORAGE_ACCOUNT',
      useFactory: (s: AppConfigService) => s.getConfig()?.storageAccount,
      deps: [AppConfigService]
    },
    {
      provide: 'STORAGE_TYPES',
      useFactory: () => [{id: "AzureStorage", name: "AzureStorage"}, {id: "AmazonS3", name: "AmazonS3"}, {id: "HttpProxy", name: "HttpProxy"}, {id: "HttpData", name: "HttpData"}],
    },
    {
      provide: 'POLICY_TYPES',
      useFactory: () => [{id: "Duration", name: "Duration"}, {id: "BusinessPartnerNumber", name: "BusinessPartnerNumber"}, {id: "BusinessPartnerGroup", name: "BusinessPartnerGroup"}
        , {id: "Purpose", name: "Purpose"}, {id: "ContractReference", name: "ContractReference"}, {id: "FrameworkAgreement", name: "FrameworkAgreement"}, {id: "Other", name: "Other"}],
    },
    {
      provide: 'ASSET_TYPES',
      useFactory: () => [{id: "", name: ""}, {id: "EcuCSRDataPushNotification", name: "EcuCSRDataPushNotification"}, {id: "EcuCSRDataPushFeedbackNotification", name: "EcuCSRDataPushFeedbackNotification"}, {id: "DigitalTwinRegistry", name: "DigitalTwinRegistry"}, {id: "Submodel", name: "Submodel"}, {id: "DemandAndCapacityNotificationApi", name: "DemandAndCapacityNotificationApi"}, {id: "PcfExchange", name: "PcfExchange"}],
    },
    {
      provide: 'SUBMODEL_TYPES',
      useFactory: () => [{id: "", name: ""}, {id: "ItemStock", name: "ItemStock"}, {id: "PlannedProductionOutput", name: "PlannedProductionOutput"}, {id: "DeliveryInformation", name: "DeliveryInformation"}, {id: "DaysOfSupply", name: "DaysOfSupply"}, {id: "PartTypeInformation", name: "PartTypeInformation"}, {id: "ShortTermMaterialDemand", name: "ShortTermMaterialDemand"}],
    },
    {
      provide: 'SUBMODEL_KIND',
      useFactory: () => [{id: "Template", name: "Template"}, {id: "Instance", name: "Instance"}],
    },
    {
      provide: 'ASSET_KIND',
      useFactory: () => [{id: "Instance", name: "Instance"}, {id: "Type", name: "Type"}],
    },
    {
      provide: 'DERIVED_FROM_TYPES',
      useFactory: () => [{id: "", name: ""}, {id: "ExternalReference", name: "ExternalReference"}, {id: "ModelReference", name: "ModelReference"}],
    },
    {
      provide: EdcConnectorClient,
      useFactory: (s: AppConfigService) => {
        return new EdcConnectorClient.Builder()
          .apiToken(environment.apiKey)
          // .apiToken(s.getConfig()?.apiKey as string)
          .managementUrl(s.getConfig()?.managementApiUrl as string)
          .build();
      },
      deps: [AppConfigService]
    },
    {
      provide: KeycloakService,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [AppConfigService, KeycloakService],
    },
    {
      provide: AuthService,
    },
    {
      provide: HTTP_INTERCEPTORS, multi: true, useFactory: (s: AppConfigService) => {
        let i = new EdcApiKeyInterceptor(s);
        // TODO: read this from app.config.json??
        //i.apiKey = environment.apiKey
        return i;
      }, deps: [AppConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
