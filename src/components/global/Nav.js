// IMPORT MODULES
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../backend/LanguageContext";

// IMPORT IMAGES
import hb from "../../images/logo.jpg";
import lang from "../../icons/lang.svg";
import arrow from "../../icons/arrow-down.svg";

const Nav = () => {
  const handleLanguage = (lang) => {
    setLanguage(lang);
  };
  const { locale, setLocale } = useContext(LanguageContext);

  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState(locale);
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-inner">
          <div className="nav__left">
            <Link to="/" className="nav-logo">
              <img src={hb} alt="Halk Bank" />
            </Link>
            <Link to="/" className="nav-title">
              <h1>{locale === "РУС" ? "Халкбанк" : "Halkbank"}</h1>
              <h4>
                {locale === "РУС"
                  ? '"Главная ценность Банка-наши Клиенты"'
                  : '"Bankyň esasy gymmatlygy Müşderilerdir"'}
              </h4>
            </Link>
          </div>
          <div className="nav__right">
            <ul
              className={langOpen ? "language active" : "language"}
              onClick={() => {
                setLangOpen(!langOpen);
              }}
            >
              <li className="lang-wrapper">
                <div className="lang-img">
                  <img src={lang} alt="language" />
                </div>
                <h4 className="lang-text">{language}</h4>
                <div className={langOpen ? "lang-arrow active" : "lang-arrow"}>
                  <img src={arrow} alt={arrow} />
                </div>
              </li>
              <li
                className={langOpen ? "lang-dropdown active" : "lang-dropdown"}
              >
                <ul>
                  <li
                    className="lang-el"
                    onClick={(e) => {
                      handleLanguage(e.target.innerText);
                      setLocale(e.target.innerText);
                      localStorage.setItem("userLanguage", e.target.innerText);
                    }}
                  >
                    РУС
                  </li>
                  <li
                    className="lang-el"
                    onClick={(e) => {
                      handleLanguage(e.target.innerText);
                      setLocale(e.target.innerText);
                      localStorage.setItem("userLanguage", e.target.innerText);
                    }}
                  >
                    TKM
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </nav>
  );
};

export default Nav;
