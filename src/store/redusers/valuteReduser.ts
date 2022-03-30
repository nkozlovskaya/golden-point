// import useActions from '../../hooks/'

import {
  ValuteAction,
  ValuteActionTypes,
  ValuteState,
} from "../../types/valuteType";

const initialState: ValuteState = {
  valute: [],
  loading: false,
  error: null,
};

export const valuteReduser = (
  state: ValuteState = initialState,
  action: ValuteAction
): ValuteState => {
  switch (action.type) {
    case ValuteActionTypes.FETCH_VALUTE:
      return { valute: [], loading: true, error: null };
    case ValuteActionTypes.FETCH_VALUTE_SUCCESS:
      return { valute: action.payload, loading: false, error: null };
    case ValuteActionTypes.FETCH_VALUTE_ERROR:
      return { valute: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
