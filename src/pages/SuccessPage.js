// IMPORT MODULES
import React from "react";

// IMPORT COMPONENTS
import Success from "../components/global/Success";

const SuccessPage = () => {
  const lang = localStorage.getItem("userLanguage")
    ? localStorage.getItem("userLanguage")
    : "TKM";
  return (
    <section className="success-page">
      <Success
        message={
          lang === "TKM"
            ? "Ýüzlenme ugradyldy!"
            : "Ваш запрос успешно отправлен!"
        }
      />
    </section>
  );
};

export default SuccessPage;
