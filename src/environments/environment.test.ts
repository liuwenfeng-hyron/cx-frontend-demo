// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: "password",
  //managementApiUrl: "http://132.145.140.230/consumer/cp/api/management",
  //catalogUrl: "http://132.145.140.230/consumer/cp/api/management",
  //managementApiUrl: "http://localhost:4300/consumer/cp/api/management",
  //catalogUrl: "http://localhost:4300/consumer/cp/api/management",
  // Added On 20250224 Start
  cofinityXcentralidpUrl: "http://localhost:4300/cofinityXcentralidp",
  cofinityX_client_id: "sa201",
  cofinityX_grant_type: "client_credentials",
  cofinityX_client_secret: "BWrdYJuBcWYoqK5ciKUUhgCoV6iUAGzk",
  cofinityXbackendUrl: "http://localhost:4300/cofinityXbackend",
  // Added On 20250224 End
  // Added On 20250123 Start
  dataPlaneProxyApiUrl: "https://c3r3zxlu3jnfddljkmzul6eofi.apigateway.us-ashburn-1.oci.customer-oci.com/proxy-beta1",
  // Added On 20250123 End
  managementApiUrl: "https://c3r3zxlu3jnfddljkmzul6eofi.apigateway.us-ashburn-1.oci.customer-oci.com/management-beta1",
  catalogUrl: "https://c3r3zxlu3jnfddljkmzul6eofi.apigateway.us-ashburn-1.oci.customer-oci.com/management-beta1",
  storageAccount: "company2assets",
  storageExplorerLinkTemplate: "storageexplorer://v=1",
  theme: "theme-4",
  counterPartyAddress: "https://doneca-d5008a12-de.shared.dev.dih-cloud.com/api/v1/dsp",
  // Added On 20241009 Start
  counterPartyId: "BPNL0000000KPAFJ",
  // Added On 20241009 End
  enddpointOverride: "http://bob-minio:9000",
  receiverHttpEndpoint: "http://localhost/receiver",
  //receiverHttpEndpoint: "http://localhost:4200/receiver"
  keycloak_url: "https://150.136.64.85:8443",
  keycloak_realm: "demoEDC",
  keycloak_clientId: "demoNri666",
  // Added On 2025.4.28 Start
  //dtrUrl: "http://129.213.90.219:4243",
  dtrUrl: "http://localhost:4300/beta/dtr",
  dtrTenant: "TENANT_ONE",
  // Added On 2025.4.28 End
  // Added On 2025.5.15 Start
  assxServerUrl: "http://localhost:4300/beta/assxServer"
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
