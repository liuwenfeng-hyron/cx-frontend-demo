import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {EMPTY, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';



/**
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class DtrHttpClient {

  constructor(private httpClient: HttpClient) {
  }

  public get<T>(urlPath: string, offset: number, limit: number, filterExp: string,
                  params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; })
    : Observable<T> {
    let dtrUrl = environment.dtrUrl;
    let dtrTenant = environment.dtrTenant;
    const url = dtrUrl + `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json", "Edc-Bpn" : dtrTenant});
    return this.catchError(this.httpClient.get<T>(url, {headers, params}), url, 'GET');
  }

  public post<T>(urlPath: string, body: string, params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; })
  : Observable<T> {
    let dtrUrl = environment.dtrUrl;
    let dtrTenant = environment.dtrTenant;
    const url = dtrUrl + `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json", "Edc-Bpn" : dtrTenant});
    return this.httpClient.post<T>(url, body, {headers, params});
  }

  public put<T>(urlPath: string, body: string, params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; })
  : Observable<T> {
    let dtrUrl = environment.dtrUrl;
    let dtrTenant = environment.dtrTenant;
    const url = dtrUrl + `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json", "Edc-Bpn" : dtrTenant});
    return this.httpClient.put<T>(url, body, {headers, params});
  }

  public delete<T>(urlPath: string): Observable<T> {
    let dtrUrl = environment.dtrUrl;
    let dtrTenant = environment.dtrTenant;
    const url = dtrUrl + `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json", "Edc-Bpn" : dtrTenant});
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
