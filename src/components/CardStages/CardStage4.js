// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../backend/LanguageContext";
import { maxFileSize } from "../../maxFileSize";

// IMPORT IMAGES
import remove from "../../icons/remove.svg";
import next from "../../icons/next.svg";
import arrow from "../../icons/arrow.svg";
import next_reverse from "../../icons/next-reverse.svg";

const CardStage4 = ({ setStage, data, setData, req }) => {
  const { locale } = useContext(LanguageContext);
  const [files, setFiles] = useState(data.file ? data.file : []);

  const [btnEnabled, setBtnEnabled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [validSize, setValidSize] = useState(true);

  //    Bytes <=    Megabytes
  //      |      |||||||||||||||||
  const maxSize = maxFileSize * 1024 * 1024;

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
            {locale === "TKM"
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
                {locale === "TKM"
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
              <div
                className="text-block"
                dangerouslySetInnerHTML={{
                  __html: locale === "TKM" ? req.TKM : req.rus,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="cd-bottom-4">
          <div>
            <label htmlFor="file">
              {locale === "TKM" ? "Faýl ýükläň" : "Загрузить файл"}
            </label>
            <input
              id="file"
              type="file"
              accept=".jpg, .jpeg, .docx, .xls, .xlsx, .doc, .pdf, .png"
              onChange={(e) => {
                if (e.target.files[0].size > maxSize) {
                  setValidSize(false);
                  e.target.value = "";
                } else {
                  setFiles([...files, e.target.files[0]]);
                  e.target.value = "";
                  setValidSize(true);
                }
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
        <p className="alert">
          {locale === "TKM"
            ? "Hemme faýllar diňe görkezilen formatda bolmaly: "
            : "Все файлы должны быть следующих форматов: "}
          <span className="red">
            .jpg, .jpeg, .doc, .docx, .xls, .xlsx, .pdf, .png
          </span>
        </p>
        <p className={!validSize ? "alert red bold" : "alert"}>
          {locale === "TKM"
            ? `Faýlyň ölçegi ${maxFileSize} MB-den geçmeli däl`
            : `Размер файла не должен превышать ${maxFileSize} МБ`}
        </p>
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
                {locale === "TKM" ? "Yza" : "Назад"}
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

export default CardStage4;
