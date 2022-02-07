// IMPORT MODULES
import React from "react";
import { Routes, Route } from "react-router-dom";

// IMPORT STYLES
import "./styles/style.scss";

// IMPORT PERMANENT COMPONENTS
import Nav from "./components/global/Nav";
import Footer from "./components/global/Footer";

// IMPORT PAGES
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
