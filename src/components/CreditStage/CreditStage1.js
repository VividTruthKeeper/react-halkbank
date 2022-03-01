// IMPORT MODULES
import React, { useState, useEffect } from "react";

// IMPORT COMPONENTS
import CustomSelect from "../global/CustomSelect";

// IMPORT IMAGES
import arrow from "../../icons/arrow.svg";

const CreditStage1 = ({ setStage }) => {
  const [input, setInput] = useState(undefined);
  const [btn, setBtn] = useState(false);
  const [dropdown, setDropdown] = useState({
    one: true,
    two: false,
  });
  return (
    <section className="cs-1">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="cs-1-top">
          <label htmlFor="credit-type">Выберите вид кредита</label>
          <CustomSelect
            items={["Кредит для молодоженов"]}
            customId={"credit-type"}
            name={"credit-type"}
            blockName={"cs-1-top-block"}
            elName={"cs-1-top-input"}
            eTarget={true}
            placeholder={"Кредит для молодоженов"}
            stateSetter={(e) => {
              setInput(e);
            }}
          />
        </div>
        <div className="cs-1-middle">
          <div
            className="data-block term"
            onClick={() => {
              setDropdown({ ...dropdown, one: !dropdown.one });
            }}
          >
            <div className="data-title">
              <h4>Информация о сроке кредита</h4>
              <div className="data-img">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div
              className={
                dropdown.one ? "data-dropdown active" : "data-dropdown"
              }
            >
              <div className="dropdown-inner bottom">
                <h6>Срок</h6>
                <h2>до 3 лет</h2>
              </div>
              <div className="dropdown-inner left right bottom">
                <h6>Сумма кредита</h6>
                <h2>до 6000 манат</h2>
              </div>
              <div className="dropdown-inner bottom">
                <h6>Ставка</h6>
                <h2>1 %</h2>
              </div>
              <div className="dropdown-inner ">
                <h6>Обеспечение возврата кредита</h6>
                <h2>2 поручителя</h2>
              </div>
              <div className="dropdown-inner left right">
                <h6>Источник погашения кредита</h6>
                <h2>
                  50% от зарплаты заемщика и поручителя для погашения кредита и
                  процентов по нему (или 50% от общего семейного)
                </h2>
              </div>
              <div className="dropdown-inner">
                <h6>Способ погашения</h6>
                <h2>Наличным или безналичным способом</h2>
              </div>
            </div>
          </div>
          <div className="data-block docs"></div>
        </div>
        <div className="cs-1-bottom"></div>
      </form>
    </section>
  );
};

export default CreditStage1;
