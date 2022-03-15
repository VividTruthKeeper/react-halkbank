// IMPORT MODULES
import React, { useContext } from "react";
import { UserContext } from "../backend/UserContext";

// IMPORT COMPONENTS
import Breadcrumb from "../components/global/Breadcrumb";
import Loader from "../components/global/Loader";

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
                {/* {user ? (
                  user.online_credit !== [] ? (
                    user.online_credit.map((el, i) => {
                      return (
                        <tr key={i}>
                          <td>#{el.id}</td>
                          <td>{el.type}</td>
                          <td>--date</td>
                          <td>--status</td>
                          <td>--action</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td>Заявок на карту нет</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  )
                ) : (
                  <tr>
                    <td>Заявок на карту нет</td>
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
