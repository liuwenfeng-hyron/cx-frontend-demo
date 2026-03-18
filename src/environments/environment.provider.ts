// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // 1.cofinityX(beta)
  cofinityXcentralidpUrl: "/beta/cofinityXcentralidp",
  cofinityX_client_id: "sa837",
  cofinityX_grant_type: "client_credentials",
  cofinityX_client_secret: "fl8lgK3uOCz3suAN07q0vSAyifuW9OEo",
  cofinityXbackendUrl: "/beta/cofinityXbackend",
  // 2.EDC
  apiKey: "wQ4rZ9xM",
  managementApiUrl: "/beta/provider/management",
  catalogUrl: "/beta/provider/management",
  dataPlaneProxyApiUrl: "/beta/provider/proxy",
  // 3.Dashboard
  counterPartyAddress: "https://edc.hk.us.nri-caas.com/api/v1/dsp",
  counterPartyId: "BPNL0000000MOUR8",
  theme: "theme-4",  
  // 4.keycloak
  keycloak_url: "https://idp.us.nri-caas.com:8443/",
  keycloak_realm: "demoEDC",
  keycloak_clientId: "demoNri",
  // 5.NRI backend
  backendServerUrl: "/nri/backendServer",
  // 6.DTR
  dtrUrl: "/beta/dtr",
  dtrTenant: "TENANT_ONE",
  // 7.assxServer
  assxServerUrl: "/beta/assxServer",
  // ===not use Start===
  storageAccount: "company2assets",
  storageExplorerLinkTemplate: "storageexplorer://v=1",
  endpointOverride: "http://bob-minio:9000",
  receiverHttpEndpoint: "https://dashboard.provider.edc.dev.openstandia.jp/receiver"
  // ===not use End===

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
