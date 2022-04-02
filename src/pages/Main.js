// IMPORT MODULES
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../backend/UserContext";
import { LanguageContext } from "../backend/LanguageContext";

// IMPORT IMAGES
import logout from "../icons/logout.svg";

// IMPORT COMPONENTS
import Nav from "../components/global/Nav";
import Footer from "../components/global/Footer";

// IMPORT PERSONAL COMPONENTS
import TitleGrid from "../components/main/TitleGrid";

const Main = () => {
  const { user } = useContext(UserContext);
  const { locale } = useContext(LanguageContext);
  return (
    <section className="main">
      <Nav />
      <div className="container">
        <div className="main-inner">
          <div className="main-head">
            <div className="main-head__left">
              <h1>{locale === "РУС" ? "Личный кабинет" : "Şahsy kabinet"}</h1>
            </div>
            <div className="main-head__right">
              <Link to={user ? "/home" : "/sign-in"}>
                <h3>{locale === "РУС" ? "Физическое лицо" : "Fiziki tarap"}</h3>
                <div className="logout">
                  <img src={logout} alt="logout" />
                </div>
              </Link>
            </div>
          </div>
          <TitleGrid />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Main;
