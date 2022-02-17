// IMPORT MODULES
import React from "react";

// IMPORT IMAGES
import exit from "../../icons/exit.svg";

const ModalForm = ({ modalOpen, setModalOpen }) => {
  return (
    <section className={modalOpen ? "modal active" : "modal"}>
      <div className="modal-container">
        <div className="modal-inner">
          <div className="modal-window">
            <div className="modal-top">
              <h2>Онлайн заявка для получения карты</h2>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalForm;
