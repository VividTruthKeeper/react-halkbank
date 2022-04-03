// IMPORT MODULES
import React, { useContext } from "react";
import { UserContext } from "../backend/UserContext";
import { LanguageContext } from "../backend/LanguageContext";

// IMPORT COMPONENTS
import Breadcrumb from "../components/global/Breadcrumb";
import Loader from "../components/global/Loader";

// IMPORT IMAGES
import allert from "../icons/info-circle.svg";
import nul from "../icons/null.svg";

const Base = () => {
  const { locale } = useContext(LanguageContext);
  const { user } = useContext(UserContext);
  return (
    <section className="cards">
      <Breadcrumb />
      <div className="container">
        <div className="cards-inner">
          <h2 className="cards-title">
            {locale === "TUK" ? "Hoş geldiňiz" : "Добро пожаловать"},{" "}
            <span id="user">
              {user ? (
                user.name ? (
                  `${user.name} ${user.surname}`
                ) : (
                  <Loader />
                )
              ) : (
                <Loader />
              )}
            </span>
          </h2>
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
                  ) : user ? (
                    user.online_card.length !== 0 ? (
                      ""
                    ) : (
                      <tr>
                        <td>
                          {locale === "TUK"
                            ? "Tabşyrlan ýüzlenme ýok"
                            : "Заявок нет"}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    )
                  ) : null
                ) : user ? (
                  user.online_card.length !== 0 ? (
                    ""
                  ) : (
                    <tr>
                      <td>
                        {locale === "TUK"
                          ? "Tabşyrlan ýüzlenme ýok"
                          : "Заявок на карты нет"}
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  )
                ) : null}
                {user
                  ? user.online_card.length !== 0
                    ? user.online_card.map((el, i) => {
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
                                  ? "Kart çykaryldy"
                                  : "Карта выпущена"
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
                    : null
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Base;
