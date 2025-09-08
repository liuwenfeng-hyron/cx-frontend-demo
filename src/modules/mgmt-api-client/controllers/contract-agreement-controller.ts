import {
  expand,
  expandArray,
  ContractAgreement,
  ContractNegotiation,
  QuerySpec,
  JSON_LD_DEFAULT_CONTEXT,
  EdcConnectorClientContext
} from "@think-it-labs/edc-connector-client";
import { Inner } from "../inner";

export class ContractAgreementController {
  // #inner: Inner;
  #inner = new Inner();
  #context?: EdcConnectorClientContext;
  #basePath = "/v3/contractagreements";

  // constructor(inner: Inner, context?: EdcConnectorClientContext) {
  //   this.#inner = inner;
  //   this.#context = context;
  // }

  constructor(context?: EdcConnectorClientContext) {
    this.#context = context;
  }

  async queryAll(
    query: QuerySpec = {},
    context?: EdcConnectorClientContext,
  ): Promise<ContractAgreement[]> {
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
      .then((body) => expandArray(body, () => new ContractAgreement()));
  }

  async get(
    agreementId: string,
    context?: EdcConnectorClientContext,
  ): Promise<ContractAgreement> {
    const actualContext = context || this.#context!;

    return this.#inner
      .request(actualContext.management, {
        path: `${this.#basePath}/${agreementId}`,
        method: "GET",
        apiToken: actualContext.apiToken,
      })
      .then((body) => expand(body, () => new ContractAgreement()));
  }

  async getNegotiation(
    agreementId: string,
    context?: EdcConnectorClientContext,
  ): Promise<ContractNegotiation> {
    const actualContext = context || this.#context!;

    return this.#inner
      .request(actualContext.management, {
        path: `${this.#basePath}/${agreementId}/negotiation`,
        method: "GET",
        apiToken: actualContext.apiToken,
      })
      .then((body) => expand(body, () => new ContractNegotiation()));
  }
}
