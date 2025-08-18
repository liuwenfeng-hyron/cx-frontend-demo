import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {first, map, switchMap} from 'rxjs/operators';
import {CatalogBrowserService} from "../../services/catalog-browser.service";
import {NotificationService} from "../../services/notification.service";
import {Router} from "@angular/router";
import {TransferProcessStates} from "../../models/transfer-process-states";
import {ContractOffer} from "../../models/contract-offer";
import {NegotiationResult} from "../../models/negotiation-result";
import {ContractNegotiation, ContractNegotiationRequest} from "../../../mgmt-api-client/model";
import {environment} from '../../../../environments/environment';
import {ConnectorEndpointDialog} from "../connector-endpoint-dialog/connector-endpoint-dialog.component";
import {AssetType} from '../../models/asset-type';
import {AppConfigService, AppConfig} from "../../../app/app-config.service";

interface RunningTransferProcess {
  processId: string;
  assetId?: string;
  state: TransferProcessStates;
}

@Component({
  selector: 'edc-demo-catalog-browser',
  templateUrl: './catalog-browser.component.html',
  styleUrls: ['./catalog-browser.component.scss']
})
export class CatalogBrowserComponent implements OnInit {

  filteredContractOffers$: Observable<ContractOffer[]> = of([]);
  searchText = '';
  config?: AppConfig;
  customProviders = '';
  presetProvidersMessage = '';
  counterPartyId = '';
  assetTypeId: string = '';
  runningTransferProcesses: RunningTransferProcess[] = [];
  runningNegotiations: Map<string, NegotiationResult> = new Map<string, NegotiationResult>(); // contractOfferId, NegotiationResult
  finishedNegotiations: Map<string, ContractNegotiation> = new Map<string, ContractNegotiation>(); // contractOfferId, contractAgreementId
  private fetch$ = new BehaviorSubject(null);
  private pollingHandleNegotiation?: any;

  constructor(private apiService: CatalogBrowserService,
              private configService: AppConfigService,
              public dialog: MatDialog,
              private router: Router,
              private notificationService: NotificationService,
              @Inject('HOME_CONNECTOR_STORAGE_ACCOUNT') private homeConnectorStorageAccount: string,
              @Inject('ASSET_TYPES') public assetTypes: AssetType[]) {
  }

  ngOnInit(): void {
    this.config = this.configService.getConfig();
    // this.customProviders = environment.counterPartyAddress;
    this.customProviders = this.config?.counterPartyAddress || '';
    this.presetProvidersMessage = this.customProviders;
    // this.counterPartyId = environment.counterPartyId;
    this.counterPartyId = this.config?.counterPartyId || '';
    this.filteredContractOffers$ = this.fetch$
      .pipe(
        switchMap(() => {
          const contractOffers$ = this.apiService.getContractOffers(this.customProviders);
          return !!this.searchText ?
            //contractOffers$.pipe(map(contractOffers => contractOffers.filter(contractOffer => contractOffer.id.toLowerCase().includes(this.searchText))))
            contractOffers$.pipe(map(contractOffers => contractOffers.filter(contractOffer => contractOffer.assetId.toLowerCase().includes(this.searchText))))
            :
            contractOffers$;
        }));
  }

  onSearch() {
    this.fetch$.next(null);
  }

  onNegotiateClicked(contractOffer: ContractOffer) {
    // Deleted By nri On 2024.11.12 Start
    /*
    const initiateRequest  = {
      "@type": "NegotiationInitiateRequestDto",
      "@context": {
        "odrl": "http://www.w3.org/ns/odrl/2/"
      },
      counterPartyAddress: contractOffer.originator,
      offer: {
        offerId: contractOffer.id,
        assetId: contractOffer.assetId,
        policy: contractOffer.policy,
      },
      counterPartyId: contractOffer.participantId,
      providerId: contractOffer.participantId
    } as any;
     */
    // Deleted By nri On 2024.11.12 End
    // Added By nri On 2024.11.12 Start
    // Modified By nri On 2025.02.13 Start
    const initiateRequest  = {
      "@type": "NegotiationInitiateRequestDto",
      "@context": {
        "@vocab": "https://w3id.org/edc/v0.0.1/ns/",    
        "tx": "https://w3id.org/tractusx/v0.0.1/ns/",
        "cx-policy": "https://w3id.org/catenax/policy/",
        "edc": "https://w3id.org/edc/v0.0.1/ns/"
      },
      // Modified By nri On 2025.02.13 End
      counterPartyAddress: contractOffer.originator,
      // Added By nri On 2025.1.9 Start
      offer: {
        offerId: contractOffer.id
      },
      // Added By nri On 2025.1.9 End
      policy: contractOffer.policy
    } as any;
    initiateRequest.policy["@context"] = "http://www.w3.org/ns/odrl.jsonld";
    initiateRequest.policy["assigner"] = contractOffer.participantId;
    initiateRequest.policy["target"] = contractOffer.assetId;
    // Added By nri On 2024.11.12 End
    
    const finishedNegotiationStates = [
      "FINALIZED",
      "TERMINATED",
      "ERROR"];

    this.apiService.initiateNegotiation(initiateRequest).subscribe(negotiationId => {
      this.finishedNegotiations.delete(initiateRequest.offer.offerId);
      this.runningNegotiations.set(initiateRequest.offer.offerId, {
        id: negotiationId,
        offerId: initiateRequest.offer.offerId
      });

      if (!this.pollingHandleNegotiation) {
        // there are no active negotiations
        this.pollingHandleNegotiation = setInterval(() => {
          // const finishedNegotiations: NegotiationResult[] = [];

          for (const negotiation of this.runningNegotiations.values()) {
            this.apiService.getNegotiationState(negotiation.id).subscribe(updatedNegotiation => {
              if (finishedNegotiationStates.includes(updatedNegotiation.state!)) {
                let offerId = negotiation.offerId;
                this.runningNegotiations.delete(offerId);
                if (updatedNegotiation["edc:state"] === "VERIFIED") {
                  this.finishedNegotiations.set(offerId, updatedNegotiation);
                  this.notificationService.showInfo("Contract Negotiation complete!", "Show me!", () => {
                    this.router.navigate(['/contracts'])
                  })
                }
              }

              if (this.runningNegotiations.size === 0) {
                clearInterval(this.pollingHandleNegotiation);
                this.pollingHandleNegotiation = undefined;
              }
            });
          }
        }, 1000);
      }
    }, error => {
      console.error(error);
      this.notificationService.showError("Error starting negotiation");
    });
  }

  isBusy(contractOffer: ContractOffer) {
    return this.runningNegotiations.get(contractOffer.id) !== undefined || !!this.runningTransferProcesses.find(tp => tp.assetId === contractOffer.assetId);
  }

  getState(contractOffer: ContractOffer): string {
    const transferProcess = this.runningTransferProcesses.find(tp => tp.assetId === contractOffer.assetId);
    if (transferProcess) {
      return TransferProcessStates[transferProcess.state];
    }

    const negotiation = this.runningNegotiations.get(contractOffer.id);
    if (negotiation) {
      return 'negotiating';
    }

    return '';
  }

  isNegotiated(contractOffer: ContractOffer) {
    return this.finishedNegotiations.get(contractOffer.id) !== undefined;
  }

  // Added By nri On 2024.11.11 Start
  onCatalogUrlsChange(): void {
    //this.catalogApiUrlService.setCustomProvidersAsString(this.customProviders);
    let conectorEndpointUrl = this.customProviders;
    if(conectorEndpointUrl 
      && ''!==conectorEndpointUrl
      && !conectorEndpointUrl.endsWith("/api/v1/dsp")
      && !conectorEndpointUrl.endsWith("/dsp")) {
      if(conectorEndpointUrl.endsWith("/")) {
        conectorEndpointUrl = conectorEndpointUrl + "api/v1/dsp";
      } else {
        conectorEndpointUrl = conectorEndpointUrl + "/api/v1/dsp";
      }
    }

    this.presetProvidersMessage = this.customProviders;
    this.filteredContractOffers$ = this.fetch$
      .pipe(
        switchMap(() => {
          const contractOffers$ = this.apiService.getContractOffers(conectorEndpointUrl, this.counterPartyId, this.assetTypeId);
          return !!this.searchText ?
            contractOffers$.pipe(map(contractOffers => contractOffers.filter(contractOffer => contractOffer.id.toLowerCase().includes(this.searchText))))
            :
            contractOffers$;
        }));
  }
  // Added By nri On 2024.11.11 End
  // Added By nri On 2025.2.20 Start
  getConstraintsByPolicy(policyObj : any) {
    let policys = [];
    const constraintStrArr = [];

    if(!policyObj) {
      constraintStrArr.push("");
      return constraintStrArr;
    }

    if(this.isArray(policyObj)) {
      policys = policyObj;
    } else {
      policys.push(policyObj);
    }

    policys.forEach((policy: any) => {
      this.getConstraintsByPermission(policy["odrl:permission"]).forEach((constraintStr: string) => {
        constraintStrArr.push(constraintStr);
      });      
    });

    if(constraintStrArr.length == 0) {
      constraintStrArr.push("");
    }    
    return constraintStrArr;
  }

  getConstraintsByPermission(permissionObj : any) {
    let permissions = [];
    const constraintStrArr = [];

    if(!permissionObj) {
      constraintStrArr.push("");
      return constraintStrArr;
    }

    if(this.isArray(permissionObj)) {
      permissions = permissionObj;
    } else {
      permissions.push(permissionObj);
    }

    permissions.forEach((permission: any) => {
      this.getConstraintStrArr(permission["odrl:constraint"]).forEach((constraintStr: string) => {
        constraintStrArr.push(constraintStr);
      });      
    });

    if(constraintStrArr.length == 0) {
      constraintStrArr.push("");
    }    
    return constraintStrArr;

  }

  getConstraintStrArr(constraintObj : any) {
    let constraints = [];
    const constraintStrArr = [];

    if(!constraintObj) {
      constraintStrArr.push("");
      return constraintStrArr;
    }

    if(this.isArray(constraintObj)) {
      constraints = constraintObj;
    } else {
      constraints.push(constraintObj);
    }

    constraints.forEach((constraint: any) => {
      if ("odrl:or" in constraint) {
        const andConditions = Array.isArray(constraint["odrl:or"]) ? constraint["odrl:or"] : [constraint["odrl:or"]];
        andConditions.forEach((andCondition: any) => {
          constraintStrArr.push(this.getConstraintStr(andCondition));
        });
      } else if ("odrl:and" in constraint) {
        const andConditions = Array.isArray(constraint["odrl:and"]) ? constraint["odrl:and"] : [constraint["odrl:and"]];
        andConditions.forEach((andCondition: any) => {
          constraintStrArr.push(this.getConstraintStr(andCondition));
        });
      } else {
        constraintStrArr.push(this.getConstraintStr(constraint));
      }
    });

    if(constraintStrArr.length == 0) {
      constraintStrArr.push("");
    }    
    return constraintStrArr;
  }

  getConstraintStr(constraint : any) {
    return this.processString(constraint["odrl:leftOperand"]["@id"]) + " " + this.processString(constraint["odrl:operator"]["@id"]) + " " + constraint["odrl:rightOperand"]
  }

  isArray(value: any): value is { [key: string]: any }[]  { 
    return Array.isArray(value);
  }

  processString(value: string): string {
    if (typeof value !== 'string') {
      return value; 
    }

    return value
      .replace('tx:', '')
      .replace('odrl:', '')
      .replace('cx-policy:', '')
      .replace('https://w3id.org/catenax/policy/', '')
      .replace('edc:', '')
      .replace(/gt/g, '>')
      .replace(/lt/g, '<') 
      .replace(/eq/g, '='); 
  }
  // Added By nri On 2025.2.20 End
  // Added By nri On 2025.2.24 Start
  // Connectorリスト画面を表示する
  selectConnector(): void {
    const dialogRef = this.dialog.open(ConnectorEndpointDialog, {enterAnimationDuration:'2000ms'}); 
    dialogRef.afterClosed().pipe(first()).subscribe((result: { }) => {
            const returnInfo : any = result;
            if (returnInfo) {
              this.customProviders = returnInfo.selectResult.endpoint;
              this.counterPartyId = returnInfo.selectResult.bpn;
              this.onCatalogUrlsChange();
            }
        })
  }
  // Added By nri On 2025.2.24 End
}
