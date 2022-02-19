// IMPORT MODULES
import React from "react";

// IMPORT VALIDATORS
import { ValidateEmail } from "../../validators/ValidateEmail";
import { ValidatePhoneNumber } from "../../validators/ValidatePhoneNumber";
import { getDate } from "../../helpers/Date";

// IMPORT IMAGES
import next from "../../icons/next.svg";

// IMPORT COMPONENTS
import CustomSelect from "../global/CustomSelect";

const CardStage3 = ({ setStage }) => {
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

              // stateSetter={setInputValid}
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
              // stateSetter={setInputValid}
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
              // stateSetter={setInputValid}
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
            />
          </div>
        </div>
        <div className="card-stage-3-middle">
          <div className="check-block">
            <input type="checkbox" id="sms" name="sms" />
            <label htmlFor="sms">SMS - подключение</label>
          </div>
          <div className="input-block">
            <label htmlFor="mobile">Номер телефона для SMS - подключения</label>
            <input
              type="text"
              id="mobile"
              name="sms-mobile"
              placeholder="+99365656565"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default CardStage3;
