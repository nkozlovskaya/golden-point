import { FC } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import { ICurrency } from "../types/currency";

interface CurrencyItemProps {
  currency: ICurrency;
}

const CurrencyItem: FC<CurrencyItemProps> = ({ currency }) => {
  const { Name, CharCode, Value, Previous } = currency;

  const persents = (a: number, b: number): string => {
    let x = (a * 100) / b;
    if (x > 100) return `▲ ${(x - 100).toFixed(2)}%`;
    if (x < 100) return `▼ ${(100 - x).toFixed(2)}%`;
    return `0%`;
  };

  return (
    <tr className="list">
      <Tippy
        theme={"light"}
        content={
          <div>
            <h3>{Name}</h3>
          </div>
        }
      >
        <td>{`${CharCode}`}</td>
      </Tippy>
      <td>{`${Value.toFixed(2)}`}</td>
      <td>{persents(Value, Previous)}</td>
    </tr>
  );
};

export default CurrencyItem;
