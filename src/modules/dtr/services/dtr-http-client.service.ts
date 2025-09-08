import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {EMPTY, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AppConfigService, AppConfig} from "../../app/app-config.service";


/**
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class DtrHttpClient {

  config?: AppConfig;
  dtrUrl = "";
  dtrTenant = "";
  constructor(private configService: AppConfigService, private httpClient: HttpClient) {
    this.config = this.configService.getConfig();
    this.dtrUrl = this.config?.dtrUrl ?? "";
    this.dtrTenant = this.config?.dtrTenant ?? "";
  }

  public get<T>(urlPath: string, offset: number, limit: number, filterExp: string,
                  params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; })
    : Observable<T> {
    const url = this.dtrUrl + `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json", "Edc-Bpn" : this.dtrTenant});
    return this.catchError(this.httpClient.get<T>(url, {headers, params}), url, 'GET');
  }

  public post<T>(urlPath: string, body: string, params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; })
  : Observable<T> {
    const url = this.dtrUrl + `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json", "Edc-Bpn" : this.dtrTenant});
    return this.httpClient.post<T>(url, body, {headers, params});
  }

  public put<T>(urlPath: string, body: string, params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; })
  : Observable<T> {
    const url = this.dtrUrl + `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json", "Edc-Bpn" : this.dtrTenant});
    return this.httpClient.put<T>(url, body, {headers, params});
  }

  public delete<T>(urlPath: string): Observable<T> {
    const url = this.dtrUrl + `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json", "Edc-Bpn" : this.dtrTenant});
    return this.httpClient.delete<T>(url, {headers});
  }

  private catchError<T>(observable: Observable<T>, url: string, method: string): Observable<T> {
    return observable
      .pipe(
        catchError((httpErrorResponse: HttpErrorResponse) => {
          if (httpErrorResponse.error instanceof Error) {
            console.error(`Error accessing URL '${url}', Method: 'GET', Error: '${httpErrorResponse.error.message}'`);
          } else {
            console.error(`Unsuccessful status code accessing URL '${url}', Method: '${method}', StatusCode: '${httpErrorResponse.status}', Error: '${httpErrorResponse.error?.message}'`);
          }
          return EMPTY;
        }));
  }
}
