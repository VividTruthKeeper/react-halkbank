// IMPORT MODULES
import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../backend/UserContext";
import ReCAPTCHA from "react-google-recaptcha";

// IMPORT IMAGES
import up from "../../icons/clipboard-white.svg";
import eye from "../../icons/eye.svg";

// IMPORT COMPONENTS
import CustomSelect from "../global/CustomSelect";
import LogoBg from "../global/LogoBg";
import Loader from "../global/Loader";

// IMPORT FUNCTIONS
import { loginUser } from "../../backend/loginUser";

// IMPORT HELPERS
import { ValidatePassword } from "../../validators/ValidatePassword";
import { ValidateEmail } from "../../validators/ValidateEmail";
import { ValidateUserName } from "../../validators/ValidateUserName";
import { ValidatePhoneNumber } from "../../validators/ValidatePhoneNumber";
import { getDate } from "../../helpers/Date";
import { LanguageContext } from "../../backend/LanguageContext";

// SITEKEY
import { sitekey } from "../../recaptcha";

// URL
import { destination } from "../../destinationUrl";

const RegForm = () => {
  const { locale } = useContext(LanguageContext);
  const [isPassword, setIsPassword] = useState(true);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const checkFirstLoad = useRef(true);
  const postUrl = destination + "/signup";
  const form = new FormData();
  const [formData, setFormData] = useState();
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({
    p1: "",
    p2: "",
  });

  const [inputValid, setInputValid] = useState({
    surname: null,
    name: null,
    fathers: null,
    date: null,
    ppNum: null,
    ppAddr: null,
    address: null,
    email: null,
    mobileTel: null,
    homeTel: null,
    user: null,
    password: null,
    match: false,
    captcha: false,
  });

  const [ppSerie, setPpSerie] = useState(null);
  const [ppPrefix, setPpPrefix] = useState(null);

  const [validateTop, setValidateTop] = useState(false);
  const [validateBottom, setValidateBottom] = useState(false);
  const [btnEnabled, setBtnEnabled] = useState(false);

  useEffect(() => {
    if (passwords.p1 === passwords.p2) {
      setInputValid({ ...inputValid, match: true });
    } else {
      setInputValid({ ...inputValid, match: false });
    }
  }, [passwords]);

  useEffect(() => {
    if (
      inputValid.surname &&
      inputValid.name &&
      inputValid.fathers &&
      inputValid.date &&
      ppSerie &&
      ppPrefix &&
      inputValid.ppNum &&
      inputValid.ppAddr &&
      inputValid.address &&
      inputValid.email &&
      inputValid.mobileTel &&
      inputValid.homeTel &&
      inputValid.user &&
      inputValid.password &&
      inputValid.match &&
      inputValid.captcha
    ) {
      setBtnEnabled(true);
    } else {
      setBtnEnabled(false);
    }
  }, [inputValid, ppSerie, ppPrefix]);

  useEffect(() => {
    if (checkFirstLoad.current) {
      checkFirstLoad.current = false;
    } else {
      loginUser(postUrl, formData, setUser, true, setError, setIsLoading);
    }
  }, [formData]);

  useEffect(() => {
    if (user) {
      navigate("/home");
    } else {
      navigate("/sign-up");
    }
  }, [user, navigate]);

  return (
    <section className="reg">
      <LogoBg />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {isLoading ? <Loader /> : ""}
        <div className="reg-top">
          <h2 className="reg-title">
            {locale === "TUK" ? "Hasaba almak" : "Регистрация"}
          </h2>
          <div className="reg-input-wrapper">
            <div className="reg-input-block">
              <label htmlFor="surname">
                {locale === "TUK" ? "Familiýasy" : "Фамилия"}
                <span>*</span>
              </label>
              <input
                autoComplete="false"
                type="text"
                placeholder="Amanow"
                name="surname"
                id="surname"
                required
                onChange={(e) => {
                  setValidateTop(true);
                  if (e.target.value !== "") {
                    setInputValid({ ...inputValid, surname: e.target.value });
                  } else {
                    setInputValid({ ...inputValid, surname: null });
                  }
                }}
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="name">
                {locale === "TUK" ? "Ady" : "Имя"}
                <span>*</span>
              </label>
              <input
                autoComplete="false"
                type="text"
                placeholder="Aman"
                name="name"
                id="name"
                required
                onChange={(e) => {
                  setValidateTop(true);
                  if (e.target.value !== "") {
                    setInputValid({ ...inputValid, name: e.target.value });
                  } else {
                    setInputValid({ ...inputValid, name: null });
                  }
                }}
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="fname">
                {locale === "TUK" ? "Atasynyň ady" : "Отчество"}
                <span>*</span>
              </label>
              <input
                autoComplete="false"
                type="text"
                placeholder="Amanowich"
                name="fathers"
                id="fname"
                required
                onChange={(e) => {
                  setValidateTop(true);
                  if (e.target.value !== "") {
                    setInputValid({ ...inputValid, fathers: e.target.value });
                  } else {
                    setInputValid({ ...inputValid, fathers: null });
                  }
                }}
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="date">
                {locale === "TUK" ? "Doglan senesi" : "Дата рождения"}
                <span>*</span>
              </label>
              <input
                autoComplete="false"
                type="date"
                name="date"
                placeholder="дд / мм / гггг"
                id="date"
                required
                min="1900-01-01"
                max={getDate(18)}
                onChange={(e) => {
                  setValidateTop(true);
                  if (e.target.value !== "") {
                    setInputValid({ ...inputValid, date: e.target.value });
                  } else {
                    setInputValid({ ...inputValid, date: null });
                  }
                }}
              />
            </div>
            <div className="reg-input-block split">
              <div className="split-block">
                <label htmlFor="serie">
                  {locale === "TUK" ? "Pasportyň seriýasy" : "Серия паспорта"}
                  <span>*</span>
                </label>
                <CustomSelect
                  items={["I", "A", "E"]}
                  blockName={"select-block"}
                  elName={"select-el"}
                  customId={"serie"}
                  name={"passport-serie"}
                  stateSetter={(e) => {
                    setPpSerie(e);
                  }}
                  eTarget={true}
                  placeholder="I"
                />
              </div>
              <div className="split-block">
                <CustomSelect
                  items={["AŞ", "AH", "DZ", "MR", "BN", "LB"]}
                  blockName={"select-block"}
                  elName={"select-el"}
                  customId={"reg"}
                  name={"passport-reg"}
                  stateSetter={(e) => {
                    setPpPrefix(e);
                  }}
                  eTarget={true}
                  placeholder="AŞ"
                />
              </div>
              <div className="split-block">
                <label htmlFor="num">
                  {locale === "TUK" ? "Pasportyň belgisi" : "Номер паспорта"}
                  <span>*</span>
                </label>
                <input
                  autoComplete="false"
                  type="text"
                  name="num"
                  maxLength={6}
                  placeholder="212121"
                  id="num"
                  required
                  onChange={(e) => {
                    setValidateTop(true);
                    if (e.target.value !== "") {
                      setInputValid({ ...inputValid, ppNum: e.target.value });
                    } else {
                      setInputValid({ ...inputValid, ppNum: null });
                    }
                  }}
                />
              </div>
            </div>
            <div className="reg-input-block">
              <label htmlFor="place">
                {locale === "TUK"
                  ? "Pasportyň berlen ýeri"
                  : "Место выдачи паспорта"}
                <span>*</span>
              </label>
              <input
                autoComplete="false"
                type="text"
                name="place"
                placeholder="Kopetdag etrapyň häkimliki"
                id="place"
                required
                onChange={(e) => {
                  setValidateTop(true);
                  if (e.target.value !== "") {
                    setInputValid({ ...inputValid, ppAddr: e.target.value });
                  } else {
                    setInputValid({ ...inputValid, ppAddr: null });
                  }
                }}
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="address">
                {locale === "TUK" ? "Ýaşaýan salgysy" : "Адрес проживания"}
                <span>*</span>
              </label>
              <input
                autoComplete="false"
                type="text"
                name="address"
                placeholder="Parahat 3/1, j.16, k.5"
                id="address"
                required
                onChange={(e) => {
                  setValidateTop(true);
                  if (e.target.value !== "") {
                    setInputValid({ ...inputValid, address: e.target.value });
                  } else {
                    setInputValid({ ...inputValid, address: null });
                  }
                }}
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="email">
                {locale === "TUK" ? "Email" : "Электронная почта"}
                <span>*</span>
              </label>
              <input
                autoComplete="false"
                type="email"
                name="email"
                placeholder="amanowaman@gmail.com"
                id="email"
                required
                onChange={(e) => {
                  setValidateTop(true);
                  if (ValidateEmail(e.target.value)) {
                    setInputValid({ ...inputValid, email: e.target.value });
                  } else {
                    setInputValid({ ...inputValid, email: null });
                  }
                }}
              />
              {validateTop ? (
                <span
                  className={
                    inputValid.email ? "pass-check" : "pass-check active"
                  }
                >
                  {locale === "TUK"
                    ? "Nädogry email girizildi"
                    : "Введен неверный email"}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="reg-input-block">
              <label htmlFor="mobile">
                {locale === "TUK" ? "Mobil telefon" : "Мобильный телефон"}
                <span>*</span>
              </label>
              <input
                autoComplete="false"
                type="text"
                name="mobile"
                placeholder="865656565"
                id="mobile"
                required
                onChange={(e) => {
                  setValidateTop(true);
                  if (ValidatePhoneNumber(e.target.value)) {
                    setInputValid({ ...inputValid, mobileTel: e.target.value });
                  } else {
                    setInputValid({ ...inputValid, mobileTel: null });
                  }
                }}
              />
              {validateTop ? (
                <span
                  className={
                    inputValid.mobileTel ? "pass-check" : "pass-check active"
                  }
                >
                  {locale === "TUK"
                    ? "Nädogry belgi girizildi"
                    : "Введен неверный номер"}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="reg-input-block">
              <label htmlFor="hometel">
                {locale === "TUK" ? "Öý telefon" : "Домашний телефон"}
                <span>*</span>
              </label>
              <input
                autoComplete="false"
                type="text"
                name="hometel"
                placeholder="812121212"
                id="hometel"
                required
                onChange={(e) => {
                  setValidateTop(true);
                  if (ValidatePhoneNumber(e.target.value)) {
                    setInputValid({ ...inputValid, homeTel: e.target.value });
                  } else {
                    setInputValid({ ...inputValid, homeTel: null });
                  }
                }}
              />
              {validateTop ? (
                <span
                  className={
                    inputValid.homeTel ? "pass-check" : "pass-check active"
                  }
                >
                  {locale === "TUK"
                    ? "Nädogry belgi girizildi"
                    : "Введен неверный номер"}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="reg-top reg-bottom">
          <h2 className="reg-title">
            {locale === "TUK"
              ? "Ulanyjynyň maglumatlary"
              : "Данные пользователя"}
          </h2>
          <div className="reg-input-wrapper">
            <div className="reg-input-block">
              <label htmlFor="user">
                {locale === "TUK" ? "Ulanyjy" : "Пользователь"}
                <span>*</span>
              </label>
              <input
                autoComplete="false"
                type="text"
                name="user"
                placeholder="aman_amanow"
                id="user"
                required
                onChange={(e) => {
                  setValidateBottom(true);
                  if (ValidateUserName(e.target.value)) {
                    setInputValid({ ...inputValid, user: e.target.value });
                  } else {
                    setInputValid({ ...inputValid, user: null });
                  }
                }}
              />
              {validateBottom ? (
                <span
                  className={
                    inputValid.user ? "pass-check" : "pass-check active"
                  }
                >
                  {locale === "TUK"
                    ? 'Ulanyjy adynda "_" -dan başga ýörite belgiler bolup bilmez.'
                    : `Имя пользователя не может содержать особых знаков, кроме "_"`}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="input-block-outer sp-outer">
              <div className="reg-input-block rel-block">
                <div
                  className="rel-img"
                  onClick={() => {
                    setIsPassword(!isPassword);
                  }}
                >
                  <img src={eye} alt="eye" />
                </div>
                <label htmlFor="pass">
                  {locale === "TUK" ? "Açar sözi" : "Пароль"}
                  <span>*</span>
                </label>
                <input
                  autoComplete="false"
                  type={isPassword ? "password" : "text"}
                  onCopy={(e) => {
                    e.preventDefault();
                  }}
                  name="pass"
                  id="pass"
                  required
                  onChange={(e) => {
                    setValidateBottom(true);
                    setPasswords({ ...passwords, p1: e.target.value });
                    if (ValidatePassword(e.target.value)) {
                      setInputValid({
                        ...inputValid,
                        password: e.target.value,
                      });
                    } else {
                      setInputValid({ ...inputValid, password: null });
                    }
                  }}
                />
              </div>
              {validateBottom ? (
                <span
                  className={
                    inputValid.password ? "pass-check" : "pass-check active"
                  }
                >
                  {locale === "TUK"
                    ? "Açar sözi  8 belgiden az bolmadyk we 15 belgiden kän bolmadyk we iň azyndan 1 san, 1 baş harp we 1 setir harp, 1 ýörite bellikden ybarat bolmalydyr. "
                    : "Пароль должен содержать не менее 1 цифры, 1 заглавной и 1 прописной буквы, 1 особого знака, и быть не менее 8 и не более 15 символов в длину."}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="reg-input-block">
              <label htmlFor="repeat-pass">
                {locale === "TUK" ? "Açar sözi gaýtalaň" : "Повторите пароль"}
                <span>*</span>
              </label>
              <input
                onPaste={(e) => {
                  e.preventDefault();
                }}
                autoComplete="false"
                type="password"
                name="repeat-pass"
                id="repeat-pass"
                required
                onChange={(e) => {
                  setValidateBottom(true);
                  setPasswords({ ...passwords, p2: e.target.value });
                }}
              />
              {validateBottom ? (
                <span
                  className={
                    inputValid.match ? "pass-check" : "pass-check active"
                  }
                >
                  {locale === "TUK"
                    ? "Açar sözler gabat gelmeli"
                    : "Пароли должны совпадать"}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {error ? (
          error === "The email has already been taken." ? (
            <h3 className="error">
              {locale === "TUK"
                ? "Bu email salgysy eýýäm ulanylýar"
                : "Этот адресс электронной почты уже используется"}
            </h3>
          ) : error === "The username has already been taken." ? (
            <h3 className="error">
              {locale === "TUK"
                ? "Bu ulanyjy ady eýýäm ulanylýar"
                : "Это имя пользователя уже используется"}
            </h3>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        <div className="reg-btns">
          <div className="captcha-wrapper">
            <ReCAPTCHA
              className="captcha"
              sitekey={sitekey}
              onChange={(e) => {
                setInputValid({ ...inputValid, captcha: true });
              }}
            />
          </div>
          {locale === "TUK" ? (
            <h2>
              ( <span>*</span> ) belgili ähli meýdançalar hökman
              doldurylmalydyrlar. Ähli meýdançalar latin harplary bilen
              ýazylmaly.
            </h2>
          ) : (
            <h2>
              Все поля с символом ( <span>*</span> ) обязательны для заполнения
              Все поля доожны быть заполненны латиницей
            </h2>
          )}
          <button
            type="submit"
            disabled={!btnEnabled}
            className="sign-btn"
            onClick={() => {
              form.append("email", inputValid.email);
              form.append("password", inputValid.password);
              form.append("password_confirmation", inputValid.password);
              form.append("surname", inputValid.surname);
              form.append("name", inputValid.name);
              form.append("middle_name", inputValid.fathers);
              form.append("username", inputValid.user);
              form.append("date_birth", inputValid.date);
              form.append("address_residence", inputValid.address);
              form.append("mobile_phone", inputValid.mobileTel);
              form.append("home_phone", inputValid.homeTel);
              form.append("place_passport", inputValid.ppAddr);
              form.append(
                "passport",
                `${ppSerie}-${ppPrefix}-${inputValid.ppNum}`
              );
              setFormData(form);
              setIsLoading(true);
            }}
          >
            <div>
              <h3>
                {locale === "TUK" ? "Hasaba almak" : "Зарегистрироваться"}
              </h3>
              <div className="btn-img">
                <img src={up} alt="logout" />
              </div>
            </div>
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegForm;
