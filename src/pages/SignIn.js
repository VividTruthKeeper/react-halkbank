// IMPORT MODULES
import React from "react";

// IMPORT COMPONENTS
import LogoBg from "../components/global/LogoBg";

// IMPORT PERSONAL COMPONENTS
import SignForm from "../components/signIn/SignForm";

const SignIn = () => {
  return (
    <section className="sign-in">
      <LogoBg />
      <div className="container">
        <div className="sign-in-inner">
          <SignForm />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
