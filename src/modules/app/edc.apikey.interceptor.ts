import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import { AppConfigService, AppConfig } from './app-config.service';

@Injectable()
export class EdcApiKeyInterceptor implements HttpInterceptor {
  constructor(private appConfigService: AppConfigService) {
  }

  get apiKey(): string {
    return this._apiKey;
  }

  set apiKey(value: string) {
    this._apiKey = value;
  }

  protected _apiKey: string = "";
  config?: AppConfig;

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.config = this.appConfigService.getConfig();
    this.apiKey = this.config?.apiKey ?? "";
    // Modified By Ljz On 2024.11.4 Start
    //return next.handle(httpRequest.clone({setHeaders: {"X-Api-Key": this._apiKey}}));
    const token = localStorage.getItem('access_token');
    const access_token = "Bearer " + token;
    const url = httpRequest.url;
    if(url.includes('/api/public')) {
      return next.handle(httpRequest.clone());
    } else if(url.includes('/file/health')) {
      return next.handle(httpRequest.clone());
    } else {
      // console.log("=======this._apiKey===========");
      // console.log(this._apiKey);
      return next.handle(httpRequest.clone({setHeaders: {"X-Api-Key": this._apiKey, "Authorization": access_token}})); // only CatalogBrowser page has use
    }
    // Modified By Ljz On 2024.11.4 End
  }
}
