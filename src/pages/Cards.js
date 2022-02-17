// IMPORT MODULES
import React, { useState, useEffect } from "react";

// IMPORT COMPONENTS
import Breadcrumb from "../components/global/Breadcrumb";
import ModalForm from "../components/cards/ModalForm";

// IMPORT IMAGES
import card from "../icons/card-black.svg";
import add from "../icons/add.svg";

const Cards = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [modalOpen]);
  return (
    <section className="cards">
      <Breadcrumb
        image={card}
        link={"/home/cards"}
        linkTitle={"Пластиковые карты"}
      />
      <ModalForm setModalOpen={setModalOpen} modalOpen={modalOpen} />
      <div className="container">
        <div className="cards-inner">
          <div className="card-title">
            <h2 className="cards-title">Онлайн-заявка для получения карты</h2>
            <button
              type="button"
              className="card-btn sign-btn"
              onClick={() => {
                setModalOpen(true);
              }}
            >
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
