// IMPORT MODULES
import React, { useState } from "react";

// IMPORT COMPONENTS
import CustomSelect from "../global/CustomSelect";

// IMPORT IMAGES
import remove from "../../icons/remove.svg";

const CardStage4 = ({ setStage }) => {
  const [files, setFiles] = useState([]);
  const [inputNumber, setInputNumber] = useState([""]);
  return (
    <section className="card-stage-4">
      <form>
        <div className="cd-top-4">
          <h2>
            Для оформления заявки на получения кредита загрузите требуемые
            документы.
          </h2>
          <CustomSelect
            items={[
              "Требования и документы",
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor.",
            ]}
            placeholder={"Выберите тип документа"}
            name={"doc-type"}
            stateSetter={() => null}
            customId={"doc-type"}
            blockName={"cd-4-custom"}
            elName={"cd-4-custom-el"}
          />
        </div>
        <div className="cd-middle-4">
          <button type="button">Загрузить файл</button>
          {inputNumber.map((el, i) => {
            return (
              <input
                key={i}
                type="file"
                onChange={(e) => {
                  setInputNumber([...inputNumber, ""]);
                  if (!files.includes(e.target.value)) {
                    setFiles([...files, e.target.files]);
                  }
                  console.log(files);
                }}
              />
            );
          })}
        </div>
        <div className="cd-bottom-4">
          {files.map((el, i) => {
            return (
              <div key={i} className="file">
                <p>{el[0].name}</p>
                <div
                  className="remove"
                  onClick={() => {
                    setFiles(
                      files.filter((item) => {
                        return item !== el;
                      })
                    );
                  }}
                >
                  <img src={remove} alt="remove" />
                </div>
              </div>
            );
          })}
        </div>
      </form>
    </section>
  );
};

export default CardStage4;
