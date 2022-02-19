// IMPORT MODULES
import React, { useEffect } from "react";

// IMPORT COMPONENTS
import Breadcrumb from "../components/global/Breadcrumb";

const Base = () => {
  return (
    <section className="cards">
      <Breadcrumb />
      <div className="container">
        <div className="cards-inner">
          <h2 className="cards-title">
            Добро пожаловать, <span id="user">Aman Amanow</span>
          </h2>
          <table className="home-table">
            <tbody>
              <tr className="table-head">
                <th>ID</th>
                <th>Тип</th>
                <th>Дата</th>
                <th>Статус</th>
                <th>Действие</th>
              </tr>
              <tr>
                <td>Заявок на карту нет</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Base;
