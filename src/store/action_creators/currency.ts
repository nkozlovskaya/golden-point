import axios from "axios";
import { Dispatch } from "react";
import { CurrencyAction, CurrencyActionTypes } from "../../types/currencyTypes";

export const fetchCurrencies = () => {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    try {
      dispatch({ type: CurrencyActionTypes.FETCH_CURRENCIES });
      const responce = await axios.get(
        "https://www.cbr-xml-daily.ru/daily_json.js"
      );
      dispatch({
        type: CurrencyActionTypes.FETCH_CURRENCIES_SUCCESS,
        payload: Object.values(responce.data.Valute),
      });
    } catch (e) {
      dispatch({
        type: CurrencyActionTypes.FETCH_CURRENCIES_ERROR,
        payload: "Произошла ошибка при загрузке курса валют",
      });
    }
  };
};
