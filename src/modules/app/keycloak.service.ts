import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import {BusinessBackEndService} from "../edc-demo/services/businessBackEnd.service";
import {TokenResponse} from '../edc-demo/models/file-status';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private keycloakService: KeycloakService, private businessBackEndService: BusinessBackEndService) {}

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

  // getToken(): Promise<string> {
  //     return lastValueFrom(this.businessBackEndService.getToken()).then(
  //         (tokenResponse: TokenResponse) => {
  //             // console.log("Token received:", tokenResponse.tokenValue);
  //             // console.log("=============getToken=====end========");
  //             return tokenResponse.tokenValue;
  //         }
  //     ).catch(
  //         (error) => {
  //             console.error("Error fetching token:", error);
  //             throw error;
  //         }
  //     );
  // }

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

  // async refreshToken() {
  //   try {
  //     this.getToken().then(
  //         (token: string) => {
  //             localStorage.setItem('access_token', token);
  //         },
  //         (error) => {
  //             console.error("Failed to get token:", error);
  //         }
  //     );
  //   } catch (error) {
  //     console.error('refreshToken NG', error);
  //   }
  // }

  addTokenToHeader(): any {
    this.keycloakService.addTokenToHeader();
  }
}