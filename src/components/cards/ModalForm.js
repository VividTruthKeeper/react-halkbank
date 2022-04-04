// IMPORT MODULES
import React, { useState, useRef, useEffect, useContext } from "react";
import { LanguageContext } from "../../backend/LanguageContext";
import axios from "axios";

// IMPORT IMAGES
import exit from "../../icons/exit.svg";
import { ReactComponent as Card } from "../../icons/card-choice.svg";
import { ReactComponent as Document } from "../../icons/document-text.svg";
import { ReactComponent as Edit } from "../../icons/edit.svg";
import { ReactComponent as Note } from "../../icons/note.svg";
import { ReactComponent as Receipt } from "../../icons/receipt.svg";
import { ReactComponent as Task } from "../../icons/task.svg";
import { ReactComponent as Lines } from "../../icons/lines.svg";

// IMPORT COMPONENTS
import CardStage1 from "../CardStages/CardStage1";
import CardStage2 from "../CardStages/CardStage2";
import CardStage3 from "../CardStages/CardStage3";
import CardStage4 from "../CardStages/CardStage4";
import CardStage6 from "../CardStages/CardStage6";

// IMPORT HELPERS
import { dataDestination } from "../../destinationUrl";

const ModalForm = ({
  modalOpen,
  setModalOpen,
  stage,
  setStage,
  setLoader,
  setSuccess,
  setError,
}) => {
  const window = useRef();
  const { locale } = useContext(LanguageContext);
  const [data, setData] = useState({});
  const [cardData, setCardData] = useState();

  useEffect(() => {
    let isMounted = true;
    axios
      .get(`${dataDestination}/card_data`)
      .then((res) => {
        if (isMounted) {
          setCardData(res.data);
          console.log(res.data);
        }
      })
      .catch();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className={modalOpen ? "modal active" : "modal"}>
      <div className="modal-container">
        <div className="modal-inner" ref={window}>
          <div className="modal-window">
            <div className="modal-top">
              <h2>
                {locale === "TUK"
                  ? "Kart almak üçin onlaýn-ýüzlenme"
                  : "Онлайн-заявка для получения карты"}
              </h2>
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
                <Card className="modal-icon" />
                <h3 className="icon-title">
                  {locale === "TUK"
                    ? "Kartyň görnüşini saýlaň"
                    : "Выберите вид карты"}
                </h3>
              </div>
              <div className={stage > 1 ? "line-block active" : "line-block"}>
                <Lines className="lines" />
                <Lines className="lines" />
              </div>
              <div className={stage > 1 ? "icon-block active" : "icon-block"}>
                <Document className="modal-icon" />
                <h3 className="icon-title">
                  {locale === "TUK" ? "Şahsy maglumatlar" : "Личные данные"}
                </h3>
              </div>
              <div className={stage > 2 ? "line-block active" : "line-block"}>
                <Lines className="lines" />
                <Lines className="lines" />
              </div>
              <div className={stage > 2 ? "icon-block active" : "icon-block"}>
                <Edit className="modal-icon" />
                <h3 className="icon-title">
                  {locale === "TUK"
                    ? "Kart üçin maglumatlar"
                    : "Данные для карты"}
                </h3>
              </div>
              <div className={stage > 3 ? "line-block active" : "line-block"}>
                <Lines className="lines" />
                <Lines className="lines" />
              </div>
              <div className={stage > 3 ? "icon-block active" : "icon-block"}>
                <Note className="modal-icon" />
                <h3 className="icon-title">
                  {locale === "TUK"
                    ? "Talaplar we resminamalar"
                    : "Требования и документы"}
                </h3>
              </div>
              <div className={stage > 4 ? "line-block active" : "line-block"}>
                <Lines className="lines" />
                <Lines className="lines" />
              </div>
              <div className={stage > 4 ? "icon-block active" : "icon-block"}>
                <Task className="modal-icon" />
                <h3 className="icon-title">
                  {locale === "TUK" ? "Ugratmak" : "Отправка"}
                </h3>
              </div>
              <div className={stage > 5 ? "line-block active" : "line-block"}>
                <Lines className="lines" />
                <Lines className="lines" />
              </div>
              <div className={stage > 5 ? "icon-block active" : "icon-block"}>
                <Receipt className="modal-icon" />
                <h3 className="icon-title">
                  {locale === "TUK" ? "Töleg" : "Оплата"}
                </h3>
              </div>
            </div>
            <div className="modal-middle modal-middle-mobile">
              {stage === 1 ? (
                <div className="icon-block active">
                  <Card className="modal-icon" />
                  <h3 className="icon-title">
                    {locale === "TUK"
                      ? "Kartyň görnüşini saýlaň"
                      : "Выберите вид карты"}
                  </h3>
                </div>
              ) : stage === 2 ? (
                <div className="icon-block active">
                  <Document className="modal-icon" />
                  <h3 className="icon-title">
                    {locale === "TUK" ? "Şahsy maglumatlar" : "Личные данные"}
                  </h3>
                </div>
              ) : stage === 3 ? (
                <div className="icon-block active">
                  <Edit className="modal-icon" />
                  <h3 className="icon-title">
                    {locale === "TUK"
                      ? "Kart üçin maglumatlar"
                      : "Данные для карты"}
                  </h3>
                </div>
              ) : stage === 4 ? (
                <div className="icon-block active">
                  <Note className="modal-icon" />
                  <h3 className="icon-title">
                    {locale === "TUK"
                      ? "Talaplar we resminamalar"
                      : "Требования и документы"}
                  </h3>
                </div>
              ) : stage === 5 ? (
                <div className="icon-block active">
                  <Task className="modal-icon" />
                  <h3 className="icon-title">
                    {locale === "TUK" ? "Ugratmak" : "Отправка"}
                  </h3>
                </div>
              ) : stage === 6 ? (
                <div className="icon-block active">
                  <Receipt className="modal-icon" />
                  <h3 className="icon-title">
                    {locale === "TUK" ? "Töleg" : "Оплата"}
                  </h3>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="modal-bottom">
              {stage === 1 ? (
                <CardStage1
                  setStage={setStage}
                  data={data}
                  setData={setData}
                  cardData={cardData}
                />
              ) : stage === 2 ? (
                <CardStage2 setStage={setStage} data={data} setData={setData} />
              ) : stage === 3 ? (
                <CardStage3 setStage={setStage} data={data} setData={setData} />
              ) : stage === 4 ? (
                <CardStage4 setStage={setStage} data={data} setData={setData} />
              ) : stage === 5 ? (
                <CardStage6
                  setStage={setStage}
                  data={data}
                  setData={setData}
                  setLoader={setLoader}
                  setModalOpen={setModalOpen}
                  setSuccess={setSuccess}
                  setError={setError}
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

export default ModalForm;
