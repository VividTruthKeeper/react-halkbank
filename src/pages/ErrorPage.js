// IMPORT MODULES
import React from "react";

// IMPORT COMPONENTS
import Error from "../components/global/Error";

const ErrorPage = () => {
  const lang = localStorage.getItem("userLanguage")
    ? localStorage.getItem("userLanguage")
    : "TKM";
  return (
    <section className="success-page">
      <Error
        message={
          lang === "TKM"
            ? "Ýüzlenme ugradylmady"
            : "Не удалось отправить запрос"
        }
      />
    </section>
  );
};

export default ErrorPage;
