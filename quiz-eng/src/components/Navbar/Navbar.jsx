import React from "react";
import { NavbarContainer, NavbarContainerImg } from "./Navbar.elements";
import Logo from "../../assets/12english-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <NavbarContainerImg src={Logo} />
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
