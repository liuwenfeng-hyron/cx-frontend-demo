import {DataService} from "./data-service";
import { JsonLdObject } from "@think-it-labs/edc-connector-client";
import { PolicyInput} from "../../mgmt-api-client/model";

export interface ContractOffer {
  id: string;
  assetId: string;
  properties: any;
  "dcat:dataset": Array<any>;
  "dcat:service": DataService;
  //policy: PolicyInput;  // deleted by nri on 2025.2.20
  policy: JsonLdObject;  // added by nri on 2025.2.20
  originator: string;
  participantId: string;
}
