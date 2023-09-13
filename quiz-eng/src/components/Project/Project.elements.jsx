import styled from "styled-components";

export const ProjectWrapper = styled.div`
  grid-column: 1;
  grid-row: 2;
  margin-top: 3rem;
`;
export const ProjectContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;
export const ProjectSubContainer = styled.div`
  transform: translateX(0);
  opacity: 1;
  position: absolute;
  height: 100%;
  width: 100%;
`;
export const ProjectBorder = styled.div`
  display: grid;
  font-size: 19px;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(0, 1fr);
  height: 100%;
  text-align: center;
  width: 100%;
`;
export const ProjectStart = styled.div`
  grid-template-rows: min-content minmax(0, 1fr);
  overflow-x: hidden;
  overflow-y: auto;
  grid-gap: 16px;
  display: grid;
`;
export const ProjectSubStart = styled.div`
  grid-gap: 8px;
  display: grid;
`;
export const ProjectSecStart = styled.div`
  display: grid;
  text-align: initial;
  align-content: start;
  grid-template-rows: min-content min-content;
`;
export const ProjectSecStartContainer = styled.div`
  line-height: 39px;
  padding-right: 10px;
  margin-top: -16px;
`;
export const ProjectLanguageContainer = styled.div`
  align-items: center;
  display: flex;
`;
export const ProjectLanguageSubContainer = styled.div`
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
export const ProjectLanguageImgContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 1rem;
`;
export const ProjectLanguageImgCanvas = styled.img`
  vertical-align: top;
  width: 100px;
  height: 161px;
  aspect-ratio: auto 146 / 216;
  overflow-clip-margin: content-box;
  overflow: clip;
  @media screen and (max-width: 700px) {
    height: 165px;
  }
`;
export const ProjectLanguageSubWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;
export const ProjectLanguageSoundWrapper = styled.div`
  margin-right: 0;
  z-index: 150;
  box-sizing: border-box;
  position: relative;
`;
export const ProjectLanguageSoundFirst = styled.div`
  overflow: visible;
  padding: 6px 12px;
  background-color: white;
  border: 2px solid gray;
  border-radius: 15px;
  box-sizing: border-box;
  overflow: hidden;
  transform: translateZ(0);
`;
export const ProjectLanguageSoundSubFirst = styled.div`
  text-align: initial;
`;
export const ProjectLanguageSoundFirstSpan = styled.span`
  float: left;
  margin: 0 10px 0 0;
  height: 39px;
  align-items: center;
  display: inline-flex;
  text-align: initial;
`;
export const ProjectLanguageSouFirstSpan = styled.span``;
export const ProjectLanguageSoundFirstButton = styled.button`
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
export const ProjectLanguageSoundButtonSpan = styled.span`
  height: 22px;
  width: 29px;
  display: inline-block;
  color: #1fc1ff;
`;
export const ProjectLanguageSoundButtonSvg = styled.svg`
  width: 100%;
  height: 100%;
  transform: translate3d(0px, 0px, 0px);
  content-visibility: visible;
  overflow-clip-margin: content-box;
  overflow: hidden;
  cursor: pointer;
`;
export const ProjectLanguageSouFirstDiv = styled.div`
  --offset: 13px;
  cursor: default;
  display: inline;
  padding: 0 0 4px;
  position: relative;
  background: url(https://d35aaqx5ub95lt.cloudfront.net/images/06f94a15de0c0937cce25dc5dc083e6e.svg)
    100% 100% repeat-x;
`;
export const ProjectLanguageSoundSec = styled.div`
  margin: 15px 0;
  right: -13px;
  top: calc(50% - 15px);
  transform: translateY(-50%) rotate(90deg);
  height: 10px;
  overflow: hidden;
  width: 20px;
  box-sizing: border-box;
  position: absolute;
`;
export const ProjectSecStartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;

  @media screen and (max-width: 700px) {
    min-height: 170px;
  }
`;
export const ProjectAnswerContainer = styled.div`
  display: block;
  text-align: initial;
  font-size: 19px;
`;
export const ProjectAnswerSubContainer = styled.div`
  border-top: 2px solid lightgray;
  grid-row-gap: 32px;
  display: grid;
  grid-auto-rows: 1fr;
`;
export const ProjectAnswerSubContainerTop = styled.div`
  position: relative;
  touch-action: none;
`;
export const ProjectAnswerTopLi = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;
export const ProjectAnswerTopSpaceCont = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
`;
export const ProjectAnswerTopArea = styled.div`
  height: 60px;
  border-bottom: 2px solid lightgrey;
  width: 100%;
`;
export const ProjectAnswerTopSpaceReCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  z-index: 0;
`;
export const ProjectAnswerSubTopLine = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
`;
export const ProjectAnswerSubContainerBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const ProjectAnswerContainerBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 700px) {
  }
`;
export const ProjectAnswerBlockContainer = styled.div`
  height: 60px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4px;
  margin-right: 4px;
`;
export const ProjectAnswerBlockSpan = styled.span`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProjectAnswerBlockButton = styled.button`
  cursor: pointer;
  flex: 1;
  font-size: 19px;
  border-radius: 12px;
  background-color: white;
  height: auto;
  line-height: 1.15;
  font-weight: 500;
  letter-spacing: normal !important;
  text-transform: none !important;
  padding: 6px 12px;
`;
export const ProjectAnswerBlockButtonSpanOne = styled.span`
  visibility: hidden;
  position: absolute;
`;
export const ProjectAnswerBlockButtonSpanTwo = styled.span`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;
export const ProjectAnswerBlockButtonSubSpanTwo = styled.span``;
export const ProjectStartHeader = styled.h1`
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
export const ProjectStartSpan = styled.span`
  @media screen and (max-width: 700px) {
    user-select: auto;
  }
`;
