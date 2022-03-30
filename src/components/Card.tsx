import  { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import CurrencyHistoryPage from "../pages/CurrencyHistoryPage";

const Card = () => {
  const { valute } = useTypedSelector((state) => state.valute);
  const { fetchValute } = useActions();
  const navigate = useNavigate();
  const { CharCode = "" } = useParams();

  useEffect(() => {
    fetchValute(CharCode);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <CurrencyHistoryPage valute={valute} />
      <button onClick={() => navigate(-1)} className="back-btn">
        BACK
      </button>
    </div>
  );
};

export default Card;
