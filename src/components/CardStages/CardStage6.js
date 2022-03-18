// IMPORT MODULES
import React, { useContext } from "react";
import { UserContext } from "../../backend/UserContext";

// IMPORT IMAGES
import next from "../../icons/next.svg";
import next_reverse from "../../icons/next-reverse.svg";

// IMPORT HELPERS
import { sendRequestCard } from "../../backend/sendRequestCard";
import { getUserInfo } from "../../backend/getUserInfo";

const CardStage6 = ({
  setStage,
  data,
  setLoader,
  setModalOpen,
  setSuccess,
}) => {
  const { setUser } = useContext(UserContext);
  const token = localStorage.getItem("userToken");
  const postUrl = "http://shahsyotag.halkbank.gov.tm:8000/api/online_card";
  const getUrl = "http://shahsyotag.halkbank.gov.tm:8000/api/me";

  return (
    <section className="card-stage-6">
      <div className="cd-6-top">
        <ul className="cd-6-list">
          <li>
            <p>Фамилия:</p>
            <h4>{data.surname ? data.surname : "-"}</h4>
          </li>
          <li>
            <p>Имя:</p>
            <h4>{data.name ? data.name : "-"}</h4>
          </li>
          <li>
            <p>Отчество:</p>
            <h4>{data.middlename ? data.middlename : "-"}</h4>
          </li>
          <li>
            <p>Дата рождения:</p>
            <h4>{data.birthdate ? data.birthdate : "-"}</h4>
          </li>
          <li>
            <p>Мобильный телефон:</p>
            <h4>{data.phone_number ? data.phone_number : "-"}</h4>
          </li>
          <li>
            <p>Домашний телефон:</p>
            <h4>{data.home_phone_number ? data.home_phone_number : "-"}</h4>
          </li>
          <li>
            <p>Эл. адрес:</p>
            <h4>{data.email ? data.email : "-"}</h4>
          </li>
          <li>
            <p>SMS оповещение:</p>
            <h4>
              {data.sms_notification
                ? data.sms_notification === true
                  ? "Да"
                  : "Нет"
                : "-"}
            </h4>
          </li>
          <li>
            <p>Серия паспорта:</p>
            <h4>{data.passport_series ? data.passport_series : "-"}</h4>
          </li>
          <li>
            <p>Кем выдан паспорт:</p>
            <h4>{data.passport_by ? data.passport_by : "-"}</h4>
          </li>
          <li>
            <p>Адрес прописки:</p>
            <h4>{data.place_of_residence ? data.place_of_residence : "-"}</h4>
          </li>
          <li>
            <p>Регион:</p>
            <h4>{data.region ? data.region : "-"}</h4>
          </li>
          <li>
            <p>Филиал:</p>
            <h4>{data.branch ? data.branch : "-"}</h4>
          </li>
          <li>
            <p>Дата прихода в банк:</p>
            <h4>{data.date_arrival_bank ? data.date_arrival_bank : "-"}</h4>
          </li>
          <li>
            <p>Выбранное время:</p>
            <h4>{data.selected_time ? data.selected_time : "-"}</h4>
          </li>
          <li>
            <p>Кодовое слово:</p>
            <h4>{data.the_codeword ? data.the_codeword : "-"}</h4>
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
          className="sign-btn cu-btn"
          onClick={() => {
            setLoader(true);
            setModalOpen(false);
            sendRequestCard(postUrl, token, data, () => {
              setSuccess(true);
              setLoader(false);
              setTimeout(() => {
                setSuccess(false);
                getUserInfo(getUrl, token, setUser, () => null);
              }, 2000);
            });
          }}
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
