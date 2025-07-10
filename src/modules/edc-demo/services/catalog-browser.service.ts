import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {EMPTY, Observable} from 'rxjs';
import {catchError, map, reduce} from 'rxjs/operators';
import {Catalog} from '../models/catalog';
import {ContractOffer} from '../models/contract-offer';
import {
  ContractNegotiationService,
  TransferProcessService,
} from "../../mgmt-api-client";
import {CONNECTOR_CATALOG_API, CONNECTOR_MANAGEMENT_API} from "../../app/variables";
// import TypeEnum = Policy.TypeEnum; //TODO Use TypeEnum https://github.com/Think-iT-Labs/edc-connector-client/issues/103
import {
  ContractNegotiationRequest,
  ContractNegotiation,
  PolicyInput,
  TransferProcess,
  TransferProcessInput
} from "../../mgmt-api-client/model";
import {environment} from '../../../environments/environment';


/**
 * Combines several services that are used from the {@link CatalogBrowserComponent}
 */
@Injectable({
  providedIn: 'root'
})
export class CatalogBrowserService {

  constructor(private httpClient: HttpClient,
              private transferProcessService: TransferProcessService,
              private negotiationService: ContractNegotiationService,
              @Inject(CONNECTOR_MANAGEMENT_API) private managementApiUrl: string,
              @Inject(CONNECTOR_CATALOG_API) private catalogApiUrl: string) {
  }

  getContractOffers(newCounterPartyAddress ?: string, newCounterPartyId ?: string, assetTypeId ?: string): Observable<ContractOffer[]> {
    let counterPartyAddress = environment.counterPartyAddress;

    if(newCounterPartyAddress && '' !== newCounterPartyAddress) {
      counterPartyAddress = newCounterPartyAddress;
    }

    let counterPartyId = environment.counterPartyId;

    if(newCounterPartyId && '' !== newCounterPartyId) {
      counterPartyId = newCounterPartyId;
    }

    //console.log("counterPartyId:" + counterPartyId);
    // Added by Nri On 2025.4.22 Start
    let filterExp = '';
    if(assetTypeId && '' !== assetTypeId) {
      let filterExpObj = {
            "@context": {
                "edc": "https://w3id.org/edc/v0.0.1/ns/"
            },
            "@type": "edc:Criterion",
            "operandLeft": "'http://purl.org/dc/terms/type'.'@id'",
            "operator": "=",
            "operandRight": "https://w3id.org/catenax/taxonomy#" + assetTypeId
      };
      filterExp = JSON.stringify(filterExpObj, null, 2);
    }
    // Added by Nri On 2025.4.22 End
    
    let url = this.catalogApiUrl || this.managementApiUrl;
    return this.post<Catalog>(url + "/v3/catalog/request", counterPartyAddress, counterPartyId, 0, 100, filterExp)
      .pipe(map(catalog => {
        const arr = Array<ContractOffer>();
        console.log("catalog:" + catalog);
        let datasets = catalog["dcat:dataset"];
        if (!Array.isArray(datasets)) {
          datasets = [datasets];
        }

        for(let i = 0; i < datasets.length; i++) {
          const dataSet: any = datasets[i];
          // Modified By Ljz On 2024.11.20 Start
          /*const properties: { [key: string]: string; } = {
            id: dataSet["edc:id"],
            name: dataSet["edc:name"],
            version: dataSet["edc:version"],
            type: dataSet["edc:type"],
            contentType: dataSet["edc:contenttype"]
          }*/
          const properties: { [key: string]: string; } = {
            id: dataSet["id"],
            name: dataSet["name"],
            version: dataSet["version"],
            type: dataSet["type"],
            contentType: dataSet["contenttype"]
          }
          // Modified By Ljz On 2024.11.20 End
          const assetId = dataSet["@id"];

          const hasPolicy = dataSet["odrl:hasPolicy"];

          const newContractOffer: ContractOffer = {
            assetId: assetId,
            properties: properties,
            "dcat:service": catalog["dcat:service"],
            "dcat:dataset": datasets,
            id: hasPolicy["@id"],
            originator: catalog["dcat:service"]['dct:endpointUrl'] || "",
            participantId: catalog.participantId,
            policy: hasPolicy
          };

          arr.push(newContractOffer)
        }
        return arr;
      }));
  }

  initiateTransfer(transferRequest: TransferProcessInput): Observable<string> {
    return this.transferProcessService.initiateTransfer(transferRequest).pipe(map(t => t.id!))
  }

  getTransferProcessesById(id: string): Observable<TransferProcess> {
    return this.transferProcessService.getTransferProcess(id);
  }

  initiateNegotiation(initiate: ContractNegotiationRequest): Observable<string> {
    return this.negotiationService.initiateContractNegotiation(initiate).pipe(map(t => t.id!))
  }

  getNegotiationState(id: string): Observable<ContractNegotiation> {
    return this.negotiationService.getNegotiation(id);
  }

  private post<T>(urlPath: string, counterPartyAddress: string, counterPartyId: string, offset: number, limit: number, filterExp: string,
                  params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; })
    : Observable<T> {
    const url = `${urlPath}`;
    let headers = new HttpHeaders({"Content-type": "application/json"});
    return this.catchError(this.httpClient.post<T>(url, `{"@context":{"edc":"https://w3id.org/edc/v0.0.1/ns/"},"@type":"CatalogRequest","counterPartyAddress":"${counterPartyAddress}","counterPartyId":"${counterPartyId}","protocol":"dataspace-protocol-http","querySpec":{"offset":${offset},"limit":${limit},"filterExpression":[${filterExp}]}}
    `, {headers, params}), url, 'POST');
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
