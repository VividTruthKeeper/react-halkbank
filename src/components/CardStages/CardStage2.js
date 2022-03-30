// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../backend/UserContext";

// IMPORT VALIDATORS
import { ValidateEmail } from "../../validators/ValidateEmail";
import { ValidatePhoneNumber } from "../../validators/ValidatePhoneNumber";
import { getDate } from "../../helpers/Date";

// IMPORT IMAGES
import next from "../../icons/next.svg";
import next_reverse from "../../icons/next-reverse.svg";

const CardStage2 = ({ setStage, data, setData }) => {
  const { user } = useContext(UserContext);
  const [inputValid, setInputValid] = useState({
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
    mail: data.mail ? data.mail : user ? user.email : null,
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
              Фамилия<span>*</span>
            </label>
            <input
              type="text"
              id="surname"
              defaultValue={inputValid.surname}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, surname: e.target.value });
                } else {
                  setInputValid({ ...inputValid, surname: false });
                }
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="name">
              Имя<span>*</span>
            </label>
            <input
              type="text"
              id="name"
              defaultValue={inputValid.name}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, name: e.target.value });
                } else {
                  setInputValid({ ...inputValid, name: false });
                }
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="fathers">
              Отчество<span>*</span>
            </label>
            <input
              type="text"
              id="fathers"
              defaultValue={inputValid.fathers}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, fathers: e.target.value });
                } else {
                  setInputValid({ ...inputValid, fathers: false });
                }
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="date">
              Дата рождения<span>*</span>
            </label>
            <input
              type="date"
              id="date"
              defaultValue={inputValid.date}
              min="1900-01-01"
              max={getDate(18)}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, date: e.target.value });
                } else {
                  setInputValid({ ...inputValid, date: false });
                }
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="passport">
              Паспортные данные<span>*</span>
            </label>
            <input
              type="text"
              id="passport"
              defaultValue={inputValid.passport}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, passport: e.target.value });
                } else {
                  setInputValid({ ...inputValid, passport: false });
                }
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="p-address">
              Место выдачи паспорта<span>*</span>
            </label>
            <input
              type="text"
              id="p-address"
              defaultValue={inputValid.p_address}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, p_address: e.target.value });
                } else {
                  setInputValid({ ...inputValid, p_address: false });
                }
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="address">
              Адрес проживания<span>*</span>
            </label>
            <input
              type="text"
              id="address"
              defaultValue={inputValid.address}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, address: e.target.value });
                } else {
                  setInputValid({ ...inputValid, address: false });
                }
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="mail">
              Электронная почта<span>*</span>
            </label>
            <input
              type="email"
              id="mail"
              defaultValue={inputValid.mail}
              onChange={(e) => {
                if (ValidateEmail(e.target.value)) {
                  setInputValid({ ...inputValid, mail: e.target.value });
                } else {
                  setInputValid({ ...inputValid, mail: false });
                }
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="mobile">
              Мобильный телефон<span>*</span>
            </label>
            <input
              type="text"
              id="mobile"
              defaultValue={inputValid.mobile}
              onChange={(e) => {
                if (ValidatePhoneNumber(e.target.value)) {
                  setInputValid({ ...inputValid, mobile: e.target.value });
                } else {
                  setInputValid({ ...inputValid, mobile: false });
                }
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="homeTel">Домашний телефон</label>
            <input
              type="text"
              id="homeTel"
              defaultValue={inputValid.home}
              onChange={(e) => {
                if (ValidatePhoneNumber(e.target.value)) {
                  setInputValid({ ...inputValid, home: e.target.value });
                } else {
                  setInputValid({ ...inputValid, home: false });
                }
              }}
            />
          </div>
        </div>
        <div className="form-bottom">
          <div className="cu-bottom cd-2-title">
            <button
              type="button"
              className="sign-btn reg-btn"
              onClick={() => {
                setStage(1);
              }}
            >
              <div>
                <div className="btn-img">
                  <img src={next_reverse} alt="logout" />
                </div>
                <h3
                  onClick={() => {
                    setStage(1);
                  }}
                >
                  Назад
                </h3>
              </div>
            </button>
            <button
              type="button"
              disabled={!btnEnabled}
              className="sign-btn cu-btn"
              onClick={() => {
                setStage(3);
                setData({
                  ...data,
                  name: inputValid.name,
                  surname: inputValid.surname,
                  middlename: inputValid.fathers,
                  birthdate: inputValid.date,
                  email: inputValid.mail,
                  passport_series: inputValid.passport,
                  passport_by: inputValid.p_address,
                  phone_number: inputValid.mobile,
                  home_phone_number: inputValid.home,
                  place_of_residence: inputValid.address,
                });
              }}
            >
              <div>
                <h3>Продолжить</h3>
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

export default CardStage2;
