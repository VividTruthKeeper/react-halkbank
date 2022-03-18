// IMPORT MODULES
import React, { useState, useEffect } from "react";

// IMPORT COMPONENTS
import Success from "../global/Success";

// IMPORT IMAGES
import Next from "../../icons/arrow-circle-right.svg";

// IMPORT HELPERS
import { ValidatePassword } from "../../validators/ValidatePassword";
import { forgotPassword } from "../../backend/forgotPassword";

const Stage2 = ({ setRecoveryOpen, setRecStage, data, setData, setLoader }) => {
  const [inputValid, setInputValid] = useState({
    newPassword: false,
    confirm: false,
    match: false,
  });
  const form = new FormData();
  const [success, setSuccess] = useState(false);
  const [valid, setValid] = useState(false);
  const [input, setInput] = useState({
    new: "",
    confirm: "",
  });

  const [btnEnabled, setBtnEnabled] = useState(false);
  useEffect(() => {
    if (inputValid.newPassword && inputValid.confirm && inputValid.match) {
      setBtnEnabled(true);
    } else {
      setBtnEnabled(false);
    }
  }, [inputValid]);

  useEffect(() => {
    if (input.new === input.confirm) {
      setInputValid({ ...inputValid, match: true });
    } else {
      setInputValid({ ...inputValid, match: false });
    }
  }, [input]);

  const postUrl = "http://shahsyotag.halkbank.gov.tm:8000/api/me";

  return (
    <div className="recovery-block recovery-2">
      {success ? <Success message={"Пароль успешно изменен"} /> : null}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2 className="form-title">Новый пароль</h2>
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
              setInput({ ...input, new: e.target.value });
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
              setInput({ ...input, confirm: e.target.value });
              setValid(true);
              if (e.target.value.length >= 8) {
                setInputValid({
                  ...inputValid,
                  confirm: true,
                });
              } else {
                setInputValid({
                  ...inputValid,
                  confirm: false,
                });
              }
            }}
          />
          {valid ? (
            <span
              className={inputValid.match ? "pass-check" : "pass-check active"}
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
              setData({ ...data, password: inputValid.newPassword });
              setLoader(true);
              form.append("email", data.email);
              form.append("password", data.password);
              form.append("password_confirmation", data.password);
              forgotPassword(
                postUrl,
                form,
                () => {
                  setSuccess(true);
                  setTimeout(() => {
                    setSuccess(false);
                  }, 2000);
                  setRecoveryOpen(false);
                  setRecStage(1);
                  setLoader(false);
                },
                setLoader
              );
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
