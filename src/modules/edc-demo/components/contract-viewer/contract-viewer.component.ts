import {Component, Inject, OnInit} from '@angular/core';
import {
  AssetService,
  ContractAgreementService,
  TransferProcessService
} from "../../../mgmt-api-client";
import {from, Observable, of} from "rxjs";
import { Asset, ContractAgreement, ContractNegotiation, TransferProcessInput, IdResponse, QuerySpec } from "../../../mgmt-api-client/model";
import {ContractOffer} from "../../models/contract-offer";
import {filter, first, map, switchMap, tap} from "rxjs/operators";
import {NotificationService} from "../../services/notification.service";
import {
  CatalogBrowserTransferDialog
} from "../catalog-browser-transfer-dialog/catalog-browser-transfer-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {CatalogBrowserService} from "../../services/catalog-browser.service";
import {Router} from "@angular/router";
import {TransferProcessStates} from "../../models/transfer-process-states";
import {environment} from '../../../../environments/environment';


interface RunningTransferProcess {
  processId: string;
  contractId: string;
  state: TransferProcessStates;
}

@Component({
  selector: 'app-contract-viewer',
  templateUrl: './contract-viewer.component.html',
  styleUrls: ['./contract-viewer.component.scss']
})
export class ContractViewerComponent implements OnInit {

  contracts$: Observable<ContractAgreement[]> = of([]);
  private runningTransfers: RunningTransferProcess[] = [];
  private pollingHandleTransfer?: any;
  userLimit: number = 100;

  constructor(private contractAgreementService: ContractAgreementService,
              private assetService: AssetService,
              public dialog: MatDialog,
              @Inject('HOME_CONNECTOR_STORAGE_ACCOUNT') private homeConnectorStorageAccount: string,
              private transferService: TransferProcessService,
              private catalogService: CatalogBrowserService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  private static isFinishedState(state: string): boolean {
    return [
      "COMPLETED",
      "ERROR",
      "ENDED"].includes(state);
  }

  ngOnInit(): void {
    // default is limit = 50;
    // this.contracts$ = this.contractAgreementService.queryAllAgreements();
    // Modified by ljz on 2025.8.28
    this.search();
  }

  search(): void {
    this.contracts$ = this.contractAgreementService.queryAllAgreements({"limit" :  this.userLimit, "sortField" :  "contractSigningDate", "sortOrder" : "DESC"});
  }

  asDate(epochSeconds?: number): string {
    if(epochSeconds){
      const d = new Date(0);
      d.setUTCSeconds(epochSeconds);
      return d.toLocaleDateString();
    }
    return '';
  }

  onTransferClicked(contract: ContractAgreement) {
    const dialogRef = this.dialog.open(CatalogBrowserTransferDialog);

    dialogRef.afterClosed().pipe(first()).subscribe(result => {
      const storageTypeId: string = result.storageTypeId;
      const receiverHttpEndpoint: string = result.receiverHttpEndpoint;

      // if (storageTypeId !== 'AzureStorage') {
      //   this.notificationService.showError("Only storage type \"AzureStorage\" is implemented currently!")
      //   return;
      // }
      this.createTransferRequest(contract, storageTypeId, receiverHttpEndpoint)
        .pipe(switchMap(trq => this.transferService.initiateTransfer(trq)))
        .subscribe(transferId => {
          this.startPolling(transferId, contract["@id"]!);
        }, error => {
          console.error(error);
          this.notificationService.showError("Error initiating transfer");
        });
    });
  }

  isTransferInProgress(contractId: string): boolean {
    return !!this.runningTransfers.find(rt => rt.contractId === contractId);
  }

  private createTransferRequest(contract: ContractAgreement, storageTypeId: string, receiverHttpEndpoint: string): Observable<TransferProcessInput> {
    //return this.getContractOfferForAssetId(contract.assetId!).pipe(map(contractOffer => {
    return this.getNegotiation(contract.id!).pipe(map(negotiation => {
      //let counterPartyAddress = negotiation["https://w3id.org/edc/v0.0.1/ns/counterPartyAddress"][0]["@value"];
      const counterPartyAddress = negotiation.optionalValue('edc','counterPartyAddress') as string;
      if (storageTypeId === "AmazonS3") {
        // Push方式で特定のAWS S3のBucketにProviderから送る方式
        return {
          //assetId: contractOffer.assetId,
          //counterPartyAddress: contractOffer.originator,
          assetId: contract.assetId,
          counterPartyAddress: counterPartyAddress,
          transferType : "Push",
          //connectorId: contractOffer.participantId,
          contractId: contract.id,
          dataDestination: {
            "type": storageTypeId,
            // keyName: "edc.aws.key",
            keyName: "alice-test-document.txt",
            bucketName: "bob-bucket",
            region: "us-east-1",
            endpointOverride: environment.enddpointOverride, //"http://bob-minio:9000",
            accessKeyId: "bobawsclient",
            secretAccessKey: "bobawssecret"
            // account: this.homeConnectorStorageAccount, // CAUTION: hardcoded value for AzureBlob
            // container: omitted, so it will be auto-assigned by the EDC runtime
          }
        };
      } else if (storageTypeId === "HttpProxy"){
        // Pull方式で特定のHTTPサーバにパブリックエンドポイントとauthKeyを送り、
        // 別途そこにアクセスして取得する方式
        return {
          //assetId: contractOffer.assetId,
          //counterPartyAddress: contractOffer.originator,
          assetId: contract.assetId,
          counterPartyAddress: counterPartyAddress,
          // Modified By ljz On 2024.11.12 Start
          //transferType : "Pull",
          transferType : "HttpData-PULL",  // For EDC0.7+
          //connectorId: contractOffer.participantId,
          // Modified By ljz On 2024.11.12 End
          contractId: contract.id,
          dataDestination: {
            "type": storageTypeId,
          },
          privateProperties: {
            receiverHttpEndpoint: receiverHttpEndpoint //"http://host.docker.internal:8000"
            //receiverHttpEndpoint: environment.receiverHttpEndpoint //"http://host.docker.internal:8000"
          }
        };
      } else if (storageTypeId === "HttpData") {
        // Push方式で特定のHTTPサーバにProviderから直接送る方式
        // TODO: 未実装
      }

      throw `Invalid Storage Type: ${storageTypeId}`
    }));

  }

  /**
   * This method is used to obtain that URL of the connector that is offering a particular asset from the catalog.
   * This is a bit of a hack, because currently there is no "clean" way to get the counter-party's URL for a ContractAgreement.
   *
   * @param assetId Asset ID of the asset that is associated with the contract.
   */
  private getContractOfferForAssetId(assetId: string): Observable<ContractOffer> {
    return this.catalogService.getContractOffers()
      .pipe(
        map(offers => offers.find(o => o.assetId === assetId)),
        map(o => {
          if (o) return o;
          else throw new Error(`No offer found for asset ID ${assetId}`);
        }))
  }

  /**
   * Added By Nri On 2025.4.24
   * 
   * This method is used to obtain that URL of the connector from the Negotiation.
   * This is a bit of a hack, because currently there is no "clean" way to get the counter-party's URL for a ContractAgreement.
   *
   * @param agreementId
   */
  private getNegotiation(agreementId: string): Observable<ContractNegotiation> {
    return this.contractAgreementService.getNegotiation(agreementId)
      .pipe(
        map(o => {
          if (o) return o;
          else throw new Error(`No Negotiation found for agreementId ${agreementId}`);
        }))
  }

  private startPolling(transferProcessId: IdResponse, contractId: string) {
    // track this transfer process
    this.runningTransfers.push({
      processId: transferProcessId.id!,
      state: TransferProcessStates.REQUESTED,
      contractId: contractId
    });

    if (!this.pollingHandleTransfer) {
      this.pollingHandleTransfer = setInterval(this.pollRunningTransfers(), 1000);
    }

  }

  private pollRunningTransfers() {
	  console.log("pollRunningTransfers return 1:" + from(this.runningTransfers).pipe(switchMap(runningTransferProcess => this.catalogService.getTransferProcessesById(runningTransferProcess.processId))));
	 // console.log("pollRunningTransfers return 2:" + filter(transferprocess => ContractViewerComponent.isFinishedState(transferprocess.state!)));

    return () => {
      from(this.runningTransfers) //create from array
        .pipe(switchMap(runningTransferProcess => this.catalogService.getTransferProcessesById(runningTransferProcess.processId)), // fetch from API
          filter(transferprocess => ContractViewerComponent.isFinishedState(transferprocess.state!)), // only use finished ones
          tap(transferProcess => {
            // remove from in-progress
            this.runningTransfers = this.runningTransfers.filter(rtp => rtp.processId !== transferProcess.id)
            this.notificationService.showInfo(`Transfer [${transferProcess.id}] complete!`, "Show me!", () => {
              this.router.navigate(['/transfer-history'])
            })
          }),
        ).subscribe(() => {
		    console.log("runningtransfers.length === 0");
        // clear interval if necessary
        if (this.runningTransfers.length === 0) {
          clearInterval(this.pollingHandleTransfer);
          this.pollingHandleTransfer = undefined;
        }
      }, error => this.notificationService.showError(error))
    }

  }
}
