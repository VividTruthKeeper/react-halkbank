// IMPORT MODULES
import React, { useState } from "react";

// IMPORT COMPONENTS
import LogoBg from "../components/global/LogoBg";
import Nav from "../components/global/Nav";
import Footer from "../components/global/Footer";

// IMPORT PERSONAL COMPONENTS
import SignForm from "../components/sign/SignForm";
import PasswordRec from "../components/sign/PasswordRec";

const SignIn = () => {
  const [recoveryOpen, setRecoveryOpen] = useState(false);
  return (
    <section className="sign-in">
      <PasswordRec
        recoveryOpen={recoveryOpen}
        setRecoveryOpen={setRecoveryOpen}
      />
      <Nav />
      <LogoBg />
      <div className="container">
        <div className="sign-in-inner">
          <SignForm setRecoveryOpen={setRecoveryOpen} />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SignIn;
