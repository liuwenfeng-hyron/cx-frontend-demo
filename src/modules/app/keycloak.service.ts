import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import {BusinessBackEndService} from "../edc-demo/services/businessBackEnd.service";
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AppConfigService, AppConfig} from "./app-config.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  config?: AppConfig;
  constructor(private keycloakService: KeycloakService, private businessBackEndService: BusinessBackEndService, 
    private configService: AppConfigService, private httpClient: HttpClient) {
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

  getToken(): any {
    // Added By nri For WAF check on 2025.8.25 Start
    let url = this.config?.wafCheckUrl + "";
    this.httpClient.get<any>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('WAFcheck:', error);
        if (error.status === 403) {
          console.log('error.error.message:', error.error.message);
          this.keycloakService.logout();
        }
        return throwError(() => error);
      })).subscribe({
      next: () => {
        console.log('WAFcheck OK');
      },
      error: (err: HttpErrorResponse) => {
        console.log('WAFcheck:', err);
        if (err.status === 403) {
          console.log('err.error.message:', err.error.message);
          this.keycloakService.logout();
        }
      }
    });

    // this.businessBackEndService.getForWAFcheck().pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     console.log('WAFcheck:', error);
    //     if (error.status === 403) {
    //       console.log('error.error.message:', error.error.message);
    //       this.keycloakService.logout();
    //     }
    //     return throwError(() => error);
    //   })
    // ).subscribe({
    //   next: () => {
    //     console.log('WAFcheck OK');
    //   },
    //   error: (err: HttpErrorResponse) => {
    //     console.log('WAFcheck:', err);
    //     if (err.status === 403) {
    //       console.log('err.error.message:', err.error.message);
    //       this.keycloakService.logout();
    //     }
    //   }
    // });
    // Added By nri For WAF check on 2025.8.25 End
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