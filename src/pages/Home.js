// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../backend/UserContext";
import { useNavigate } from "react-router-dom";

// IMPORT COMPONENTS
import LoggedNav from "../components/global/LoggedNav";
import Footer from "../components/global/Footer";
import Side from "../components/global/Side";

const Home = ({ ChildEl }) => {
  const [sideOpen, setSideOpen] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    if (!user) {
      console.log("Сука, что ты делаешь");
      navigate("/sign-in");
    }
  }, [user]);
  // CLEANUP FUNCTION
  useEffect(() => {
    return () => null;
  }, []);

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
