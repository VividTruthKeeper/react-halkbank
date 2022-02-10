// IMPORT MODULES
import React, { useState } from "react";

// IMPORT COMPONENTS
import LoggedNav from "../components/global/LoggedNav";
import Footer from "../components/global/Footer";
import Side from "../components/global/Side";

const Home = ({ ChildEl }) => {
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <section className="home">
      <Side sideOpen={sideOpen} setSideOpen={setSideOpen} />
      <div className="home-content">
        <div className="home-inner">
          <LoggedNav setSideOpen={setSideOpen} />
          <ChildEl />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Home;
