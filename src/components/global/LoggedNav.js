// IMPORT MODULES
import React, { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../backend/UserContext";
import { deleteUser } from "../../backend/deleteUser";

// IMPORT COMPONENTS
import Loader from "./Loader";

// IMPORT IMAGES
import hb from "../../images/logo.jpg";
import lang from "../../icons/lang.svg";
import arrow from "../../icons/arrow-down.svg";
import menu from "../../icons/menu.svg";
import userImg from "../../icons/user.svg";

const LoggedNav = ({ setSideOpen }) => {
  const { user, setUser } = useContext(UserContext);
  const langBlock = useRef();
  const userBlock = useRef();
  const handleLanguage = (lang) => {
    setLanguage(lang);
  };
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("РУС");
  const [profile, setProfile] = useState(false);
  return (
    <nav
      className="nav logged-nav"
      onClick={(e) => {
        if (!langBlock.current.contains(e.target)) {
          setLangOpen(false);
        }
        if (!userBlock.current.contains(e.target)) {
          setProfile(false);
        }
      }}
    >
      <div className="container">
        <div className="nav-inner">
          <div className="nav__left">
            <div
              className="nav-menu"
              onClick={() => {
                setSideOpen((prevState) => !prevState);
              }}
            >
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
              ref={langBlock}
              onClick={(e) => {
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
            <div
              className={profile ? "user active" : "user"}
              onClick={() => {
                setProfile(!profile);
              }}
              ref={userBlock}
            >
              <div className="user-dropdown">
                <ul>
                  <li>
                    <Link to="/home/profile">Данные профиля</Link>
                  </li>
                  <li>
                    <button
                      className="sign-out-btn"
                      onClick={() => {
                        deleteUser();
                        setUser(null);
                      }}
                    >
                      Выход
                    </button>
                  </li>
                </ul>
              </div>
              <div className="user-img">
                <img src={userImg} alt="user" />
              </div>
              <h4>
                {user ? (
                  user.name ? (
                    `${user.name} ${user.surname}`
                  ) : (
                    <Loader />
                  )
                ) : (
                  <Loader />
                )}
              </h4>
              <div className="user-arrow">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LoggedNav;
