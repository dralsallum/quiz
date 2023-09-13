import React from "react";
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
} from "./Bottom.elements";
import Logo from "../../assets/12english-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Bottom = () => {
  return (
    <NavHeader>
      <NavHeaderSub>
        <NavWrapper>
          <NavContanier>
            <NavContanierLogoMain>
              <NavContanierLogoMainSpan>
                <NavContanierLogoMainSvg>
                  <NavContanierLogoMainimg src={Logo} alt="" />
                </NavContanierLogoMainSvg>
              </NavContanierLogoMainSpan>
            </NavContanierLogoMain>
          </NavContanier>
          <NavContanierSec>2</NavContanierSec>
          <NavContainerThi>
            <NavrightFir></NavrightFir>
            <NavrightSec>
              <NavrightSecSub>
                <NavrightSecsSpan>
                  <NavrightSecsSpanIcon>
                    <FontAwesomeIcon
                      icon={faFire}
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
                <NavrightSecsSpanText>1</NavrightSecsSpanText>
              </NavrightSecSub>
            </NavrightSec>
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
                  </NavrightSubContainer>
                </NavrightFourSubContainer>
              </NavrightFourContainer>
            </NavrightFour>
            <NavrightFifth></NavrightFifth>
            <NavrightTenth>
              <NavrightSecSub>
                <NavrightSecsSpan>
                  <NavrightSecsSpanIcon>
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
                <NavrightSecsSpanText>1</NavrightSecsSpanText>
              </NavrightSecSub>
            </NavrightTenth>
            <NavrightSeventh></NavrightSeventh>
            <NavrightEighth></NavrightEighth>
            <NavrightNinth></NavrightNinth>
            <NavrightSec>
              <NavrightSecSub>
                <NavrightSecsSpan>
                  <NavrightSecsSpanIcon>
                    <FontAwesomeIcon
                      icon={faUserPlus}
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
          </NavContainerThi>
        </NavWrapper>
      </NavHeaderSub>
    </NavHeader>
  );
};

export default Bottom;
