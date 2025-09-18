import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AppConfigService, AppConfig} from "./app-config.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  config?: AppConfig;
  constructor(private keycloakService: KeycloakService, private configService: AppConfigService, private httpClient: HttpClient) {
      this.config = this.configService.getConfig();
  }

  isLoggedIn(): boolean {
    return this.keycloakService.isLoggedIn();
  }

  logout() {
    this.keycloakService.logout();
  }

  getUserProfile(): any {
    return this.keycloakService.loadUserProfile();
  }

  // Added By nri For WAF check on 2025.8.25
  wafCheck() {    
    let url = this.config?.wafCheckUrl + "";
    this.httpClient.get<any>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.keycloakService.logout();
        }
        return throwError(() => error);
      })).subscribe({
      next: () => {
        console.log('check OK');
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 403) {
          this.keycloakService.logout();
        }
      }
    });
  }

  getToken(): any {
    this.wafCheck();
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