// IMPORT MODULES
import React, { useRef, useState } from "react";

// IMPORT IMAGES
import exit from "../../icons/exit.svg";
import { ReactComponent as Lines } from "../../icons/lines.svg";
import { ReactComponent as Img1 } from "../../icons/credit1.svg";
import { ReactComponent as Img2 } from "../../icons/credit2.svg";
import { ReactComponent as Img3 } from "../../icons/credit3.svg";
import { ReactComponent as Img4 } from "../../icons/credit4.svg";
import { ReactComponent as Img5 } from "../../icons/credit5.svg";
import { ReactComponent as Img6 } from "../../icons/credit6.svg";

// IMPORT HELPERS
import { handleOutClick } from "../../helpers/handleOutClick";

// IMPORT COMPONENTS
import CreditStage1 from "../CreditStages/CreditStage1";
import CreditStage2 from "../CreditStages/CreditStage2";
import CreditStage3 from "../CreditStages/CreditStage3";
import CreditStage4 from "../CreditStages/CreditStage4";
import CreditStage5 from "../CreditStages/CreditStage5";
import CreditStage6 from "../CreditStages/CreditStage6";

const CreditModal = ({
  modalOpen,
  setModalOpen,
  stage,
  setStage,
  setLoader,
}) => {
  const window = useRef();
  const [data, setData] = useState({});
  return (
    <section
      className={modalOpen ? "modal credit-modal active" : "modal credit-modal"}
      onClick={(e) => {
        if (handleOutClick(e.target, window.current)) {
          setModalOpen(false);
        }
      }}
    >
      <div className="modal-container">
        <div className="modal-inner" ref={window}>
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
                <h3 className="icon-title">Выберите вид кредита</h3>
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
                <h3 className="icon-title">Данные для кредита</h3>
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
                <h3 className="icon-title">Требования для кредита</h3>
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
            <div className="modal-middle modal-middle-mobile">
              {stage === 1 ? (
                <div className="icon-block active">
                  <Img1 className="modal-icon" />
                  <h3 className="icon-title">Выберите вид кредита</h3>
                </div>
              ) : stage === 2 ? (
                <div className="icon-block active">
                  <Img2 className="modal-icon" />
                  <h3 className="icon-title">Личные данные</h3>
                </div>
              ) : stage === 3 ? (
                <div className="icon-block active">
                  <Img3 className="modal-icon" />
                  <h3 className="icon-title">Данные для кредита</h3>
                </div>
              ) : stage === 4 ? (
                <div className="icon-block active">
                  <Img4 className="modal-icon" />
                  <h3 className="icon-title">Требования и документы</h3>
                </div>
              ) : stage === 5 ? (
                <div className="icon-block active">
                  <Img5 className="modal-icon" />
                  <h3 className="icon-title">Требования для кредита</h3>
                </div>
              ) : stage === 6 ? (
                <div className="icon-block active">
                  <Img6 className="modal-icon" />
                  <h3 className="icon-title">Отправка</h3>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="modal-bottom">
              {stage === 1 ? (
                <CreditStage1
                  setStage={setStage}
                  data={data}
                  setData={setData}
                />
              ) : stage === 2 ? (
                <CreditStage2
                  setStage={setStage}
                  data={data}
                  setData={setData}
                />
              ) : stage === 3 ? (
                <CreditStage3
                  setStage={setStage}
                  data={data}
                  setData={setData}
                />
              ) : stage === 4 ? (
                <CreditStage4
                  setStage={setStage}
                  data={data}
                  setData={setData}
                />
              ) : stage === 5 ? (
                <CreditStage5
                  setStage={setStage}
                  data={data}
                  setData={setData}
                />
              ) : stage === 6 ? (
                <CreditStage6
                  setStage={setStage}
                  data={data}
                  setData={setData}
                  setModalOpen={setModalOpen}
                  setLoader={setLoader}
                />
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
