// IMPORT MODULES
import React from "react";

// IMPORT IMAGES
import { ReactComponent as Check } from "../../icons/check.svg";

const Success = ({ message }) => {
  return (
    <div className="success">
      <div className="wrapper">
        <Check />
      </div>
      <h1>{message}</h1>
    </div>
  );
};

export default Success;
