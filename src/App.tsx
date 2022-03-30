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
  useEffect(() => {
    fetchCurrencies();
    // eslint-disable-next-line
  }, []);

  if (loading) return <div className="fetching"></div>;

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
