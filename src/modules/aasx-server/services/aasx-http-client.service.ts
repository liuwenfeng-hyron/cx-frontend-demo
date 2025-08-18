import {HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
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
export class AasxHttpClient {

  constructor(private httpClient: HttpClient) {
  }

  public get<T>(urlPath: string, params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; })
    : Observable<T> {
    let baseUrl = environment.assxServerUrl;
    const url = baseUrl + `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json"});
    return this.catchError(this.httpClient.get<T>(url, {headers, params}), url, 'GET');
  }

  public getBlob<T>(urlPath: string, params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }, responseType?: string)
    : Observable<Blob> {
    let baseUrl = environment.assxServerUrl;
    const url = baseUrl + `${urlPath}`;
    return this.httpClient.get(url, { responseType: 'blob' });
  }

  public post<T>(urlPath: string, body: string, params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; })
  : Observable<T> {
    let baseUrl = environment.assxServerUrl;
    const url = baseUrl + `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json"});
    return this.httpClient.post<T>(url, body, {headers, params});
  }

  public postFile<T>(urlPath: string, formData: FormData)
  : Observable<T> {
    let baseUrl = environment.assxServerUrl;
    const url = baseUrl + `${urlPath}`;
    return this.httpClient.post<T>(url, formData);
  }

  public put<T>(urlPath: string, body: string, params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; })
  : Observable<T> {
    let baseUrl = environment.assxServerUrl;
    const url = baseUrl + `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json"});
    return this.httpClient.put<T>(url, body, {headers, params});
  }

  public putFile<T>(urlPath: string, formData: FormData)
  : Observable<T> {
    let baseUrl = environment.assxServerUrl;
    const url = baseUrl + `${urlPath}`;
    return this.httpClient.put<T>(url, formData);
  }

  public delete<T>(urlPath: string): Observable<T> {
    let baseUrl = environment.assxServerUrl;
    const url = baseUrl + `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json"});
    return this.httpClient.delete<T>(url, {headers});
  }

  public downloadFile(urlPath: string): Observable<HttpResponse<Blob>> {
    let baseUrl = environment.assxServerUrl;
    const url = baseUrl + `${urlPath}`;
    return this.httpClient.get(url, {
      responseType: 'blob',
      observe: 'response'
    });
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
