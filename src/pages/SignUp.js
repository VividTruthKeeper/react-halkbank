// IMPORT MODULES
import React from "react";

// IMPORT COMPONENTS
import Nav from "../components/global/Nav";
import Footer from "../components/global/Footer";

// IMPORT PERSONAL COMPONENTS
import RegForm from "../components/sign/RegForm";

const SignUp = () => {
  return (
    <section className="sign-up">
      <Nav />
      <div className="container">
        <div className="sign-up-inner">
          <RegForm />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SignUp;
