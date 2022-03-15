// IMPORT MODULES
import React, { useState, useRef } from "react";

// IMPORT IMAGES
import minus from "../../icons/minus.svg";
import plus from "../../icons/plus.svg";
import minus2 from "../../icons/minus-white.svg";
import plus2 from "../../icons/plus-white.svg";
import next from "../../icons/next.svg";
import logo from "../../icons/logo-transp.svg";

// IMPORT COMPONENTS

const CreditStage2 = ({ setStage, formData }) => {
  const [inputValue, setInputValue] = useState(3000);
  const [radio, setRadio] = useState(1);
  const [
    monthlyPayment,
    //  setMonthlyPayment
  ] = useState(252.5);
  const input = useRef();
  return (
    <section className="cs-2">
      <form>
        <div className="cs-2-left">
          <h2 className="cs-2-title">Калькулятор кредита</h2>
          <div className="input-block">
            <label htmlFor="sum">Сумма кредита</label>
            <div className="cs-2-input">
              <div className="input-data">
                <div
                  className="data-img"
                  onClick={() => {
                    input.current.stepDown(1);
                    setInputValue(input.current.value);
                  }}
                >
                  <img src={minus} alt="minus" />
                </div>
                <h6>{inputValue}</h6>
                <div
                  className="data-img"
                  onClick={() => {
                    input.current.stepUp(1);
                    setInputValue(input.current.value);
                  }}
                >
                  <img src={plus} alt="minus" />
                </div>
              </div>
              <input
                type="range"
                id="sum"
                min="1"
                max="6000"
                ref={input}
                defaultValue={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="credit-term input-block">
            <label>Срок кредита</label>
            <div className="term-inputs">
              <label htmlFor="term1" className={radio === 1 ? "active" : ""}>
                6 месяцев
                <input
                  type="radio"
                  name="term"
                  id="term1"
                  onClick={(e) => {
                    if (e.target.checked === true) {
                      setRadio(1);
                    }
                  }}
                />
              </label>
              <label htmlFor="term2" className={radio === 2 ? "active" : ""}>
                1 год
                <input
                  type="radio"
                  name="term"
                  id="term2"
                  onClick={(e) => {
                    if (e.target.checked === true) {
                      setRadio(2);
                    }
                  }}
                />
              </label>
              <label htmlFor="term3" className={radio === 3 ? "active" : ""}>
                2 год
                <input
                  type="radio"
                  name="term"
                  id="term3"
                  onClick={(e) => {
                    if (e.target.checked === true) {
                      setRadio(3);
                    }
                  }}
                />
              </label>
              <label htmlFor="term4" className={radio === 4 ? "active" : ""}>
                3 года
                <input
                  type="radio"
                  name="term"
                  id="term4"
                  onClick={(e) => {
                    if (e.target.checked === true) {
                      setRadio(4);
                    }
                  }}
                />
              </label>
            </div>
          </div>
          <div className="card-button cs-2-bottom">
            <button
              type="button"
              className="sign-btn cd-btn"
              onClick={() => {
                setStage(3);
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
        </div>
        <div className="cs-2-right">
          <div className="cs-2-right-inner">
            <div className="abs-img">
              <img src={logo} alt="logo" />
            </div>
            <div className="cs-2-right-top">
              <h6>Ежемесячный платеж</h6>
              <div className="payment">
                <div className="data-img">
                  <img src={minus2} alt="minus" />
                </div>
                <h5>{monthlyPayment} TMT</h5>
                <div className="data-img">
                  <img src={plus2} alt="plus" />
                </div>
              </div>
              <div className="percent">
                <h6>Процентная ставка</h6>
                <h5>1 %</h5>
              </div>
            </div>
            <div className="cs-2-right-middle">
              <div className="cs-2-right-middle-content">
                <h6>Процентный платеж</h6>
                <h5>2.50 TMT</h5>
              </div>
              <div className="cs-2-right-middle-content">
                <h6>Платеж для погашения основной суммы:</h6>
                <h5>250.00 TMT</h5>
              </div>
            </div>
            <div className="cs-2-right-bottom">
              <h6>Необходимая заработная плата для кредита:</h6>
              <h5>505.00 TMT</h5>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreditStage2;
