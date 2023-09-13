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

const TestNav = () => {
  const [progress, setProgress] = useState(50);
  return (
    <>
      <LearnWrapperTop>
        <LearnContainerTop>
          <LearnNav>
            <LearnNavButton>
              <LearnNavButtonImg src={Cross} />
            </LearnNavButton>
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
              <LearnNavHeartSpan>5</LearnNavHeartSpan>
            </LearnNavHeartContainer>
          </LearnNav>
        </LearnContainerTop>
      </LearnWrapperTop>
    </>
  );
};

export default TestNav;
