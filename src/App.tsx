import { useEffect } from "react";
import CurrencyList from "./components/ CurrencyList";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CurrencyItem from "./components/CurrencyItem";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { fetchCurrencies } from "./store/action_creators/currency";

function App() {
  const { currencies, loading, error } = useTypedSelector(
    (state) => state.currency
  );
  // const { currency } = currencies;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());

    // eslint-disable-next-line
  }, []);

  if (loading) return <h1>Идет загрузка...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <CurrencyList currencies={currencies} />
    </div>
  );
}

export default App;
