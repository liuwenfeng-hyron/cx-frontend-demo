import { KeycloakService } from 'keycloak-angular';
import {environment} from "../../../environments/environment";

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.keycloak_url,
        realm: environment.keycloak_realm,
        clientId: environment.keycloak_clientId
      },
      initOptions: {
        onLoad: 'login-required',
        responseMode: 'fragment'
      },
    }).then((authenticated ) => {
      if (authenticated) {
        console.log('User is authenticated');
    } else {
        console.warn('User is not authenticated');
    }
  }).catch((error) => {
      console.error('Failed to initialize Keycloak:', error);
  });;
}
