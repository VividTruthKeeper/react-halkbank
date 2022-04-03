// IMPORT MODULES
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../backend/LanguageContext";

// IMPORT IMAGES
import home from "../../icons/home.svg";

const Breadcrumb = ({ image, link, linkTitle }) => {
  const { locale } = useContext(LanguageContext);
  return (
    <div className="breadcrumb">
      <div className="container">
        <div className="breadcrumb-inner">
          <Link
            to="/home"
            className={image ? "link-block" : "link-block faded"}
          >
            <div className="br-image">
              <img src={home} alt="home" />
            </div>
            <span>{locale === "TUK" ? "Baş sahypa" : "Главная"}</span>
          </Link>
          {image ? <h6>/</h6> : ""}
          {link ? (
            <Link to={link} className="link-block faded">
              <div className="br-image">
                <img src={image} alt="home" />
              </div>
              <span>{linkTitle}</span>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
