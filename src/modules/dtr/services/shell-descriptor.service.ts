import {Injectable} from '@angular/core';
import {EMPTY, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ShellDescriptor} from '../models/shell-descriptor';
import {DtrHttpClient} from './dtr-http-client.service'

/**
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class ShellDescriptorService {

  constructor(private dtrHttpClient: DtrHttpClient) {
  }

  getShellDescriptors(): Observable<ShellDescriptor[]> {
    let filterExp = '';

    return this.dtrHttpClient.get<JSON>("/api/v3/shell-descriptors", 0, 100, filterExp)
      .pipe(map(shellDescriptor => {
        const arr = Array<ShellDescriptor>();
       
        let datasets = (shellDescriptor as any)?.result || [];
        if (!Array.isArray(datasets)) {
          datasets = [datasets];
        }

        for(let i = 0; i < datasets.length; i++) {
          const dataSet: any = datasets[i];
          const newshellDesc: ShellDescriptor = {
            id: dataSet["id"],
            idShort : dataSet["idShort"],
            description: dataSet["description"],
            displayName: dataSet["displayName"],
            specificAssetIds: dataSet["specificAssetIds"],
            submodelDescriptors: dataSet["submodelDescriptors"]
          };

          arr.push(newshellDesc)
        }
        return arr;
      }));
  }


  getShellDescriptorById(id: string): Observable<JSON> {
    let filterExp = '';
    let idBase64 = ''

    if(id) {
      idBase64 = btoa(id);
      return this.dtrHttpClient.get<any>("/api/v3/shell-descriptors/" + idBase64, 0, 1, filterExp)
        .pipe(map(shellDescriptor => {
          return (shellDescriptor as JSON);
        }));
    } else {
      return EMPTY;
    }
  }

  removeBlankItems(body: any): string {
    const jsonData = JSON.parse(JSON.stringify(body));
    if (jsonData.specificAssetIds && Array.isArray(jsonData.specificAssetIds)) {
      jsonData.specificAssetIds.forEach((asset: any) => {
        if (asset.supplementalSemanticIds && Array.isArray(asset.supplementalSemanticIds) && asset.supplementalSemanticIds.length === 0) {
          delete asset.supplementalSemanticIds;
        }
      });
    }
    if (jsonData.submodelDescriptors && Array.isArray(jsonData.submodelDescriptors)) {
      jsonData.submodelDescriptors.forEach((asset: any) => {
        if (asset.supplementalSemanticId && Array.isArray(asset.supplementalSemanticId) && asset.supplementalSemanticId.length === 0) {
          delete asset.supplementalSemanticId;
        }
        if (asset.supplementalSemanticIds && Array.isArray(asset.supplementalSemanticIds) && asset.supplementalSemanticIds.length === 0) {
          delete asset.supplementalSemanticIds;
        }
      });
    }
    return JSON.stringify(jsonData, null, 4);
  }

  createShellDescriptor(body: any): Observable<JSON> {
    let requestBody = this.removeBlankItems(body);
    return this.dtrHttpClient.post<JSON>("/api/v3/shell-descriptors", requestBody);
  }

  updateShellDescriptor(id: string, body: any): Observable<JSON> {
    let idBase64 = btoa(id);
    let requestBody = this.removeBlankItems(body);
    return this.dtrHttpClient.put<JSON>("/api/v3/shell-descriptors/" + idBase64, requestBody);
  }

  deleteShellDescriptor(id: string): Observable<JSON> {
    let idBase64 = btoa(id);
    return this.dtrHttpClient.delete<JSON>("/api/v3/shell-descriptors/" + idBase64);
  }

  addSubmodelDescriptor(id: string, body: any): Observable<JSON> {
    let idBase64 = btoa(id);
    let requestBody = this.removeBlankItems(body);
    return this.dtrHttpClient.post<JSON>("/api/v3/shell-descriptors/" + idBase64 + "/submodel-descriptors", requestBody);
  }
}
