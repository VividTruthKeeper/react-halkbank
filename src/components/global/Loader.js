// IMPORT MODULES
import React from "react";

// IMPORT IMAGES
import { ReactComponent as Spinner } from "../../icons/loader.svg";

const Loader = () => {
  return (
    <div className="loader">
      <Spinner className="spinner" />
    </div>
  );
};

export default Loader;
