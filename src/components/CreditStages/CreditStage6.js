// IMPORT MODULES
import React, { useContext } from "react";
import { UserContext } from "../../backend/UserContext";
import { LanguageContext } from "../../backend/LanguageContext";

// IMPORT IMAGES
import next from "../../icons/next.svg";
import next_reverse from "../../icons/next-reverse.svg";

// IMPORT HELPERS
import { sendRequest } from "../../backend/sendRequest";
import { getUserInfo } from "../../backend/getUserInfo";
import { reformatDate } from "../../helpers/reformatDate";

// URL
import { destination } from "../../destinationUrl";

const CreditStage6 = ({
  setStage,
  data,
  setModalOpen,
  setLoader,
  setSuccess,
  setError,
}) => {
  const { locale } = useContext(LanguageContext);
  const { setUser } = useContext(UserContext);
  const token = localStorage.getItem("userToken");
  const postUrl = destination + "/online_credit";
  const getUrl = destination + "/me";
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
            <h4>{data.fathers ? data.fathers : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Doglan senesi" : "Дата рождения"}:</p>
            <h4>{data.birth ? reformatDate(data.birth) : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Mobil telefon" : "Мобильный телефон"}:</p>
            <h4>{data.mobile ? data.mobile : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Öý telefon" : "Домашний телефон"}:</p>
            <h4>{data.home ? data.home : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Email" : "Эл. адрес"}:</p>
            <h4>{data.email ? data.email : "-"}</h4>
          </li>
          <li>
            <p>
              {locale === "TKM"
                ? "Pasportyň seriýasy we belgisi"
                : "Серия и номер паспорта"}
              :
            </p>
            <h4>{data.passport ? data.passport : "-"}</h4>
          </li>
          <li>
            <p>
              {locale === "TKM" ? "Pasportyň berlen ýeri" : "Кем выдан паспорт"}
              :
            </p>
            <h4>{data.p_address ? data.p_address : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Ýaşaýan salgysy" : "Адрес прописки"}:</p>
            <h4>{data.address ? data.address : "-"}</h4>
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
            <p>{locale === "TKM" ? "Iş ýeri" : "Место работы"}:</p>
            <h4>{data.workplace ? data.workplace : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Aýlyk haky" : "Сумма зарплаты"}:</p>
            <h4>{data.salary ? data.salary : "-"}</h4>
          </li>
          <li>
            <p>{locale === "TKM" ? "Wezipesi" : "Должность"}:</p>
            <h4>{data.position ? data.position : "-"}</h4>
          </li>
          <li>
            <p>
              {locale === "TKM"
                ? "Soňky iş ýeri boýunça tejribe"
                : "Стаж с последнего места работы"}
              :
            </p>
            <h4>{data.exp ? data.exp : "-"}</h4>
          </li>
        </ul>
      </div>
      <div className="cu-bottom cd-6-bottom">
        <button
          className="sign-btn reg-btn"
          onClick={() => {
            setStage(5);
          }}
        >
          <div>
            <div className="btn-img">
              <img src={next_reverse} alt="logout" />
            </div>
            <h3
              onClick={() => {
                setStage(5);
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
            setModalOpen(false);
            setLoader(true);
            sendRequest(
              postUrl,
              token,
              data,
              () => {
                setSuccess(true);
                setTimeout(() => {
                  getUserInfo(getUrl, token, setUser, () => null);
                }, 2000);
              },
              setLoader,
              setError
            );
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

export default CreditStage6;
