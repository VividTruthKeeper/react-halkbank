// IMPORT MODULES
import React, { useState, useEffect } from "react";

// IMPORT COMPONENTS
import Breadcrumb from "../components/global/Breadcrumb";

// IMPORT IMAGES
import recovery from "../icons/recovery.svg";
import change from "../icons/change.svg";
import eye from "../icons/eye.svg";

// IMPORT VALIDATORS
import { ValidatePassword } from "../validators/ValidatePassword";

const Recovery = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [inputValid, setInputValid] = useState({
    old: false,
    new: false,
    match: false,
    validate: false,
  });
  const [btnEnabled, setBtnEnabled] = useState(false);
  const [input, setInput] = useState({
    input1: "",
    input2: "",
  });

  useEffect(() => {
    if (inputValid.old && inputValid.new && inputValid.match) {
      setBtnEnabled(true);
    } else {
      setBtnEnabled(false);
    }
  }, [inputValid]);

  useEffect(() => {
    if (input.input1 == input.input2) {
      setInputValid({ ...inputValid, match: true });
    } else {
      setInputValid({ ...inputValid, match: false });
    }
    if (ValidatePassword(input.input1)) {
      setInputValid({ ...inputValid, new: true });
    } else {
      setInputValid({ ...inputValid, new: false });
    }
  }, [input.input1, input.input2]);

  return (
    <section className="p-recovery">
      <Breadcrumb
        image={recovery}
        link={"/home/recovery"}
        linkTitle={"Смена пароля"}
      />
      <div className="container">
        <div className="p-recovery-inner">
          <form>
            <div className="cu-bottom p-recovery-title">
              <h2>Поменять пароль</h2>
              <button
                type="button"
                disabled={!btnEnabled}
                className="sign-btn cu-btn"
              >
                <div>
                  <div className="btn-img">
                    <img src={change} alt="logout" />
                  </div>
                  <h3>Сохранить изменения</h3>
                </div>
              </button>
            </div>
            <div className="p-recovery-content">
              <div className="input-block rel-block">
                <label htmlFor="old-p">Старый пароль</label>
                <input type={isPassword ? "password" : "text"} id="old-p" />
                <div
                  className="p-input-img"
                  onClick={(e) => {
                    console.log(e.target);
                    setIsPassword(!isPassword);
                  }}
                >
                  <img src={eye} alt="reveal/hide" />
                </div>
              </div>
              <div className="input-block">
                <label htmlFor="new-p">Новый пароль</label>
                <input
                  type={isPassword ? "password" : "text"}
                  id="new-p"
                  onChange={(e) => {
                    setInput({ ...input, input1: e.target.value });
                  }}
                />
                {inputValid.validate ? (
                  <span
                    className={
                      inputValid.new ? "pass-check" : "pass-check active"
                    }
                  >
                    Пароль должен содержать не менее 1 цифры, 1 заглавной и 1
                    прописной буквы, 1 особого знака, и быть не менее 8 и не
                    более 15 символов в длину.
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="input-block">
                <label htmlFor="confirm-p">Повторите новый пароль</label>
                <input
                  type={isPassword ? "password" : "text"}
                  id="confirm-p"
                  onChange={(e) => {
                    setInputValid({ ...inputValid, validate: true });
                    setInput({ ...input, input2: e.target.value });
                  }}
                />
                {inputValid.validate ? (
                  <span
                    className={
                      inputValid.match ? "pass-check" : "pass-check active"
                    }
                  >
                    Пароли должны совпадать
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Recovery;
