// IMPORT MODULES
import React, { useContext } from "react";
import { UserContext } from "../backend/UserContext";
import { LanguageContext } from "../backend/LanguageContext";

// IMPORT COMPONENTS
import Breadcrumb from "../components/global/Breadcrumb";
import Loader from "../components/global/Loader";

// IMPORT IMAGES
import allert from "../icons/info-circle.svg";

const Base = () => {
  const { locale } = useContext(LanguageContext);
  const { user } = useContext(UserContext);
  return (
    <section className="cards">
      <Breadcrumb />
      <div className="container">
        <div className="cards-inner">
          <h2 className="cards-title">
            {locale === "TKM" ? "Hoş geldiňiz" : "Добро пожаловать"},{" "}
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
                  <th>{locale === "TKM" ? "Görnüşi" : "Тип"}</th>
                  <th>{locale === "TKM" ? "Senesi" : "Дата"}</th>
                  <th>{locale === "TKM" ? "Ýagdaýy" : "Статус"}</th>
                  <th>{locale === "TKM" ? "Amal" : "Действие"}</th>
                </tr>

                {user ? (
                  user.online_credit.length !== 0 ? (
                    [...user.online_credit].reverse().map((el, i) => {
                      return (
                        <tr key={i}>
                          <td>#{el.id}</td>
                          <td>{el.type}</td>
                          <td>{el.date}</td>
                          <td
                            className={
                              el.status === "kart_chykarylmady"
                                ? "red"
                                : el.status === "kart_chykaryldy" ||
                                  el.status === "kabul_edildi"
                                ? "green"
                                : ""
                            }
                          >
                            {el.status === "ugradyldy"
                              ? locale === "TKM"
                                ? "Ugradyldy"
                                : "Отправлено"
                              : el.status === "kabul_edildi"
                              ? locale === "TKM"
                                ? "Kabul edildi"
                                : "Принята"
                              : el.status === "seredilyar"
                              ? locale === "TKM"
                                ? "Görülyar"
                                : "На стадии рассмотрения"
                              : el.status === "kart_chykaryldy"
                              ? locale === "TKM"
                                ? "Tassyklandy"
                                : "Утверждено"
                              : el.status === "kart_chykarylmady"
                              ? locale === "TKM"
                                ? "Ret edildi"
                                : "Отказано"
                              : ""}
                          </td>
                          <td>
                            {el.status === "kart_chykarylmady" ? (
                              <div className="reject">
                                <div className="reason">
                                  <h4>{el.action}</h4>
                                </div>
                                <img src={allert} alt="reject" />
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
                          {locale === "TKM"
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
                ) : null}
                {user
                  ? user.online_card.length !== 0
                    ? user.online_card.map((el, i) => {
                        if (el.payed) {
                          return (
                            <tr key={i}>
                              <td>#{el.id}</td>
                              <td>{el.selected_card}</td>
                              <td>{el.date}</td>
                              <td
                                className={
                                  el.status === "kart_chykarylmady"
                                    ? "red"
                                    : el.status === "kart_chykaryldy" ||
                                      el.status === "kabul_edildi"
                                    ? "green"
                                    : ""
                                }
                              >
                                {el.status === "ugradyldy"
                                  ? locale === "TKM"
                                    ? "Ugradyldy"
                                    : "Отправлено"
                                  : el.status === "kabul_edildi"
                                  ? locale === "TKM"
                                    ? "Kabul edildi"
                                    : "Принята"
                                  : el.status === "seredilyar"
                                  ? locale === "TKM"
                                    ? "Görülyar"
                                    : "На стадии рассмотрения"
                                  : el.status === "kart_chykaryldy"
                                  ? locale === "TKM"
                                    ? "Kart çykaryldy"
                                    : "Карта выпущена"
                                  : el.status === "kart_chykarylmady"
                                  ? locale === "TKM"
                                    ? "Ret edildi"
                                    : "Отказано"
                                  : ""}
                              </td>
                              <td>
                                {el.status === "kart_chykarylmady" ? (
                                  <div className="reject">
                                    <div className="reason">
                                      <h4>{el.action}</h4>
                                    </div>
                                    <img src={allert} alt="reject" />
                                  </div>
                                ) : (
                                  ""
                                )}
                              </td>
                            </tr>
                          );
                        }
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
