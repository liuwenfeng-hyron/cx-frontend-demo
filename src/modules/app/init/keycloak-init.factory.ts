import { KeycloakService } from 'keycloak-angular';
import {environment} from "../../../environments/environment";
import {AppConfigService} from "../app-config.service";

export function initializeKeycloak(
  configService: AppConfigService,
  keycloak: KeycloakService
): () => Promise<any> {
  return () => {
    return configService.loadConfig().then((config) => {
      const keycloakConfig = {
        url: config?.keycloak_url || '',
        realm: config?.keycloak_realm || '',
        clientId: config?.keycloak_clientId || '',
      };

      if (!keycloakConfig.url || !keycloakConfig.realm || !keycloakConfig.clientId) {
        throw new Error('Keycloak configuration is incomplete. Check your config.json.');
      }

      return keycloak.init({
        config: keycloakConfig,
        initOptions: {
          onLoad: 'login-required',
          responseMode: 'fragment',
        },
      }).then((authenticated) => {
        if (authenticated) {
          console.log('User is authenticated');
        } else {
          console.warn('User is not authenticated (might be okay depending on initOptions)');
        }
        return authenticated;
      });
    }).catch((error) => {
      console.error('Failed to initialize Keycloak or load config:', error);
      throw error;
    });
  };
}
