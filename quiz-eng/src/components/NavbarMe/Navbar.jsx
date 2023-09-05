import React from "react";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import Logo from "../../assets/12english-logo.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavbarLogoContainer,
  NavbarContainerImg,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavItemBasket,
  NavBtnBaskets,
  NavBtnBasketsSpan,
} from "./Navbar.elements";
import { Link } from "react-router-dom";
import { useBasket } from "../../BasketContext";

const NavbarMe = () => {
  const { basketCount } = useBasket();

  return (
    <IconContext.Provider value={{ color: "#2946b6" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <NavbarLogoContainer>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  backgroundColor: "#ffffff",
                }}
              >
                <NavbarContainerImg src={Logo} />
              </Link>
            </NavbarLogoContainer>
          </NavLogo>
          <NavMenu>
            <Link
              to="/checkout"
              style={{
                textDecoration: "none",
                color: "inherit",
                backgroundColor: "#ffffff",
              }}
            >
              <NavItemBasket>
                <NavBtnBaskets color="2946b6" />
                <NavBtnBasketsSpan>{basketCount}</NavBtnBasketsSpan>
              </NavItemBasket>
            </Link>
            <NavBtnLink to="/sign-up">
              <Button primary>تسجيل دخول</Button>
            </NavBtnLink>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default NavbarMe;
