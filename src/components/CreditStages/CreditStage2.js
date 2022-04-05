// IMPORT MODULES
import React, { useState, useEffect, useRef, useContext } from "react";
import { LanguageContext } from "../../backend/LanguageContext";

// IMPORT IMAGES
import minus from "../../icons/minus.svg";
import plus from "../../icons/plus.svg";
import minus2 from "../../icons/minus-white.svg";
import plus2 from "../../icons/plus-white.svg";
import next from "../../icons/next.svg";
import logo from "../../icons/logo-transp.svg";

// IMPORT IMAGES
import next_reverse from "../../icons/next-reverse.svg";

const CreditStage2 = ({ setStage, data, setData, creditData, id }) => {
  const { locale } = useContext(LanguageContext);
  const [max, setMax] = useState(6000);
  const [bet, setBet] = useState(1);
  const [inputValue, setInputValue] = useState(max / 2);
  const [radio, setRadio] = useState(1);
  const [monthlyPayment, setMonthlyPayment] = useState(
    (
      inputValue / (radio * 12) +
      (inputValue / (radio * 12)) * (bet / 100)
    ).toFixed(2)
  );
  useEffect(() => {
    setMonthlyPayment(
      (
        inputValue / (radio * 12) +
        (inputValue / (radio * 12)) * (bet / 100)
      ).toFixed(2)
    );
  }, [inputValue, radio]);

  useEffect(() => {
    setInputValue(max / 2);
  }, [max]);

  useEffect(() => {
    input.current.value = inputValue;
  }, [inputValue]);

  useEffect(() => {
    if (creditData) {
      creditData.data.map((el) => {
        if (el.id === id) {
          setBet(el.bet);
          setMax(el.sum);
        }
      });
    }
  }, [creditData]);
  const input = useRef();
  return (
    <section className="cs-2">
      <form>
        <div className="cs-2-left">
          <h2 className="cs-2-title">
            {locale === "TUK" ? "Karzyň kalkulýatory" : "Калькулятор кредита"}
          </h2>
          <div className="input-block">
            <label htmlFor="sum">
              {locale === "TUK" ? "Karzyň möçberi" : "Сумма кредита"}
            </label>
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
                <h6>{Math.ceil(inputValue)}</h6>
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
                min="100"
                max={max}
                defaultValue={inputValue}
                ref={input}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="credit-term input-block">
            <label>
              {locale === "TUK" ? "Karzyň möhleti" : "Срок кредита"}
            </label>
            <div className="term-inputs">
              <label htmlFor="term2" className={radio === 1 ? "active" : ""}>
                1 {locale === "TUK" ? "ýyl" : "год"}
                <input
                  type="radio"
                  name="term"
                  id="term2"
                  onClick={(e) => {
                    if (e.target.checked === true) {
                      setRadio(1);
                    }
                  }}
                />
              </label>
              <label htmlFor="term3" className={radio === 2 ? "active" : ""}>
                2 {locale === "TUK" ? "ýyl" : "год"}
                <input
                  type="radio"
                  name="term"
                  id="term3"
                  onClick={(e) => {
                    if (e.target.checked === true) {
                      setRadio(2);
                    }
                  }}
                />
              </label>
              <label htmlFor="term4" className={radio === 3 ? "active" : ""}>
                3 {locale === "TUK" ? "ýyl" : "года"}
                <input
                  type="radio"
                  name="term"
                  id="term4"
                  onClick={(e) => {
                    if (e.target.checked === true) {
                      setRadio(3);
                    }
                  }}
                />
              </label>
            </div>
          </div>
          <div className="card-button cs-2-bottom">
            <button
              type="button"
              className="sign-btn reg-btn"
              onClick={() => {
                setStage(1);
              }}
            >
              <div>
                <div className="btn-img">
                  <img src={next_reverse} alt="logout" />
                </div>
                <h3
                  onClick={() => {
                    setStage(1);
                  }}
                >
                  {locale === "TUK" ? "Yza" : "Назад"}
                </h3>
              </div>
            </button>
            <button
              type="button"
              className="sign-btn cd-btn"
              onClick={() => {
                setData({ ...data, inputValue: inputValue });
                setStage(3);
              }}
            >
              <div>
                <h3>{locale === "TUK" ? "Dowam et" : "Продолжить"}</h3>
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
              <h6>
                {locale === "TUK" ? "Her aý tölegi" : "Ежемесячный платеж"}
              </h6>
              <div className="payment">
                <div
                  className="data-img"
                  onClick={() => {
                    if (
                      ((parseInt(monthlyPayment) - 1) * radio * 12) /
                        (1 + bet / 100) >
                      100
                    ) {
                      setInputValue(
                        ((parseInt(monthlyPayment) - 1) * radio * 12) /
                          (1 + bet / 100)
                      );
                    }
                  }}
                >
                  <img src={minus2} alt="minus" />
                </div>
                <h5>{monthlyPayment} TMT</h5>
                <div
                  className="data-img"
                  onClick={() => {
                    if (
                      ((parseInt(monthlyPayment) + 1) * radio * 12) /
                        (1 + bet / 100) <
                      max
                    ) {
                      setInputValue(
                        ((parseInt(monthlyPayment) + 1) * radio * 12) /
                          (1 + bet / 100)
                      );
                    }
                  }}
                >
                  <img src={plus2} alt="plus" />
                </div>
              </div>
              <div className="percent">
                <h6>
                  {locale === "TUK" ? "Göterim töleg" : "Процентная ставка"}
                </h6>
                <h5>{bet} %</h5>
              </div>
            </div>
            <div className="cs-2-right-middle">
              <div className="cs-2-right-middle-content">
                <h6>{locale === "TUK" ? "Pul ýygymy" : "Процентный платеж"}</h6>
                <h5>
                  {((inputValue / (radio * 12)) * (bet / 100)).toFixed(2)} TMT
                </h5>
              </div>
              <div className="cs-2-right-middle-content">
                <h6>
                  {locale === "TUK"
                    ? "Karzyň esasy bergisiniň töleg möçberi:"
                    : "Платеж для погашения основной суммы"}
                  :
                </h6>
                <h5>{(inputValue / (radio * 12)).toFixed(2)} TMT</h5>
              </div>
            </div>
            <div className="cs-2-right-bottom">
              <h6>
                {locale === "TUK"
                  ? "Karz almak üçin bolmaly aýlyk zähmet haky"
                  : "Необходимая заработная плата для кредита"}
                :
              </h6>
              <h5>{monthlyPayment * 2} TMT</h5>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreditStage2;
