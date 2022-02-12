// IMPORT MODULES
import React, { useState, useEffect } from "react";

// IMPORT IMAGES
import Next from "../../icons/arrow-circle-right.svg";

const Stage2 = ({ setRecoveryOpen, setRecStage }) => {
  const [inputValid, setInputValid] = useState({
    newPassword: false,
    confirm: false,
    match: false,
  });

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

  return (
    <div className="recovery-block recovery-2">
      <form>
        <h2 className="form-title">Новый пароль</h2>
        <div className="reg-input-block rec-input">
          <label htmlFor="new-pass">
            Введите пароль<span>*</span>
          </label>
          <input
            type="password"
            id="new-pass"
            name="new-pass"
            required
            onChange={(e) => {
              setInput({ ...input, new: e.target.value });
              setValid(true);
              if (e.target.value.length >= 8) {
                setInputValid({
                  ...inputValid,
                  newPassword: true,
                });
              } else {
                setInputValid({
                  ...inputValid,
                  newPassword: false,
                });
              }
            }}
          />
        </div>
        <div className="reg-input-block rec-input">
          <label htmlFor="confirm">
            Повторите пароль<span>*</span>
          </label>
          <input
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
              className={
                inputValid.confirm && inputValid.newPassword
                  ? "pass-check"
                  : "pass-check active"
              }
            >
              Пароль должен содержать не менее 8 символов
            </span>
          ) : (
            ""
          )}
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
            onClick={(e) => {
              e.preventDefault();
              setRecoveryOpen(false);
              setTimeout(() => {
                setRecStage(1);
              }, 400);
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