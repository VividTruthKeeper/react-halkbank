// IMPORT MODULES
import React, { useContext } from "react";
import { UserContext } from "../../backend/UserContext";
import { LanguageContext } from "../../backend/LanguageContext";

// IMPORT IMAGES
import next from "../../icons/next.svg";
import next_reverse from "../../icons/next-reverse.svg";

// IMPORT HELPERS
import { sendRequestCard } from "../../backend/sendRequestCard";
import { getUserInfo } from "../../backend/getUserInfo";
import { reformatDate } from "../../helpers/reformatDate";

// URL
import { destination } from "../../destinationUrl";

const CardStage6 = ({
  setStage,
  data,
  setLoader,
  setModalOpen,
  setSuccess,
  setError,
}) => {
  const { locale } = useContext(LanguageContext);
  const { setUser } = useContext(UserContext);
  const token = localStorage.getItem("userToken");
  const postUrl = destination + "/online_card";
  const getUrl = destination + "/me";

  return (
    <section className="card-stage-6">
      <div className="cd-6-top">
        <ul className="cd-6-list">
          <li>
            <p>{locale === "TUK" ? "Familiýasy" : "Фамилия"}:</p>
            <h4>{data.surname ? data.surname : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TUK" ? "Ady" : "Имя"}:</p>
            <h4>{data.name ? data.name : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TUK" ? "Atasynyň ady" : "Отчество"}:</p>
            <h4>{data.middlename ? data.middlename : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TUK" ? "Doglan senesi" : "Дата рождения"}:</p>
            <h4>{data.birthdate ? reformatDate(data.birthdate) : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TUK" ? "Mobil telefon" : "Мобильный телефон"}:</p>
            <h4>{data.phone_number ? data.phone_number : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TUK" ? "Öý telefon" : "Домашний телефон"}:</p>
            <h4>{data.home_phone_number ? data.home_phone_number : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TUK" ? "Email" : "Эл. адрес"}:</p>
            <h4>{data.email ? data.email : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TUK" ? "SMS-birikdirme" : "SMS - подключение"}:</p>
            <h4>
              {locale === "TUK"
                ? data.sms_notification
                  ? "Hawa"
                  : "Ýok"
                : data.sms_notification
                ? "Да"
                : "Нет"}
              {/* {data.sms_notification
                ? locale === "RUS"
                  ? data.sms_notification === true
                    ? "Да"
                    : "Нет"
                  : data.sms_notification === true
                  ? "Hawa"
                  : "Ýok"
                : "-"} */}
            </h4>
          </li>
          <li>
            <p>{locale === "TUK" ? "Pasportyň seriýasy" : "Серия паспорта"}:</p>
            <h4>{data.passport_series ? data.passport_series : "-"}</h4>
          </li>
          <li>
            <p>
              {locale === "TUK"
                ? "Pasport kim tarapyndan berildi"
                : "Кем выдан паспорт"}
              :
            </p>
            <h4>{data.passport_by ? data.passport_by : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TUK" ? "Ýaşaýan salgysy" : "Адрес прописки"}:</p>
            <h4>{data.place_of_residence ? data.place_of_residence : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TUK" ? "Welaýat" : "Регион"}:</p>
            <h4>{data.region ? data.region : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TUK" ? "Filial" : "Филиал"}:</p>
            <h4>{data.branch ? data.branch : "-"}</h4>
          </li>
          <li>
            <p>
              {locale === "TUK"
                ? "Banka gelmek gününi saýlaň "
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
            <p>{locale === "TUK" ? "Saýlanan wagt" : "Выбранное время"}:</p>
            <h4>{data.selected_time ? data.selected_time : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TUK" ? "Gizlin söz" : "Кодовое слово"}:</p>
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
              {locale === "TUK" ? "Redaktirlemek" : "Редактировать"}
            </h3>
          </div>
        </button>
        <button
          type="button"
          className="sign-btn cu-btn"
          onClick={() => {
            setLoader(true);
            setModalOpen(false);
            sendRequestCard(
              postUrl,
              token,
              data,
              () => {
                setSuccess(true);
                setLoader(false);
                setTimeout(() => {
                  setSuccess(false);
                  getUserInfo(getUrl, token, setUser, () => null);
                }, 2000);
              },
              setError
            );
          }}
        >
          <div>
            <h3>{locale === "TUK" ? "Tassyklaýaryn" : "Подтверждаю"}</h3>
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
