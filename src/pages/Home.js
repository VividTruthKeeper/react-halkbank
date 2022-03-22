// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../backend/UserContext";
import { useNavigate } from "react-router-dom";

// IMPORT COMPONENTS
import LoggedNav from "../components/global/LoggedNav";
import Footer from "../components/global/Footer";
import Side from "../components/global/Side";

const Home = ({ ChildEl }) => {
  const [sideOpen, setSideOpen] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [user, navigate]);

  return (
    <section className="home">
      <Side sideOpen={sideOpen} setSideOpen={setSideOpen} />
      <div className="home-content">
        <div className="home-inner">
          <LoggedNav setSideOpen={setSideOpen} />
          {/* RENDER PAGE DEPENDING ON URL */}
          <ChildEl />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Home;
