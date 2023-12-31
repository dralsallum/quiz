import React from "react";
import Logo from "../../assets/main-english-logo.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavbarContainerImg,
  NavMenu,
  NavBtnLink,
  ButtonMain,
} from "./Navbar.elements";
import { Link } from "react-router-dom";
import { useUser } from "../../UserContext"; // Import the useUser hook from UserContext
import { signOut } from "@firebase/auth";
import { auth } from "../../firebase";

const NavbarMe = () => {
  const { user, setUser } = useUser(); // Use the user object from UserContext

  const emailPrefix = user?.emailPrefix; // Safe-check in case user object is null

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null); // reset the user state in context
      })
      .catch((error) => {
        // Handle any errors during sign-out
        console.error("Error signing out: ", error);
      });
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <NavbarContainerImg src={Logo} />
          </Link>
        </NavLogo>
        <NavMenu>
          {user ? (
            <ButtonMain primary onClick={handleSignOut}>
              تسجيل خروج
            </ButtonMain>
          ) : (
            <NavBtnLink to="/signup">
              <ButtonMain primary>تسجيل دخول</ButtonMain>
            </NavBtnLink>
          )}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default NavbarMe;
