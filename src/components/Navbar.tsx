import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/react.svg";

const Navbar = () => {
  return (
    <div id="navbar">
      <img src={image}></img>
      <div id="navbarcontainer">
        <Link id = "navbarlet" to="/">Home</Link>
        <Link id = "navbarlet" to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
