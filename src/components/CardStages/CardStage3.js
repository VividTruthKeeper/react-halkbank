// IMPORT MODULES
import React, { useState, useEffect } from "react";

// IMPORT VALIDATORS
import { getDate } from "../../helpers/Date";

// IMPORT IMAGES
import next from "../../icons/next.svg";
import next_reverse from "../../icons/next-reverse.svg";

// IMPORT COMPONENTS
import CustomSelect from "../global/CustomSelect";

const CardStage3 = ({ setStage, data, setData }) => {
  const [inputValid, setInputValid] = useState({
    region: data.region ? data.region : null,
    affiliate: data.branch ? data.branch : null,
    date: data.date_arrival_bank ? data.date_arrival_bank : null,
    time: data.selected_time ? data.selected_time : null,
    code: data.the_codeword ? data.the_codeword : null,
    sms: data.sms_notification ? data.sms_notification : null,
  });
  const [btnEnabled, setBtnEnabled] = useState(false);

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
              Регион<span>*</span>
            </label>
            <CustomSelect
              items={["Ашхабад", "Мары"]}
              customId={"region"}
              blockName={"card-3-select"}
              elName={"card-3-select-el"}
              name={"region"}
              placeholder="Выберите регион"
              stateSetter={(state) =>
                setInputValid({ ...inputValid, region: state })
              }
              eTarget={true}
              defaultValue={inputValid.region}
            />
          </div>
          <div className="input-block">
            <label htmlFor="affiliate">
              Филиал<span>*</span>
            </label>
            <CustomSelect
              items={["1", "2"]}
              customId={"affiliate"}
              blockName={"card-3-select"}
              elName={"card-3-select-el"}
              name={"affiliate"}
              placeholder="Выберите филиал"
              stateSetter={(state) =>
                setInputValid({ ...inputValid, affiliate: state })
              }
              eTarget={true}
              defaultValue={inputValid.affiliate}
            />
          </div>
          <div className="input-block">
            <label htmlFor="date">
              Выбрать дату прихода в банк<span>*</span>
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
              Выбрать приемлемое время<span>*</span>
            </label>
            <CustomSelect
              items={["1", "2"]}
              customId={"time"}
              blockName={"card-3-select"}
              elName={"card-3-select-el"}
              name={"time"}
              placeholder="Выберите время"
              stateSetter={(state) =>
                setInputValid({ ...inputValid, time: state })
              }
              eTarget={true}
              defaultValue={inputValid.time}
            />
          </div>
          <div className="input-block">
            <label htmlFor="code">
              Кодовое слово<span>*</span>
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
            <label htmlFor="sms">SMS - подключение</label>
          </div>
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
                Редактировать
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
                region: inputValid.region,
                branch: inputValid.affiliate,
                date_arrival_bank: inputValid.date,
                selected_time: inputValid.time,
                the_codeword: inputValid.code,
              });
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

export default CardStage3;
