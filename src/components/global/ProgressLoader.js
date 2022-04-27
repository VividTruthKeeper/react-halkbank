// IMPORT MODULES
import React, { useContext } from "react";
import { LanguageContext } from "../../backend/LanguageContext";
import useMediaQuery from "../../hooks/useMediaQuery";

// IMPORT IMAGES
import { ReactComponent as Spinner } from "../../icons/loader.svg";

const ProgressLoader = ({ progress }) => {
  const { locale } = useContext(LanguageContext);
  const mobile = useMediaQuery("max-width: 340px");
  return (
    <div className="loader">
      <Spinner className="spinner" />
      <div className="splitter">
        <h1 className="progress-not">
          {locale === "TKM"
            ? "Siziň faýllaryňyz ýüklenilýär"
            : "Загрузка ваших файлов"}
        </h1>
        <h1 className="progress-percentage">{Math.floor(progress * 100)}%</h1>
        <div className="linear-progress">
          <div
            className="bar"
            style={{
              left: `${mobile ? -25 + 25 * progress : -30 + 30 * progress}rem`,
              transition: "1s ease all",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressLoader;
