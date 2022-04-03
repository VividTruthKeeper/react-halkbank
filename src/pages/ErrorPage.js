// IMPORT MODULES
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// IMPORT COMPONENTS
import Error from "../components/global/Error";

const ErrorPage = () => {
  const lang = localStorage.getItem("userLanguage")
    ? localStorage.getItem("userLanguage")
    : "TUK";
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 1900);
  }, []);
  return (
    <section className="success-page">
      <Error
        message={
          lang === "TUK"
            ? "Ýüzlenme ugradylmady"
            : "Не удалось отправить запрос"
        }
      />
    </section>
  );
};

export default ErrorPage;
