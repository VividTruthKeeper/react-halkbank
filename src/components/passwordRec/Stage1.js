// IMPORT MODULES
import React, { useState, useContext } from "react";
import { LanguageContext } from "../../backend/LanguageContext";

// IMPORT COMPONENTS
import Loader from "../global/Loader";

// IMPORT IMAGES
import Next from "../../icons/arrow-circle-right.svg";

// IMPORT HELPER
import { ValidateEmail } from "../../validators/ValidateEmail";
import { restore } from "../../backend/restore";

const Stage1 = ({ setRecStage }) => {
  const [inputValid, setInputValid] = useState({
    email: false,
  });
  const data = new FormData();
  const { locale } = useContext(LanguageContext);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [validate, setValidate] = useState(false);
  return (
    <div className="recovery-block recovery-1">
      {loader ? <Loader /> : ""}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2 className="form-title">
          {locale === "TUK" ? "Açar sözüni dikeltmek" : "Восстановление пароля"}
        </h2>
        <div className="reg-input-block rec-input">
          <label htmlFor="mail">
            {locale === "TUK" ? "Email" : "Электронная почта"}
            <span>*</span>
          </label>
          <input
            type="email"
            id="mail"
            name="mail"
            autoComplete="true"
            placeholder="amanamanow@gmail.com"
            required
            onChange={(e) => {
              setValidate(true);
              if (ValidateEmail(e.target.value)) {
                setInputValid({
                  ...inputValid,
                  email: e.target.value,
                });
              } else {
                setInputValid({
                  ...inputValid,
                  email: false,
                });
              }
            }}
          />
          {validate || error ? (
            <span className={!error ? "pass-check" : "pass-check active"}>
              {locale === "TUK"
                ? "Nädogry email girizildi"
                : "Введен неверный email"}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="rec-btn">
          <button
            disabled={!inputValid.email}
            type="button"
            className="sign-btn"
            onClick={() => {
              data.append("email", inputValid.email);
              setLoader(true);
              restore(data, setLoader, setError, () => {
                setRecStage((prevStage) => prevStage + 1);
              });
            }}
          >
            <div>
              <h3>{locale === "TUK" ? "Ugratmak" : "Отправить"}</h3>
              <div className="btn-img">
                <img src={Next} alt="next" />
              </div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Stage1;
