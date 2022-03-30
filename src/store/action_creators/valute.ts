import axios from "axios";
import { Dispatch } from "react";
import { ValuteAction, ValuteActionTypes } from "../../types/valuteType";

export const fetchValute = (CharCode: string) => {
  return async (dispatch: Dispatch<ValuteAction>) => {
    let loadedValute = [];
    try {
      let dataURL = "https://www.cbr-xml-daily.ru/daily_json.js";
      dispatch({ type: ValuteActionTypes.FETCH_VALUTE });
      for (let i = 0; i < 10; i++) {
        const delay = (ms = 200) => new Promise((r) => setTimeout(r, ms));
        await delay();
        const response = await axios.get(dataURL);

        const valute = response.data.Valute;

        loadedValute.push({
          value: valute[CharCode].Value,
          date: response.data.Date,
        });

        dataURL = response.data.PreviousURL;
      }
      dispatch({
        type: ValuteActionTypes.FETCH_VALUTE_SUCCESS,
        payload: loadedValute,
      });
    } catch (e) {
      dispatch({
        type: ValuteActionTypes.FETCH_VALUTE_ERROR,
        payload: "Произошла ошибка при загрузке курса выбранной валюты",
      });
    }
  };
};
