export interface IValute {
  value: number;
  date: Date;
}

export interface ValuteState {
  valute: IValute[];
  error: null | string;
  loading: boolean;
}

export enum ValuteActionTypes {
  FETCH_VALUTE = "FETCH_VALUTE",
  FETCH_VALUTE_SUCCESS = "FETCH_VALUTE_SUCCESS",
  FETCH_VALUTE_ERROR = "FETCH_VALUTE_ERROR",
}

interface FetchValuteAction {
  type: ValuteActionTypes.FETCH_VALUTE;
}

interface FetchValuteSuccessAction {
  type: ValuteActionTypes.FETCH_VALUTE_SUCCESS;
  payload: any[];
}

interface FetchValuteErrorAction {
  type: ValuteActionTypes.FETCH_VALUTE_ERROR;
  payload: string;
}

export type ValuteAction =
  | FetchValuteAction
  | FetchValuteSuccessAction
  | FetchValuteErrorAction;
