// IMPORT MODULES
import React from "react";

// IMPORT COMPONENTS
import Breadcrumb from "../components/global/Breadcrumb";

// IMPORT IMAGES
import card from "../icons/card-black.svg";
import add from "../icons/add.svg";

const Cards = () => {
  return (
    <section className="cards">
      <Breadcrumb
        image={card}
        link={"/home/cards"}
        linkTitle={"Пластиковые карты"}
      />
      <div className="container">
        <div className="cards-inner">
          <div className="card-title">
            <h2 className="cards-title">Онлайн-заявка для получения карты</h2>
            <button type="button" className="card-btn sign-btn">
              <div className="card-img">
                <img src={add} alt="add" />
              </div>
              <h3>Заполнить заявку</h3>
            </button>
          </div>
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

export default Cards;