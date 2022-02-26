// IMPORT MODULES
import React, { useState, useRef, useEffect } from "react";

// IMPORT COMPONENTS
import CustomSelect from "../global/CustomSelect";

// IMPORT IMAGES
import remove from "../../icons/remove.svg";
import next from "../../icons/next.svg";

const CardStage4 = ({ setStage }) => {
  const [files, setFiles] = useState({
    input1: undefined,
    input2: undefined,
    input3: undefined,
  });
  const [type, setType] = useState(false);

  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const [btnEnabled, setBtnEnabled] = useState(false);

  useEffect(() => {
    if (type && (files.input1 || files.input2 || files.input3)) {
      setBtnEnabled(true);
    } else {
      setBtnEnabled(false);
    }
  }, [type, files]);
  return (
    <section className="card-stage-4">
      <form>
        <div className="cd-top-4">
          <h2>
            Для оформления заявки на получения кредита загрузите требуемые
            документы.
          </h2>
          <CustomSelect
            items={["Требования и документы", "Lorem, ipsum dolor."]}
            placeholder={"Выберите тип документа"}
            name={"doc-type"}
            stateSetter={(e) => {
              setType(e);
            }}
            eTarget={true}
            customId={"doc-type"}
            blockName={"cd-4-custom"}
            elName={"cd-4-custom-el"}
          />
        </div>
        <div className="cd-bottom-4">
          <div className={files.input1 ? "file filled" : "file"}>
            <input
              ref={input1}
              type="file"
              onChange={(e) => {
                setFiles({ ...files, input1: e.target.files });
              }}
            />
            <p>{files.input1 ? files.input1[0].name : "Загрузить файл"}</p>
            <div
              className="remove"
              onClick={() => {
                setFiles({ ...files, input1: undefined });
                input1.current.value = null;
              }}
            >
              <img src={remove} alt="remove" />
            </div>
          </div>
          <div className={files.input2 ? "file filled" : "file"}>
            <input
              ref={input2}
              type="file"
              onChange={(e) => {
                setFiles({ ...files, input2: e.target.files });
              }}
            />
            <p>{files.input2 ? files.input2[0].name : "Загрузить файл"}</p>
            <div
              className="remove"
              onClick={() => {
                setFiles({ ...files, input2: undefined });
                input2.current.value = null;
              }}
            >
              <img src={remove} alt="remove" />
            </div>
          </div>
          <div className={files.input3 ? "file filled" : "file"}>
            <input
              ref={input3}
              type="file"
              onChange={(e) => {
                setFiles({ ...files, input3: e.target.files });
              }}
            />
            <p>{files.input3 ? files.input3[0].name : "Загрузить файл"}</p>
            <div
              className="remove"
              onClick={() => {
                setFiles({ ...files, input3: undefined });
                input3.current.value = null;
              }}
            >
              <img src={remove} alt="remove" />
            </div>
          </div>
        </div>
        <div className="cu-bottom card-stage-4-bottom">
          <button
            type="button"
            disabled={!btnEnabled}
            className="sign-btn cu-btn"
            onClick={() => {
              setStage(6);
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

export default CardStage4;
