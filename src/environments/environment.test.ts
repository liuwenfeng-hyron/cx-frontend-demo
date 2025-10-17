// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // 1.cofinityX(prod)
  cofinityXcentralidpUrl: "/cofinityXcentralidp",
  cofinityX_client_id: "sa201",
  cofinityX_grant_type: "client_credentials",
  cofinityX_client_secret: "BWrdYJuBcWYoqK5ciKUUhgCoV6iUAGzk",
  cofinityXbackendUrl: "/cofinityXbackend",
  // 2.EDC
  apiKey: "password",
  managementApiUrl: "/beta/edc/management",
  catalogUrl: "/beta/edc/management",
  dataPlaneProxyApiUrl: "/beta/edc/proxy",
  // 3.Dashboard
  // counterPartyAddress: "https://c3r3zxlu3jnfddljkmzul6eofi.apigateway.us-ashburn-1.oci.customer-oci.com/api/v1/dsp",
  // counterPartyId: "BPNL0000002VWII2",
  // counterPartyAddress: "https://edc.hk.us.nri-caas.com/api/v1/dsp",
  // counterPartyId: "BPNL0000000L3MA9",
  counterPartyAddress: "https://doneca-94cfb8ff-de.shared.dev.dih-cloud.com/api/v1/dsp",
  counterPartyId: "BPNL0000000KPAFJ",
  theme: "theme-4",  
  // 4.keycloak
  // keycloak_url: "https://150.136.64.85:8443",
  // keycloak_realm: "demoEDC",
  // keycloak_clientId: "demoNri666",
  keycloak_url: "https://144.24.55.134",
  keycloak_realm: "aisj-jp-beta",
  keycloak_clientId: "aisj-jp-caas-beta",
  // 5.NRI backend
  backendServerUrl: "/beta/backendServer",
  // 6.DTR
  dtrUrl: "/beta/dtr",
  dtrTenant: "TENANT_ONE",
  // 7.assxServer
  assxServerUrl: "/beta/assxServer",
  // ===not use Start===
  storageAccount: "company2assets",
  storageExplorerLinkTemplate: "storageexplorer://v=1",
  enddpointOverride: "http://bob-minio:9000",
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
