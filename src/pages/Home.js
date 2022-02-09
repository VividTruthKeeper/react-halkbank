// IMPORT MODULES
import React from "react";

// IMPORT COMPONENTS
import LoggedNav from "../components/global/LoggedNav";
import Footer from "../components/global/Footer";
import Side from "../components/global/Side";

const Home = ({ ChildEl }) => {
  return (
    <section className="home">
      <Side />
      <div className="home-content">
        <LoggedNav />
        <ChildEl />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
