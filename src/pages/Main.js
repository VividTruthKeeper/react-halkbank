// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import logout from "../icons/logout.svg";

// IMPORT PERSONAL COMPONENTS
import TitleGrid from "../components/main/TitleGrid";

const Main = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="main-inner">
          <div className="main-head">
            <div className="main-head__left">
              <h1>Личный кабинет</h1>
            </div>
            <div className="main-head__right">
              <Link to="/sign-in">
                <h3>Физическое лицо</h3>
                <div className="logout">
                  <img src={logout} alt="logout" />
                </div>
              </Link>
            </div>
          </div>
          <TitleGrid />
        </div>
      </div>
    </section>
  );
};

export default Main;
