// IMPORT MODULES
import React, { useState } from "react";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import hb from "../../images/logo.jpg";
import lang from "../../icons/lang.svg";
import arrow from "../../icons/arrow-down.svg";
import menu from "../../icons/menu.svg";
import user from "../../icons/user.svg";

const LoggedNav = () => {
  const handleLanguage = (lang) => {
    setLanguage(lang);
  };

  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("РУС");
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-inner">
          <div className="nav__left">
            <div className="nav-menu">
              <img src={menu} alt="menu" />
            </div>
            <Link to="/" className="nav-logo">
              <img src={hb} alt="Halk Bank" />
            </Link>
            <div className="nav-title">
              <h1>Халкбанк</h1>
              <h4>"Главная ценность Банка-наши Клиенты"</h4>
            </div>
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
                    }}
                  >
                    РУС
                  </li>
                  <li
                    className="lang-el"
                    onClick={(e) => {
                      handleLanguage(e.target.innerText);
                    }}
                  >
                    ENG
                  </li>
                  <li
                    className="lang-el"
                    onClick={(e) => {
                      handleLanguage(e.target.innerText);
                    }}
                  >
                    TUK
                  </li>
                </ul>
              </li>
            </ul>
            <div className="user">
              <div className="user-img">
                <img src={user} alt="user" />
              </div>
              <h4>Аман Аманов</h4>
              <div className="user-arrow">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </nav>
  );
};

export default LoggedNav;
