// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../backend/LanguageContext";
import { branchData } from "../../localization/branchData";
import { timeSheet } from "../../data/timeSheet";

// IMPORT VALIDATORS
import { getDate } from "../../helpers/Date";

// IMPORT IMAGES
import next from "../../icons/next.svg";
import next_reverse from "../../icons/next-reverse.svg";

// IMPORT COMPONENTS
import CustomSelect from "../global/CustomSelect";

const CardStage3 = ({ setStage, data, setData }) => {
  const { locale } = useContext(LanguageContext);
  const branch = branchData();
  const [inputValid, setInputValid] = useState({
    region: data.region ? data.region : null,
    affiliate: data.branch ? data.branch : null,
    date: data.date_arrival_bank ? data.date_arrival_bank : null,
    time: data.selected_time ? data.selected_time : null,
    code: data.the_codeword ? data.the_codeword : null,
    sms: data.sms_notification ? data.sms_notification : null,
  });
  const [btnEnabled, setBtnEnabled] = useState(false);

  const [inputLocal, setInputLocal] = useState({
    region: data.region ? data.region : null,
    affiliate: data.branch ? data.branch : null,
  });

  useEffect(() => {
    if (
      inputValid.region &&
      inputValid.affiliate &&
      inputValid.date &&
      inputValid.time &&
      inputValid.code
    ) {
      setBtnEnabled(true);
    } else {
      setBtnEnabled(false);
    }
  }, [inputValid]);

  return (
    <section className="card-stage-3">
      <form>
        <div className="card-stage-3-top">
          <div className="input-block">
            <label htmlFor="region">
              {locale === "TKM" ? "Welaýat" : "Регион"}
              <span>*</span>
            </label>
            <CustomSelect
              items={locale === "TKM" ? branch.regions.TKM : branch.regions.RUS}
              customId={"region"}
              blockName={"card-3-select"}
              elName={"card-3-select-el"}
              name={"region"}
              placeholder={
                locale === "TKM" ? "Welaýaty saýlaň" : "Выберите регион"
              }
              stateSetter={(state) => {
                setInputValid({ ...inputValid, region: state });
                if (state) {
                  const index = branch.regions.RUS.findIndex(
                    (e) => e === state
                  );
                  if (index === -1) {
                    setInputLocal({ ...inputLocal, region: state });
                  } else {
                    setInputLocal({
                      ...inputLocal,
                      region: branch.regions.TKM[index],
                    });
                  }
                }
              }}
              eTarget={true}
              defaultValue={inputValid.region}
            />
          </div>
          <div className="input-block">
            <label htmlFor="affiliate">
              {locale === "TKM" ? "Filial" : "Филиал"}
              <span>*</span>
            </label>
            <CustomSelect
              items={
                inputValid.region === "Город Ашхабад" ||
                inputValid.region === "Aşgabat şäheri"
                  ? locale === "TKM"
                    ? branch.Ashgabat.TKM
                    : branch.Ashgabat.RUS
                  : inputValid.region === "Ахалский регион" ||
                    inputValid.region === "Ahal"
                  ? locale === "TKM"
                    ? branch.Ahal.TKM
                    : branch.Ahal.RUS
                  : inputValid.region === "Балканский регион" ||
                    inputValid.region === "Balkan"
                  ? locale === "TKM"
                    ? branch.Balkan.TKM
                    : branch.Balkan.RUS
                  : inputValid.region === "Дашогузский регион" ||
                    inputValid.region === "Daşoguz"
                  ? locale === "TKM"
                    ? branch.Dashoguz.TKM
                    : branch.Dashoguz.RUS
                  : inputValid.region === "Лебапский регион" ||
                    inputValid.region === "Lebap"
                  ? locale === "TKM"
                    ? branch.Lebap.TKM
                    : branch.Lebap.RUS
                  : inputValid.region === "Марыйский регион" ||
                    inputValid.region === "Mary"
                  ? locale === "TKM"
                    ? branch.Mary.TKM
                    : branch.Mary.RUS
                  : [""]
              }
              customId={"affiliate"}
              blockName={"card-3-select"}
              elName={"card-3-select-el"}
              name={"affiliate"}
              placeholder={
                locale === "TKM" ? "Şahamçany saýlaň" : "Выберите филиал"
              }
              stateSetter={(state) => {
                setInputValid({ ...inputValid, affiliate: state });
                if (state && inputLocal.region) {
                  let index;
                  if (inputLocal.region === "Aşgabat şäheri") {
                    index = branch["Ashgabat"].RUS.findIndex(
                      (e) => e === state
                    );
                  } else if (inputLocal.region === "Daşoguz") {
                    index = branch["Dashoguz"].RUS.findIndex(
                      (e) => e === state
                    );
                  } else {
                    console.log(inputLocal.region);
                    index = branch[inputLocal.region].RUS.findIndex(
                      (e) => e === state
                    );
                  }

                  if (index === -1) {
                    setInputLocal({ ...inputLocal, affiliate: state });
                  } else {
                    if (inputLocal.region === "Aşgabat şäheri") {
                      setInputLocal({
                        ...inputLocal,
                        affiliate: branch["Ashgabat"].TKM[index],
                      });
                    } else if (inputLocal.region === "Daşoguz") {
                      setInputLocal({
                        ...inputLocal,
                        affiliate: branch["Dashoguz"].TKM[index],
                      });
                    } else {
                      setInputLocal({
                        ...inputLocal,
                        affiliate: branch[inputLocal.region].TKM[index],
                      });
                    }
                  }
                }
              }}
              eTarget={true}
              defaultValue={inputValid.affiliate}
            />
          </div>
          <div className="input-block">
            <label htmlFor="date">
              {locale === "TKM"
                ? "Banka gelmek gününi saýlaň"
                : "Выбрать дату прихода в банк"}
              <span>*</span>
            </label>
            <input
              type="date"
              min={getDate(0)}
              id="date"
              name="date"
              defaultValue={inputValid.date}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, date: e.target.value });
                } else {
                  setInputValid({ ...inputValid, date: false });
                }
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="time">
              {locale === "TKM"
                ? "Amatly wagty saýlaň"
                : "Выберите удобное время"}
              <span>*</span>
            </label>
            <CustomSelect
              items={timeSheet}
              customId={"time"}
              blockName={"card-3-select"}
              elName={"card-3-select-el"}
              name={"time"}
              placeholder={locale === "TKM" ? "Wagty saýlaň" : "Выберите время"}
              stateSetter={(state) =>
                setInputValid({ ...inputValid, time: state })
              }
              eTarget={true}
              defaultValue={inputValid.time}
            />
          </div>
          <div className="input-block">
            <label htmlFor="code">
              {locale === "TKM" ? "Gizlin söz" : "Кодовое слово"}
              <span>*</span>
            </label>
            <input
              type="text"
              id="code"
              name="code"
              placeholder="amanamanow12"
              defaultValue={inputValid.code}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setInputValid({ ...inputValid, code: e.target.value });
                } else {
                  setInputValid({ ...inputValid, code: false });
                }
              }}
            />
          </div>
        </div>
        <div className="card-stage-3-middle">
          <div className="check-block">
            <input
              type="checkbox"
              id="sms"
              name="sms"
              checked={inputValid.sms ? inputValid.sms : false}
              onChange={(e) => {
                setInputValid({ ...inputValid, sms: e.target.checked });
              }}
            />
            <label htmlFor="sms">
              {locale === "TKM" ? "SMS-birikdirme" : "SMS - подключение"}
            </label>
          </div>
          {locale === "TKM" ? (
            inputValid.sms ? (
              <h3 className="green">
                Siziň kartyňyz SMS hyzmatyna birikdiriler
              </h3>
            ) : (
              ""
            )
          ) : inputValid.sms ? (
            <h3 className="green">Ваша карта будет подключена к СМС услуге</h3>
          ) : (
            ""
          )}
        </div>
        <div className="cu-bottom card-stage-3-bottom">
          <button
            type="button"
            className="sign-btn reg-btn"
            onClick={() => {
              setStage(2);
            }}
          >
            <div>
              <div className="btn-img">
                <img src={next_reverse} alt="logout" />
              </div>
              <h3
                onClick={() => {
                  setStage(2);
                }}
              >
                {locale === "TKM" ? "Yza" : "Назад"}
              </h3>
            </div>
          </button>

          <button
            type="button"
            disabled={!btnEnabled}
            className="sign-btn cu-btn"
            onClick={() => {
              setStage(4);
              setData({
                ...data,
                sms_notification: inputValid.sms ? 1 : 0,
                region: inputLocal.region,
                region_localized: inputValid.region,
                branch: inputLocal.affiliate,
                branch_localized: inputLocal.affiliate,
                date_arrival_bank: inputValid.date,
                selected_time: inputValid.time,
                the_codeword: inputValid.code,
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

export default CardStage3;
