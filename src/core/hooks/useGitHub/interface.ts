import { systemResponse } from '@core/helpers/responseTypes';

export interface TransactionByTidRequest {
  tid: string;
}

export interface TransactionByTidResponse {
  system?: systemResponse;
  tid?: string;
  type?: string;
  data?: string;
}

export interface PermittedTransactionResponse {
  permitted?: true;
  system?: systemResponse;
}
