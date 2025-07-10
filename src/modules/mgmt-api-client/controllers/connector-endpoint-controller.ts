import {environment} from '../../../environments/environment';

interface InnerRequest {
  method: "DELETE" | "GET" | "POST" | "PUT";
  query?: Record<string, string>;
  body?: unknown;
  apiToken?: string;
  headers?: Record<string, string | undefined>;
}


export class ConnectorEndpointController {

  async getAccessToken(): Promise<any> {
    const baseUrl = environment.cofinityXcentralidpUrl;
    const basePath = "/auth/realms/CX-Central/protocol/openid-connect/token";

    const innerRequest : InnerRequest = {
        method: "POST",
        body: ""
      };

      const url = `${baseUrl}${basePath}`;

      const method = innerRequest.method;
      const params = new URLSearchParams();
      params.append('client_id', environment.cofinityX_client_id);
      params.append('grant_type', environment.cofinityX_grant_type);
      params.append('client_secret', environment.cofinityX_client_secret);

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
    const baseUrl = environment.cofinityXbackendUrl;
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
