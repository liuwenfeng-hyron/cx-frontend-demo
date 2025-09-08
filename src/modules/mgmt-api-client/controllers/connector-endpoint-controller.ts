import {AppConfigService, AppConfig} from "../../app/app-config.service";

interface InnerRequest {
  method: "DELETE" | "GET" | "POST" | "PUT";
  query?: Record<string, string>;
  body?: unknown;
  apiToken?: string;
  headers?: Record<string, string | undefined>;
}


export class ConnectorEndpointController {
  config?: AppConfig;
  cofinityXcentralidpUrl = "";
  cofinityX_client_id = "";
  cofinityX_grant_type = "";
  cofinityX_client_secret = "";
  cofinityXbackendUrl = "";

  constructor(private configService: AppConfigService) {
    this.config = this.configService.getConfig();
    this.cofinityXcentralidpUrl = this.config?.cofinityXcentralidpUrl || '';
    this.cofinityX_client_id = this.config?.cofinityX_client_id || '';
    this.cofinityX_grant_type = this.config?.cofinityX_grant_type || '';
    this.cofinityX_client_secret = this.config?.cofinityX_client_secret || '';
    this.cofinityXbackendUrl = this.config?.cofinityXbackendUrl || '';
  }

  async getAccessToken(): Promise<any> {
    const basePath = "/auth/realms/CX-Central/protocol/openid-connect/token";

    const innerRequest : InnerRequest = {
        method: "POST",
        body: ""
      };

      const url = `${this.cofinityXcentralidpUrl}${basePath}`;

      const method = innerRequest.method;
      const params = new URLSearchParams();
      params.append('client_id', this.cofinityX_client_id);
      params.append('grant_type', this.cofinityX_grant_type);
      params.append('client_secret', this.cofinityX_client_secret);

      const request = new Request(url, {
        method,
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
          "Connection": "keep-alive",
        },
        body: params.toString(),
      });
  
      const response = await fetch(request);
      return response.json();
  }

  async request(query = {}, authorization: string): Promise<any> {
    const baseUrl = this.cofinityXbackendUrl;
    const basePath = "/api/administration/connectors/discovery";

    const innerRequest : InnerRequest = {
        method: "POST",
        body: ""
      };

      const url = `${baseUrl}${basePath}`;

      const method = innerRequest.method;
      const request = new Request(url, {
        method,
        headers: {
          "Content-type": "application/json",
          "Connection": "keep-alive",
          "Authorization": authorization,
        },
        body: innerRequest.body ? JSON.stringify(innerRequest.body) : undefined,
      });
  
      const response = await fetch(request);
      return response.json();
  }
}
