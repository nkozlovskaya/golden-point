import {
  CurrencyAction,
  CurrencyActionTypes,
  CurrencyState,
} from "../../types/currencyTypes";

const initialState: CurrencyState = {
  currencies: [],
  loading: false,
  error: null,
};

export const currencyReduser = (
  state = initialState,
  action: CurrencyAction
): CurrencyState => {
  switch (action.type) {
    case CurrencyActionTypes.FETCH_CURRENCIES:
      return { currencies: [], loading: true, error: null };
    case CurrencyActionTypes.FETCH_CURRENCIES_SUCCESS:
      return { currencies: action.payload, loading: false, error: null };
    case CurrencyActionTypes.FETCH_CURRENCIES_ERROR:
      return { currencies: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
