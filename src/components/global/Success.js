// IMPORT MODULES
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../backend/LanguageContext";

// IMPORT IMAGES
import { ReactComponent as Check } from "../../icons/check.svg";

const Success = ({ message, setError }) => {
  const { locale } = useContext(LanguageContext);
  return (
    <div className="success">
      <div className="wrapper">
        <Check />
      </div>
      <h1>{message}</h1>
      {setError ? (
        <h5 onClick={() => setError(false)} id="back">
          {locale === "TKM" ? "Saýta geç" : "Вернуться на сайт"}
        </h5>
      ) : (
        <Link to="/home" id="back">
          {locale === "TKM" ? "Saýta geç" : "Вернуться на сайт"}
        </Link>
      )}
    </div>
  );
};

export default Success;
