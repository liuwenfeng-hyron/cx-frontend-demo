
export interface FileStatusResponse {
  status: number;
  result: FileStatus[];
  count: number;
  pages: number;
}

export interface FileStatus {
  no: string;
  fileId: string;
  fileName: string;
  messageId: string;
  uploadTime: string;
  uploadStatus: string;
  sendTime: string;
  feedbackMessageId: string;
  feedbackTime: string;  
  feedbackStatus: string;
  feedbackFirstDownloadTime: string;
}


export interface TokenResponse {
  tokenValue: string;
  issuedAt: string;
  expiresAt: string;
  tokenType: string;
  scopes: string;
}

export interface TransferIdInput {
  id: string;
  transferId: string;
  bpn: string;
  edcUrl: string;
}

export interface TransferIdResponse {
  status: number;
  result: TransferIdRecord[];
  count: number;
  pages: number;
}

export interface TransferIdRecord {
  id: string;
  transferId: string;
  bpn: string;
  edcUrl: string;
}