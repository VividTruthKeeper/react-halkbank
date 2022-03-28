// IMPORT MODULES
import React from "react";

// IMPORT IMAGES
import error from "../../images/error-cross.png";

const Error = ({ message }) => {
  return (
    <div className="success error">
      <div className="wrapper">
        <img src={error} alt="error" />
      </div>
      <h1>{message}</h1>
    </div>
  );
};

export default Error;
