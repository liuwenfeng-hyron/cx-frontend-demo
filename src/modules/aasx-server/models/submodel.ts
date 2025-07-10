import {SubmodelElement} from './submodelElement';

export interface Submodel {
  id: string;
  idShort: string;
  kind: string;
  semanticId: string;
  submodelElements: [SubmodelElement];
  modelType: string;
  description: string;
}