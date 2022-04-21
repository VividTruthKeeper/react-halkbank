// IMPORT MODULES
import React, { useEffect } from "react";

const Redirect = ({ lang }) => {
  useEffect(() => {
    localStorage.setItem("userLanguage", lang);
    window.location.href = "/";
  }, [lang]);
  return <div></div>;
};

export default Redirect;
