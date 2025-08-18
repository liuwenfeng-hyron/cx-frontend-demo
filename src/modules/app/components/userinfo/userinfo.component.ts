import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../keycloak.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-user-info',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})

export class UserInfoComponent implements OnInit {
  isLoggedIn = false;
  userProfile: any | null = null;
  username: string | undefined;  

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.getUserProfile().then((data: any) => {
      this.userProfile = data;
      this.username = this.userProfile["username"];
      //console.table(this.userProfile);
    });
    const token = this.authService.getToken();
    //console.info(token["__zone_symbol__value"]);
    // Storage access_token
    localStorage.setItem('access_token', token["__zone_symbol__value"]);
    // this.authService.getToken().then(
    //     (token: string) => {
    //         localStorage.setItem('access_token', token);
    //     },
    //     (error) => {
    //         console.error("Failed to get token:", error);
    //     }
    // );

    setInterval(() => this.authService.refreshToken(), 60000); // Check once every 60s
  }

  logout() {
    this.authService.logout();
  }

  showPersonInfo() {
    const keycloakServer = environment.keycloak_url;
    const realmName = environment.keycloak_realm;
    const passwordPageUrl = `${keycloakServer}/realms/${realmName}/account/#/security/signingin`;
    window.location.href = passwordPageUrl;
  }
}