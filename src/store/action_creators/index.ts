import * as CurrencyActionCreators from "./currency";
import * as ValuteActionCreators from "./valute";

export const ActionCreators = {
  ...CurrencyActionCreators,
  ...ValuteActionCreators,
};
