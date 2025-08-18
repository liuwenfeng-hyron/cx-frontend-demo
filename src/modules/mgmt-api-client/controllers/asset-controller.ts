import {
  expand,
  expandArray,
  Asset,
  AssetInput,
  IdResponse,
  QuerySpec,
  JSON_LD_DEFAULT_CONTEXT,
  EdcConnectorClientContext
} from "@think-it-labs/edc-connector-client";
import { Inner } from "../inner";

export class AssetController {
  // #inner: Inner;
  #inner = new Inner();
  #context?: EdcConnectorClientContext; 
  #basePath = "/v3/assets";
  assetContext = {
    "@context": 
    {
      "@vocab": "https://w3id.org/edc/v0.0.1/ns/",
      "bmw": "http://bmwgroup.com/catenax/taxonomy#",
      "cx-common": "https://w3id.org/catenax/ontology/common#",
      "cx-taxo":"https://w3id.org/catenax/taxonomy#",
      "dct": "http://purl.org/dc/terms/",
      "aas-semantics" : "https://admin-shell.io/aas/3/0/HasSemantics/"
    }
  };

  // constructor(inner: Inner, context?: EdcConnectorClientContext) {
  //   this.#inner = inner;
  //   this.#context = context;
  // }

  constructor(context?: EdcConnectorClientContext) {
    this.#context = context;
  }

  async create(
    input: AssetInput,
    context?: EdcConnectorClientContext,
  ): Promise<IdResponse> {
    const actualContext = context || this.#context!;

    return this.#inner
      .request(actualContext.management, {
        path: this.#basePath,
        method: "POST",
        apiToken: actualContext.apiToken,
        body: {
          ...input,
          // "@context": JSON_LD_DEFAULT_CONTEXT,
          ...this.assetContext,
        },
      })
      .then((body) => expand(body, () => new IdResponse()));
  }

  async delete(
    assetId: string,
    context?: EdcConnectorClientContext,
  ): Promise<void> {
    const actualContext = context || this.#context!;

    return this.#inner.request(actualContext.management, {
      path: `${this.#basePath}/${assetId}`,
      method: "DELETE",
      apiToken: actualContext.apiToken,
    });
  }

  async get(
    assetId: string,
    context?: EdcConnectorClientContext,
  ): Promise<Asset> {
    const actualContext = context || this.#context!;

    return this.#inner
      .request(actualContext.management, {
        path: `${this.#basePath}/${assetId}`,
        method: "GET",
        apiToken: actualContext.apiToken,
      })
      .then((body) => expand(body, () => new Asset()));
  }

  async update(
    input: AssetInput,
    context?: EdcConnectorClientContext,
  ): Promise<void> {
    const actualContext = context || this.#context!;

    return this.#inner.request(actualContext.management, {
      path: this.#basePath,
      method: "PUT",
      apiToken: actualContext.apiToken,
      body: {
        ...input,
        // "@context": JSON_LD_DEFAULT_CONTEXT,
        ...this.assetContext,
      },
    });
  }

  async queryAll(
    query: QuerySpec = {},
    context?: EdcConnectorClientContext,
  ): Promise<Asset[]> {
    const actualContext = context || this.#context!;

    return this.#inner
      .request(actualContext.management, {
        path: `${this.#basePath}/request`,
        method: "POST",
        apiToken: actualContext.apiToken,
        body:
          Object.keys(query).length === 0
            ? null
            : {
                ...query,
                "@context": JSON_LD_DEFAULT_CONTEXT,
              },
      })
      .then((body) => expandArray(body, () => new Asset()));
  }
}
