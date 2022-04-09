// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../backend/LanguageContext";

// IMPORT IMAGES
import remove from "../../icons/remove.svg";
import next from "../../icons/next.svg";
import arrow from "../../icons/arrow.svg";
import next_reverse from "../../icons/next-reverse.svg";

const CardStage4 = ({ setStage, data, setData, req, setReq }) => {
  const { locale } = useContext(LanguageContext);
  const [files, setFiles] = useState(data.file ? data.file : []);

  const [btnEnabled, setBtnEnabled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const parser = new DOMParser();

  useEffect(() => {
    if (files.length > 0) {
      setBtnEnabled(true);
    } else {
      setBtnEnabled(false);
    }
  }, [files]);
  return (
    <section className="card-stage-4">
      <form>
        <div className="cd-top-4">
          <h2>
            {locale === "TUK"
              ? "Karz almak üçin ýüzlenmäni resmileşdirmek üçin talap edilýän resminamalary ýükläň"
              : "Для оформления заявки на получения кредита загрузите требуемые документы."}
          </h2>
          <div
            className="data-block docs"
            onClick={() => {
              setDropdown(!dropdown);
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
                dropdown ? "data-dropdown docs active" : "data-dropdown docs"
              }
            >
              <div className="text-block">
                {locale === "TUK"
                  ? parser
                      .parseFromString(req.tuk, "text/html")
                      .getElementsByTagName("p")[0]
                      .innerText.split(". ")
                      .map((el, i) => <p key={i}>- {el}</p>)
                  : parser
                      .parseFromString(req.rus, "text/html")
                      .getElementsByTagName("p")[0]
                      .innerText.split(". ")
                      .map((el, i) => <p key={i}>- {el}</p>)}
              </div>
            </div>
          </div>
        </div>
        <div className="cd-bottom-4">
          <div>
            <label htmlFor="file">
              {locale === "TUK" ? "Faýl ýükläň" : "Загрузить файл"}
            </label>
            <input
              id="file"
              type="file"
              onChange={(e) => {
                setFiles([...files, e.target.files[0]]);
                e.target.value = "";
              }}
            />
          </div>
        </div>
        <ul className="cd-4-files">
          {files !== []
            ? files.map((el, i) => {
                if (el) {
                  return (
                    <li key={i}>
                      <h4>{el.name}</h4>
                      <div
                        className="remove"
                        onClick={() => {
                          setFiles(
                            files.filter((file) => {
                              return file !== el;
                            })
                          );
                        }}
                      >
                        <img src={remove} alt="remove" />
                      </div>
                    </li>
                  );
                }
              })
            : null}
        </ul>
        <div className="cu-bottom card-stage-4-bottom">
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
                {locale === "TUK" ? "Yza" : "Назад"}
              </h3>
            </div>
          </button>
          <button
            type="button"
            disabled={!btnEnabled}
            className="sign-btn cu-btn"
            onClick={() => {
              setData({ ...data, file: files });
              setStage(5);
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

export default CardStage4;
