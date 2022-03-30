import { combineReducers } from "redux";
import { currencyReduser } from "./currencyReduser";
import { valuteReduser } from "./valuteReduser";

export const rootReduser = combineReducers({
  currency: currencyReduser,
  valute: valuteReduser,
});

export type RootState = ReturnType<typeof rootReduser>;
