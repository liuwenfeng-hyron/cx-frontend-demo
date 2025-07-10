import {HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {EMPTY, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Shell} from '../models/shell';
import {AasxHttpClient} from './aasx-http-client.service'

/**
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class ShellService {

  constructor(private aasxHttpClient: AasxHttpClient) {
  }

  getShells(): Observable<Shell[]> {
    let httpParams = new HttpParams();
    // httpParams = httpParams.append("idShort", idShort);
    // httpParams = httpParams.append("limit", limit.toString());

    return this.aasxHttpClient.get<JSON>("/shells", httpParams)
      .pipe(map(shellDescriptor => {
        const arr = Array<Shell>();
       
        let datasets = (shellDescriptor as any)?.result || [];
        if (!Array.isArray(datasets)) {
          datasets = [datasets];
        }

        for(let i = 0; i < datasets.length; i++) {
          const dataSet: any = datasets[i];
          const newshellDesc: Shell = {
            id: dataSet["id"],
            idShort : dataSet["idShort"],
            displayName: "",
            description: "",
            administration: dataSet["administration"],
            assetInformation: dataSet["assetInformation"],
            extensions: "",
            category: "",
            embeddedDataSpecifications: "",
            derivedFrom: dataSet["derivedFrom"],
            submodels: dataSet["submodels"],
            modelType: dataSet["modelType"]
          };
          arr.push(newshellDesc)
        }
        return arr;
      }));
  }


  getShellById(id: string): Observable<Shell> {
    let httpParams = new HttpParams();
    let idBase64 = ''

    if(id) {
      idBase64 = btoa(id);
      return this.aasxHttpClient.get<any>("/shells/" + idBase64, httpParams)
        .pipe(map(shellDescriptor => {
          return (shellDescriptor as Shell);
        }));
    } else {
      return EMPTY;
    }
  }

  createShell(body: any, id: string): Observable<JSON> {
    let httpParams = new HttpParams();
    // httpParams = httpParams.append("aasIdentifier", btoa(id));
    let requestBody = body;
    return this.aasxHttpClient.post<JSON>("/shells/", requestBody, httpParams);
  }

  updateShell(id: string, body: any): Observable<JSON> {
    let idBase64 = btoa(id);
    let requestBody = body;
    return this.aasxHttpClient.put<JSON>("/shells/" + idBase64, requestBody);
  }

  deleteShell(id: string): Observable<JSON> {
    let idBase64 = btoa(id);
    return this.aasxHttpClient.delete<JSON>("/shells/" + idBase64);
  }

  getThumbnail(id: string): Observable<Blob> {
    let httpParams = new HttpParams();
    let idBase64 = ''

    if(id) {
      idBase64 = btoa(id);
      return this.aasxHttpClient.getBlob<any>("/shells/" + idBase64 + "/asset-information/thumbnail", httpParams);
    } else {
      return EMPTY;
    }
  }

  uploadThumbnail(id: string, formData: FormData): Observable<JSON> {
    let idBase64 = btoa(id);
    return this.aasxHttpClient.putFile<JSON>("/shells/" + idBase64 + "/asset-information/thumbnail", formData);
  }
}
