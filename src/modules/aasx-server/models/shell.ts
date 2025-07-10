export interface Shell {
  id: string;
  idShort: string;
  displayName: string;
  description: string;
  administration: Administration;
  assetInformation: AssetInformation;
  extensions: string;
  category: string;
  embeddedDataSpecifications: string;
  derivedFrom: DerivedFrom;
  submodels: any;
  modelType: string;
}

export interface Administration {
  version: string;
  revision: string;
  creator?: any;
  templateId?: string;
  embeddedDataSpecifications?: string;
}

export interface AssetInformation {
  assetKind: string;
  globalAssetId: string;
  assetType: string;
  specificAssetIds: string;
  defaultThumbnail: DefaultThumbnail;
}

export interface DerivedFrom {
  type: string;
  keys: any;
}

export interface ModelReference {
  type: string;
  keys: any;
}

export interface DefaultThumbnail {
  path: string;
  contentType: any;
}
