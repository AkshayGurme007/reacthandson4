import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
  return (
    <div className="container">
      <Link to="/" className="btn">
        HOME
      </Link>
      <Link to="/Students" className="btn">
        STUDENT
      </Link>
      <Link to="/Contact" className="btn">
        CONTACTS
      </Link>
    </div>
  );
};

export default Nav;
