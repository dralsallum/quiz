import styled, { css, keyframes } from "styled-components";

const moveUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50px); /* or however much you want to move it */
  }
`;

export const PWrapper = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 3.5rem;
`;
export const PContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;
export const PSubContainer = styled.div`
  transform: translateX(0);
  opacity: 1;
  position: absolute;
  height: 100%;
  width: 100%;
`;
export const PBorder = styled.div`
  display: grid;
  font-size: 19px;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(0, 1fr);
  height: 100%;
  text-align: center;
  width: 100%;
`;
export const PStart = styled.div`
  grid-template-rows: min-content minmax(0, 1fr);
  grid-gap: 16px;
  display: grid;
`;
export const PSubStart = styled.div`
  grid-gap: 8px;
  display: grid;
`;
export const PSecStart = styled.div`
  display: grid;
  text-align: center;
  align-content: start;
  grid-template-rows: min-content min-content;
`;
export const PSecStartContainer = styled.div`
  line-height: 39px;
  padding-right: 10px;
  margin-top: -16px;
`;
export const PLanguageContainer = styled.div`
  align-items: center;
  display: flex;
`;
export const PLanguageSubContainer = styled.div`
  align-self: flex-end;
  aspect-ratio: 118/175;
  display: flex;
  flex-shrink: 0;
  line-height: 0;
  max-width: 118px;
  width: 50%;

  @media screen and (max-width: 700px) {
    user-select: auto;
  }
`;
export const PLanguageImgContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 1rem;
`;
export const PLanguageImgCanvas = styled.img`
  vertical-align: top;
  width: 100px;
  height: 161px;
  aspect-ratio: auto 146 / 216;
  overflow-clip-margin: content-box;
  overflow: clip;
  @media screen and (max-width: 700px) {
    height: 160px;
  }
`;
export const PLanguageSubWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;
export const PLanguageSoundWrapper = styled.div`
  margin-right: 0;
  z-index: 150;
  box-sizing: border-box;
  position: relative;
`;
export const PLanguageSoundFirst = styled.div`
  overflow: hidden;
  padding: 6px 12px;
  background-color: white;
  border: 2px solid gray;
  border-radius: 15px;
  box-sizing: border-box;
  transform: translateZ(0);
`;
export const PLanguageSoundSubFirst = styled.div`
  text-align: initial;
`;
export const PLanguageSoundFirstSpan = styled.span`
  float: left;
  margin: 0 10px 0 0;
  height: 39px;
  align-items: center;
  display: inline-flex;
  text-align: initial;
`;
export const PLanguageSouFirstSpan = styled.span``;
export const PLanguageSoundFirstButton = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 0;
  line-height: 0;
  padding: 0;
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;
  transform: translateZ(0);
  transition: filter 0.2s;
`;
export const PLanguageSoundButtonSpan = styled.span`
  height: 22px;
  width: 29px;
  display: inline-block;
  color: #1fc1ff;
`;
export const PLanguageSoundButtonSvg = styled.svg`
  width: 100%;
  height: 100%;
  transform: translate3d(0px, 0px, 0px);
  content-visibility: visible;
  overflow-clip-margin: content-box;
  overflow: hidden;
  cursor: pointer;
`;
export const PLanguageSouFirstDiv = styled.div`
  --offset: 13px;
  cursor: default;
  display: inline;
  padding: 0 0 4px;
  position: relative;
  background: url(https://d35aaqx5ub95lt.cloudfront.net/images/06f94a15de0c0937cce25dc5dc083e6e.svg)
    100% 100% repeat-x;
`;
export const PLanguageSoundSec = styled.div`
  right: -23px;
  top: 125px;
  box-sizing: border-box;
  position: absolute;

  @media screen and (max-width: 700px) {
    right: -95px;
    top: 125px;
    box-sizing: border-box;
    position: absolute;
  }
`;
export const PSecStartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;

  @media screen and (max-width: 700px) {
    min-height: 170px;
  }
`;
export const PAnswerContainer = styled.div`
  display: block;
  text-align: initial;
  font-size: 19px;
`;
export const PAnswerSubContainer = styled.div`
  border-top: 2px solid lightgray;
  grid-row-gap: 32px;
  display: grid;
  grid-auto-rows: 1fr;
`;
export const PAnswerSubContainerTop = styled.div`
  position: relative;
  touch-action: none;
`;
export const PAnswerTopLi = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;
export const PAnswerTopSpaceCont = styled.div`
  overflow: visible;
  height: 100%;
  width: 100%;
`;
export const PAnswerTopArea = styled.div`
  height: 60px;
  border-bottom: 2px solid lightgrey;
  width: 100%;
`;
export const PAnswerTopSpaceReCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  z-index: 0;
`;
export const PAnswerSubTopLine = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
`;
export const PAnswerSubContainerBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const PAnswerContainerBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 700px) {
  }
`;
export const PAnswerBlockContainer = styled.div`
  height: 60px;
  display: inline-flex;
  justify-content: center;
  gap: 2rem;
`;

export const PAnswerBlockSpan = styled.span`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PAnswerBlockButton = styled.button`
  cursor: pointer;
  font-size: 19px;
  border-radius: 12px;
  background-color: white;
  height: auto;
  line-height: 1.5;
  font-weight: 500;
  letter-spacing: normal !important;
  padding: 6px 12px;
  min-width: 60px;
  min-height: 20px;
  transition: all 0.5s ease-in-out;

  &:focus {
    outline: none;
    background-color: lightgrey !important;
  }
`;
export const PSeqBlockButton = styled.button`
  cursor: pointer;
  font-size: 19px;
  border-radius: 12px;
  background-color: white;
  height: auto;
  line-height: 1.15;
  font-weight: 500;
  letter-spacing: normal !important;
  padding: 6px 12px;
  min-width: 60px;
  min-height: 20px;
  transition: all 0.5s ease-in-out;
`;

export const PAnswerBlockButtonSpanOne = styled.span`
  visibility: hidden;
  position: absolute;
`;
export const PAnswerBlockButtonSpanTwo = styled.span`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;
export const PAnswerBlockButtonSubSpanTwo = styled.span``;
export const PStartHeader = styled.h1`
  line-height: 1.25;
  margin: 0;
  text-align: right;
  width: 100%;
  font-weight: 700;
  font-size: 36px;

  @media screen and (max-width: 700px) {
    font-size: 26px;
  }
`;
export const PStartSpan = styled.span`
  @media screen and (max-width: 700px) {
    user-select: auto;
  }
`;

//Type two style code

export const AWrapper = styled.div`
  align-items: center;
  display: grid;
  text-align: initial;
  align-content: start;
  margin-top: 4rem;

  @media screen and (max-width: 700px) {
    align-items: center;
    grid-gap: 24px;
  }
`;
//add grid spacing
export const ASubWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: initial;
  font-size: 19px;
  gap: 1rem;
  flex-wrap: wrap;

  @media screen and (max-width: 700px) {
  }
`;
export const AContainer = styled.div`
  display: inline-flex;
  color: 75 75 75;
  flex-direction: column;
  font-size: 19px;
  border: 1px solid lightgrey;
  border-radius: 12px;
  border-width: 2px 2px 4px;
  cursor: pointer;
  outline: 0;
  position: relative;
  touch-action: manipulation;
  transform: translateZ(0);
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 700px) {
    padding: 24px;
  }
`;
export const ASubOne = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  color: 75 75 75;
  font-size: 19px;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    user-select: auto;
  }
`;
export const AImgContainer = styled.div`
  flex-grow: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const AImgSubImg = styled.img`
  width: 220px;

  @media screen and (max-width: 700px) {
    width: 100px;
  }
`;
export const ASubTwo = styled.div`
  align-items: center;
  display: flex;
  text-align: initial;
  @media screen and (max-width: 700px) {
    justify-content: flex-end;
  }
`;
export const AButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none; // Removes the default outline to keep it clean
    background-color: lightgrey !important;
    border: 1px solid lightgrey;
    border-radius: 12px;
  }
`;

export const SWrapper = styled.div`
  position: fixed; /* Fixed Positioning */
  bottom: 0; /* Stick to bottom */
  left: 0; /* Stick to left */
  width: 100%; /* Full width */
  z-index: 110; /* Z-index for layering */
  margin-bottom: 2rem;
`;
export const SContainer = styled.div`
  transition: max-height 0.3s ease-in-out;
  width: 100%;
  @media screen and (max-width: 700px) {
    background-color: white;
    border-top: 2px solid lightgrey;
    max-height: 140px;
    overflow: visible;
    bottom: 0;
    position: absolute;
  }
`;
export const SSubContainer = styled.div`
  grid-gap: 8px 16px;
  display: grid;
  justify-items: center;
`;

export const SButtonContainer = styled.div`
  position: relative;
`;
export const SButtonSpan = styled.span`
  color: white;
  letter-spacing: 0;
`;
export const SButton = styled.button`
  cursor: pointer;
  min-width: 150px;
  width: 700px;
  background-color: #5ac900;
  border-radius: 8px;
  border: none;
  border-bottom: 4px solid transparent;
  color: rgb(255, 255, 255); 
  height: 50px; 
  padding: 0 16px; 
  transition: filter 0.2s, 
  border-radius: 12px;
  font-size:  25px;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 6px 8px #518210;

  &:hover {
    background-color: #76d925;
  }

  @media screen and (max-width: 700px) {
    width: 350px;
    font-size:  20px;
  }

`;

export const LWrapper = styled.div`
  display: block;
  direction: rtl;
`;
export const LContainer = styled.div`
  padding-top: 20px;
`;
export const LWhole = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;
export const LSubWhole = styled.div`
  padding: 24px 16px;
  grid-gap: 24px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content 1fr min-content;
  min-height: 460px;
  overflow: hidden;
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  width: 100%;
`;
export const LWrapperTop = styled.div`
  grid-column: 1;
  grid-row: 1;
  z-index: 100;
`;
export const LContainerTop = styled.div`
  margin: 0 auto;
  max-width: 1080px;
`;
export const LNav = styled.div`
  grid-gap: 20px;
  align-items: center;
  display: grid;
  grid-template-columns: min-content 1fr min-content;
`;
export const LNavButton = styled.button`
  cursor: pointer;
  height: 18px;
  width: 18px;
  background: none;
  border: none;
  padding: 0;
  transition: filter 0.2s;
`;
export const LNavProgressContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const LNavProgressWrapper = styled.div`
  background: grey;
  border-radius: 8px;
  position: relative;
  height: 16px; // Add height
  width: 100%; // Add width
`;
export const LNavProgressTop = styled.div``;
export const LNavProgressSupTop = styled.div``;
export const LNavProgressLetTop = styled.div`
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
export const LNavProgressBottom = styled.div`
  background: green;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 16px;
  width: ${({ progress }) => `${progress}%`};
  border-radius: 8px;
`;
export const LNavProgressSubBottom = styled.div`
  position: absolute;
  right: 100%;
  top: 50%;
`;
export const LNavHeartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;
export const LNavHeartImg = styled.img`
  animation-duration: 0.5s;
  animation-name: dnHSf;
  height: 32px;
  width: 32px;
  border-style: none;
`;
export const LNavHeartSpan = styled.span`
  animation-duration: 0.5s;
  animation-name: dnHSf;
  color: #ff4c4b;
  font-weight: 700;
  margin-right: 3px;
`;
export const LNavButtonImg = styled.img`
  height: 18px;
  width: 18px;
  user-select: inherit;
  border-style: none;
`;

export const TWrapperTop = styled.div`
  grid-column: 1;
  grid-row: 1;
  z-index: 100;
  justify-content: center;
`;
export const TContainerTop = styled.div`
  margin: 0 auto;
  max-width: 1080px;
`;
export const TNav = styled.div`
  grid-gap: 20px;
  align-items: center;
  display: grid;
  grid-template-columns: min-content 1fr min-content;
`;
export const TNavButton = styled.button`
  cursor: pointer;
  height: 18px;
  width: 18px;
  background: none;
  border: none;
  padding: 0;
  transition: filter 0.2s;
`;
export const TNavProgressContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const TNavProgressWrapper = styled.div`
  background: lightgrey;
  border-radius: 8px;
  position: relative;
  height: 16px;
  width: 100%;
`;
export const TNavProgressTop = styled.div``;
export const TNavProgressSupTop = styled.div``;
export const TNavProgressLetTop = styled.div`
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
export const TNavProgressBottom = styled.div`
  background: #5ac900;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 16px;
  width: ${({ progress }) => `${progress}%`};
  border-radius: 8px;
  transition: width 0.5s ease; // This line is added for animation
`;
export const TNavProgressSubBottom = styled.div`
  position: absolute;
  right: 100%;
  top: 50%;
`;
export const TNavHeartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;
export const TNavHeartImg = styled.img`
  animation-duration: 0.5s;
  animation-name: dnHSf;
  height: 32px;
  width: 32px;
  border-style: none;
`;
export const TNavHeartSpan = styled.span`
  animation-duration: 0.5s;
  animation-name: dnHSf;
  color: #ff4c4b;
  font-weight: 700;
  margin-right: 3px;
`;
export const TNavButtonImg = styled.img`
  height: 18px;
  width: 18px;
  user-select: inherit;
  border-style: none;
`;
