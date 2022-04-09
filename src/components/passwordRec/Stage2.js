// IMPORT MODULES
import React, { useState, useEffect } from "react";

// IMPORT IMAGES
import Next from "../../icons/arrow-circle-right.svg";

// IMPORT HELPERS
import { ValidatePassword } from "../../validators/ValidatePassword";
import { reset } from "../../backend/restore";

const Stage2 = ({
  setRecoveryOpen,
  setRecStage,
  data,
  setData,
  setLoader,
  setSuccess,
}) => {
  const [inputValid, setInputValid] = useState({
    newPassword: false,
    confirm: false,
    code: "",
  });
  const form = new FormData();

  const [valid, setValid] = useState(false);
  const [error, setError] = useState(false);

  const [btnEnabled, setBtnEnabled] = useState(false);
  useEffect(() => {
    if (inputValid.newPassword === inputValid.confirm && inputValid.code) {
      setBtnEnabled(true);
    } else {
      setBtnEnabled(false);
    }
  }, [inputValid]);

  return (
    <div className="recovery-block recovery-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2 className="form-title">Новый пароль</h2>
        <div className="reg-input-block rec-input">
          <label htmlFor="code">
            Код активации<span>*</span>
          </label>
          <input
            autoComplete="false"
            type="text"
            id="code"
            name="code"
            required
            onChange={(e) => {
              setValid(true);
              if (e.target.value.length > 0) {
                setInputValid({ ...inputValid, code: e.target.value });
              }
            }}
          />
          {error ? (
            <span className={error ? "pass-check" : "pass-check active"}>
              Введен неверный код
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="reg-input-block rec-input">
          <label htmlFor="new-pass">
            Введите пароль<span>*</span>
          </label>
          <input
            autoComplete="false"
            type="password"
            id="new-pass"
            name="new-pass"
            required
            onChange={(e) => {
              setValid(true);
              if (ValidatePassword(e.target.value)) {
                setInputValid({
                  ...inputValid,
                  newPassword: e.target.value,
                });
              } else {
                setInputValid({
                  ...inputValid,
                  newPassword: false,
                });
              }
            }}
          />
          {valid ? (
            <span
              className={
                inputValid.newPassword ? "pass-check" : "pass-check active"
              }
            >
              Пароль должен содержать не менее 1 цифры, 1 заглавной и 1
              прописной буквы, 1 особого знака, и быть не менее 8 и не более 15
              символов в длину.
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="reg-input-block rec-input">
          <label htmlFor="confirm">
            Повторите пароль<span>*</span>
          </label>
          <input
            autoComplete="false"
            type="password"
            id="confirm"
            name="confirm"
            required
            onChange={(e) => {
              setValid(true);
              if (e.target.value.length >= 8) {
                setInputValid({
                  ...inputValid,
                  confirm: e.target.value,
                });
              } else {
                setInputValid({
                  ...inputValid,
                  confirm: e.target.value,
                });
              }
            }}
          />
          {valid ? (
            <span
              className={
                inputValid.newPassword === inputValid.confirm
                  ? "pass-check"
                  : "pass-check active"
              }
            >
              Пароли должны совпадать
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="rec-btn">
          <button
            disabled={!btnEnabled}
            type="button"
            className="sign-btn"
            onClick={() => {
              setLoader(true);
              form.append("password", inputValid.newPassword);
              form.append("code", inputValid.code);

              reset(form, setLoader, setError, () => {
                setSuccess(true);
                setTimeout(() => {
                  setSuccess(false);
                }, 2000);
                setRecStage(1);
                setRecoveryOpen(false);
              });
            }}
          >
            <div>
              <h3>Изменить</h3>
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

export default Stage2;
