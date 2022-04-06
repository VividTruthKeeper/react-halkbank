// IMPORT MODULES
import React, { useState, useRef } from "react";

// IMPORT PERSONAL COMPONENTS
import Stage1 from "../passwordRec/Stage1";
import Stage2 from "../passwordRec/Stage2";

// IMPORT COMPONENTS
import Loader from "../global/Loader";

const PasswordRec = ({ recoveryOpen, setRecoveryOpen, setSuccess, stage }) => {
  const [recStage, setRecStage] = useState(stage ? stage : 1);
  const [data, setData] = useState({});

  const [loader, setLoader] = useState(false);
  const ref = useRef();
  return (
    <section
      className={recoveryOpen ? "recovery active" : "recovery"}
      onClick={(e) => {
        if (e.target.contains(ref.current)) {
          setRecoveryOpen(false);
        }
      }}
    >
      <div className="recovery-container">
        <div className="recovery-inner" ref={ref}>
          {loader ? <Loader /> : null}
          {recStage === 1 ? (
            <Stage1 setRecStage={setRecStage} data={data} setData={setData} />
          ) : recStage === 2 ? (
            <Stage2
              setRecoveryOpen={setRecoveryOpen}
              setRecStage={setRecStage}
              data={data}
              setData={setData}
              setLoader={setLoader}
              setSuccess={setSuccess}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default PasswordRec;
