// IMPORT MODULES
import React from "react";

// IMPORT IMAGES
import up from "../../icons/clipboard-white.svg";

// IMPORT COMPONENTS
import CustomSelect from "../global/CustomSelect";
import LogoBg from "../global/LogoBg";

const RegForm = () => {
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
                type="text"
                placeholder="Amanow"
                name="surname"
                id="surname"
                required
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="name">
                Имя<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Aman"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="fname">
                Отчество<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Amanowich"
                name="fathers"
                id="fname"
                required
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="date">
                Дата рождения<span>*</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="дд / мм / гггг"
                id="date"
                required
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
                />
              </div>
              <div className="split-block">
                <CustomSelect
                  items={["AŞ", "AH", "DZ", "MR", "BN", "LB"]}
                  blockName={"select-block"}
                  elName={"select-el"}
                  customId={"reg"}
                  name={"passport-reg"}
                />
              </div>
              <div className="split-block">
                <label htmlFor="num">
                  Номер паспорта<span>*</span>
                </label>
                <input
                  type="text"
                  name="num"
                  placeholder="212121"
                  id="num"
                  required
                />
              </div>
            </div>
            <div className="reg-input-block">
              <label htmlFor="place">
                Место выдачи паспорта<span>*</span>
              </label>
              <input
                type="text"
                name="place"
                placeholder="Kopetdag etrapyň häkimliki"
                id="place"
                required
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="address">
                Адрес проживания<span>*</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Parahat 3/1, j.16, k.5"
                id="address"
                required
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="email">
                Электронная почта<span>*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="amanowaman@gmail.com"
                id="email"
                required
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="mobile">
                Мобильный телефон<span>*</span>
              </label>
              <input
                type="text"
                name="mobile"
                defaultValue="+993"
                placeholder="+ (993 65) 65 65 65 "
                id="mobile"
                required
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="hometel">
                Домашний телефон<span>*</span>
              </label>
              <input
                type="text"
                name="hometel"
                defaultValue="+99312"
                placeholder="+ (993 12) 12 12 12 "
                id="hometel"
                required
              />
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
                type="text"
                name="user"
                placeholder="aman_amanow"
                id="user"
                required
              />
            </div>
            <div className="reg-input-block">
              <label htmlFor="pass">
                Пароль<span>*</span>
              </label>
              <input type="password" name="pass" id="pass" required />
            </div>
            <div className="reg-input-block">
              <label htmlFor="repeat-pass">
                Повторите пароль<span>*</span>
              </label>
              <input
                type="password"
                name="repeat-pass"
                id="repeat-pass"
                required
              />
            </div>
          </div>
        </div>
        <div className="reg-btns">
          <h1>CAPTCHA</h1>
          <h2>
            Все поля с символом ( <span>*</span> ) обязательны для заполнения
            Все поля доожны быть заполненны латиницей
          </h2>
          <button
            type="submit"
            className="sign-btn"
            onClick={(e) => e.preventDefault()}
          >
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
