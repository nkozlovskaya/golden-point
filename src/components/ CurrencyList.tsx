import { FC } from "react";
import CurrencyItem from "./CurrencyItem";
import { ICurrency } from "../types/currency";

interface CurrencyListProps {
  currencies: ICurrency[];
}

const CurrencyList: FC<CurrencyListProps> = ({ currencies }) => {
  return (
    <div>
      <table className="table">
        <caption>
          <h1>Курс валют</h1>
        </caption>
        <tbody>
          <tr>
            <th>Код валюты</th>
            <th>Значение в рублях</th>
            <th>разница в % в сравнении с предыдущим днем</th>
          </tr>
          {currencies.map((currency) => (
            <CurrencyItem key={currency.ID} currency={currency} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyList;
