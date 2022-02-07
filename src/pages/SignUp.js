// IMPORT IMAGES
import React from "react";

// IMPORT PERSONAL COMPONENTS
import RegForm from "../components/sign/RegForm";

const SignUp = () => {
  return (
    <section className="sign-up">
      <div className="container">
        <div className="sign-up-inner">
          <RegForm />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
