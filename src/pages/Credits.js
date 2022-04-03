// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../backend/UserContext";
import { LanguageContext } from "../backend/LanguageContext";
import axios from "axios";

// IMPORT COMPONENTS
import Breadcrumb from "../components/global/Breadcrumb";
import CreditModal from "../components/credits/CreditModal";
import Loader from "../components/global/Loader";
import Success from "../components/global/Success";
import Error from "../components/global/Error";

// IMPORT HELPERS
import { dataDestination } from "../destinationUrl";

// IMPORT IMAGES
import credit from "../icons/credit-black.svg";
import add from "../icons/add.svg";
import allert from "../icons/info-circle.svg";
import nul from "../icons/null.svg";

const Credits = () => {
  const { locale } = useContext(LanguageContext);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [stage, setStage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [creditData, setCreditData] = useState();
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [modalOpen]);

  useEffect(() => {
    let isMounted = true;
    axios
      .get(`${dataDestination}/credit_data`)
      .then((res) => {
        if (isMounted) {
          setCreditData(res.data);
        }
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="cards">
      {success ? (
        <Success
          message={
            locale === "TUK"
              ? "Ýüzlenme ugradyldy!"
              : "Ваш запрос успешно отправлен!"
          }
        />
      ) : null}
      {error ? (
        <Error
          message={
            locale === "TUK"
              ? "Ýüzlenme ugradylmady"
              : "Не удалось отправить запрос"
          }
        />
      ) : null}
      <Breadcrumb
        image={credit}
        link={"/home/credits"}
        linkTitle={locale === "TUK" ? "Karzlar" : "Кредиты"}
      />
      <CreditModal
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        stage={stage}
        setStage={setStage}
        loader={loader}
        setLoader={setLoader}
        setSuccess={setSuccess}
        setError={setError}
        creditData={creditData}
      />
      {loader ? <Loader /> : null}
      <div className="container">
        <div className="cards-inner">
          <div className="card-title">
            <h2 className="cards-title">
              {locale === "TUK"
                ? "Karz almak üçin onlaýn-ýüzlenme"
                : "Онлайн-заявка для получения кредита"}
            </h2>
            <button
              type="button"
              className="card-btn sign-btn"
              onClick={() => {
                setStage(1);
                setModalOpen(true);
              }}
            >
              <div className="card-img">
                <img src={add} alt="add" />
              </div>
              <h3>
                {locale === "TUK" ? "Ýüzlenme doldurmak" : "Заполнить заявку"}
              </h3>
            </button>
          </div>
          <div className="home-table-wrapper">
            <table className="home-table">
              <tbody>
                <tr className="table-head">
                  <th>ID</th>
                  <th>{locale === "TUK" ? "Görnüşi" : "Тип"}</th>
                  <th>{locale === "TUK" ? "Senesi" : "Дата"}</th>
                  <th>{locale === "TUK" ? "Ýagdaýy" : "Статус"}</th>
                  <th>{locale === "TUK" ? "Amal" : "Действие"}</th>
                </tr>
                {user ? (
                  user.online_credit.length !== 0 ? (
                    user.online_credit.map((el, i) => {
                      return (
                        <tr key={i}>
                          <td>#{el.id}</td>
                          <td>{el.type}</td>
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
                              ? locale === "TUK"
                                ? "Ugradyldy"
                                : "Отправлено"
                              : el.status === "2"
                              ? locale === "TUK"
                                ? "Kabul edildi"
                                : "Принята"
                              : el.status === "3"
                              ? locale === "TUK"
                                ? "Görülyar"
                                : "На стадии рассмотрения"
                              : el.status === "4"
                              ? locale === "TUK"
                                ? "Tassyklandy"
                                : "Утверждено"
                              : el.status === "5"
                              ? locale === "TUK"
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
                    })
                  ) : (
                    <tr>
                      <td>
                        {locale === "TUK"
                          ? "Tabşyrlan ýüzlenme ýok"
                          : "Заявок на кредиты нет"}
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
                      {locale === "TUK"
                        ? "Tabşyrlan ýüzlenme ýok"
                        : "Заявок на кредиты нет"}
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

export default Credits;
