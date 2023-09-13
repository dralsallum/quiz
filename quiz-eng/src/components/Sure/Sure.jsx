import React from "react";

import {
  SureButton,
  SureButtonContainer,
  SureButtonSpan,
  SureContainer,
  SureSubContainer,
  SureWrapper,
} from "./Sure.elements";

const Sure = () => {
  return (
    <SureWrapper>
      <SureContainer>
        <SureSubContainer>
          <SureButtonContainer>
            <SureButton>
              <SureButtonSpan>تحقق</SureButtonSpan>
            </SureButton>
          </SureButtonContainer>
        </SureSubContainer>
      </SureContainer>
    </SureWrapper>
  );
};

export default Sure;
