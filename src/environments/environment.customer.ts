// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // 1.cofinityX(prod)
  cofinityXcentralidpUrl: "https://150.136.64.85:28083/cofinityXcentralidp",
  cofinityX_client_id: "sa201",
  cofinityX_grant_type: "client_credentials",
  cofinityX_client_secret: "BWrdYJuBcWYoqK5ciKUUhgCoV6iUAGzk",
  cofinityXbackendUrl: "https://150.136.64.85:28083/cofinityXbackend",
  // 2.EDC
  apiKey: "password",
  managementApiUrl: "https://150.136.64.85:28083/management",
  catalogUrl: "https://150.136.64.85:28083/management",
  dataPlaneProxyApiUrl: "https://150.136.64.85:28083/proxy",
  // 3.Dashboard
  counterPartyAddress: "https://c3r3zxlu3jnfddljkmzul6eofi.apigateway.us-ashburn-1.oci.customer-oci.com/api/v1/dsp",
  counterPartyId: "BPNL0000002VWII2",
  theme: "theme-4",
  // 4.keycloak
  keycloak_url: "https://150.136.64.85:8443",
  keycloak_realm: "demoEDC",
  keycloak_clientId: "demoNri",
  // 5.NRI backend
  backendServerUrl: "https://150.136.64.85:28083/nri/backendServer",
  // 6.DTR
  dtrUrl: "https://150.136.64.85:28083/beta/dtr",
  dtrTenant: "TENANT_ONE",
  // 7.assxServer
  assxServerUrl: "https://150.136.64.85:28083/beta/assxServer",
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
