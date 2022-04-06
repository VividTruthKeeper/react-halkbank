// IMPORT MODULES
import React, { useState, useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./backend/UserContext";
import { LanguageContext } from "./backend/LanguageContext";

// IMPORT FUNCTIONS
import { getUserInfo } from "./backend/getUserInfo";

// IMPORT STYLES
import "./scss/style.scss";

// IMPORT INNER PAGES
import Base from "./pages/Base";
import Cards from "./pages/Cards";
import Credits from "./pages/Credits";
import ContactUs from "./pages/ContactUs";
import Recovery from "./pages/Recovery";
import Profile from "./pages/Profile";
import SuccessPage from "./pages/SuccessPage";
import ErrorPage from "./pages/ErrorPage";

// IMPORT PAGES
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import PaymentResult from "./pages/PaymentResult";

// IMPORT COMPONENTS
import Loader from "./components/global/Loader";

// URL
import { destination } from "./destinationUrl";

const App = () => {
  const loginUrl = destination + "/me";
  const [user, setUser] = useState();
  const [locale, setLocale] = useState(
    localStorage.getItem("userLanguage")
      ? localStorage.getItem("userLanguage")
      : "TUK"
  );
  const [loaderActive, setLoaderActive] = useState(false);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  const languageValue = useMemo(
    () => ({ locale, setLocale }),
    [locale, setLocale]
  );
  useEffect(() => {
    const userLanguage = localStorage.getItem("userLanguage");
    const userToken = localStorage.getItem("userToken");
    setLoaderActive(true);
    if (userToken) {
      getUserInfo(loginUrl, userToken, setUser, setLoaderActive);
    } else {
      setLoaderActive(false);
    }
    if (userLanguage) {
      setLocale(userLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={languageValue}>
      <UserContext.Provider value={providerValue}>
        <div className="App">
          {loaderActive ? <Loader /> : ""}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sign-in" element={<SignIn stage={1} />} />
            <Route path="/sign-in-direct" element={<SignIn stage={2} />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/home" element={<Home ChildEl={Base} />} />
            <Route path="/home/cards" element={<Home ChildEl={Cards} />} />
            <Route path="/home/credits" element={<Home ChildEl={Credits} />} />
            <Route
              path="/home/contact-us"
              element={<Home ChildEl={ContactUs} />}
            />
            <Route
              path="/home/recovery"
              element={<Home ChildEl={Recovery} />}
            />
            <Route path="/home/profile" element={<Home ChildEl={Profile} />} />
            <Route path="/payment-result" element={<PaymentResult />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
