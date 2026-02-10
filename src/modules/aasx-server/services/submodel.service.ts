import {HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {EMPTY, Observable} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {map} from 'rxjs/operators';
import {Submodel} from '../models/submodel';
import {AasxHttpClient} from './aasx-http-client.service'

/**
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class SubmodelService {

  constructor(private aasxHttpClient: AasxHttpClient) {
  }

  getSubmodelsMetadata(): Observable<Submodel[]> {
    let httpParams = new HttpParams();
    // httpParams = httpParams.append("idShort", idShort);
    // httpParams = httpParams.append("limit", limit.toString());

    return this.aasxHttpClient.get<JSON>("/submodels/$metadata", httpParams)
      .pipe(map(sm => {
        const arr = Array<Submodel>();
       
        let datasets = (sm as any)?.result || [];
        if (!Array.isArray(datasets)) {
          datasets = [datasets];
        }

        for(let i = 0; i < datasets.length; i++) {
          const dataSet: any = datasets[i];
          const newshellDesc: Submodel = {
            id: dataSet["id"],
            idShort : dataSet["idShort"],
            kind: dataSet["kind"],
            semanticId: dataSet["semanticId"],
            submodelElements: dataSet["submodelElements"],
            modelType: dataSet["modelType"],
            description: ""
          };
          arr.push(newshellDesc)        
        }
        return arr;
      }));
  }

  getSubmodelValueDataById(id: string): Observable<any> {
    if (!id) {
      return EMPTY;
    }
    const idBase64 = btoa(id);
    return this.aasxHttpClient.get<any>(`/submodels/${idBase64}/$value`);
  }

  getSubmodelById(id: string): Observable<Submodel> {
    let httpParams = new HttpParams();
    let idBase64 = ''

    if(id) {
      idBase64 = btoa(id);
      return this.aasxHttpClient.get<any>("/submodels/" + idBase64, httpParams)
        .pipe(map(sm => {
          return (sm as Submodel);
        }));
    } else {
      return EMPTY;
    }
  }

  createSubmodel(body: any, id: string): Observable<JSON> {
    // for EDC Create Asset(submodel)
    let idBase64 = btoa(id);
    localStorage.setItem('news_submodel_path', "/submodels/" + idBase64);

    let httpParams = new HttpParams();
    httpParams = httpParams.append("aasIdentifier", idBase64);
    let requestBody = body;
    return this.aasxHttpClient.post<JSON>("/submodels/", requestBody, httpParams);
  }

  updateSubmodel(id: string, body: any): Observable<JSON> {
    // PUT func has BUG, can not use PUT
    // let idBase64 = btoa(id);
    // let requestBody = body;
    // return this.aasxHttpClient.put<JSON>("/submodels/" + idBase64, requestBody);
    return this.deleteSubmodel(id).pipe(
      switchMap(() => this.createSubmodel(body, id))
    );
  }

  deleteSubmodel(id: string): Observable<JSON> {
    let idBase64 = btoa(id);
    return this.aasxHttpClient.delete<JSON>("/submodels/" + idBase64);
  }
}
