import {
  expand,
  expandArray,
  TransferProcess,
  TransferProcessInput,
  TransferProcessState,
  IdResponse,
  QuerySpec,
  JSON_LD_DEFAULT_CONTEXT,
  EdcConnectorClientContext
} from "@think-it-labs/edc-connector-client";
import { Inner } from "../inner";

export class TransferProcessController {
  // #inner: Inner;
  #inner = new Inner();
  #context?: EdcConnectorClientContext;
  #basePath = '/v3/transferprocesses';
  protocol: String = "dataspace-protocol-http";

  // constructor(inner: Inner, context?: EdcConnectorClientContext) {
  //   this.#inner = inner;
  //   this.#context = context;
  // }

  constructor(context?: EdcConnectorClientContext) {
    this.#context = context;
  }

  async initiate(
    input: TransferProcessInput,
    context?: EdcConnectorClientContext,
  ): Promise<IdResponse> {
    const actualContext = context || this.#context!;

    return this.#inner
      .request(actualContext.management, {
        path: this.#basePath,
        method: "POST",
        apiToken: actualContext.apiToken,
        body: {
          "@context": JSON_LD_DEFAULT_CONTEXT,
          protocol: this.protocol,
          ...input,
        },
      })
      .then((body) => expand(body, () => new IdResponse()));
  }

  async get(id: string, context?: EdcConnectorClientContext): Promise<TransferProcess> {
    const actualContext = context || this.#context!;

    return this.#inner
      .request(actualContext.management, {
        path: `${this.#basePath}/${id}`,
        method: "GET",
        apiToken: actualContext.apiToken,
      })
      .then((body) => expand(body, () => new TransferProcess()));
  }

  async queryAll(
    query: QuerySpec = {},
    context?: EdcConnectorClientContext,
  ): Promise<TransferProcess[]> {
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
      .then((body) => expandArray(body, () => new TransferProcess()));
  }

  async getState(
    transferProcessId: string,
    context?: EdcConnectorClientContext,
  ): Promise<TransferProcessState> {
    const actualContext = context || this.#context!;

    return this.#inner.request(actualContext.management, {
      path: `${this.#basePath}/${transferProcessId}/state`,
      method: "GET",
      apiToken: actualContext.apiToken,
    })
    .then((body) => expand(body, () => new TransferProcessState()));
  }

  async terminate(
    id: string,
    reason: string,
    context?: EdcConnectorClientContext,
  ): Promise<void> {
    const actualContext = context || this.#context!;

    return this.#inner.request(actualContext.management, {
      path: `${this.#basePath}/${id}/terminate`,
      method: "POST",
      apiToken: actualContext.apiToken,
      body: {
        "@id": id,
        "@context": JSON_LD_DEFAULT_CONTEXT,
        reason: reason
      },
    });
  }

  async deprovision(
    id: string,
    context?: EdcConnectorClientContext,
  ): Promise<void> {
    const actualContext = context || this.#context!;

    return this.#inner.request(actualContext.management, {
      path: `${this.#basePath}/${id}/deprovision`,
      method: "POST",
      apiToken: actualContext.apiToken,
      body: {
        "@id": id,
        "@context": JSON_LD_DEFAULT_CONTEXT
      },
    });
  }
}
