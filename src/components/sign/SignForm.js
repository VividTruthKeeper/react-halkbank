// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

// IMPORT IMAGES
import logout from "../../icons/logout.svg";
import up from "../../icons/clipboard.svg";
import eye from "../../icons/eye.svg";

// IMPORT COMPONENTS
import Loader from "../../components/global/Loader";

// IMPORT HELPERS
import { ValidateEmail } from "../../validators/ValidateEmail";
import { LanguageContext } from "../../backend/LanguageContext";
// SITEKEY
import { sitekey } from "../../recaptcha";

const SignForm = ({
  setFormData,
  error,
  isLoading,
  setIsLoading,
  setRecoveryOpen,
}) => {
  const { locale } = useContext(LanguageContext);
  const data = new FormData();

  const [inputValid, setInputValid] = useState({
    login: null,
    password: null,
    email: null,
    captcha: false,
  });
  const [btnEnabled, setBtnEnabled] = useState(false);
  const [password, setPassword] = useState(true);

  useEffect(() => {
    if (
      inputValid.login &&
      inputValid.password &&
      inputValid.email &&
      inputValid.captcha
    ) {
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
          <h2>{locale === "TKM" ? "Hasaba gir" : "Вход"}</h2>
        </div>
        <div className="sign-mid">
          <div className="input-block">
            <label htmlFor="login">
              {locale === "РУС" ? "Логин" : "Ulanyjy"}
            </label>
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
            <label htmlFor="email">E-mail</label>
            <input
              autoComplete="true"
              required
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                if (ValidateEmail(e.target.value)) {
                  setInputValid({ ...inputValid, email: e.target.value });
                } else {
                  setInputValid({ ...inputValid, email: null });
                }
              }}
            />
          </div>
          <div className="input-block-outer">
            <div className="input-block">
              <label htmlFor="password">
                {locale === "РУС" ? "Введите пароль" : "Açar sözi"}
              </label>
              <input
                autoComplete="true"
                required
                type={password ? "password" : "text"}
                id="password"
                onChange={(e) => {
                  if (e.target.value.length >= 8) {
                    setInputValid({ ...inputValid, password: e.target.value });
                  } else {
                    setInputValid({ ...inputValid, password: null });
                  }
                }}
              />
              <div
                className="p-input-img"
                onClick={() => {
                  setPassword(!password);
                }}
              >
                <img src={eye} alt="reveal/hide" />
              </div>
            </div>
            {error ? (
              <span>
                {locale === "РУС"
                  ? "Введены неверные данные"
                  : "Nädogry maglumatlar girizildi"}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="captcha-wrapper">
            <ReCAPTCHA
              className="captcha"
              sitekey={sitekey}
              onChange={(e) => {
                setInputValid({ ...inputValid, captcha: true });
              }}
            />
          </div>
          <div className="forget">
            <h3
              onClick={() => {
                setRecoveryOpen(true);
              }}
            >
              {locale === "TKM" ? "Açar sözüni unutdym" : "Забыли пароль?"}
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
              data.append("email", inputValid.email);
              setFormData(data);
            }}
          >
            <div>
              <h3>{locale === "РУС" ? "Войти" : "Ulgama gir"}</h3>
              <div className="btn-img">
                <img src={logout} alt="logout" />
              </div>
            </div>
          </button>
          <Link to="/sign-up" className="sign-btn reg-btn">
            <div>
              <h3>
                {locale === "РУС" ? "Зарегистрироваться" : "Hasaba almak"}
              </h3>
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
