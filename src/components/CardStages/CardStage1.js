// IMPORT MODULES
import React, { useState } from "react";

// IMPORT COMPONENTS
import CustomSelect from "../global/CustomSelect";

// IMPORT IMAGES
import credit from "../../images/credit-card.jpg";
import next from "../../icons/next.svg";

const CardStage1 = ({ setStage, data, setData }) => {
  const [inputValid, setInputValid] = useState(
    data.selected_card ? data.selected_card : false
  );
  return (
    <section className="card-stage-1">
      <form>
        <div className="input-block">
          <label htmlFor="card">Выберите вид карты</label>
          <CustomSelect
            items={["Зарплатная карта", "Кредитная карта"]}
            customId={"card"}
            blockName={"card-1-select"}
            elName={"card-1-select-el"}
            name={"card-type"}
            stateSetter={(e) => {
              setInputValid(e);
            }}
            eTarget={true}
            placeholder="Вид карты"
            defaultValue={inputValid}
          />
        </div>
        <div className="card-description">
          <div className="cd-top">
            <div className="cd-img">
              <img src={credit} alt="card" />
            </div>
            <div className="cd-text">
              <h2>HalkBank - Зарплатная карта</h2>
              <h3>
                Банковская карта, на которую зачисляется заработная плата
                клиента. Открывается на основании договора между банком и
                предприятием. Эта карта предоставляет полный перечень услуг по
                безналичному платежу в терминалах, перевод денежных средств с
                одной зарплатной карты на другую, а также получению наличных
                денежных средств в банкоматах на территории Туркменистана.
              </h3>
            </div>
          </div>
          <div className="cd-bottom">
            <div className="cd-bottom-content">
              <h3>Срок действия карты</h3>
              <h2>30 лет</h2>
            </div>
            <div className="cd-bottom-content">
              <h3>Процентная ставка</h3>
              <h2>0%</h2>
            </div>
            <div className="cd-bottom-content">
              <h3>Стоимость карты</h3>
              <h2>23 маната</h2>
            </div>
          </div>
        </div>
        <div className="card-button">
          <button
            type="button"
            disabled={!inputValid}
            type="button"
            className="sign-btn cd-btn"
            onClick={() => {
              setStage(2);
              setData({ ...data, selected_card: inputValid });
            }}
          >
            <div>
              <h3>Продолжить</h3>
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
