// IMPORT MODULES
import React, { useState, useEffect, useRef } from "react";

// IMPORT IMAGES
import Next from "../../icons/arrow-circle-right.svg";

const PasswordRec = ({ recoveryOpen, setRecoveryOpen }) => {
  const [recStage, setRecStage] = useState(1);
  const ref = useRef();
  useEffect(() => {
    if (!recoveryOpen) {
      document.body.style.overflowY = "visible";
    } else {
      document.body.style.overflowY = "hidden";
    }
    window.addEventListener("mousedown", (e) => {
      if (recoveryOpen && ref.current && !ref.current.contains(e.target)) {
        setRecoveryOpen(false);
      }
    });

    return () => {
      window.removeEventListener("mousedown", () => {});
    };
  }, [recoveryOpen]);
  return (
    <section className={recoveryOpen ? "recovery active" : "recovery"}>
      <div className="recovery-container">
        <div className="recovery-inner" ref={ref}>
          {recStage === 1 ? (
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
                  />
                </div>
                <div className="rec-btn">
                  <button
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
          ) : recStage === 2 ? (
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
                  />
                </div>
                <div className="reg-input-block rec-input">
                  <label htmlFor="confirm">
                    Повторите пароль<span>*</span>
                  </label>
                  <input type="password" id="confirm" name="confirm" required />
                </div>
                <div className="rec-btn">
                  <button
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
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default PasswordRec;
