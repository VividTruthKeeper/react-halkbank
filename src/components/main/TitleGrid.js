// IMPORT MODULES
import React, { useContext } from "react";
import { LanguageContext } from "../../backend/LanguageContext";

// LOCALIZATION
import { main } from "../../localization/main";

// IMPORT IMAGES
import cardRemove from "../../icons/card-remove.svg";
import shield from "../../icons/shield.svg";
import globe from "../../icons/globe.svg";
import direct from "../../icons/direct.svg";
import lock from "../../icons/lock.svg";
import wifi from "../../icons/wifi.svg";
import clipboard_close from "../../icons/clipboard-close.svg";

const TitleGrid = () => {
  const { locale } = useContext(LanguageContext);
  const translation = main();
  return (
    <section className="titlegrid">
      <div className="titlegrid-inner">
        <h1>
          {locale === "TKM" ? translation.TKM.title : translation.rus.title}
        </h1>
        <ul>
          <li>
            <div className="title">
              <div className="title-img">
                <img src={lock} alt="wifi" />
              </div>
              <h3>
                {locale === "РУС"
                  ? translation.rus.rules[0]
                  : translation.TKM.rules[0]}
              </h3>
            </div>
          </li>
          <li>
            <div className="title">
              <div className="title-img">
                <img src={wifi} alt="wifi" />
              </div>
              <h3>
                {locale === "РУС"
                  ? translation.rus.rules[1]
                  : translation.TKM.rules[1]}
              </h3>
            </div>
          </li>
          <li>
            <div className="title">
              <div className="title-img">
                <img src={cardRemove} alt="wifi" />
              </div>
              <h3>
                {locale === "РУС"
                  ? translation.rus.rules[2]
                  : translation.TKM.rules[2]}
              </h3>
            </div>
          </li>
          <li>
            <div className="title">
              <div className="title-img">
                <img src={shield} alt="wifi" />
              </div>
              <h3>
                {locale === "РУС"
                  ? translation.rus.rules[3]
                  : translation.TKM.rules[3]}
              </h3>
            </div>
          </li>
          <li>
            <div className="title">
              <div className="title-img">
                <img src={globe} alt="wifi" />
              </div>
              <h3>
                {locale === "РУС"
                  ? translation.rus.rules[4]
                  : translation.TKM.rules[4]}
              </h3>
            </div>
          </li>
          <li>
            <div className="title">
              <div className="title-img">
                <img src={direct} alt="wifi" />
              </div>
              <h3>
                {locale === "РУС"
                  ? translation.rus.rules[5]
                  : translation.TKM.rules[5]}
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TitleGrid;
