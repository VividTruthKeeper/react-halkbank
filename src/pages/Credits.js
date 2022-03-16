// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../backend/UserContext";

// IMPORT COMPONENTS
import Breadcrumb from "../components/global/Breadcrumb";
import CreditModal from "../components/credits/CreditModal";
import Loader from "../components/global/Loader";

// IMPORT IMAGES
import credit from "../icons/credit-black.svg";
import add from "../icons/add.svg";

const Credits = () => {
  const { user } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [stage, setStage] = useState(1);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [modalOpen]);

  return (
    <section className="cards">
      <Breadcrumb image={credit} link={"/home/credits"} linkTitle={"Кредиты"} />
      <CreditModal
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        stage={stage}
        setStage={setStage}
        loader={loader}
        setLoader={setLoader}
      />
      {loader ? <Loader /> : null}
      <div className="container">
        <div className="cards-inner">
          <div className="card-title">
            <h2 className="cards-title">Онлайн-заявка для получения кредита</h2>
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
              <h3>Заполнить заявку</h3>
            </button>
          </div>
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
