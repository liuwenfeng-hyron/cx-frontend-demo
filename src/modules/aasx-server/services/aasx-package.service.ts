import {HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {EMPTY, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AasxPackage} from '../models/aasx-package';
import {AasxHttpClient} from './aasx-http-client.service'

/**
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class AasxPackageService {

  constructor(private aasxHttpClient: AasxHttpClient) {
  }

  getPackages(): Observable<AasxPackage[]> {
    let httpParams = new HttpParams();
    return this.aasxHttpClient.get<JSON>("/packages", httpParams)
      .pipe(map(packages => {
        const arr = Array<AasxPackage>();
       
        let datasets = (packages as any)?.result || [];
        if (!Array.isArray(datasets)) {
          datasets = [datasets];
        }

        for(let i = 0; i < datasets.length; i++) {
          const dataSet: any = datasets[i];
          const newPackage: AasxPackage = {
            aasIds: dataSet["aasIds"],
            packageId : dataSet["packageId"],
          };
          if(newPackage["aasIds"] && newPackage["aasIds"].length > 0) {
            arr.push(newPackage)
          }
        }
        return arr;
      }));
  }

  createPackage(body: any, id: string): Observable<JSON> {
    let httpParams = new HttpParams();
    let requestBody = body;
    return this.aasxHttpClient.post<JSON>("/packages/", requestBody, httpParams);
  }

  updatePackage(id: string, body: any): Observable<JSON> {
    let idBase64 = btoa(id);
    let requestBody = body;
    return this.aasxHttpClient.put<JSON>("/packages/" + idBase64, requestBody);
  }

  deletePackage(id: string): Observable<JSON> {
    let idBase64 = btoa(id);
    return this.aasxHttpClient.delete<JSON>("/packages/" + idBase64);
  }

  uploadPackage(id: string, formData: FormData): Observable<JSON> {
    if(id){
      let idBase64 = btoa(id);
      return this.aasxHttpClient.putFile<JSON>("/packages/" + idBase64, formData);
    } else {
      return this.aasxHttpClient.postFile<JSON>("/packages", formData);
    }
  }

  downloadPackage(id: string): Observable<Blob> {
    let httpParams = new HttpParams();
    let idBase64 = ''

    if(id) {
      idBase64 = btoa(id);
      return this.aasxHttpClient.getBlob<any>("/packages/" + idBase64, httpParams);
    } else {
      return EMPTY;
    }
  }  
}
