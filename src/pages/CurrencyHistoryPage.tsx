import { FC } from "react";
import { IValute } from "../types/valuteType";
import dateFormat from "dateformat";

interface CurrencyHistoryPageProps {
  valute: IValute[];
  Name: string;
  CharCode: string;
}

const CurrencyHistoryPage: FC<CurrencyHistoryPageProps> = ({
  valute,
  CharCode,
}) => {
  return (
    <div>
      <h1>{`Список по курсу валюты (${CharCode}) за 10 дней`}</h1>
      <table className="table-valute">
        <tbody>
          {valute.map((val: IValute) => (
            <tr key={val.value}>
              <td>{dateFormat(val.date, "mm/dd/yyyy ")} </td>
              <td>{`  ${val.value.toFixed(2)}₽ `}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyHistoryPage;
