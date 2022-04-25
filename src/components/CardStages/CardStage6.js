// IMPORT MODULES
import React, { useContext } from "react";
import { UserContext } from "../../backend/UserContext";
import { LanguageContext } from "../../backend/LanguageContext";

// IMPORT IMAGES
import next from "../../icons/next.svg";
import next_reverse from "../../icons/next-reverse.svg";

// IMPORT HELPERS
import { sendRequestCard } from "../../backend/sendRequestCard";
import { reformatDate } from "../../helpers/reformatDate";

// URL
import { destination } from "../../destinationUrl";

const CardStage6 = ({ setStage, data, setLoader, setModalOpen }) => {
  const { locale } = useContext(LanguageContext);
  const token = localStorage.getItem("userToken");
  const postUrl = destination + "/online_card";

  return (
    <section className="card-stage-6">
      <div className="cd-6-top">
        <ul className="cd-6-list">
          <li>
            <p>{locale === "TKM" ? "Familiýasy" : "Фамилия"}:</p>
            <h4>{data.surname ? data.surname : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Ady" : "Имя"}:</p>
            <h4>{data.name ? data.name : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Atasynyň ady" : "Отчество"}:</p>
            <h4>{data.middlename ? data.middlename : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Doglan senesi" : "Дата рождения"}:</p>
            <h4>{data.birthdate ? reformatDate(data.birthdate) : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Mobil telefon" : "Мобильный телефон"}:</p>
            <h4>{data.phone_number ? data.phone_number : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Öý telefon" : "Домашний телефон"}:</p>
            <h4>{data.home_phone_number ? data.home_phone_number : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Email" : "Эл. адрес"}:</p>
            <h4>{data.email ? data.email : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "SMS-birikdirme" : "SMS - подключение"}:</p>
            <h4>
              {locale === "TKM"
                ? data.sms_notification
                  ? "Hawa"
                  : "Ýok"
                : data.sms_notification
                ? "Да"
                : "Нет"}
            </h4>
          </li>
          <li>
            <p>
              {locale === "TKM"
                ? "Pasportyň seriýasy"
                : "Серия и номер паспорта"}
              :
            </p>
            <h4>{data.passport_series ? data.passport_series : "-"}</h4>
          </li>
          <li>
            <p>
              {locale === "TKM"
                ? "Pasport kim tarapyndan berildi"
                : "Кем выдан паспорт"}
              :
            </p>
            <h4>{data.passport_by ? data.passport_by : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Ýaşaýan salgysy" : "Адрес прописки"}:</p>
            <h4>{data.place_of_residence ? data.place_of_residence : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Welaýat" : "Регион"}:</p>
            <h4>{data.region ? data.region : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Filial" : "Филиал"}:</p>
            <h4>{data.branch ? data.branch : "-"}</h4>
          </li>
          <li>
            <p>
              {locale === "TKM"
                ? "Banka gelmek gününi saýlaň"
                : "Дата прихода в банк"}
              :
            </p>
            <h4>
              {data.date_arrival_bank
                ? reformatDate(data.date_arrival_bank)
                : "-"}
            </h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Saýlanan wagt" : "Выбранное время"}:</p>
            <h4>{data.selected_time ? data.selected_time : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Gizlin söz" : "Кодовое слово"}:</p>
            <h4>{data.the_codeword ? data.the_codeword : "-"}</h4>
          </li>
        </ul>
      </div>
      <div className="cu-bottom cd-6-bottom">
        <button
          type="button"
          className="sign-btn reg-btn"
          onClick={() => {
            setStage(4);
          }}
        >
          <div>
            <div className="btn-img">
              <img src={next_reverse} alt="logout" />
            </div>
            <h3
              onClick={() => {
                setStage(4);
              }}
            >
              {locale === "TKM" ? "Redaktirlemek" : "Редактировать"}
            </h3>
          </div>
        </button>
        <button
          type="button"
          className="sign-btn cu-btn"
          onClick={() => {
            setLoader(true);
            setModalOpen(false);
            sendRequestCard(postUrl, token, data);
          }}
        >
          <div>
            <h3>{locale === "TKM" ? "Tassyklaýaryn" : "Подтверждаю"}</h3>
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
