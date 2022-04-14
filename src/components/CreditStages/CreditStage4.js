// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../backend/LanguageContext";
import { branchData } from "../../localization/branchData";
import { timeSheet } from "../../data/timeSheet";

// IMPORT IMAGES
import next from "../../icons/next.svg";
import next_reverse from "../../icons/next-reverse.svg";

// IMPORT COMPONENTS
import CustomSelect from "../global/CustomSelect";

const CreditStage4 = ({ setStage, data, setData }) => {
  const { locale } = useContext(LanguageContext);
  const branch = branchData();
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
              {locale === "TKM" ? "Iş ýeri" : "Место работы"}
              <span>*</span>
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
              {locale === "TKM" ? "Aýlyk haky" : "Сумма зарплаты"}
              <span>*</span>
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
              {locale === "TKM" ? "Wezipesi" : "Должность"}
              <span>*</span>
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
              {locale === "TKM"
                ? "Soňky iş ýeri boýunça tejribe"
                : "Стаж с последнего места работы"}
              <span>*</span>
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              defaultValue={inputValid.experience}
              placeholder={locale === "TKM" ? "6 aýdan köp" : "Более 6 месяцев"}
              onChange={(e) => {
                setInputValid({ ...inputValid, experience: e.target.value });
              }}
            />
          </div>
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
              stateSetter={(state) =>
                setInputValid({ ...inputValid, region: state })
              }
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
                locale === "TKM" ? "Filialy saýlaň" : "Выберите филиал"
              }
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
                {locale === "TKM" ? "Yza" : "Назад"}
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

export default CreditStage4;
