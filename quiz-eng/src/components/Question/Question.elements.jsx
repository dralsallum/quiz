import styled from "styled-components";
import SuperHeroSVG from "../../assets/super-hero.svg";

export const QuestionMain = styled.main`
  position: relative;
  margin-top: 4rem;
`;

export const QuestionWrapper = styled.div`
  overflow: hidden;
  display: block;
  line-height: 1.7;
`;

export const QuestionContainer = styled.div`
  max-width: 43.75rem;
  padding-bottom: 1.5rem;
  margin: 0px auto;
  padding: 0px 0.938rem;
`;

export const QuestionSubContainer = styled.div`
  top: 3.75rem;
  left: 0px;
  max-width: 100%;
  width: 100%;
  background: white;
  margin: 0px auto;
  padding: 0px 0.938rem;

  @media screen and (max-width: 50rem) {
    top: 3rem;
  }
`;
export const QuestionTitleContainer = styled.div`
  @media screen and (max-width: 31.25rem) {
    width: 100%;
    margin: 0px auto;
    padding: 2rem 0px 0px;
    max-width: calc(41.874rem);
  }
`;

export const QuestionTitle = styled.h2`
  margin-bottom: 1.5rem;
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3em;
  text-align: left;

  @media screen and (max-width: 31.25rem) {
    font-size: 1.5rem;
  }
`;

export const QuestionSubTitleContainer = styled.div`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const QuestionSubTitle = styled.h3`
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.3em;
  text-align: left;

  @media screen and (max-width: 31.25rem) {
    font-size: 1.125rem;
  }
`;

export const QuestionSubIconContainer = styled.div`
  display: inline-block;
  color: inherit;
  width: 18px;
  height: 18px;
`;

export const QuestionSubIcon = styled.svg`
  user-select: none;
  width: 100%;
  height: 100%;
  display: block;
  fill: currentcolor;
  flex-shrink: 0;
  overflow: hidden;
`;

export const QuestionTimeline = styled.div`
  transition: all 0.15s ease 0s;
  display: block;
`;

export const QuestionTimeBoostContainer = styled.div`
  width: 100%;
  position: relative;
`;
export const QuestionTimeBoost = styled.div`
  visibility: visible;
  position: initial;
  width: 100%;
  min-height: 97px;
  margin-bottom: 1rem;
`;
export const QuestionTimeKeyContainer = styled.div`
  width: 100%;
  position: relative;
`;
export const QuestionTimeKey = styled.div`
  width: 100%;
  cursor: pointer;
`;
export const QuestionBanner = styled.div`
  background: url(${SuperHeroSVG}) left center / auto 150% no-repeat
    rgb(67, 45, 176);
  border-radius: 1rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-around;
  color: rgb(255, 255, 255);
  width: 100%; // Add width
  height: 100px; // Add height
`;

export const QuestionBannerMain = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
`;
export const QuestionBannerSub = styled.div`
  @media screen and (max-width: 31.25rem) {
    margin-right: 0.5rem;
  }
`;
export const QuestionBannerLast = styled.div`
  width: 60px;
  @media screen and (max-width: 31.25rem) {
    height: 32px;
  }
`;

export const QuestionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  align-items: stretch;
`;
export const QuestionTextContainerSub = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: stretch;
  align-items: stretch;
`;
export const QuestionTextContainerSec = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
`;
export const QuestionTextContainerThi = styled.div`
  color: inherit;
`;

export const QuestionTextHeader = styled.h6`
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.3em;
  text-align: left;
  @media screen and (max-width: 31.25rem) {
    font-size: 1rem;
  }
`;
export const QuestionBannerArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  align-items: stretch;
`;
export const QuestionBannerArrowSubContainer = styled.div`
  margin-left: 1rem;
  @media screen and (max-width: 31.25rem) {
    width: 10px;
    height: 15px;
  }
`;
export const QuestionBannerArrowContain = styled.div`
  color: white;
`;
export const QuestionChapterOneContainer = styled.section`
  margin-bottom: 3rem;
  display: block;
`;
export const QuestionChapterOneHeaderContainer = styled.header`
  padding: 0px;
  margin-bottom: 1rem;
  font-weight: 700;
`;
export const QuestionChapterOneHeader = styled.h3`
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.3em;
  text-align: left;
  @media screen and (max-width: 31.25rem) {
    font-size: 1.125rem;
  }
`;
export const QuestionChapterOnePara = styled.p`
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-transform: none;
  font-size: 1rem;
  line-height: 1.5em;
  color: rgb(30, 45, 64);
  text-align: left;
  text-decoration: unset;
  @media screen and (max-width: 31.25rem) {
    font-size: 0.875rem;
  }
`;

export const QuestionChapterProgressContainer = styled.div`
  position: relative;
  border-radius: 1rem;
  width: 100%;
  background-color: rgb(218, 225, 234);
`;
export const QuestionChapterProgress = styled.div`
  position: relative;
  height: 0.75rem;
  background-color: rgb(14, 190, 117);
  transition: width 0.3s ease 0s;
  border-radius: 1rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  animation: 2s ease 0s 1 normal none running fAHHxO;
`;
export const QuestionChapterProgressSpan = styled.span`
  font-size: 0.625rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 1.25rem;
  left: calc(100% - 1.188rem);
  border-radius: 1.25rem;
  background-color: rgb(14, 190, 117);
  color: rgb(255, 255, 255);
  padding: 0px 0.5rem;
  min-width: 30px;
  position: sticky;
`;
export const QuestionChapterItemContainer = styled.div`
  position: relative;
`;
export const QuestionChapterItemSubContainer = styled.div`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 0.5rem;
  background-color: rgb(255, 255, 255);
  padding: 1rem 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
`;
export const QuestionChapterItemElement = styled.div`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 0.5rem;
  background-color: rgb(255, 255, 255);
  padding: 1rem 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
`;
export const QuestionChapterItemPart = styled.div`
  z-index: 2;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex: 0 0 auto;
  max-width: 5.625rem;
  background-color: rgb(255, 255, 255);
`;
export const QuestionChapterPictureContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const QuestionChapterPictureChildContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
`;
export const QuestionChapterPictureSvg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  transform: rotate(90deg);
  overflow: hidden;
  pointer-events: none;
`;
export const QuestionChapterPictureDefs = styled.defs``;
export const QuestionChapterPictureLine = styled.linearGradient``;
export const QuestionChapterPictureStop = styled.stop`
  stop-color: rgb(17, 110, 238);
`;
export const QuestionChapterPictureCircle = styled.circle``;
export const QuestionChapterPictureSection = styled.div`
  margin: 0px auto;
  position: absolute;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  width: 3.75rem;
  height: 3.75rem;
`;
export const QuestionChapterPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  border-style: none;
`;
export const QuestionChapterPictureMain = styled.div`
  position: absolute;
  bottom: 0px;
`;

export const QuestionChapterItemSpan = styled.span`
  text-align: left;
  flex: 1 1 auto;
  margin-left: 1rem;
  color: rgb(30, 45, 64);
  opacity: 1;
  @media screen and (max-width: 31.25rem) {
    margin-left: 0.75rem;
  }
`;

export const QuestionChapterItemPara = styled.p`
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  font-weight: 700;
  text-transform: none;
  font-size: 1rem;
  line-height: 1.5em;
  color: rgb(30, 45, 64);
  text-align: left;
  text-decoration: unset;
  @media screen and (max-width: 31.25rem) {
    font-size: 0.875rem;
  }
`;
export const QuestionChapterItemSubPara = styled.p`
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  font-weight: 400;
  text-transform: none;
  font-size: 1rem;
  line-height: 1.5em;
  color: rgb(30, 45, 64);
  text-align: left;
  text-decoration: unset;

  @media screen and (max-width: 31.25rem) {
    font-size: 0.75rem;
  }
`;
export const QuestionChapterPointContainer = styled.div`
  z-index: 1;
  position: absolute;
  min-height: 100%;
  left: 3.25rem;
  bottom: -3.125rem;
  border-radius: 0.5rem;
  width: 0.25rem;
  background-color: rgb(218, 225, 234);
`;
export const QuestionChapterPoint = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(14, 190, 117);
`;
