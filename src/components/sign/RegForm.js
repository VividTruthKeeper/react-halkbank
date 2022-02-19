// IMPORT MODULES
import React, { useState, useEffect } from "react";

// IMPORT IMAGES
import up from "../../icons/clipboard-white.svg";

// IMPORT COMPONENTS
import CustomSelect from "../global/CustomSelect";
import LogoBg from "../global/LogoBg";

// IMPORT HELPERS
import { ValidatePassword } from "../../validators/ValidatePassword";
import { ValidateEmail } from "../../validators/ValidateEmail";
import { ValidateUserName } from "../../validators/ValidateUserName";
import { ValidatePhoneNumber } from "../../validators/ValidatePhoneNumber";
import { getDate } from "../../helpers/Date";

const RegForm = () => {
  const [passwords, setPasswords] = useState({
    p1: "",
    p2: "",
  });

  const [inputValid, setInputValid] = useState({
    surname: false,
    name: false,
    fathers: false,
    date: false,
    ppNum: false,
    ppAddr: false,
    address: false,
    email: false,
    mobileTel: false,
    homeTel: false,
    user: false,
    password: false,
    match: false,
  });

  const [ppSerie, setPpSerie] = useState(false);
  const [ppPrefix, setPpPrefix] = useState(false);

  const [validateTop, setValidateTop] = useState(false);
  const [validateBottom, setValidateBottom] = useState(false);
  const [btnEnabled, setBtnEnabled] = useState(false);

  useEffect(() => {
    if (passwords.p1 === passwords.p2) {
      setInputValid({ ...inputValid, match: true });
    } else {
      setInputValid({ ...inputValid, match: true });
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
      inputValid.match
    ) {
      setBtnEnabled(true);
    } else {
      setBtnEnabled(false);
    }
  }, [inputValid, ppSerie, ppPrefix]);

  return (
    <section className="reg">
      <LogoBg />
      <form>
        <div className="reg-top">
          <h2 className="reg-title">Регистрация</h2>
          <div className="reg-input-wrapper">
            <div className="reg-input-block">
              <label htmlFor="surname">
                Фамилия<span>*</span>
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
                    setInputValid({ ...inputValid, surname: true });
                  } else {
                    setInputValid({ ...inputValid, surname: false });
                  }
                }}
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="name">
                Имя<span>*</span>
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
                    setInputValid({ ...inputValid, name: true });
                  } else {
                    setInputValid({ ...inputValid, name: false });
                  }
                }}
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="fname">
                Отчество<span>*</span>
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
                    setInputValid({ ...inputValid, fathers: true });
                  } else {
                    setInputValid({ ...inputValid, fathers: false });
                  }
                }}
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="date">
                Дата рождения<span>*</span>
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
                    setInputValid({ ...inputValid, date: true });
                  } else {
                    setInputValid({ ...inputValid, date: false });
                  }
                }}
              />
            </div>
            <div className="reg-input-block split">
              <div className="split-block">
                <label htmlFor="serie">
                  Серия паспорта<span>*</span>
                </label>
                <CustomSelect
                  items={["I", "A", "E"]}
                  blockName={"select-block"}
                  elName={"select-el"}
                  customId={"serie"}
                  name={"passport-serie"}
                  stateSetter={setPpSerie}
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
                  stateSetter={setPpPrefix}
                  placeholder="AŞ"
                />
              </div>
              <div className="split-block">
                <label htmlFor="num">
                  Номер паспорта<span>*</span>
                </label>
                <input
                  autoComplete="false"
                  type="text"
                  name="num"
                  placeholder="212121"
                  id="num"
                  required
                  onChange={(e) => {
                    setValidateTop(true);
                    if (e.target.value !== "") {
                      setInputValid({ ...inputValid, ppNum: true });
                    } else {
                      setInputValid({ ...inputValid, ppNum: false });
                    }
                  }}
                />
              </div>
            </div>
            <div className="reg-input-block">
              <label htmlFor="place">
                Место выдачи паспорта<span>*</span>
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
                    setInputValid({ ...inputValid, ppAddr: true });
                  } else {
                    setInputValid({ ...inputValid, ppAddr: false });
                  }
                }}
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="address">
                Адрес проживания<span>*</span>
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
                    setInputValid({ ...inputValid, address: true });
                  } else {
                    setInputValid({ ...inputValid, address: false });
                  }
                }}
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="email">
                Электронная почта<span>*</span>
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
                    setInputValid({ ...inputValid, email: true });
                  } else {
                    setInputValid({ ...inputValid, email: false });
                  }
                }}
              />
              {validateTop ? (
                <span
                  className={
                    inputValid.email ? "pass-check" : "pass-check active"
                  }
                >
                  Введен неверный email
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="reg-input-block">
              <label htmlFor="mobile">
                Мобильный телефон<span>*</span>
              </label>
              <input
                autoComplete="false"
                type="text"
                name="mobile"
                placeholder="+99365656565"
                id="mobile"
                required
                onChange={(e) => {
                  setValidateTop(true);
                  if (ValidatePhoneNumber(e.target.value)) {
                    setInputValid({ ...inputValid, mobileTel: true });
                  } else {
                    setInputValid({ ...inputValid, mobileTel: false });
                  }
                }}
              />
              {validateTop ? (
                <span
                  className={
                    inputValid.mobileTel ? "pass-check" : "pass-check active"
                  }
                >
                  Введен неверный номер
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="reg-input-block">
              <label htmlFor="hometel">
                Домашний телефон<span>*</span>
              </label>
              <input
                autoComplete="false"
                type="text"
                name="hometel"
                placeholder="+99312121212"
                id="hometel"
                required
                onChange={(e) => {
                  setValidateTop(true);
                  if (ValidatePhoneNumber(e.target.value)) {
                    setInputValid({ ...inputValid, homeTel: true });
                  } else {
                    setInputValid({ ...inputValid, homeTel: false });
                  }
                }}
              />
              {validateTop ? (
                <span
                  className={
                    inputValid.homeTel ? "pass-check" : "pass-check active"
                  }
                >
                  Введен неверный номер
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="reg-top reg-bottom">
          <h2 className="reg-title">Данные пользователя</h2>
          <div className="reg-input-wrapper">
            <div className="reg-input-block">
              <label htmlFor="user">
                Пользователь<span>*</span>
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
                    setInputValid({ ...inputValid, user: true });
                  } else {
                    setInputValid({ ...inputValid, user: false });
                  }
                }}
              />
              {validateBottom ? (
                <span
                  className={
                    inputValid.user ? "pass-check" : "pass-check active"
                  }
                >
                  Имя пользователя не может содержать особых знаков, кроме "_"
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="reg-input-block">
              <label htmlFor="pass">
                Пароль<span>*</span>
              </label>
              <input
                autoComplete="false"
                type="password"
                name="pass"
                id="pass"
                required
                onChange={(e) => {
                  setValidateBottom(true);
                  setPasswords({ ...passwords, p1: e.target.value });
                  if (ValidatePassword(e.target.value)) {
                    setInputValid({ ...inputValid, password: true });
                  } else {
                    setInputValid({ ...inputValid, password: false });
                  }
                }}
              />
              {validateBottom ? (
                <span
                  className={
                    inputValid.password ? "pass-check" : "pass-check active"
                  }
                >
                  Пароль должен содержать не менее 1 цифры, 1 заглавной и 1
                  прописной буквы, 1 особого знака, и быть не менее 8 и не более
                  15 символов в длину.
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="reg-input-block">
              <label htmlFor="repeat-pass">
                Повторите пароль<span>*</span>
              </label>
              <input
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
                  Пароли должны совпадать
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="reg-btns">
          <h1>CAPTCHA</h1>
          <h2>
            Все поля с символом ( <span>*</span> ) обязательны для заполнения
            Все поля доожны быть заполненны латиницей
          </h2>
          <button type="button" disabled={!btnEnabled} className="sign-btn">
            <div>
              <h3>Зарегистрироваться</h3>
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
