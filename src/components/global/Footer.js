// IMPORT MODULES
import React, { useContext } from "react";
import { LanguageContext } from "../../backend/LanguageContext";

const Footer = () => {
  const { locale } = useContext(LanguageContext);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <h2>
            © TPTB "HALKBANK", 2013-2022 All rights reserved |{" "}
            <span>
              {locale === "РУС"
                ? "Политика Конфиденциальности"
                : "Gizlinlik syýasaty"}
            </span>
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
