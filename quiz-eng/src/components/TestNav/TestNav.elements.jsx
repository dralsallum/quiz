import styled from "styled-components";

export const LearnWrapperTop = styled.div`
  grid-column: 1;
  grid-row: 1;
  z-index: 100;
  justify-content: center;
`;
export const LearnContainerTop = styled.div`
  margin: 0 auto;
  max-width: 1080px;
`;
export const LearnNav = styled.div`
  grid-gap: 20px;
  align-items: center;
  display: grid;
  grid-template-columns: min-content 1fr min-content;
`;
export const LearnNavButton = styled.button`
  cursor: pointer;
  height: 18px;
  width: 18px;
  background: none;
  border: none;
  padding: 0;
  transition: filter 0.2s;
`;
export const LearnNavProgressContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const LearnNavProgressWrapper = styled.div`
  background: lightgrey;
  border-radius: 8px;
  position: relative;
  height: 16px;
  width: 100%;
`;
export const LearnNavProgressTop = styled.div``;
export const LearnNavProgressSupTop = styled.div``;
export const LearnNavProgressLetTop = styled.div`
  background: rgb(var(--color-snow-always-light));
  border-radius: inherit;
  height: 30%;
  max-width: calc(100% - var(--web-ui_internal_progress-bar-height));
  opacity: 0.2;
  position: absolute;
  right: calc(var(--web-ui_internal_progress-bar-height) / 2);
  top: 25%;
  transition-duration: 0.4s;
  transition-property: width;
  width: calc(
    var(--web-ui_internal_progress-bar-value) -
      var(--web-ui_internal_progress-bar-height)
  );
`;
export const LearnNavProgressBottom = styled.div`
  background: #5ac900;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 16px;
  width: ${({ progress }) => `${progress}%`};
  border-radius: 8px;
  transition: width 0.5s ease; // This line is added for animation
`;
export const LearnNavProgressSubBottom = styled.div`
  position: absolute;
  right: 100%;
  top: 50%;
`;
export const LearnNavHeartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;
export const LearnNavHeartImg = styled.img`
  animation-duration: 0.5s;
  animation-name: dnHSf;
  height: 32px;
  width: 32px;
  border-style: none;
`;
export const LearnNavHeartSpan = styled.span`
  animation-duration: 0.5s;
  animation-name: dnHSf;
  color: #ff4c4b;
  font-weight: 700;
  margin-right: 3px;
`;
export const LearnNavButtonImg = styled.img`
  height: 18px;
  width: 18px;
  user-select: inherit;
  border-style: none;
`;
