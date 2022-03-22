import { combineReducers } from "redux";
import { currencyReduser } from "./currencyReduser";

export const rootReduser = combineReducers({
  currency: currencyReduser,
});


export type RootState = ReturnType<typeof rootReduser>;