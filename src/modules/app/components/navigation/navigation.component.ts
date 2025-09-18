import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { routes, routes_dtr } from '../../app-routing.module';
import { Title } from '@angular/platform-browser';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  routes = routes;
  routes_dtr : any;

  constructor(
    public titleService: Title,
    private breakpointObserver: BreakpointObserver,
    private keycloakService: KeycloakService) {
      let roles = this.keycloakService.getUserRoles();
      roles.forEach(role => {
        if(role === 'dtr-role') {
          this.routes_dtr = routes_dtr;
        }
      });
  }
}
