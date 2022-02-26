// IMPORT MODULES
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import logout from "../../icons/logout.svg";
import up from "../../icons/clipboard.svg";

// IMPORT COMPONENTS
import Loader from "../../components/global/Loader";

const SignForm = ({
  setRecoveryOpen,
  setFormData,
  error,
  isLoading,
  setIsLoading,
}) => {
  const data = new FormData();
  const [inputValid, setInputValid] = useState({
    login: null,
    password: null,
  });
  const [btnEnabled, setBtnEnabled] = useState(false);

  useEffect(() => {
    if (inputValid.login && inputValid.password) {
      setBtnEnabled(true);
    } else {
      setBtnEnabled(false);
    }
  }, [inputValid]);

  return (
    <section className="sign-form">
      {isLoading ? <Loader /> : ""}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="sign-top">
          <h2>Вход</h2>
        </div>
        <div className="sign-mid">
          <div className="input-block">
            <label htmlFor="login">Логин</label>
            <input
              autoComplete="true"
              required
              type="text"
              id="login"
              name="login"
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, login: e.target.value });
                } else {
                  setInputValid({ ...inputValid, login: null });
                }
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="password">Введите пароль</label>
            <input
              autoComplete="true"
              required
              type="password"
              id="password"
              onChange={(e) => {
                if (e.target.value.length >= 8) {
                  setInputValid({ ...inputValid, password: e.target.value });
                } else {
                  setInputValid({ ...inputValid, password: null });
                }
              }}
            />
            {error ? <span>Неверные имя пользователя или пароль</span> : ""}
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
          <button
            disabled={!btnEnabled}
            type="submit"
            className="sign-btn"
            onClick={() => {
              setIsLoading(true);
              data.append("username", inputValid.login);
              data.append("password", inputValid.password);
              setFormData(data);
            }}
          >
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
