export interface ICurrency {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
  // children?: React.ReactChild | React.ReactNode;
}

export interface CurrencyState {
  currencies: ICurrency[];
  loading: boolean;
  error: null | string;
}

export enum CurrencyActionTypes {
  FETCH_CURRENCIES = "FETCH_CURRENCIES",
  FETCH_CURRENCIES_SUCCESS = "FETCH_CURRENCIES_SUCCESS",
  FETCH_CURRENCIES_ERROR = "FETCH_CURRENCIES_ERROR",
}

interface FetchCurrencyAction {
  type: CurrencyActionTypes.FETCH_CURRENCIES;
}

interface FetchCurrencySuccessAction {
  type: CurrencyActionTypes.FETCH_CURRENCIES_SUCCESS;
  payload: any[];
}

interface FetchCurrencyErrorAction {
  type: CurrencyActionTypes.FETCH_CURRENCIES_ERROR;
  payload: string;
}

export type CurrencyAction =
  | FetchCurrencyAction
  | FetchCurrencySuccessAction
  | FetchCurrencyErrorAction;
