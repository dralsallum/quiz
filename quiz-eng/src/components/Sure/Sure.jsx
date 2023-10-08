import React from "react";
import {
  SureButton,
  SureButtonContainer,
  SureButtonSpan,
  SureContainer,
  SureSubContainer,
  SureWrapper,
} from "./Sure.elements";

const Sure = ({ handleSureButtonClick, setSelectedAnswer, selectedAnswer }) => {
  return (
    <SureWrapper>
      <SureContainer>
        <SureSubContainer>
          <SureButtonContainer>
            <SureButton onClick={() => handleSureButtonClick()}>
              <SureButtonSpan>تحقق</SureButtonSpan>
            </SureButton>
          </SureButtonContainer>
        </SureSubContainer>
      </SureContainer>
    </SureWrapper>
  );
};

export default Sure;
