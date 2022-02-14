// IMPORT MODULES
import React from "react";
import { Routes, Route } from "react-router-dom";

// IMPORT STYLES
import "./styles/style.scss";

// IMPORT PAGES
import Base from "./pages/Base";
import Cards from "./pages/Cards";
import Credits from "./pages/Credits";

// IMPORT PAGES
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home ChildEl={Base} />} />
        <Route path="/home/cards" element={<Home ChildEl={Cards} />} />
        <Route path="/home/credits" element={<Home ChildEl={Credits} />} />
      </Routes>
    </div>
  );
};

export default App;
