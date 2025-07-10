import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private keycloakService: KeycloakService) {}

  isLoggedIn(): boolean {
    return this.keycloakService.isLoggedIn();
  }

  logout() {
    this.keycloakService.logout();
  }

  getUserProfile(): any {
    return this.keycloakService.loadUserProfile();
  }

  getToken(): any {
    return this.keycloakService.getToken();
  }

  async refreshToken() {
    try {
      const refreshed = await this.keycloakService.updateToken(70);
      if (refreshed) {
        console.log('refreshToken OK');
        const token = this.getToken();
        // Storage access_token
        localStorage.setItem('access_token', token["__zone_symbol__value"]);
      } else {
        console.log('not need to refresh Token');
      }
    } catch (error) {
      console.error('refreshToken NG', error);
    }
  }

  addTokenToHeader(): any {
    this.keycloakService.addTokenToHeader();
  }
}