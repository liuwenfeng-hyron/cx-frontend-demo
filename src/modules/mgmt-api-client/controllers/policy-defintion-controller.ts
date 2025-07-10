import {
  expand,
  expandArray,
  IdResponse,
  PolicyDefinition,
  PolicyDefinitionInput,
  QuerySpec,
  JSON_LD_DEFAULT_CONTEXT,
  EdcConnectorClientContext
} from "@think-it-labs/edc-connector-client";
import { Inner } from "../inner";
import {environment} from '../../../environments/environment';

export class PolicyDefinitionController {
  #inner = new Inner();
  #context?: EdcConnectorClientContext;
  #basePath = "/v3/policydefinitions";
  policyContext = {"@context": [
    "http://www.w3.org/ns/odrl.jsonld",
    {
      "@vocab": "https://w3id.org/edc/v0.0.1/ns/",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "tx": "https://w3id.org/tractusx/v0.0.1/ns/",
	    "cx-policy": "https://w3id.org/catenax/policy/"
    }
  ]};

  constructor(context?: EdcConnectorClientContext) {
    this.#context = context;
  }

  async create(
    input: PolicyDefinitionInput,
    context?: EdcConnectorClientContext,
  ): Promise<IdResponse> {
    const actualContext = context || this.#context!;
    const body = {
      ...input,
      //"@context": JSON_LD_DEFAULT_CONTEXT,
      ...this.policyContext,
    };

    return this.#inner
      .request(actualContext.management, {
        path: this.#basePath,
        method: "POST",
        apiToken: actualContext.apiToken,
        body: body,
      })
      .then((body) => expand(body, () => new IdResponse()));
  }

  async update(
    policyId: string,
    input: PolicyDefinitionInput,
    context?: EdcConnectorClientContext,
  ): Promise<IdResponse> {
    const actualContext = context || this.#context!;
    return this.#inner
      .request(actualContext.management, {
        path: `${this.#basePath}/${policyId}`,
        method: "PUT",
        apiToken: actualContext.apiToken,
        body: {
          ...input,
          //"@context": JSON_LD_DEFAULT_CONTEXT,
          ...this.policyContext,
        },
      })
  }

  async delete(
    policyId: string,
    context?: EdcConnectorClientContext,
  ): Promise<void> {
    const actualContext = context || this.#context!;
    return this.#inner.request(environment.managementApiUrl, {
      path: `${this.#basePath}/${policyId}`,
      method: "DELETE",
      apiToken: actualContext.apiToken,
    });
  }

  async get(
    policyId: string,
    context?: EdcConnectorClientContext,
  ): Promise<PolicyDefinition> {
    const actualContext = context || this.#context!;
    return this.#inner
      .request(actualContext.management, {
        path: `${this.#basePath}/${policyId}`,
        method: "GET",
        apiToken: actualContext.apiToken,
      })
      .then((body) => expand(body, () => new PolicyDefinition()));
  }

  async queryAll(
    query: QuerySpec = {},
    context?: EdcConnectorClientContext,
  ): Promise<PolicyDefinition[]> {
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
      .then((body) => expandArray(body, () => new PolicyDefinition()));
  }
}
