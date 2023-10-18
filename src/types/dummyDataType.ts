export interface HistoryDataType {
  key: React.Key;
  type: string;
  dateT: string;
  amount: string;
  traxID: string[];
}

export interface PriceDataType {
  key: React.Key;
  token: string;
  symbol: string;
  market: string;
  price: string;
  marketCap: string;
  volume: string;
}

export interface WalletDataType {
  key: React.Key;
  asset: string;
  symbol: string;
  market: string;
  onOrders: string[];
  availableBalance: string[];
  totalbBalance: string[];
}
