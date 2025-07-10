export * from './asset.service';
import { AssetService } from './asset.service';
export * from './contractAgreement.service';
import { ContractAgreementService } from './contractAgreement.service';
export * from './contractDefinition.service';
import { ContractDefinitionService } from './contractDefinition.service';
export * from './contractNegotiation.service';
import { ContractNegotiationService } from './contractNegotiation.service';
export * from './policy.service';
import { PolicyService } from './policy.service';
export * from './transferProcess.service';
import { TransferProcessService } from './transferProcess.service';
import { PartnerGroupService } from './partnerGroup.service'; // Added by nri on 2025.2.10
export * from './partnerGroup.service'; // Added by nri on 2025.2.10
export const APIS = [AssetService, ContractAgreementService, ContractDefinitionService, ContractNegotiationService, PolicyService, TransferProcessService, PartnerGroupService];
