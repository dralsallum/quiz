import React, { useState } from "react";
import {
  NavContainerThi,
  NavContanier,
  NavContanierLogoMain,
  NavContanierLogoMainSpan,
  NavContanierLogoMainSvg,
  NavContanierLogoMainimg,
  NavContanierSec,
  NavHeader,
  NavHeaderSub,
  NavWrapper,
  NavrightEighth,
  NavrightFifth,
  NavrightFir,
  NavrightFour,
  NavrightFourContainer,
  NavrightFourSubContainer,
  NavrightNinth,
  NavrightSec,
  NavrightSecSub,
  NavrightSecsSpan,
  NavrightSecsSpanIcon,
  NavrightSecsSpanSvg,
  NavrightSecsSpanText,
  NavrightSeventh,
  NavrightSixth,
  NavrightSubContainer,
  NavrightSubSpan,
  NavrightSubSpanDiv,
  NavrightTenth,
  NavrightThi,
} from "./NavTech.elements";
import Logo from "../../assets/main-english-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useBasket } from "../../BasketContext";
import { useUser } from "../../UserContext";
import { signOut } from "@firebase/auth";
import { auth } from "../../firebase";
import Notification from "../Notification/Notification";
import notifications from "../../utils/Notification.json";

const NavTech = () => {
  const { basketCount, animate } = useBasket();
  const { user, setUser } = useUser();
  const [showNotification, setShowNotification] = useState(false); // State to control showing of notification

  const toggleNotification = () => {
    setShowNotification((prevState) => !prevState);
  };

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
    <>
      {showNotification && <Notification />}
      <NavHeader>
        <NavHeaderSub>
          <NavWrapper>
            <NavContanier>
              <NavContanierLogoMain>
                <NavContanierLogoMainSpan>
                  <NavContanierLogoMainSvg>
                    <Link to="/train">
                      <NavContanierLogoMainimg src={Logo} alt="" />
                    </Link>
                  </NavContanierLogoMainSvg>
                </NavContanierLogoMainSpan>
              </NavContanierLogoMain>
            </NavContanier>
            <NavContanierSec></NavContanierSec>
            <NavContainerThi>
              <NavrightFir></NavrightFir>
              <Link
                to="/checkout"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <NavrightSec>
                  <NavrightSecSub>
                    <NavrightSecsSpan>
                      <NavrightSecsSpanIcon>
                        <FontAwesomeIcon
                          icon={faShoppingBasket}
                          style={{
                            color: "#870099",
                            fill: "currentcolor",
                            display: "block",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                          }}
                        />
                      </NavrightSecsSpanIcon>
                    </NavrightSecsSpan>
                    <NavrightSecsSpanText className={animate ? "animate" : ""}>
                      {basketCount}
                    </NavrightSecsSpanText>
                  </NavrightSecSub>
                </NavrightSec>
              </Link>
              <NavrightThi></NavrightThi>
              <NavrightFour>
                <NavrightFourContainer>
                  <NavrightFourSubContainer>
                    <NavrightSubContainer>
                      <NavrightSubSpan>
                        <NavrightSubSpanDiv>
                          <FontAwesomeIcon
                            icon={faShield}
                            style={{
                              color: "#1F5bc1",
                              fill: "currentcolor",
                              display: "block",
                              width: "100%",
                              height: "100%",
                              overflow: "hidden",
                            }}
                          />
                        </NavrightSubSpanDiv>
                      </NavrightSubSpan>
                      <NavrightSecsSpanText></NavrightSecsSpanText>
                    </NavrightSubContainer>
                  </NavrightFourSubContainer>
                </NavrightFourContainer>
              </NavrightFour>
              <NavrightFifth></NavrightFifth>
              <NavrightTenth>
                <NavrightSecSub>
                  <NavrightSecsSpan>
                    <NavrightSecsSpanIcon onClick={toggleNotification}>
                      <FontAwesomeIcon
                        icon={faBell}
                        style={{
                          color: "#808080",
                          fill: "currentcolor",
                          display: "block",
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                        }}
                      />
                    </NavrightSecsSpanIcon>
                  </NavrightSecsSpan>
                  <NavrightSecsSpanText>
                    {notifications.length}
                  </NavrightSecsSpanText>
                </NavrightSecSub>
              </NavrightTenth>
              <NavrightSeventh></NavrightSeventh>
              <NavrightEighth></NavrightEighth>
              <NavrightNinth></NavrightNinth>
              <Link
                to={user ? "#" : "/signup"}
                onClick={user ? handleSignOut : undefined}
              >
                <NavrightSec>
                  <NavrightSecSub>
                    <NavrightSecsSpan>
                      <NavrightSecsSpanIcon>
                        <FontAwesomeIcon
                          icon={user ? faUserMinus : faUserPlus}
                          style={{
                            color: "#000000",
                            fill: "currentcolor",
                            display: "block",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            marginTop: "5px",
                          }}
                        />
                      </NavrightSecsSpanIcon>
                    </NavrightSecsSpan>
                  </NavrightSecSub>
                </NavrightSec>
              </Link>
            </NavContainerThi>
          </NavWrapper>
        </NavHeaderSub>
      </NavHeader>
    </>
  );
};

export default NavTech;
