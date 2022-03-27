// IMPORT MODULES
import React, { useContext } from "react";
import { UserContext } from "../backend/UserContext";

// IMPORT COMPONENTS
import Breadcrumb from "../components/global/Breadcrumb";
import Loader from "../components/global/Loader";

// IMPORT IMAGES
import allert from "../icons/info-circle.svg";
import nul from "../icons/null.svg";

const Base = () => {
  const { user } = useContext(UserContext);
  return (
    <section className="cards">
      <Breadcrumb />
      <div className="container">
        <div className="cards-inner">
          <h2 className="cards-title">
            Добро пожаловать,{" "}
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
                  <th>Тип</th>
                  <th>Дата</th>
                  <th>Статус</th>
                  <th>Действие</th>
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
                              ? "Отправлено"
                              : el.status === "2"
                              ? "Принята"
                              : el.status === "3"
                              ? "На стадии рассмотрения"
                              : el.status === "4"
                              ? "Утверждено"
                              : el.status === "5"
                              ? "Отказано"
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
                        <td>Заявок нет</td>
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
                      <td>Заявок нет</td>
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
                                ? "Отправлено"
                                : el.status === "2"
                                ? "Принята"
                                : el.status === "3"
                                ? "На стадии рассмотрения"
                                : el.status === "4"
                                ? "Карта выпущена"
                                : el.status === "5"
                                ? "Отказано"
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
                {/* {user
                  ? user.online_credit.length !== 0
                    ? user.online_credit.map((el, i) => {
                        return (
                          <tr key={i}>
                            <td>#{el.id}</td>
                            <td>{el.type}</td>
                            <td>{el.date}</td>
                            <td>--status</td>
                            <td>--action</td>
                          </tr>
                        );
                      })
                    : null
                  : null}
                {user ? (
                  user.online_card.length !== 0 ? (
                    user.online_card.map((el, i) => {
                      return (
                        <tr key={i}>
                          <td>#{el.id}</td>
                          <td>{el.selected_card}</td>
                          <td>{el.date}</td>
                          <td>--status</td>
                          <td>--action</td>
                        </tr>
                      );
                    })
                  ) : user.online_credit.length !== 0 ? null
                 : (
                  <tr>
                    <td>Заявок нет</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                )} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Base;
