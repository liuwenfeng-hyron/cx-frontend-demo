import {HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
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
export class BackendHttpClient {
  config?: AppConfig;

  constructor(private configService: AppConfigService, private httpClient: HttpClient) {
    this.config = this.configService.getConfig();
  }

  public get<T>(urlPath: string, params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; })
    : Observable<T> {
    let baseUrl = this.config?.backendServerUrl;
    const url = baseUrl + `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json"});
    return this.catchError(this.httpClient.get<T>(url, {headers, params}), url, 'GET');
  }

  public getBlob<T>(urlPath: string, params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }, responseType?: string)
    : Observable<Blob> {
    let baseUrl = this.config?.backendServerUrl;
    const url = baseUrl + `${urlPath}`;
    return this.httpClient.get(url, { responseType: 'blob' });
  }

  public post<T>(urlPath: string, body: any, params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; })
  : Observable<T> {
    let baseUrl = this.config?.backendServerUrl;
    const url = baseUrl + `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json"});
    return this.httpClient.post<T>(url, body, {headers, params});
  }

  public postFile<T>(urlPath: string, formData: FormData)
  : Observable<T> {
    let baseUrl = this.config?.backendServerUrl;
    const url = baseUrl + `${urlPath}`;
    return this.httpClient.post<T>(url, formData);
  }

  public put<T>(urlPath: string, body: any, params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; })
  : Observable<T> {
    let baseUrl = this.config?.backendServerUrl;
    const url = baseUrl + `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json"});
    return this.httpClient.put<T>(url, body, {headers, params});
  }

  public putFile<T>(urlPath: string, formData: FormData)
  : Observable<T> {
    let baseUrl = this.config?.backendServerUrl;
    const url = baseUrl + `${urlPath}`;
    return this.httpClient.put<T>(url, formData);
  }

  public delete<T>(urlPath: string): Observable<T> {
    let baseUrl = this.config?.backendServerUrl;
    const url = baseUrl + `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json"});
    return this.httpClient.delete<T>(url, {headers});
  }

  public downloadFile(urlPath: string, body: any): Observable<HttpResponse<Blob>> {
    let baseUrl = this.config?.backendServerUrl;
    const url = baseUrl + `${urlPath}`;
    return this.httpClient.post(url, body, {
      responseType: 'blob',
      observe: 'response'
    });
  }

  // Added on 2025.8.26 For WAF check
  public getForWAF<T>(urlPath: string, params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; })
    : Observable<T> {
    let baseUrl = this.config?.wafCheckUrl;
    const url = baseUrl + `${urlPath}`;
    console.log("--------------getForWAF--------------");
    console.log(url);
    // let headers = new HttpHeaders({});
    // return this.catchError(this.httpClient.get<T>(url, {headers, params}), url, 'GET');
    return this.httpClient.get<any>(url);
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
