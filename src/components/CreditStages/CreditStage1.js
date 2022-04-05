// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../backend/LanguageContext";

// IMPORT COMPONENTS
import CustomSelect from "../global/CustomSelect";

// IMPORT IMAGES
import arrow from "../../icons/arrow.svg";
import next from "../../icons/next.svg";

const CreditStage1 = ({ setStage, data, setData, creditData, id, setId }) => {
  const { locale } = useContext(LanguageContext);
  const [input, setInput] = useState(data.type ? data.type : null);
  const [dropdown, setDropdown] = useState({
    one: true,
    two: false,
  });

  useEffect(() => {
    if (input !== "" && creditData) {
      creditData.data.map((el) => {
        if (
          Object.values(el).includes(input) ||
          Object.values(
            JSON.parse(
              el.translations.find((els) => els.locale === "ru").attribute_data
            )
          ).includes(input)
        ) {
          setId(el.id);
        }
      });
    }
  }, [input]);
  return (
    <section className="cs-1">
      <form>
        <div className="cs-1-top">
          <label htmlFor="credit-type">
            {locale === "TUK"
              ? "Karzyň görnüşini saýlaň"
              : "Выберите вид кредита"}
          </label>
          <CustomSelect
            items={
              creditData
                ? locale !== "TUK"
                  ? creditData.data
                      .map((el) =>
                        JSON.parse(
                          el.translations.find((els) => els.locale === "ru")
                            .attribute_data
                        )
                      )
                      .map((item) => item.name)
                  : creditData.data.map((el) => el.name)
                : [""]
            }
            customId={"credit-type"}
            name={"credit-type"}
            blockName={"cs-1-top-block"}
            elName={"cs-1-top-input"}
            eTarget={true}
            placeholder={locale === "TUK" ? "Karzyň görnüşi" : "Вид кредита"}
            stateSetter={(e) => {
              setInput(e);
            }}
            defaultValue={input}
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
              <h4>
                {locale === "TUK"
                  ? "Karzyň möhleti barada maglumat"
                  : "Информация о сроке кредита"}
              </h4>
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
                <h6>{locale === "TUK" ? "Karzyň möhleti " : "Срок кредита"}</h6>
                <h2>
                  {locale === "TUK" ? "" : "до"}{" "}
                  {creditData
                    ? creditData.data.map((el) => (el.id === id ? el.term : ""))
                    : ""}{" "}
                  {locale === "TUK" ? "ýyla çenli" : "лет"}
                </h2>
              </div>
              <div className="dropdown-inner left right bottom">
                <h6>{locale === "TUK" ? "Karzyň möçberi" : "Сумма кредита"}</h6>
                <h2>
                  {creditData
                    ? creditData.data.map((el) => (el.id === id ? el.sum : ""))
                    : ""}
                </h2>
              </div>
              <div className="dropdown-inner bottom">
                <h6>{locale === "TUK" ? "Göterim" : "Ставка"}</h6>
                <h2>
                  {creditData
                    ? creditData.data.map((el) => (el.id === id ? el.bet : ""))
                    : ""}{" "}
                  %
                </h2>
              </div>
              <div className="dropdown-inner ">
                <h6>
                  {locale === "TUK"
                    ? "Karzyň üzülmegini üpjün etmek"
                    : "Обеспечение возврата кредита"}
                </h6>
                <h2>
                  {creditData
                    ? locale !== "TUK"
                      ? creditData.data.map((el) =>
                          el.id === id
                            ? JSON.parse(
                                el.translations.find(
                                  (els) => els.locale === "ru"
                                ).attribute_data
                              ).securing_return
                            : ""
                        )
                      : creditData.data.map((el) =>
                          el.id === id ? el.securing_return : ""
                        )
                    : ""}
                </h2>
              </div>
              <div className="dropdown-inner left right">
                <h6>
                  {locale === "TUK"
                    ? "Karzy üzmegiň çeşmesi"
                    : "Источник погашения кредита"}
                </h6>
                <h2>
                  {creditData
                    ? locale !== "TUK"
                      ? creditData.data.map((el) =>
                          el.id === id
                            ? JSON.parse(
                                el.translations.find(
                                  (els) => els.locale === "ru"
                                ).attribute_data
                              ).source_of_repayment
                            : ""
                        )
                      : creditData.data.map((el) =>
                          el.id === id ? el.source_of_repayment : ""
                        )
                    : ""}
                </h2>
              </div>
              <div className="dropdown-inner">
                <h6>
                  {locale === "TUK"
                    ? "Karzy üzmegiň usuly"
                    : "Способ погашения"}
                </h6>
                <h2>
                  {" "}
                  {creditData
                    ? locale !== "TUK"
                      ? creditData.data.map((el) =>
                          el.id === id
                            ? JSON.parse(
                                el.translations.find(
                                  (els) => els.locale === "ru"
                                ).attribute_data
                              ).repayment_method
                            : ""
                        )
                      : creditData.data.map((el) =>
                          el.id === id ? el.repayment_method : ""
                        )
                    : ""}
                </h2>
              </div>
            </div>
          </div>
          <div
            className="data-block docs"
            onClick={() => {
              setDropdown({ ...dropdown, two: !dropdown.two });
            }}
          >
            <div className="data-title">
              <h4>
                {locale === "TUK"
                  ? "Talaplar we resminamalar"
                  : "Требования и документы"}
              </h4>
              <div className="data-img">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div
              className={
                dropdown.two
                  ? "data-dropdown docs active"
                  : "data-dropdown docs"
              }
            >
              <h5>Lorem ipsum dolor sit.</h5>
              <h5 className="left right">Lorem ipsum dolor sit.</h5>
              <h5>Lorem ipsum dolor sit.</h5>
            </div>
          </div>
        </div>
        <div className="card-button cs-1-bottom">
          <button
            disabled={!input}
            type="button"
            className="sign-btn cd-btn"
            onClick={() => {
              setStage(2);
              setData({ ...data, type: input });
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
      </form>
    </section>
  );
};

export default CreditStage1;
