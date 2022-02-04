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

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
