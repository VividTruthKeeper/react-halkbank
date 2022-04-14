// IMPORT MODULES
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../backend/LanguageContext";

// IMPORT IMAGES
import error from "../../images/error-cross.png";

const Error = ({ message, setError }) => {
  const { locale } = useContext(LanguageContext);
  return (
    <div className="success error">
      <div className="wrapper">
        <img src={error} alt="error" />
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

export default Error;
