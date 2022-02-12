// IMPORT MODULES
import React, { useState } from "react";

// IMPORT IMAGES
import Next from "../../icons/arrow-circle-right.svg";

const Stage1 = ({ setRecStage }) => {
  const [inputValid, setinputValid] = useState({
    email: false,
    validate: false,
  });
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
            placeholder="amanamanow@gmail.com"
            required
            onChange={(e) => {
              if (e.target.value !== "") {
                setinputValid({
                  ...inputValid,
                  email: true,
                  validate: true,
                });
              } else {
                setinputValid({
                  ...inputValid,
                  email: false,
                });
              }
            }}
          />
          {inputValid.validate && (
            <span
              className={inputValid.email ? "pass-check" : "pass-check active"}
            >
              Введите ваш e-mail
            </span>
          )}
        </div>
        <div className="rec-btn">
          <button
            disabled={!inputValid.email}
            type="button"
            className="sign-btn"
            onClick={(e) => {
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
