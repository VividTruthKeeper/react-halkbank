// IMPORT MODULES
import React from "react";

// IMPORT IMAGES
import exit from "../../icons/exit.svg";
import { ReactComponent as Lines } from "../../icons/lines.svg";
import { ReactComponent as Img1 } from "../../icons/credit1.svg";
import { ReactComponent as Img2 } from "../../icons/credit2.svg";
import { ReactComponent as Img3 } from "../../icons/credit3.svg";
import { ReactComponent as Img4 } from "../../icons/credit4.svg";
import { ReactComponent as Img5 } from "../../icons/credit5.svg";
import { ReactComponent as Img6 } from "../../icons/credit6.svg";

// IMPORT COMPONENTS
import CreditStage1 from "../CreditStages/CreditStage1";
import CreditStage2 from "../CreditStages/CreditStage2";

const CreditModal = ({ modalOpen, setModalOpen, stage, setStage }) => {
  return (
    <section
      className={modalOpen ? "modal credit-modal active" : "modal credit-modal"}
    >
      <div className="modal-container">
        <div className="modal-inner">
          <div className="modal-window">
            <div className="modal-top">
              <h2>Онлайн заявка для получения кредита</h2>
              <button
                type="button"
                className="exit-btn"
                onClick={() => {
                  setModalOpen(false);
                }}
              >
                <div>
                  <img src={exit} alt="exit" />
                </div>
              </button>
            </div>
            <div className="modal-middle">
              <div className="icon-block active">
                <Img1 className="modal-icon" />
                <h3 className="icon-title">Выберите вид карты</h3>
              </div>
              <div className={stage > 1 ? "line-block active" : "line-block"}>
                <Lines className="lines" />
                <Lines className="lines" />
              </div>
              <div className={stage > 1 ? "icon-block active" : "icon-block"}>
                <Img2 className="modal-icon" />
                <h3 className="icon-title">Личные данные</h3>
              </div>
              <div className={stage > 2 ? "line-block active" : "line-block"}>
                <Lines className="lines" />
                <Lines className="lines" />
              </div>
              <div className={stage > 2 ? "icon-block active" : "icon-block"}>
                <Img3 className="modal-icon" />
                <h3 className="icon-title">Данные для карты</h3>
              </div>
              <div className={stage > 3 ? "line-block active" : "line-block"}>
                <Lines className="lines" />
                <Lines className="lines" />
              </div>
              <div className={stage > 3 ? "icon-block active" : "icon-block"}>
                <Img4 className="modal-icon" />
                <h3 className="icon-title">Требования и документы</h3>
              </div>
              <div className={stage > 4 ? "line-block active" : "line-block"}>
                <Lines className="lines" />
                <Lines className="lines" />
              </div>
              <div className={stage > 4 ? "icon-block active" : "icon-block"}>
                <Img5 className="modal-icon" />
                <h3 className="icon-title">Оплата</h3>
              </div>
              <div className={stage > 5 ? "line-block active" : "line-block"}>
                <Lines className="lines" />
                <Lines className="lines" />
              </div>
              <div className={stage > 5 ? "icon-block active" : "icon-block"}>
                <Img6 className="modal-icon" />
                <h3 className="icon-title">Отправка</h3>
              </div>
            </div>
            <div className="modal-bottom">
              {stage === 1 ? (
                <CreditStage1 setStage={setStage} />
              ) : stage === 2 ? (
                <CreditStage2 setStage={setStage} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditModal;
