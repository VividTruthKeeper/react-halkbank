// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../backend/LanguageContext";

// IMPORT COMPONENTS
import CustomSelect from "../global/CustomSelect";

// IMPORT IMAGES
import credit from "../../images/credit-card.jpg";
import next from "../../icons/next.svg";

const CardStage1 = ({ setStage, data, setData, cardData, req, setReq }) => {
  const { locale } = useContext(LanguageContext);
  const [price, setPrice] = useState(0);
  const [input, setInput] = useState(
    data.selected_card ? data.selected_card : false
  );
  const [inputValid, setInputValid] = useState(
    data.selected_card_localized ? data.selected_card_localized : false
  );
  const [id, setId] = useState(1);
  const [img, setImg] = useState(credit);
  useEffect(() => {
    if (inputValid !== "" && cardData) {
      cardData.data.map((el) => {
        if (
          Object.values(el).includes(inputValid) ||
          Object.values(JSON.parse(el.translations[0].attribute_data)).includes(
            inputValid
          )
        ) {
          setId(el.id);
          setPrice(el.card_cost);
          setReq({
            ...req,
            TKM: el.documents,
            rus: JSON.parse(el.translations[0].attribute_data).documents,
          });
        }
      });
    }
  }, [inputValid]);

  useEffect(() => {
    if (cardData) {
      cardData.data.map((el) => {
        if (el.id === id) {
          setImg(el.image.path);
          setInput(el.name);
        }
      });
    }
  }, [id]);
  return (
    <section className="card-stage-1">
      <form>
        <div className="input-block">
          <label htmlFor="card">
            {locale === "TKM"
              ? "Kartyň görnüşini saýlaň"
              : "Выберите вид карты"}
          </label>
          <CustomSelect
            items={
              cardData
                ? locale !== "TKM"
                  ? cardData.data.map(
                      (el) => JSON.parse(el.translations[0].attribute_data).name
                    )
                  : cardData.data.map((el) => el.name)
                : [""]
            }
            customId={"card"}
            blockName={"card-1-select"}
            elName={"card-1-select-el"}
            name={"card-type"}
            stateSetter={(e) => {
              setInputValid(e);
            }}
            eTarget={true}
            placeholder={locale === "TKM" ? "Kartyň görnüşi" : "Вид карты"}
            defaultValue={inputValid}
          />
        </div>
        <div className="card-description">
          <div className="cd-top">
            <div className="cd-img">
              <img src={img} alt="card" />
            </div>
            <div className="cd-text">
              <h2>
                HalkBank -{" "}
                {cardData
                  ? locale !== "TKM"
                    ? cardData.data.map((el) =>
                        el.id === id
                          ? JSON.parse(el.translations[0].attribute_data).name
                          : ""
                      )
                    : cardData.data.map((el) => (el.id === id ? el.name : ""))
                  : locale === "TKM"
                  ? "Aýlyk karty"
                  : "Зарплатная карта"}
              </h2>
              <h3>
                {cardData
                  ? locale !== "TKM"
                    ? cardData.data.map((el) =>
                        el.id === id
                          ? JSON.parse(el.translations[0].attribute_data).text
                          : ""
                      )
                    : cardData.data.map((el) => (el.id === id ? el.text : ""))
                  : locale === "TKM"
                  ? "Müşderiniň bankymyzdan alan karz pul serişdeleri “Karz kartyna geçirilýär . Müşderi “Karz karty” bank karty üsti bilen ähli nagt däl hasaplaşyk töleglerini amala aşyrýar."
                  : "Банковская карта, на которую зачисляется заработная плата клиента. Открывается на основании договора между банком и предприятием. Эта карта предоставляет полный перечень услуг по безналичному платежу в терминалах, перевод денежных средств с одной зарплатной карты на другую, а также получению наличных денежных средств в банкоматах на территории Туркменистана."}
              </h3>
            </div>
          </div>
          <div className="cd-bottom">
            <div className="cd-bottom-content">
              <h3>
                {locale === "TKM" ? "Kartyň möhleti" : "Срок действия карты"}
              </h3>
              <h2>
                {cardData
                  ? cardData.data.map((el) => {
                      if (el.id === id) {
                        if (el.term === 1 || el.term === "1") {
                          return `${el.term} ${
                            locale === "TKM" ? "ýyl" : "год"
                          }`;
                        } else if (
                          el.term === 2 ||
                          el.term === "2" ||
                          el.term === 3 ||
                          el.term === "3" ||
                          el.term === 4 ||
                          el.term === "4"
                        ) {
                          return `${el.term} ${
                            locale === "TKM" ? "ýyl" : "года"
                          }`;
                        } else {
                          return `${el.term} ${
                            locale === "TKM" ? "ýyl" : "лет"
                          }`;
                        }
                      }
                    })
                  : "30"}
              </h2>
            </div>
            <div className="cd-bottom-content">
              <h3>{locale === "TKM" ? "Göterim" : "Процентная ставка"}</h3>
              <h2>
                {" "}
                {cardData
                  ? cardData.data.map((el) =>
                      el.id === id ? el.interest_rate : ""
                    )
                  : "0"}{" "}
                %
              </h2>
            </div>
            <div className="cd-bottom-content">
              <h3>{locale === "TKM" ? "Kartyň bahasy" : "Стоимость карты"}</h3>
              <h2>
                {" "}
                {cardData
                  ? cardData.data.map((el) =>
                      el.id === id ? el.card_cost : ""
                    )
                  : "23"}{" "}
                {locale === "TKM" ? "manat" : "маната"}
              </h2>
            </div>
          </div>
        </div>
        <div className="card-button">
          <button
            type="button"
            disabled={!inputValid}
            className="sign-btn cd-btn"
            onClick={() => {
              setStage(2);
              setData({
                ...data,
                selected_card: input,
                selected_card_localized: inputValid,
                price: price,
              });
            }}
          >
            <div>
              <h3>{locale === "TKM" ? "Dowam et" : "Продолжить"}</h3>
              <div className="btn-img">
                <img src={next} alt="logout" />
              </div>
            </div>
          </button>
        </div>
      </form>
    </section>
  );
};

export default CardStage1;
