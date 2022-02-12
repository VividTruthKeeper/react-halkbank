// IMPORT MODULES
import React, { useState } from "react";

// IMPORT IMAGES
import Next from "../../icons/arrow-circle-right.svg";

// IMPORT HELPER
import { ValidateEmail } from "../../validators/ValidateEmail";

const Stage1 = ({ setRecStage }) => {
  const [inputValid, setInputValid] = useState({
    email: false,
  });

  const [validate, setValidate] = useState(false);
  return (
    <div className="recovery-block recovery-1">
      <form>
        <h2 className="form-title">Восстановление пароля</h2>
        <div className="reg-input-block rec-input">
          <label htmlFor="mail">
            Электронная почта<span>*</span>
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
                  email: true,
                });
              } else {
                setInputValid({
                  ...inputValid,
                  email: false,
                });
              }
            }}
          />
          {validate && (
            <span
              className={inputValid.email ? "pass-check" : "pass-check active"}
            >
              Введен неверный email
            </span>
          )}
        </div>
        <div className="rec-btn">
          <button
            disabled={!inputValid.email}
            type="button"
            className="sign-btn"
            onClick={() => {
              setRecStage((prevStage) => prevStage + 1);
            }}
          >
            <div>
              <h3>Отправить</h3>
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
