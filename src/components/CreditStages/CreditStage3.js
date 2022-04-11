// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../backend/UserContext";
import { LanguageContext } from "../../backend/LanguageContext";

// IMPORT VALIDATORS
import { getDate } from "../../helpers/Date";

// IMPORT IMAGES
import next from "../../icons/next.svg";
import next_reverse from "../../icons/next-reverse.svg";

const CreditStage3 = ({ setStage, data, setData }) => {
  const { locale } = useContext(LanguageContext);
  const { user } = useContext(UserContext);
  const [
    inputValid,
    //  setInputValid
  ] = useState({
    surname: data.surname ? data.surname : user ? user.surname : null,
    name: data.name ? data.name : user ? user.name : null,
    fathers: data.fathers ? data.fathers : user ? user.middle_name : null,
    date: data.date ? data.date : user ? user.date_birth : null,
    passport: data.passport ? data.passport : user ? user.passport : null,
    p_address: data.p_address
      ? data.p_address
      : user
      ? user.place_passport
      : null,
    address: data.address ? data.address : user ? user.address_residence : null,
    mail: data.email ? data.email : user ? user.email : null,
    mobile: data.mobile ? data.mobile : user ? user.mobile_phone : null,
    home: data.home ? data.home : user ? user.home_phone : null,
  });
  const [btnEnabled, setBtnEnabled] = useState(false);

  useEffect(() => {
    if (
      inputValid.surname &&
      inputValid.name &&
      inputValid.fathers &&
      inputValid.date &&
      inputValid.passport &&
      inputValid.p_address &&
      inputValid.address &&
      inputValid.mail &&
      inputValid.mobile
    ) {
      setBtnEnabled(true);
    } else {
      setBtnEnabled(false);
    }
  }, [inputValid]);
  return (
    <section className="card-stage-2">
      <form>
        <div className="form-top">
          <div className="input-block">
            <label htmlFor="surname">
              {locale === "TUK" ? "Familiýasy" : "Фамилия"}
              <span>*</span>
            </label>
            <input
              readOnly
              type="text"
              id="surname"
              defaultValue={inputValid.surname}
            />
          </div>
          <div className="input-block">
            <label htmlFor="name">
              {locale === "TUK" ? "Ady" : "Имя"}
              <span>*</span>
            </label>
            <input
              readOnly
              type="text"
              id="name"
              defaultValue={inputValid.name}
            />
          </div>
          <div className="input-block">
            <label htmlFor="fathers">
              {locale === "TUK" ? "Atasynyň ady" : "Отчество"}
              <span>*</span>
            </label>
            <input
              readOnly
              type="text"
              id="fathers"
              defaultValue={inputValid.fathers}
            />
          </div>
          <div className="input-block">
            <label htmlFor="date">
              {locale === "TUK" ? "Doglan senesi" : "Дата рождения"}
              <span>*</span>
            </label>
            <input
              readOnly
              type="date"
              id="date"
              defaultValue={inputValid.date}
              min="1900-01-01"
              max={getDate(18)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="passport">
              {locale === "TUK" ? "Pasport maglumatlary" : "Паспортные данные"}
              <span>*</span>
            </label>
            <input
              readOnly
              type="text"
              id="passport"
              defaultValue={inputValid.passport}
            />
          </div>
          <div className="input-block">
            <label htmlFor="p-address">
              {locale === "TUK"
                ? "Pasportyň berlen ýeri"
                : "Место выдачи паспорта"}
              <span>*</span>
            </label>
            <input
              readOnly
              type="text"
              id="p-address"
              defaultValue={inputValid.p_address}
            />
          </div>
          <div className="input-block">
            <label htmlFor="address">
              {locale === "TUK" ? "Ýaşaýan salgysy" : "Адрес проживания"}
              <span>*</span>
            </label>
            <input
              readOnly
              type="text"
              id="address"
              defaultValue={inputValid.address}
            />
          </div>
          <div className="input-block">
            <label htmlFor="mail">
              {locale === "TUK" ? "Email" : "Электронная почта"}
              <span>*</span>
            </label>
            <input
              readOnly
              type="email"
              id="mail"
              defaultValue={inputValid.mail}
            />
          </div>
          <div className="input-block">
            <label htmlFor="mobile">
              {locale === "TUK" ? "Mobil telefon" : "Мобильный телефон"}
              <span>*</span>
            </label>
            <input
              readOnly
              type="text"
              id="mobile"
              defaultValue={inputValid.mobile}
            />
          </div>
          <div className="input-block">
            <label htmlFor="homeTel">
              {locale === "TUK" ? "Öý telefon" : "Домашний телефон"}
            </label>
            <input
              readOnly
              type="text"
              id="homeTel"
              defaultValue={inputValid.home}
            />
          </div>
        </div>
        <div className="form-bottom">
          <div className="cu-bottom cd-2-title">
            <button
              type="button"
              className="sign-btn reg-btn"
              onClick={() => {
                setStage(2);
              }}
            >
              <div>
                <div className="btn-img">
                  <img src={next_reverse} alt="logout" />
                </div>
                <h3
                  onClick={() => {
                    setStage(2);
                  }}
                >
                  {locale === "TUK" ? "Yza" : "Назад"}
                </h3>
              </div>
            </button>
            <button
              type="button"
              disabled={!btnEnabled}
              className="sign-btn cu-btn"
              onClick={() => {
                setStage(4);
                setData({
                  ...data,
                  name: inputValid.name,
                  surname: inputValid.surname,
                  fathers: inputValid.fathers,
                  address: inputValid.address,
                  birth: inputValid.date.toString(),
                  email: inputValid.mail,
                  p_address: inputValid.p_address,
                  passport: inputValid.passport,
                  mobile: inputValid.mobile,
                  home: inputValid.home,
                });
              }}
            >
              <div>
                <h3>{locale === "TUK" ? "Dowam et" : "Продолжить"}</h3>
                <div className="btn-img">
                  <img src={next} alt="logout" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreditStage3;
