import { EdcConnectorClientContext, expand, IdResponse} from "@think-it-labs/edc-connector-client";
import {PartnerGroupInput} from '../../mgmt-api-client';
import { Inner } from "../inner";

export class PartnerGroupsController {
  #inner = new Inner();
  #basePath = "/business-partner-groups";
  #txContext = {
    "tx": "https://w3id.org/tractusx/v0.0.1/ns/"
  };  
  #context?: EdcConnectorClientContext;

  constructor(context?: EdcConnectorClientContext) {
    this.#context = context;
  }

  async get(bpn: string, context?: EdcConnectorClientContext): Promise<any> {
    const actualContext = context || this.#context!;
    return this.#inner.request(actualContext.management, {
      path: `${this.#basePath}/${bpn}`,
      method: "GET",
      apiToken: actualContext.apiToken,
    });
  }

  async getAllGroups(context?: EdcConnectorClientContext): Promise<any> {
    const actualContext = context || this.#context!;
    return this.#inner.request(actualContext.management, {
      path: `/v3${this.#basePath}/groups`,
      method: "GET",
      apiToken: actualContext.apiToken,
    });
  }

  async create(input: PartnerGroupInput, context?: EdcConnectorClientContext): Promise<IdResponse> {
    const actualContext = context || this.#context!;
    return this.#inner.request(actualContext.management, {
        path: this.#basePath,
        method: "POST",
        apiToken: actualContext.apiToken,
        body: {
          ...input,
          "@context": this.#txContext,
        },
      })
      .then((body) => expand(body, () => new IdResponse()));
  }

  async delete(bpn: string, context?: EdcConnectorClientContext): Promise<void> {
    const actualContext = context || this.#context!;
    return this.#inner.request(actualContext.management, {
      path: `${this.#basePath}/${bpn}`,
      method: "DELETE",
      apiToken: actualContext.apiToken,
    });
  }

  async update(input: PartnerGroupInput, context?: EdcConnectorClientContext): Promise<void> {
    const actualContext = context || this.#context!;
    return this.#inner.request(actualContext.management, {
      path: this.#basePath,
      method: "PUT",
      apiToken: actualContext.apiToken,
      body: {
        ...input,
        "@context": this.#txContext,
      },
    });
  }
}