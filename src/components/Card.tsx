import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import CurrencyHistoryPage from "../pages/CurrencyHistoryPage";

const Card = () => {
  const { valute, loading, error } = useTypedSelector((state) => state.valute);
  const { fetchValute } = useActions();
  const navigate = useNavigate();
  const { CharCode = "", Name = "" } = useParams();
  //   console.log(Name);
  useEffect(() => {
    fetchValute(CharCode);
    // eslint-disable-next-line
  }, []);

  if (loading) return <div className="fetching"></div>;

  if (error) return <h1>{error}</h1>;
  return (
    <div className="card">
      <CurrencyHistoryPage valute={valute} CharCode={CharCode} Name={Name} />
      <button onClick={() => navigate(-1)} className="back-btn">
        BACK
      </button>
    </div>
  );
};

export default Card;
//,
