import styled, { keyframes, css } from "styled-components";

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const drawerContentAnim = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 0.9375rem, 0);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
`;

export const PWrap = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;
`;
export const PCon = styled.div`
  height: 00%;
  width: 100%;
  position: relative;
`;
export const PSubCon = styled.div`
  transform: translateX(0);
  opacity: 1;
  position: absolute;
  height: 100%;
  width: 100%;
`;
export const PBorder = styled.div`
  /* Your regular styles here */
  display: grid;
  font-size: 19px;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(0, 1fr);
  height: 100%;
  text-align: center;
  width: 100%;

  ${(props) =>
    props.ignoreStyle &&
    `
    /* Reset or override the styles here. As an example, we're resetting most of them: */
    display: initial;
    font-size: initial;
    grid-template-columns: initial;
    grid-template-rows: initial;
    text-align: center;
  `}
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
export const PSecStartCon = styled.div`
  line-height: 39px;
  padding-right: 10px;
  margin-top: -26px;
`;
export const PLangCon = styled.div`
  align-items: center;
  display: flex;
`;
export const PLangSubCon = styled.div`
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
export const PLangImgCon = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 1rem;
`;
export const PLanguageImgCanvas = styled.img`
  vertical-align: top;
  width: 100px;
  height: 150px;
  aspect-ratio: auto 146 / 216;
  overflow-clip-margin: content-box;
  overflow: clip;
  @media screen and (max-width: 700px) {
    height: 150px;
  }
`;
export const PLangSubWrap = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;
export const PLangSoundWrap = styled.div`
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
  color: black;

  @media screen and (max-width: 700px) {
    right: -95px;
    top: 130px;
    box-sizing: border-box;
    position: absolute;
  }
`;
export const PLanguageSounSec = styled.div`
  left: -900px;
  top: 125px;
  box-sizing: border-box;
  position: absolute;
  direction: ltr;
  color: black;

  @media screen and (max-width: 850px) {
    left: -450px;
    top: 125px;
    box-sizing: border-box;
    position: absolute;
  }
  @media screen and (max-width: 700px) {
    left: -45px;
    top: 125px;
    box-sizing: border-box;
    position: absolute;
  }
`;
export const PSecStartWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;

  @media screen and (max-width: 700px) {
    min-height: 170px;
  }
`;
export const PAnswerCon = styled.div`
  display: block;
  text-align: initial;
  font-size: 19px;
`;
export const PAnswerSubCon = styled.div`
  border-top: 2px solid lightgray;
  grid-row-gap: 32px;
  display: grid;
  grid-auto-rows: 1fr;
`;
export const PAnswerSubConTop = styled.div`
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
  direction: rtl;
  width: 100%;
  padding-top: 0.2rem;
`;
export const PAnswerTopAre = styled.div`
  height: 60px;
  border-bottom: 2px solid lightgrey;
  direction: ltr;
  width: 100%;
  padding-top: 0.2rem;
  @media screen and (max-width: 700px) {
    direction: ltr;
  }
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
export const PAnswerSubConBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const PAnswerConBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const PAnswerBlockCon = styled.div`
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
  border: 2px solid #cecece;
  box-shadow: -2px 2px 0.5px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: black;

  &:active {
    outline: none;
    background-color: lightgrey !important;
  }
`;
export const PSeqBlockButton = styled.button`
  cursor: pointer;
  font-size: 19px;
  border-radius: 12px;
  background-color: transparent;
  height: auto;
  line-height: 1.15;
  font-weight: 500;
  letter-spacing: normal !important;
  padding: 6px 12px;
  min-width: 60px;
  min-height: 20px;
  transition: all 0.5s ease-in-out;
  text-decoration: none; /* Removes text underline */
  border: 2px solid #cecece;
  color: black;
  box-shadow: -2px 2px 0.5px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
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

export const AWrap = styled.div`
  align-items: center;
  display: grid;
  text-align: initial;
  align-content: start;
  margin-top: 1rem;

  @media screen and (max-width: 700px) {
    align-items: center;
    grid-gap: 24px;
  }
`;
export const WrWrap = styled.div`
  align-content: start;
  grid-template-rows: min-content min-content;
  display: grid;
  text-align: initial;

  @media screen and (max-width: 700px) {
    grid-template-rows: min-content 1fr;
  }
`;
export const WrSubWrap = styled.div`
  line-height: 39px;
  margin-top: -16px;
  padding-right: 10px;

  @media screen and (max-width: 700px) {
  }
`;
export const WrCon = styled.div`
  align-items: center;
  display: flex;

  @media screen and (max-width: 700px) {
  }
`;
export const WrLw = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 87px;
  align-self: start;

  @media screen and (max-width: 700px) {
  }
`;
export const WrLwCon = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  @media screen and (max-width: 700px) {
  }
`;
export const WrLwText = styled.textarea`
  flex-grow: 1;
  resize: none;
  appearance: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
  border: 2px solid rgb(229, 229, 229);
  border-radius: 10px;
  padding: 10px 12px;
  line-height: 24px;
  color: black;
  text-align: initial;
  margin: 0;
`;

//add grid spacing
export const ASubWrap = styled.div`
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
export const ACon = styled.div`
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
export const AImgCon = styled.div`
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

  &:hover,
  &:active {
    outline: none; // Removes the default outline to keep it clean
    background-color: lightgrey !important;
    border: 1px solid lightgrey;
    border-radius: 12px;
  }
`;

export const SWrap = styled.div`
  position: fixed; /* Fixed Positioning */
  bottom: 0; /* Stick to bottom */
  left: 0; /* Stick to left */
  width: 100%; /* Full width */
  z-index: 110; /* Z-index for layering */
`;
export const SCon = styled.div`
  transition: max-height 0.3s ease-in-out;
  width: 100%;
  background-color: ${(props) => props.backgroundColor || "#ffffff"};
  border-top: 2px solid lightgrey;

  @media screen and (max-width: 700px) {
    background-color: ${(props) => props.backgroundColor || "#ffffff"};
    border-top: 2px solid lightgrey;
    max-height: 120px;
    overflow: visible;
    bottom: 0;
    position: relative;
  }
`;
export const SSubCon = styled.div`
  grid-gap: 8px 16px;
  display: grid;
  justify-items: center;
  background-color: ${(props) => props.backgroundColor || "#ffffff"};
`;

export const SButtonCon = styled.div`
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
  color: rgb(255, 255, 255); 
  height: 50px; 
  padding: 0 16px; 
  transition: filter 0.2s, 
  font-size:  25px;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 6px 8px #518210;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size:  26px;

  &:hover {
    background-color: #76d925;
  }

  @media screen and (max-width: 700px) {
    width: 350px;
    font-size:  20px;
  }

`;

export const LWrap = styled.div`
  display: block;
  direction: rtl;
`;
export const LCon = styled.div`
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
  position: relative;
  height: 100%;
  right: 0;
  top: 0;
  width: 100%;
`;
export const LWrapTop = styled.div`
  grid-column: 1;
  grid-row: 1;
  z-index: 100;
`;
export const LConTop = styled.div`
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
export const LNavProgressCon = styled.div`
  display: flex;
  align-items: center;
`;
export const LNavProgressWrap = styled.div`
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
export const LNavHeartCon = styled.div`
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

export const TWrapTop = styled.div`
  grid-column: 1;
  grid-row: 1;
  z-index: 100;
  justify-content: center;
`;
export const TConTop = styled.div`
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
export const TNavProgressCon = styled.div`
  display: flex;
  align-items: center;
`;
export const TNavProgressWrap = styled.div`
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
export const TNavHeartCon = styled.div`
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
export const RCon = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
export const RWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`;

export const RtTop = styled.div`
  display: block;
`;
export const RtTopSpan = styled.span`
  height: 30vh;
  display: inline-block;
`;
export const RtTopimg = styled.img`
  height: 30vh;
  display: inline-block;
`;
export const RtMiddle = styled.div`
  display: block;
`;
export const RtReg = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;
export const RtRegCon = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  z-index: -2;
  @media screen and (max-width: 700px) {
  }
`;
export const RtRegSub = styled.div`
  animation: 0.2s ease-in-out;
  animation-fill-mode: both;
  border-radius: 16px;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
  animation-delay: 900ms;
  background-color: #ffc800;

  @media screen and (max-width: 700px) {
  }
`;
export const RtRegUb = styled.div`
  animation: _1RieK 0.2s ease-in-out;
  animation-fill-mode: both;
  border-radius: 16px;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
  animation-delay: 900ms;
  background-color: #59cc03;

  @media screen and (max-width: 700px) {
  }
`;
export const RtRegSu = styled.div`
  animation: _2wJ1R 0.2s ease-in-out;
  color: rgb(255, 255, 255);
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  padding: 8px 10px;
  text-transform: uppercase;
  width: auto;
`;
export const RtRegImg = styled.img`
  margin-left: 8px;
  width: 18px;
  border-style: none;
`;
export const RtRegBu = styled.div`
  align-items: center;
  animation: 0.1s ease-in-out;
  background-color: rgb(255, 255, 255);
  border: 2px solid #ffc800;
  border-radius: 16px;
  color: #ffc800;
  width: 150px;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 700;
  height: 60px;
  justify-content: center;
  transition: border-color 0.2s;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;
export const RtRegBt = styled.div`
  align-items: center;
  animation: 0.1s ease-in-out;
  background-color: rgb(255, 255, 255);
  border: 2px solid #59cc03;
  border-radius: 16px;
  color: #59cc03;
  width: 200px;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 700;
  height: 60px;
  justify-content: center;
  transition: border-color 0.2s;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;
export const RHeader = styled.h2`
  font-size: 28px;
  color: #ffc800;
`;
export const RSubHeader = styled.p`
  font-size: 16px;
  color: #afafaf;
  margin-top: 8px;
  margin-bottom: 4px;
`;
export const RButton = styled.button`
cursor: pointer;
min-width: 150px;
width: 700px;
background-color: #5ac900;
border-radius: 8px;
border: none;
color: rgb(255, 255, 255); 
height: 50px; 
padding: 0 16px; 
transition: filter 0.2s, 
font-size:  25px;
font-weight: 700;
text-transform: uppercase;
display: inline-flex;
align-items: center;
justify-content: center;
box-shadow: 1px 6px 8px #518210;
margin-top: 1rem;
margin-bottom: 2rem;
font-size:  26px;

&:hover {
  background-color: #76d925;
}

@media screen and (max-width: 700px) {
  width: 350px;
  font-size:  20px;
}
`;
export const PTCon = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  align-self: center;
  text-align: center;
  text-decoration: none;
  flex-wrap: wrap;
  gap: 0.8rem;
`;
export const PACon = styled.div`
  margin-top: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-direction: row;
  width: 100%;
  align-self: center;
  text-align: center;
  flex-wrap: wrap;
  border-radius: 8px;
`;
export const SlWrap = styled.div`
  will-change: transform, opacity;
  animation: ${({ isVisible }) =>
    isVisible
      ? css`
          ${drawerContentAnim} 0.50s ease-in forwards
        `
      : "none"};
  background-color: #fff;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translate3d(0, 100%, 0);
  transition: all 0.25s ease-in-out;
  padding: 1rem 0;
  border-radius: 14px;
  box-shadow: 0 0 0.625rem -0.125rem #d6dee6;
  z-index: 1000;
`;
export const SlCon = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;
export const SlReCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  font-size: 100%;
  line-height: 1.7;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    padding-left: 0px;
  }
`;
export const SlReSub = styled.div`
  position: static;

  @media screen and (max-width: 700px) {
    position: static;
  }
`;
export const SlReSu = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin: 0px auto;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    animation: ${bounceAnimation} 1s infinite;
  }
`;
export const SlReSvg = styled.svg`
  width: 100%;
  height: 100%;
  transform: translate3d(0px, 0px, 0px);
  content-visibility: visible;
  pointer-events: none;
`;
export const SlReHe = styled.h3`
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.3em;
  text-align: right;

  @media screen and (max-width: 700px) {
    font-size: 1.125rem;
  }
`;
export const SlSaCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 700px) {
    margin: 1.5rem 0px;
  }
`;
export const SlSaUl = styled.ul`
  background-color: rgb(243, 248, 254);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  width: 100%;
  list-style-type: none;
`;
export const SlSaLi = styled.li`
  display: list-item;
`;
export const SlSaSub = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SlSaLe = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;
export const SlSaIc = styled.div`
  margin-block: 0.25rem;
`;
export const SlSaSubIc = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SlSaIcSvg = styled.div`
  width: 100%;
  height: 100%;
  transform: translate3d(0px, 0px, 0px);
  content-visibility: visible;
  margin-top: 5px;
`;
export const SlSaBut = styled.button`
  width: 1.25rem;
  height: 1.25rem;
  padding: 0px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-transform: none;
  @media screen and (max-width: 700px) {
  }
`;
export const SlSaPa = styled.p`
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  font-weight: 500;
  text-transform: none;
  font-size: 1.125rem;
  line-height: 1.5em;
  color: rgb(30, 45, 64);
  text-align: left;
  text-decoration: unset;
  margin: 0;
  display: block;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  @media screen and (max-width: 700px) {
  }
`;
export const SlSaSpan = styled.span`
  font-weight: 600;
  text-transform: none;
  font-size: 1.125rem;
  line-height: 1.5em;
  color: #3d3d3d;
  text-align: left;
  @media screen and (max-width: 700px) {
  }
`;
export const SlSm = styled.div`
  display: block;
  font-weight: 600;

  @media screen and (max-width: 700px) {
  }
`;
export const SlSmFooter = styled.footer`
  color: #3f3f3f;
  font-size: 1rem;
  margin-inline: 0.5rem;
  line-height: 1.5em;
  font-weight: 600;
  @media screen and (max-width: 700px) {
  }
`;
export const SlSt = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;

  @media screen and (max-width: 700px) {
  }
`;
export const SlStBut = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.625rem;
  border-width: 0.125rem;
  border-style: solid;
  cursor: pointer;
  text-align: center;
  line-height: 1.5rem;
  overflow-wrap: break-word;
  transition: all 0.2s ease-in-out 0s;
  min-width: 6.25rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  opacity: 1;
  pointer-events: auto;
  text-decoration: none;
  background-color: rgb(17, 110, 238);
  color: rgb(255, 255, 255);
  border-color: rgb(17, 110, 238);
  max-width: 360px;
  min-width: 200px !important;
  outline: none;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
export const CroWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;

  @media screen and (max-width: 700px) {
  }
`;
export const CroCon = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  @media screen and (max-width: 700px) {
  }
`;
export const CroReCon = styled.div`
  position: relative;
  opacity: 1;
  width: 100%;
  @media screen and (max-width: 700px) {
  }
`;
export const CroSubCon = styled.div`
  align-content: center;
  display: grid;
  font-size: 19px;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(0, 1fr);
  height: 100%;
  justify-content: center;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 700px) {
  }
`;
export const CroTe = styled.div`
  grid-gap: 16px;
  display: grid;
  transform: translateZ(0);
  grid-template-rows: min-content minmax(0, 1fr);
  overflow-x: hidden;
  overflow-y: auto;

  @media screen and (max-width: 700px) {
  }
`;
export const CroTeCon = styled.div`
  grid-gap: 8px;
  display: grid;

  @media screen and (max-width: 700px) {
  }
`;
export const CroTeHe = styled.h1`
  font-size: 25px;
  line-height: 1.25;
  margin: 0;
  text-align: right;
  width: 100%;
  font-weight: 700;

  @media screen and (max-width: 700px) {
  }
`;
export const CroTeSpan = styled.span`
  font-size: 25px;
  line-height: 1.25;
  margin: 0;
  text-align: right;

  @media screen and (max-width: 700px) {
  }
`;
export const CroQa = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 700px) {
  }
`;
export const CroQaWrap = styled.div`
  display: grid;
  text-align: initial;
  grid-gap: 16px 20px;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 150px);
  grid-template-rows: repeat(4, 75px);
  justify-content: center;
  max-height: 100%;
  max-width: 100%;

  @media screen and (max-width: 700px) {
  }
`;
export const CroQaSpan = styled.span`
  display: inline-flex;
  flex-direction: column;
  box-sizing: inherit;
  font-family: din-round, sans-serif;
  outline: none;
  text-align: initial;
  font-size: 19px;
  cursor: default;

  @media screen and (max-width: 700px) {
  }
`;
export const CroQaBut = styled.button`
  cursor: pointer;
  flex: 1;
  font-size: 19px;
  border-radius: 12px;
  color: rgb(75, 75, 75);
  height: 50px;
  width: 150px;
  line-height: 1.15;
  font-weight: 500;
  text-transform: none;
  background: none;
  border-width: 2px 2px 4px;
  border: 3px solid #e5e5e5;
  box-shadow: rgba(0, 0, 0, 0.2) -2px 2px 0.5px;

  @media screen and (max-width: 700px) {
  }
`;
export const CroQaSp = styled.span`
  @media screen and (max-width: 700px) {
  }
`;
export const GearSvg = styled.svg``;
