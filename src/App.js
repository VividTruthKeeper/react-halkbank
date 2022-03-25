// IMPORT MODULES
import React, { useState, useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./backend/UserContext";

// IMPORT FUNCTIONS
import { getUserInfo } from "./backend/getUserInfo";

// IMPORT STYLES
import "./styles/style.scss";

// IMPORT INNER PAGES
import Base from "./pages/Base";
import Cards from "./pages/Cards";
import Credits from "./pages/Credits";
import ContactUs from "./pages/ContactUs";
import Recovery from "./pages/Recovery";
import Profile from "./pages/Profile";

// IMPORT PAGES
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

// IMPORT COMPONENTS
import Loader from "./components/global/Loader";

// URL
import { destination } from "./destinationUrl";

const App = () => {
  const loginUrl = destination + "/me";
  const [user, setUser] = useState();
  const [loaderActive, setLoaderActive] = useState(false);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setLoaderActive(true);
    if (userToken) {
      getUserInfo(loginUrl, userToken, setUser, setLoaderActive);
    } else {
      setLoaderActive(false);
    }
  }, []);

  return (
    <UserContext.Provider value={providerValue}>
      <div className="App">
        {loaderActive ? <Loader /> : ""}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home ChildEl={Base} />} />
          <Route path="/home/cards" element={<Home ChildEl={Cards} />} />
          <Route path="/home/credits" element={<Home ChildEl={Credits} />} />
          <Route
            path="/home/contact-us"
            element={<Home ChildEl={ContactUs} />}
          />
          <Route path="/home/recovery" element={<Home ChildEl={Recovery} />} />
          <Route path="/home/profile" element={<Home ChildEl={Profile} />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};

export default App;
