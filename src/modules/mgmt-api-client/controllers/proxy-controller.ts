import { EdcConnectorClientContext, JSON_LD_DEFAULT_CONTEXT} from "@think-it-labs/edc-connector-client";
import {AppConfigService, AppConfig} from "../../app/app-config.service";

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
  config?: AppConfig;
  baseUrl = "";
  apiToken = "";

  constructor(private configService: AppConfigService) {
    this.config = this.configService.getConfig();
    this.baseUrl = this.config?.dataPlaneProxyApiUrl || '';
    this.apiToken = this.config?.apiKey || '';
  }
  

  async request(query = {}, context?: EdcConnectorClientContext): Promise<String> {
    const innerRequest : InnerRequest = {
      path: `${this.#basePath}`,
      method: "POST",
      apiToken: this.apiToken,
      body:
        Object.keys(query).length === 0
          ? null
          : {
              ...query,
              "@context": JSON_LD_DEFAULT_CONTEXT,
            },
    };
    // Added On 2025.8.25 Start
    const token = localStorage.getItem('access_token');
    const access_token = "Bearer " + token;
    // Added On 2025.8.25 End

    const url = `${this.baseUrl}${innerRequest.path}`;

    const method = innerRequest.method;
    const request = new Request(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "X-Api-Key": innerRequest.apiToken ?? "",
        "Authorization": access_token
      },
      body: innerRequest.body ? JSON.stringify(innerRequest.body) : undefined,
    });

    const response = await fetch(request);

    if(response.ok) {
      return response.text();
    } else {
      return "";
    }
  }

  async requestBlob(query = {}, context?: EdcConnectorClientContext): Promise<Blob> {
    const innerRequest : InnerRequest = {
      path: `${this.#basePath}`,
      method: "POST",
      apiToken: this.apiToken,
      body:
        Object.keys(query).length === 0
          ? null
          : {
              ...query,
              "@context": JSON_LD_DEFAULT_CONTEXT,
            },
    };
    // Added On 2025.8.25 Start
    const token = localStorage.getItem('access_token');
    const access_token = "Bearer " + token;
    // Added On 2025.8.25 End

    const url = `${this.baseUrl}${innerRequest.path}`;

    const method = innerRequest.method;
    const request = new Request(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "X-Api-Key": innerRequest.apiToken ?? "",
        "Authorization": access_token
      },
      body: innerRequest.body ? JSON.stringify(innerRequest.body) : undefined,
    });

    const response = await fetch(request);
    return response.blob();
  }
}
