import { combineReducers } from "redux";
import { currencyReduser } from "./currencyReduser";

export const rootReduser = combineReducers({
  currency: currencyReduser,
});
