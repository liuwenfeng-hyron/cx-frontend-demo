// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: "password",
  // Added On 20250224 Start
  cofinityXcentralidpUrl: "https://150.136.64.85:28083/cofinityXcentralidp",
  cofinityX_client_id: "sa201",
  cofinityX_grant_type: "client_credentials",
  cofinityX_client_secret: "BWrdYJuBcWYoqK5ciKUUhgCoV6iUAGzk",
  cofinityXbackendUrl: "https://150.136.64.85:28083/cofinityXbackend",
  // Added On 20250224 End
  // Added By Lujianzhou On 20250123 Start
  dataPlaneProxyApiUrl: "https://150.136.64.85:28083/proxy",
  // Added By Lujianzhou On 20250123 End
  managementApiUrl: "https://150.136.64.85:28083/management",
  catalogUrl: "https://150.136.64.85:28083/management",
  storageAccount: "company2assets",
  storageExplorerLinkTemplate: "storageexplorer://v=1",
  theme: "theme-4",
  //counterPartyAddress: "http://alice-controlplane:8084/api/v1/dsp",
  counterPartyAddress: "https://c3r3zxlu3jnfddljkmzul6eofi.apigateway.us-ashburn-1.oci.customer-oci.com/api/v1/dsp",
  // Added By Lujianzhou On 20241009 Start
  counterPartyId: "BPNL0000002VWII2",
  // Added By Lujianzhou On 20241009 End
  enddpointOverride: "http://bob-minio:9000",
  receiverHttpEndpoint: "https://dashboard.customer.edc.dev.openstandia.jp/receiver",
  //receiverHttpEndpoint: "http://localhost:4200/receiver"
  keycloak_url: "https://150.136.64.85:8443",
  keycloak_realm: "demoEDC",
  keycloak_clientId: "demoNri",
  // Added On 2025.4.28 Start
  dtrUrl: "https://150.136.64.85:28093/beta/dtr",
  dtrTenant: "TENANT_ONE",
  // Added On 2025.4.28 End
  // Added On 2025.5.15 Start
  assxServerUrl: "https://150.136.64.85:28093/beta/assxServer"
  // Added On 2025.5.15 End
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
