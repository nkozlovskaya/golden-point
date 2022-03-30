import { FC } from "react";
import { IValute } from "../types/valuteType";

interface CurrencyHistoryPageProps {
  valute: IValute[];
}

const CurrencyHistoryPage: FC<CurrencyHistoryPageProps> = ({ valute }) => {
  return (
    <div>
      <ul>
        {valute.map((val: IValute) => (
          <li key={val.value}>
            <h3>{`${val.date}  ${val.value}₽ `}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyHistoryPage;
