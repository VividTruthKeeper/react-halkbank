// IMPORT MODULES
import React from "react";

// IMPORT COMPONENTS
import LogoBg from "../components/global/LogoBg";
import Nav from "../components/global/Nav";
import Footer from "../components/global/Footer";

// IMPORT PERSONAL COMPONENTS
import SignForm from "../components/sign/SignForm";

const SignIn = () => {
  return (
    <section className="sign-in">
      <Nav />
      <LogoBg />
      <div className="container">
        <div className="sign-in-inner">
          <SignForm />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SignIn;
