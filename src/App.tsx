import { useEffect } from "react";
import CurrencyList from "./components/ CurrencyList";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";
import Card from "./components/Card";

function App() {
  const { currencies, loading, error } = useTypedSelector(
    (state) => state.currency
  );
  const { fetchCurrencies } = useActions();
  // const charCode = currencies.map((currency) => currency.CharCode);
  useEffect(() => {
    fetchCurrencies();
    // eslint-disable-next-line
  }, []);

  

  if (loading) return <h1>Идет загрузка...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CurrencyList currencies={currencies} />} />
        <Route path="/card/:CharCode" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

