import { EdcConnectorClientContext, JSON_LD_DEFAULT_CONTEXT} from "@think-it-labs/edc-connector-client";
import {environment} from '../../../environments/environment';

interface InnerRequest {
  path: string;
  method: "DELETE" | "GET" | "POST" | "PUT";
  query?: Record<string, string>;
  body?: unknown;
  apiToken?: string;
  headers?: Record<string, string | undefined>;
}

export class ProxyController {
  #context?: EdcConnectorClientContext;
  #basePath = "/aas/request";

  
  async request(query = {}, context?: EdcConnectorClientContext): Promise<String> {
    //const baseUrl = "http://localhost:4300/proxy";
    const baseUrl = environment.dataPlaneProxyApiUrl;
    const apiToken = environment.apiKey;
    const innerRequest : InnerRequest = {
        path: `${this.#basePath}`,
        method: "POST",
        apiToken: apiToken,
        body:
          Object.keys(query).length === 0
            ? null
            : {
                ...query,
                "@context": JSON_LD_DEFAULT_CONTEXT,
              },
      };

      const url = `${baseUrl}${innerRequest.path}`;

      const method = innerRequest.method;
      const request = new Request(url, {
        method,
        headers: {
          "Content-type": "application/json",
          "X-Api-Key": innerRequest.apiToken ?? "",
        },
        body: innerRequest.body ? JSON.stringify(innerRequest.body) : undefined,
      });
  
      const response = await fetch(request);
      return response.text();
  }

  async requestBlob(query = {}, context?: EdcConnectorClientContext): Promise<Blob> {
    const baseUrl = environment.dataPlaneProxyApiUrl;
    const apiToken = environment.apiKey;
    const innerRequest : InnerRequest = {
        path: `${this.#basePath}`,
        method: "POST",
        apiToken: apiToken,
        body:
          Object.keys(query).length === 0
            ? null
            : {
                ...query,
                "@context": JSON_LD_DEFAULT_CONTEXT,
              },
      };

      const url = `${baseUrl}${innerRequest.path}`;

      const method = innerRequest.method;
      const request = new Request(url, {
        method,
        headers: {
          "Content-type": "application/json",
          "X-Api-Key": innerRequest.apiToken ?? "",
        },
        body: innerRequest.body ? JSON.stringify(innerRequest.body) : undefined,
      });
  
      const response = await fetch(request);
      return response.blob();
  }
}
