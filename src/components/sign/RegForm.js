// IMPORT MODULES
import React from "react";

const RegForm = () => {
  return (
    <section className="reg">
      <form>
        <div className="reg-top">
          <h2 className="reg-title">Регистрация</h2>
          <div className="reg-input-wrapper">
            <div className="reg-input-block">
              <label htmlFor="surname">
                Фамилия<span>*</span>
              </label>
              <input type="text" placeholder="Amanow" id="surname" />
            </div>
            <div className="reg-input-block">
              <label htmlFor="name">
                Имя<span>*</span>
              </label>
              <input type="text" placeholder="Aman" id="name" />
            </div>
            <div className="reg-input-block">
              <label htmlFor="fname">
                Отчество<span>*</span>
              </label>
              <input type="text" placeholder="Amanowich" id="fname" />
            </div>
            <div className="reg-input-block">
              <label htmlFor="date">
                Дата рождения<span>*</span>
              </label>
              <input type="text" placeholder="дд / мм / гггг" id="date" />
            </div>
            <div className="reg-input-block split">
              <div className="split-wrapper">
                <label htmlFor="serie">
                  Серия паспорта<span>*</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="reg-bottom"></div>
      </form>
    </section>
  );
};

export default RegForm;
