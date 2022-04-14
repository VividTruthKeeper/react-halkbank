// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../backend/UserContext";
import { LanguageContext } from "../backend/LanguageContext";

// IMPORT COMPONENTS
import Breadcrumb from "../components/global/Breadcrumb";
import ModalForm from "../components/cards/ModalForm";
import Loader from "../components/global/Loader";
import Success from "../components/global/Success";
import Error from "../components/global/Error";

// IMPORT IMAGES
import card from "../icons/card-black.svg";
import add from "../icons/add.svg";
import allert from "../icons/info-circle.svg";
import nul from "../icons/null.svg";

const Cards = () => {
  const { locale } = useContext(LanguageContext);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user } = useContext(UserContext);
  const [loader, setLoader] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [stage, setStage] = useState(1);
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [modalOpen]);
  return (
    <section className="cards">
      {error ? (
        <Error
          message={
            locale === "TKM"
              ? "Ýüzlenme ugradylmady"
              : "Не удалось отправить запрос"
          }
          setError={setError}
        />
      ) : null}
      {success ? (
        <Success
          message={
            locale === "TKM"
              ? "Ýüzlenme ugradyldy!"
              : "Ваш запрос успешно отправлен!"
          }
          setSuccess={setSuccess}
        />
      ) : null}
      <Breadcrumb
        image={card}
        link={"/home/cards"}
        linkTitle={locale === "TKM" ? "Plastik kartlar" : "Пластиковые карты"}
      />
      <ModalForm
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        stage={stage}
        setStage={setStage}
        loader={loader}
        setLoader={setLoader}
        setSuccess={setSuccess}
        setError={setError}
      />
      {loader ? <Loader /> : null}
      <div className="container">
        <div className="cards-inner">
          <div className="card-title">
            <h2 className="cards-title">
              {locale === "TKM"
                ? "Kart almak üçin onlaýn-ýüzlenme"
                : "Онлайн-заявка для получения карты"}
            </h2>
            <button
              type="button"
              className="card-btn sign-btn"
              onClick={() => {
                setModalOpen(true);
                setStage(1);
              }}
            >
              <div className="card-img">
                <img src={add} alt="add" />
              </div>
              <h3>
                {locale === "TKM" ? "Ýüzlenme doldurmak" : "Заполнить заявку"}
              </h3>
            </button>
          </div>
          <div className="home-table-wrapper">
            <table className="home-table">
              <tbody>
                <tr className="table-head">
                  <th>ID</th>
                  <th>{locale === "TKM" ? "Görnüşi" : "Тип"}</th>
                  <th>{locale === "TKM" ? "Senesi" : "Дата"}</th>
                  <th>{locale === "TKM" ? "Ýagdaýy" : "Статус"}</th>
                  <th>{locale === "TKM" ? "Amal" : "Действие"}</th>
                </tr>
                {user ? (
                  user.online_card.length !== 0 ? (
                    user.online_card.map((el, i) => {
                      if (el.payed) {
                        return (
                          <tr key={i}>
                            <td>#{el.id}</td>
                            <td>{el.selected_card}</td>
                            <td>{el.date}</td>
                            <td
                              className={
                                el.status === "5"
                                  ? "red"
                                  : el.status === "4" || el.status === "2"
                                  ? "green"
                                  : ""
                              }
                            >
                              {el.status === "1"
                                ? locale === "TKM"
                                  ? "Ugradyldy"
                                  : "Отправлено"
                                : el.status === "2"
                                ? locale === "TKM"
                                  ? "Kabul edildi"
                                  : "Принята"
                                : el.status === "3"
                                ? locale === "TKM"
                                  ? "Görülyar"
                                  : "На стадии рассмотрения"
                                : el.status === "4"
                                ? locale === "TKM"
                                  ? "Kart çykaryldy"
                                  : "Карта выпущена"
                                : el.status === "5"
                                ? locale === "TKM"
                                  ? "Ret edildi"
                                  : "Отказано"
                                : ""}
                            </td>
                            <td>
                              {el.status === "5" ? (
                                <div className="reject">
                                  <div className="reason">
                                    <h4>{el.action}</h4>
                                  </div>
                                  <img src={allert} alt="reject" />
                                </div>
                              ) : el.status !== "4" && el.status !== "2" ? (
                                <div>
                                  <img src={nul} alt="null" />
                                </div>
                              ) : (
                                ""
                              )}
                            </td>
                          </tr>
                        );
                      }
                    })
                  ) : (
                    <tr>
                      <td>
                        {locale === "TKM"
                          ? "Tabşyrlan ýüzlenme ýok"
                          : "Заявок на карты нет"}
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  )
                ) : (
                  <tr>
                    <td>
                      {locale === "TKM"
                        ? "Tabşyrlan ýüzlenme ýok"
                        : "Заявок на карты нет"}
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
