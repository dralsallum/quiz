import React, { useState } from "react";
import {
  LearnContainer,
  LearnSubWhole,
  LearnWhole,
  LearnWrapper,
  LearnWrapperTop,
} from "./Learn.element";
import TestNav from "../TestNav/TestNav";
import Sure from "../Sure/Sure";
import Project from "../Project/Project";

const Learn = () => {
  return (
    <LearnWrapperTop>
      <LearnWrapper>
        <LearnContainer>
          <LearnWhole>
            <LearnSubWhole>
              <TestNav />
              <Project />
              <Sure />
            </LearnSubWhole>
          </LearnWhole>
        </LearnContainer>
      </LearnWrapper>
    </LearnWrapperTop>
  );
};

export default Learn;
