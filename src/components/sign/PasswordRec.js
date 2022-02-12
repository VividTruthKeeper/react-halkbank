// IMPORT MODULES
import React, { useState, useEffect, useRef } from "react";

// IMPORT IMAGES
import Next from "../../icons/arrow-circle-right.svg";

// IMPORT PERSONAL COMPONENTS
import Stage1 from "../passwordRec/Stage1";
import Stage2 from "../passwordRec/Stage2";

const PasswordRec = ({ recoveryOpen, setRecoveryOpen }) => {
  const [recStage, setRecStage] = useState(1);
  const ref = useRef();
  useEffect(() => {
    if (!recoveryOpen) {
      document.body.style.overflowY = "visible";
    } else {
      document.body.style.overflowY = "hidden";
    }
    window.addEventListener("mousedown", (e) => {
      if (recoveryOpen && ref.current && !ref.current.contains(e.target)) {
        setRecoveryOpen(false);
      }
    });

    return () => {
      window.removeEventListener("mousedown", () => {});
    };
  }, [recoveryOpen, setRecoveryOpen]);

  return (
    <section className={recoveryOpen ? "recovery active" : "recovery"}>
      <div className="recovery-container">
        <div className="recovery-inner" ref={ref}>
          {recStage === 1 ? (
            <Stage1 setRecStage={setRecStage} />
          ) : recStage === 2 ? (
            <Stage2
              setRecoveryOpen={setRecoveryOpen}
              setRecStage={setRecStage}
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
