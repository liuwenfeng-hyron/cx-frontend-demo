/**
 * BusinessBackEnd REST API
 * create by nri 2025.7.17
 *
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Injectable } from '@angular/core';
import { Observable, from }  from 'rxjs';
import {BackendHttpClient} from './backend-http-client.service';
import {FileStatusResponse, TokenResponse, TransferIdRecord} from '../models/file-status';
import {HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessBackEndService {

    constructor(private backendHttpClient: BackendHttpClient) {
    }

    uploadFile(formData: FormData): Observable<JSON> {
      return this.backendHttpClient.postFile<JSON>("/file/file-upload", formData);
    }
    
    getFileStatus(body: any): Observable<FileStatusResponse> {
      return this.backendHttpClient.post<FileStatusResponse>("/file/file-status", body);
    }

    getToken(): Observable<TokenResponse> {
      return this.backendHttpClient.get<TokenResponse>("/file/get-token");        
    }

    setTransferId(body: any): Observable<any>  {
      return this.backendHttpClient.post<any>("/file/set-transfer-id", body);
    }

    updateTransferId(body: any): Observable<any>  {
      return this.backendHttpClient.post<any>("/file/update-transfer-id", body);
    }

    getTransferId(body: any): Observable<TransferIdRecord[]> {
      return this.backendHttpClient.post<TransferIdRecord[]>("/file/get-transfer-id", body);
    }

    downloadFile(path: string, messageId: string) {
      const requestBody= {
        "messageId": messageId
      };
      this.backendHttpClient.downloadFile(path, requestBody).subscribe({
      next: (response: HttpResponse<Blob>) => {
        const blob: Blob = response.body as Blob;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = messageId + '.json';

        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      },
      error: (err) => {
        console.error('download error:', err);
      }
    });
  }

  downloadCsvFile(path: string, requestBody: any) {
      this.backendHttpClient.downloadFile(path, requestBody).subscribe({
      next: (response: HttpResponse<Blob>) => {
        const blob: Blob = response.body as Blob;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'uploadAndFeedbackInfo.csv';

        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      },
      error: (err) => {
        console.error('download error:', err);
      }
    });
  }

}
