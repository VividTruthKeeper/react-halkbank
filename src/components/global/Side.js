// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

const Side = () => {
  return (
    <section className="side">
      <div className="side-inner">
        <ul>
          <li>
            <h2 className="side-title">Разделы</h2>
          </li>
          <li>
            <Link to="">Пластиковые карты</Link>
          </li>
          <li>
            <Link to="">Пластиковые карты</Link>
          </li>
          <li>
            <Link to="">Пластиковые карты</Link>
          </li>
        </ul>
        <ul>
          <li>
            <h2 className="side-title">Разделы</h2>
          </li>
          <li>
            <Link to="">Пластиковые карты</Link>
          </li>
          <li>
            <Link to="">Пластиковые карты</Link>
          </li>
          <li>
            <Link to="">Пластиковые карты</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Side;
