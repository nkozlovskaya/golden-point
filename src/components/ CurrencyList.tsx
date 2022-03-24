import { FC, useEffect } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchCurrencies } from "../store/action_creators/currency";
// import Currency from "./Currency";

const CurrencyList: FC = () => {
  const { currencies, loading, error } = useTypedSelector(
    (state) => state.currency
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());

    // eslint-disable-next-line
  }, []);

  if (loading) return <h1>Идет загрузка...</h1>;

  if (error) return <h1>{error}</h1>;

  const persents = (a: number, b: number): string => {
    let x = (a * 100) / b;
    if (x > 100) return `+${(x - 100).toFixed(2)}%`;
    if (x < 100) return `-${(100 - x).toFixed(2)}%`;
    return `0%`;
  };

  console.log(persents(5, 10));

  return (
    <table className="table">
      <caption>
        <h1>Курс валют</h1>
      </caption>
      <thead>
        <tr>
          <th>Код валюты</th>
          <th>Значение в рублях</th>
          <th>разница в % в сравнении с предыдущим днем</th>
        </tr>
      </thead>

      <tbody>
        {currencies.map((cur) => (
          <tr key={cur.ID} className="list">
            <Tippy
              theme={"light"}
              content={
                <div>
                  <h3>{cur.Name}</h3>
                </div>
              }
            >
              <td>{`${cur.CharCode}`}</td>
            </Tippy>
            <td>{`${cur.Value.toFixed(2)}`}</td>
            <td>{persents(cur.Value, cur.Previous)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CurrencyList;
