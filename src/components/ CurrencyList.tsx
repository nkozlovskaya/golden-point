import React, { FC } from "react";
import { useSelector } from "react-redux";

const CurrencyList: FC = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return <div></div>;
};

export default CurrencyList;
