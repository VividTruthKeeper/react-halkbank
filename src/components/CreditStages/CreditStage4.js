// IMPORT MODULES
import React, { useState, useEffect } from "react";

// IMPORT IMAGES
import next from "../../icons/next.svg";
import next_reverse from "../../icons/next-reverse.svg";

// IMPORT COMPONENTS
import CustomSelect from "../global/CustomSelect";

const CreditStage4 = ({ setStage, data, setData }) => {
  const [inputValid, setInputValid] = useState({
    workplace: data.workplace ? data.workplace : null,
    salary: data.salary ? data.salary : null,
    position: data.position ? data.position : null,
    experience: data.exp ? data.exp : null,
    region: data.region ? data.region : null,
    affiliate: data.branch ? data.branch : null,
  });
  const [btnEnabled, setBtnEnabled] = useState(false);

  useEffect(() => {
    if (
      inputValid.workplace &&
      inputValid.salary &&
      inputValid.position &&
      inputValid.experience &&
      inputValid.region &&
      inputValid.affiliate
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
            <label htmlFor="workplace">
              Место работы<span>*</span>
            </label>
            <input
              type="text"
              id="workplace"
              name="workplace"
              defaultValue={inputValid.workplace}
              placeholder='TPTB "HALKBANK"'
              onChange={(e) => {
                setInputValid({ ...inputValid, workplace: e.target.value });
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="salary">
              Сумма зарплаты<span>*</span>
            </label>
            <input
              type="text"
              id="salary"
              name="salary"
              defaultValue={inputValid.salary}
              placeholder="4000"
              onChange={(e) => {
                setInputValid({ ...inputValid, salary: e.target.value });
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="position">
              Должность<span>*</span>
            </label>
            <input
              type="text"
              id="position"
              name="position"
              defaultValue={inputValid.position}
              onChange={(e) => {
                setInputValid({ ...inputValid, position: e.target.value });
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="experience">
              Стаж с последнего места работы<span>*</span>
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              defaultValue={inputValid.experience}
              placeholder="Более 6 месяцев"
              onChange={(e) => {
                setInputValid({ ...inputValid, experience: e.target.value });
              }}
            />
          </div>
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
        </div>
        <div className="cu-bottom card-stage-3-bottom cs-4-bottom">
          <button
            type="button"
            className="sign-btn reg-btn"
            onClick={() => {
              setStage(3);
            }}
          >
            <div>
              <div className="btn-img">
                <img src={next_reverse} alt="logout" />
              </div>
              <h3
                onClick={() => {
                  setStage(3);
                }}
              >
                Назад
              </h3>
            </div>
          </button>
          <button
            type="button"
            disabled={!btnEnabled}
            className="sign-btn cu-btn"
            onClick={() => {
              setStage(5);
              setData({
                ...data,
                workplace: inputValid.workplace,
                region: inputValid.region,
                exp: inputValid.experience,
                position: inputValid.position,
                salary: inputValid.salary,
                branch: inputValid.affiliate,
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

export default CreditStage4;
