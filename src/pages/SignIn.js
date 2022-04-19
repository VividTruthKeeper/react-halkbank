// IMPORT MODULES
import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../backend/UserContext";

// IMPORT FUNCTIONS
import { loginUser } from "../backend/loginUser";

// IMPORT COMPONENTS
import LogoBg from "../components/global/LogoBg";
import Nav from "../components/global/Nav";
import Footer from "../components/global/Footer";
import Success from "../components/global/Success";

// IMPORT PERSONAL COMPONENTS
import SignForm from "../components/sign/SignForm";
import PasswordRec from "../components/sign/PasswordRec";

// URL
import { destination } from "../destinationUrl";

const SignIn = ({ stage }) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const checkFirstLoad = useRef(true);
  const postUrl = destination + "/login";
  const [formData, setFormData] = useState();
  const { user, setUser } = useContext(UserContext);
  const [recoveryOpen, setRecoveryOpen] = useState(stage === 2 ? true : false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  useEffect(() => {
    if (checkFirstLoad.current) {
      checkFirstLoad.current = false;
    } else {
      loginUser(postUrl, formData, setUser, true, setError, setIsLoading);
    }
  }, [formData]);
  return (
    <section className="sign-in">
      {success ? (
        <Success message={"Пароль успешно изменен!"} setSuccess={setSuccess} />
      ) : null}
      <PasswordRec
        setSuccess={setSuccess}
        recoveryOpen={recoveryOpen}
        setRecoveryOpen={setRecoveryOpen}
        setIsLoading={setIsLoading}
        stage={stage}
      />
      <Nav />
      <LogoBg />
      <div className="container">
        <div className="sign-in-inner">
          <SignForm
            setRecoveryOpen={setRecoveryOpen}
            setFormData={setFormData}
            error={error}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SignIn;
