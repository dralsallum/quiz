import React, { useState } from "react";
import {
  LearnContainerTop,
  LearnNav,
  LearnNavButton,
  LearnNavButtonImg,
  LearnNavHeartContainer,
  LearnNavHeartImg,
  LearnNavHeartSpan,
  LearnNavProgressBottom,
  LearnNavProgressContainer,
  LearnNavProgressLetTop,
  LearnNavProgressSubBottom,
  LearnNavProgressSupTop,
  LearnNavProgressTop,
  LearnNavProgressWrapper,
  LearnWrapperTop,
} from "./TestNav.elements";
import Cross from "../../assets/cross.svg";
import Heart from "../../assets/Heart.svg";
import { Link } from "react-router-dom";

const TestNav = ({ progress, hearts }) => {
  return (
    <>
      <LearnWrapperTop>
        <LearnContainerTop>
          <LearnNav>
            <Link
              to="/train"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <LearnNavButton>
                <LearnNavButtonImg src={Cross} />
              </LearnNavButton>
            </Link>
            <LearnNavProgressContainer>
              <LearnNavProgressWrapper>
                <LearnNavProgressTop>
                  <LearnNavProgressSupTop></LearnNavProgressSupTop>
                  <LearnNavProgressLetTop>
                    <LearnNavProgressSubBottom></LearnNavProgressSubBottom>
                  </LearnNavProgressLetTop>
                </LearnNavProgressTop>
                <LearnNavProgressBottom progress={progress} />
              </LearnNavProgressWrapper>
            </LearnNavProgressContainer>
            <LearnNavHeartContainer>
              <LearnNavHeartImg src={Heart} />
              <LearnNavHeartSpan>{hearts}</LearnNavHeartSpan>
            </LearnNavHeartContainer>
          </LearnNav>
        </LearnContainerTop>
      </LearnWrapperTop>
    </>
  );
};

export default TestNav;
