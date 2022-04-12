// IMPORT MODULES
import React, { useState, useEffect, useContext, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../backend/UserContext";
import { deleteUser } from "../../backend/deleteUser";
import { LanguageContext } from "../../backend/LanguageContext";

// IMPORT IMAGES
import card from "../../icons/card.svg";
import credit from "../../icons/credit.svg";
import mail from "../../icons/mail.svg";
import password from "../../icons/password.svg";
import quit from "../../icons/quit.svg";
import user from "../../icons/user-square.svg";
import arrow from "../../icons/arrow-back.svg";
import close from "../../icons/close.svg";

// HOOKS
import useMediaQuery from "../../hooks/useMediaQuery";

const Side = ({ sideOpen, setSideOpen }) => {
  const inner = useRef();
  const { locale } = useContext(LanguageContext);
  const { setUser } = useContext(UserContext);
  const [linkStage, setLinkStage] = useState(0);
  const [closeOnInteract, setCloseOnInteract] = useState(false);
  const location = window.location.href;
  const viewPortWidth = useMediaQuery("(max-width: 1300px)");

  useEffect(() => {
    setCloseOnInteract(viewPortWidth);
  }, [viewPortWidth]);

  useEffect(() => {
    if (location.includes("cards")) {
      setLinkStage(1);
    } else if (location.includes("credits")) {
      setLinkStage(2);
    } else if (location.includes("contact-us")) {
      setLinkStage(3);
    } else if (location.includes("profile")) {
      setLinkStage(4);
    } else if (location.includes("recovery")) {
      setLinkStage(5);
    } else {
      setLinkStage(0);
    }
  }, [location]);
  return (
    <section
      className={sideOpen ? "side active" : "side"}
      onClick={(e) => {
        if (e.target.contains(inner.current)) {
          setSideOpen(false);
        }
      }}
    >
      <div className="side-wrapper">
        <div className="side-inner" ref={inner}>
          <div className="list-wrapper">
            <ul>
              <li className="side-top-li">
                <h2 className="side-title">
                  {locale === "TUK" ? "Bölümler" : "Разделы"}
                </h2>
                <div
                  className="side-quit"
                  onClick={() => {
                    setSideOpen(!sideOpen);
                  }}
                >
                  <img src={close} alt="close" />
                </div>
              </li>
              <li
                className={linkStage === 1 ? "active" : ""}
                onClick={() => {
                  setLinkStage(1);
                }}
              >
                <Link
                  to="/home/cards"
                  onClick={() => {
                    if (closeOnInteract) {
                      setSideOpen(true);
                    }
                  }}
                >
                  <div className="link-img">
                    <img src={card} alt="link" />
                  </div>
                  <span>
                    {locale === "TUK" ? "Plastik kartlar" : "Пластиковые карты"}
                  </span>
                </Link>
              </li>
              <li
                className={linkStage === 2 ? "active" : ""}
                onClick={() => {
                  setLinkStage(2);
                }}
              >
                <Link
                  to="/home/credits"
                  onClick={() => {
                    if (closeOnInteract) {
                      setSideOpen(true);
                    }
                  }}
                >
                  <div className="link-img">
                    <img src={credit} alt="link" />
                  </div>
                  <span>{locale === "TUK" ? "Karzlar" : "Кредиты"}</span>
                </Link>
              </li>
              <li
                className={linkStage === 3 ? "active" : ""}
                onClick={() => {
                  setLinkStage(3);
                }}
              >
                <Link
                  to="/home/contact-us"
                  onClick={() => {
                    if (closeOnInteract) {
                      setSideOpen(true);
                    }
                  }}
                >
                  <div className="link-img">
                    <img src={mail} alt="link" />
                  </div>
                  <span>
                    {locale === "TUK" ? "Hat ýazmak" : "Написать письмо"}
                  </span>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h2 className="side-title">
                  {locale === "TUK" ? "Profil" : "Профиль"}
                </h2>
              </li>
              <li
                className={linkStage === 4 ? "active" : ""}
                onClick={() => {
                  setLinkStage(4);
                }}
              >
                <Link
                  to="/home/profile"
                  onClick={() => {
                    if (closeOnInteract) {
                      setSideOpen(true);
                    }
                  }}
                >
                  <div className="link-img">
                    <img src={user} alt="link" />
                  </div>
                  <span>
                    {locale === "TUK" ? "Profiliň maglumaty" : "Данные профиля"}
                  </span>
                </Link>
              </li>
              <li
                className={linkStage === 5 ? "active" : ""}
                onClick={() => {
                  setLinkStage(5);
                }}
              >
                <Link
                  to="/home/recovery"
                  onClick={() => {
                    if (closeOnInteract) {
                      setSideOpen(true);
                    }
                  }}
                >
                  <div className="link-img">
                    <img src={password} alt="link" />
                  </div>
                  <span>
                    {locale === "TUK" ? "Açar sözüni çalyşmak" : "Смена пароля"}
                  </span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    deleteUser();
                    setUser(null);
                  }}
                >
                  <div className="link-img">
                    <img src={quit} alt="link" />
                  </div>
                  <span>{locale === "TUK" ? "Çykmak" : "Выход"}</span>
                </button>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="side-footer"
            onClick={() => {
              if (closeOnInteract) {
                setSideOpen(true);
              }
            }}
          >
            <div className="footer-img">
              <img src={arrow} alt="arrow" />
            </div>
            <span>
              {locale === "TUK"
                ? "Baş sahypa dolanmak"
                : "Вернутся на главный сайт"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Side;
