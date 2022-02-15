// IMPORT MODULES
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import card from "../../icons/card.svg";
import credit from "../../icons/credit.svg";
import mail from "../../icons/mail.svg";
import password from "../../icons/password.svg";
import quit from "../../icons/quit.svg";
import user from "../../icons/user-square.svg";
import arrow from "../../icons/arrow-back.svg";

const Side = ({ sideOpen }) => {
  const [linkStage, setLinkStage] = useState(0);

  useEffect(() => {
    const location = window.location.href;
    if (location.includes("cards")) {
      setLinkStage(1);
    } else if (location.includes("credits")) {
      setLinkStage(2);
    } else if (location.includes("contact-us")) {
      setLinkStage(3);
    } else if (location.includes("recovery")) {
      setLinkStage(5);
    }
  }, []);
  return (
    <section className={sideOpen ? "side active" : "side"}>
      <div className="side-inner">
        <div className="list-wrapper">
          <ul>
            <li>
              <h2 className="side-title">Разделы</h2>
            </li>
            <li
              className={linkStage === 1 ? "active" : ""}
              onClick={() => {
                setLinkStage(1);
              }}
            >
              <Link to="/home/cards">
                <div className="link-img">
                  <img src={card} alt="link" />
                </div>
                <span>Пластиковые карты</span>
              </Link>
            </li>
            <li
              className={linkStage === 2 ? "active" : ""}
              onClick={() => {
                setLinkStage(2);
              }}
            >
              <Link to="/home/credits">
                <div className="link-img">
                  <img src={credit} alt="link" />
                </div>
                <span>Кредиты</span>
              </Link>
            </li>
            <li
              className={linkStage === 3 ? "active" : ""}
              onClick={() => {
                setLinkStage(3);
              }}
            >
              <Link to="/home/contact-us">
                <div className="link-img">
                  <img src={mail} alt="link" />
                </div>
                <span>Написать письмо</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <h2 className="side-title">Профиль</h2>
            </li>
            <li
              className={linkStage === 4 ? "active" : ""}
              onClick={() => {
                setLinkStage(4);
              }}
            >
              <Link to="">
                <div className="link-img">
                  <img src={user} alt="link" />
                </div>
                <span>Данные профиля</span>
              </Link>
            </li>
            <li
              className={linkStage === 5 ? "active" : ""}
              onClick={() => {
                setLinkStage(5);
              }}
            >
              <Link to="/home/recovery">
                <div className="link-img">
                  <img src={password} alt="link" />
                </div>
                <span>Смена пароля</span>
              </Link>
            </li>
            <li>
              <Link to="/sign-in">
                <div className="link-img">
                  <img src={quit} alt="link" />
                </div>
                <span>Выход</span>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="" className="side-footer">
          <div className="footer-img">
            <img src={arrow} alt="arrow" />
          </div>
          <span>Вернутся на главный сайт</span>
        </Link>
      </div>
    </section>
  );
};

export default Side;
