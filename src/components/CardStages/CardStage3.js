// IMPORT MODULES
import React, { useState, useEffect } from "react";

// IMPORT VALIDATORS
import { getDate } from "../../helpers/Date";

// IMPORT IMAGES
import next from "../../icons/next.svg";

// IMPORT COMPONENTS
import CustomSelect from "../global/CustomSelect";

const CardStage3 = ({ setStage, data, setData }) => {
  const [inputValid, setInputValid] = useState({
    region: false,
    affiliate: false,
    date: false,
    time: false,
    code: false,
    sms: false,
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
            />
          </div>
          <div className="input-block">
            <label htmlFor="date">
              Выбрать дату прихода в банк<span>*</span>
            </label>
            <input
              type="date"
              min="1900-01-01"
              id="date"
              name="date"
              max={getDate(18)}
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
              onChange={(e) => {
                setInputValid({ ...inputValid, sms: e.target.checked });
              }}
            />
            <label htmlFor="sms">SMS - подключение</label>
          </div>
        </div>
        <div className="cu-bottom card-stage-3-bottom">
          <h4>
            <p>
              Все поля с символом ( <span>*</span> ) обязательны для заполнения
            </p>
            <p>Все поля доожны быть заполненны латиницей</p>
          </h4>
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
