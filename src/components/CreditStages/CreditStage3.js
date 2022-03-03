// IMPORT MODULES
import React, { useState, useEffect } from "react";

// IMPORT VALIDATORS
import { ValidateEmail } from "../../validators/ValidateEmail";
import { ValidatePhoneNumber } from "../../validators/ValidatePhoneNumber";
import { getDate } from "../../helpers/Date";

// IMPORT IMAGES
import next from "../../icons/next.svg";

const CreditStage3 = ({ setStage }) => {
  const [inputValid, setInputValid] = useState({
    surname: true,
    name: true,
    fathers: true,
    date: true,
    passport: true,
    p_address: true,
    address: true,
    mail: true,
    mobile: true,
    home: true,
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
              defaultValue={"Amanow"}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, surname: true });
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
              defaultValue={"Aman"}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, name: true });
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
              defaultValue={"Amanowic"}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, fathers: true });
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
              defaultValue={"1990-02-20"}
              min="1900-01-01"
              max={getDate(18)}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, date: true });
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
              defaultValue={"I-AŞ 212121"}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, passport: true });
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
              defaultValue={"Kopetdag etrapyň häkimliki"}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, p_address: true });
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
              defaultValue={"Parahat 3/1, j.16, k.5"}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, address: true });
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
              defaultValue={"amanamanow@gmail.com"}
              onChange={(e) => {
                if (ValidateEmail(e.target.value)) {
                  setInputValid({ ...inputValid, mail: true });
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
              defaultValue={"865656565"}
              onChange={(e) => {
                if (ValidatePhoneNumber(e.target.value)) {
                  setInputValid({ ...inputValid, mobile: true });
                } else {
                  setInputValid({ ...inputValid, mobile: false });
                }
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="homeTel">Домашний телефон</label>
            <input type="text" id="homeTel" defaultValue={"812121212"} />
          </div>
        </div>
        <div className="form-bottom">
          <div className="cu-bottom cd-2-title">
            <h4>
              Все поля с символом ( <span>*</span> ) обязательны для заполнения
            </h4>
            <button
              type="button"
              disabled={!btnEnabled}
              className="sign-btn cu-btn"
              onClick={() => {
                setStage(4);
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

export default CreditStage3;
