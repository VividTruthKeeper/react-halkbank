// IMPORT MODULES
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// IMPORT COMPONENTS
import Success from "../components/global/Success";

const SuccessPage = () => {
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
      <Success
        message={
          lang === "TUK"
            ? "Ýüzlenme ugradyldy!"
            : "Ваш запрос успешно отправлен!"
        }
      />
    </section>
  );
};

export default SuccessPage;
