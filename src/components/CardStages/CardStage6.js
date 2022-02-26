// IMPORT MODULES
import React from "react";

// IMPORT IMAGES
import next from "../../icons/next.svg";
import next_reverse from "../../icons/next-reverse.svg";

const CardStage6 = ({ setStage }) => {
  return (
    <section className="card-stage-6">
      <div className="cd-6-top">
        <ul className="cd-6-list">
          <li>
            <p>Фамилия:</p>
            <h4></h4>
          </li>
          <li>
            <p>Имя:</p>
            <h4></h4>
          </li>
          <li>
            <p>Отчество:</p>
            <h4></h4>
          </li>
          <li>
            <p>Дата рождения:</p>
            <h4></h4>
          </li>
          <li>
            <p>Мобильный телефон:</p>
            <h4></h4>
          </li>
          <li>
            <p>Домашний телефон:</p>
            <h4></h4>
          </li>
          <li>
            <p>Эл. адрес:</p>
            <h4></h4>
          </li>
          <li>
            <p>SMS оповещение:</p>
            <h4></h4>
          </li>
          <li>
            <p>Серия паспорта:</p>
            <h4></h4>
          </li>
          <li>
            <p>Серия паспорта:</p>
            <h4></h4>
          </li>
          <li>
            <p>Кем выдан паспорт:</p>
            <h4></h4>
          </li>
          <li>
            <p>Адрес прописки:</p>
            <h4></h4>
          </li>
          <li>
            <p>Регион:</p>
            <h4></h4>
          </li>
          <li>
            <p>Филиал:</p>
            <h4></h4>
          </li>
          <li>
            <p>Дата прихода в банк:</p>
            <h4></h4>
          </li>
          <li>
            <p>Выбранное время:</p>
            <h4></h4>
          </li>
          <li>
            <p>Кодовое слово:</p>
            <h4></h4>
          </li>
        </ul>
      </div>
      <div className="cu-bottom cd-6-bottom">
        <button
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
              Редактировать
            </h3>
          </div>
        </button>
        <button
          type="button"
          //   disabled={!btnEnabled}
          className="sign-btn cu-btn"
        >
          <div>
            <h3>Подтверждаю</h3>
            <div className="btn-img">
              <img src={next} alt="logout" />
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default CardStage6;
