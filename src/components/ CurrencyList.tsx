import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchCurrencies } from "../store/action_creators/currency";
// import Currency from "./Currency";

const CurrencyList: FC = () => {
  const { currencies, loading, error } = useTypedSelector(
    (state) => state.currency
  );

  //   console.log(currencies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());

    // eslint-disable-next-line
  }, []);

  if (loading) return <h1>Идет загрузка...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <table className="table">
      <caption>
        <h1>Курс валют</h1>
      </caption>
      <tbody>
        <tr>
          <th>Код валюты</th>
          <th>Наименование валюты</th>
        </tr>
        {currencies.map((cur) => (
          <tr key={cur.ID} className="list">
            <td className="code">{`${cur.NumCode}`}</td>
            <td className="name">{`${cur.Name}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CurrencyList;
//{`${cur.NumCode}  - ${cur.Name} `}
