// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import logout from "../../icons/logout.svg";
import up from "../../icons/clipboard.svg";
import { useEffect } from "react/cjs/react.development";

const SignForm = ({ setRecoveryOpen }) => {
  return (
    <section className="sign-form">
      <form>
        <div className="sign-top">
          <h2>Вход</h2>
        </div>
        <div className="sign-mid">
          <div className="input-block">
            <label htmlFor="login">Логин</label>
            <input type="text" id="login" />
          </div>
          <div className="input-block">
            <label htmlFor="password">Введите пароль</label>
            <input type="password" id="password" />
          </div>
          <div className="captcha">
            <h1>CAPTCHA</h1>
          </div>
          <div className="forget">
            <h3
              onClick={() => {
                setRecoveryOpen(true);
              }}
            >
              Забыли пароль?
            </h3>
          </div>
        </div>
        <div className="sign-bottom">
          <button type="button" className="sign-btn">
            <div>
              <h3>Войти</h3>
              <div className="btn-img">
                <img src={logout} alt="logout" />
              </div>
            </div>
          </button>
          <Link to="/sign-up" className="sign-btn reg-btn">
            <div>
              <h3>Зарегистрироваться</h3>
              <div className="btn-img">
                <img src={up} alt="logout" />
              </div>
            </div>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignForm;
