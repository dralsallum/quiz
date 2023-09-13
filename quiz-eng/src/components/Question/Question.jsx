import React, { useState, useEffect } from "react";

import {
  QuestionBanner,
  QuestionBannerArrowContain,
  QuestionBannerArrowContainer,
  QuestionBannerLast,
  QuestionBannerMain,
  QuestionBannerSub,
  QuestionChapterItemContainer,
  QuestionChapterItemElement,
  QuestionChapterItemPara,
  QuestionChapterItemPart,
  QuestionChapterItemSpan,
  QuestionChapterItemSubPara,
  QuestionChapterOneContainer,
  QuestionChapterOneHeader,
  QuestionChapterOneHeaderContainer,
  QuestionChapterOnePara,
  QuestionChapterPicture,
  QuestionChapterPictureChildContainer,
  QuestionChapterPictureCircle,
  QuestionChapterPictureContainer,
  QuestionChapterPictureDefs,
  QuestionChapterPictureLine,
  QuestionChapterPictureMain,
  QuestionChapterPictureSection,
  QuestionChapterPictureStop,
  QuestionChapterPictureSvg,
  QuestionChapterPoint,
  QuestionChapterPointContainer,
  QuestionChapterProgress,
  QuestionChapterProgressContainer,
  QuestionChapterProgressSpan,
  QuestionContainer,
  QuestionMain,
  QuestionSubContainer,
  QuestionSubIcon,
  QuestionSubIconContainer,
  QuestionSubTitle,
  QuestionSubTitleContainer,
  QuestionTextContainer,
  QuestionTextContainerSec,
  QuestionTextContainerSub,
  QuestionTextContainerThi,
  QuestionTextHeader,
  QuestionTimeBoost,
  QuestionTimeBoostContainer,
  QuestionTimeKey,
  QuestionTimeKeyContainer,
  QuestionTimeline,
  QuestionTitle,
  QuestionTitleContainer,
  QuestionWrapper,
} from "./Question.elements";
import Monaliza from "../../assets/welcomeimage1661254149_256.jpg";
import David from "../../assets/davidcover1661254508_256.jpg";
import Sogreat from "../../assets/sogreat1661259325_256.jpg";
import Europ from "../../assets/european-man-woman-casual-wear-standing-back-back-with-arms-crossed-isolated-colorful-wall_171337-51292.jpg";
import Emd from "../../assets/Diamond.png";
import { Link } from "react-router-dom";

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path d="M12 16l4-4h-8z" />
  </svg>
);

const Question = () => {
  const [quizCompletedCount, setQuizCompletedCount] = useState(0);
  const [progressWidth, setProgressWidth] = useState("0%");

  useEffect(() => {
    const newWidth = `${(quizCompletedCount / 4) * 100}%`;
    setProgressWidth(newWidth);
  }, [quizCompletedCount]);

  const completeQuiz = () => {
    if (quizCompletedCount < 4) {
      setQuizCompletedCount(quizCompletedCount + 1);
    }
  };
  return (
    <QuestionMain>
      <QuestionWrapper>
        <QuestionContainer>
          <QuestionSubContainer>
            <QuestionTitleContainer>
              <QuestionTitle>Complete English</QuestionTitle>
              <QuestionSubTitleContainer>
                <QuestionSubTitle>Beginner A1</QuestionSubTitle>
                <QuestionSubIconContainer>
                  <QuestionSubIcon>
                    <Arrow />
                  </QuestionSubIcon>
                </QuestionSubIconContainer>
              </QuestionSubTitleContainer>
            </QuestionTitleContainer>
            <QuestionTimeline>
              <QuestionTimeBoostContainer>
                <QuestionTimeBoost>
                  <QuestionTimeKeyContainer>
                    <QuestionTimeKey>
                      <QuestionBanner>
                        <QuestionBannerMain>
                          <QuestionBannerSub>
                            <QuestionBannerLast></QuestionBannerLast>
                          </QuestionBannerSub>
                          <QuestionTextContainer>
                            <QuestionTextContainerSub></QuestionTextContainerSub>
                            <QuestionTextContainerSec>
                              <QuestionTextContainerThi>
                                <QuestionTextHeader>
                                  Boost language skills with 50% off Premium
                                </QuestionTextHeader>
                              </QuestionTextContainerThi>
                            </QuestionTextContainerSec>
                          </QuestionTextContainer>
                        </QuestionBannerMain>
                        <QuestionBannerArrowContainer>
                          <QuestionBannerArrowContain>
                            <Arrow
                              width="10"
                              height="15"
                              fill="none"
                              viewBox="0 0 10 15"
                            >
                              <path
                                fill="inherit"
                                fill-rule="evenodd"
                                d="M.9233 14.169c-.3694-.4105-.3361-1.0428.0744-1.4123L6.8385 7.5.9977 2.2433C.5872 1.8738.5539 1.2415.9233.831 1.2928.4205 1.9251.3873 2.3356.7567l6.6667 6a1 1 0 010 1.4866l-6.6667 6c-.4105.3695-1.0428.3362-1.4123-.0743z"
                                clip-rule="evenodd"
                              ></path>
                            </Arrow>
                          </QuestionBannerArrowContain>
                        </QuestionBannerArrowContainer>
                      </QuestionBanner>
                    </QuestionTimeKey>
                  </QuestionTimeKeyContainer>
                </QuestionTimeBoost>
              </QuestionTimeBoostContainer>
              <QuestionChapterOneContainer>
                <QuestionChapterOneHeaderContainer>
                  <QuestionChapterOneHeader>Chapter 1</QuestionChapterOneHeader>
                  <QuestionChapterOnePara>
                    Lessons completed 1/4
                  </QuestionChapterOnePara>
                  <QuestionChapterProgressContainer>
                    <QuestionChapterProgress style={{ width: progressWidth }}>
                      <QuestionChapterProgressSpan>
                        {progressWidth}
                      </QuestionChapterProgressSpan>
                    </QuestionChapterProgress>
                  </QuestionChapterProgressContainer>
                </QuestionChapterOneHeaderContainer>
                <QuestionChapterItemContainer>
                  <Link
                    to="/test"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <QuestionChapterItemElement>
                      <QuestionChapterItemPart>
                        <QuestionChapterPictureContainer>
                          <QuestionChapterPictureChildContainer>
                            <QuestionChapterPictureSvg>
                              <QuestionChapterPictureDefs>
                                <QuestionChapterPictureLine>
                                  <QuestionChapterPictureStop></QuestionChapterPictureStop>
                                </QuestionChapterPictureLine>
                              </QuestionChapterPictureDefs>
                              <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                              <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                            </QuestionChapterPictureSvg>
                          </QuestionChapterPictureChildContainer>
                        </QuestionChapterPictureContainer>
                        <QuestionChapterPictureSection>
                          <QuestionChapterPicture src={Monaliza} alt="" />
                        </QuestionChapterPictureSection>
                        <QuestionChapterPictureMain></QuestionChapterPictureMain>
                      </QuestionChapterItemPart>
                      <QuestionChapterItemSpan>
                        <QuestionChapterItemPara>Hello</QuestionChapterItemPara>
                        <QuestionChapterItemSubPara>
                          Learn greetings for meeting people
                        </QuestionChapterItemSubPara>
                      </QuestionChapterItemSpan>
                      <QuestionChapterPointContainer>
                        <QuestionChapterPoint></QuestionChapterPoint>
                      </QuestionChapterPointContainer>
                    </QuestionChapterItemElement>
                  </Link>
                </QuestionChapterItemContainer>
                <QuestionChapterItemContainer>
                  <QuestionChapterItemElement>
                    <QuestionChapterItemPart>
                      <QuestionChapterPictureContainer>
                        <QuestionChapterPictureChildContainer>
                          <QuestionChapterPictureSvg>
                            <QuestionChapterPictureDefs>
                              <QuestionChapterPictureLine>
                                <QuestionChapterPictureStop></QuestionChapterPictureStop>
                              </QuestionChapterPictureLine>
                            </QuestionChapterPictureDefs>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                          </QuestionChapterPictureSvg>
                        </QuestionChapterPictureChildContainer>
                      </QuestionChapterPictureContainer>
                      <QuestionChapterPictureSection>
                        <QuestionChapterPicture src={David} alt="" />
                      </QuestionChapterPictureSection>
                      <QuestionChapterPictureMain></QuestionChapterPictureMain>
                    </QuestionChapterItemPart>
                    <QuestionChapterItemSpan>
                      <QuestionChapterItemPara>
                        Introducing yourself
                      </QuestionChapterItemPara>
                      <QuestionChapterItemSubPara>
                        Say your name
                      </QuestionChapterItemSubPara>
                    </QuestionChapterItemSpan>
                    <QuestionChapterPointContainer>
                      <QuestionChapterPoint></QuestionChapterPoint>
                    </QuestionChapterPointContainer>
                  </QuestionChapterItemElement>
                </QuestionChapterItemContainer>
                <QuestionChapterItemContainer>
                  <QuestionChapterItemElement>
                    <QuestionChapterItemPart>
                      <QuestionChapterPictureContainer>
                        <QuestionChapterPictureChildContainer>
                          <QuestionChapterPictureSvg>
                            <QuestionChapterPictureDefs>
                              <QuestionChapterPictureLine>
                                <QuestionChapterPictureStop></QuestionChapterPictureStop>
                              </QuestionChapterPictureLine>
                            </QuestionChapterPictureDefs>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                          </QuestionChapterPictureSvg>
                        </QuestionChapterPictureChildContainer>
                      </QuestionChapterPictureContainer>
                      <QuestionChapterPictureSection>
                        <QuestionChapterPicture src={Sogreat} alt="" />
                      </QuestionChapterPictureSection>
                      <QuestionChapterPictureMain></QuestionChapterPictureMain>
                    </QuestionChapterItemPart>
                    <QuestionChapterItemSpan>
                      <QuestionChapterItemPara>
                        Saying how you are
                      </QuestionChapterItemPara>
                      <QuestionChapterItemSubPara>
                        Talk about how you feel
                      </QuestionChapterItemSubPara>
                    </QuestionChapterItemSpan>
                    <QuestionChapterPointContainer>
                      <QuestionChapterPoint></QuestionChapterPoint>
                    </QuestionChapterPointContainer>
                  </QuestionChapterItemElement>
                </QuestionChapterItemContainer>
                <QuestionChapterItemContainer>
                  <QuestionChapterItemElement>
                    <QuestionChapterItemPart>
                      <QuestionChapterPictureContainer>
                        <QuestionChapterPictureChildContainer>
                          <QuestionChapterPictureSvg>
                            <QuestionChapterPictureDefs>
                              <QuestionChapterPictureLine>
                                <QuestionChapterPictureStop></QuestionChapterPictureStop>
                              </QuestionChapterPictureLine>
                            </QuestionChapterPictureDefs>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                          </QuestionChapterPictureSvg>
                        </QuestionChapterPictureChildContainer>
                      </QuestionChapterPictureContainer>
                      <QuestionChapterPictureSection>
                        <QuestionChapterPicture src={Europ} alt="" />
                      </QuestionChapterPictureSection>
                      <QuestionChapterPictureMain></QuestionChapterPictureMain>
                    </QuestionChapterItemPart>
                    <QuestionChapterItemSpan>
                      <QuestionChapterItemPara>
                        Developing fluency
                      </QuestionChapterItemPara>
                      <QuestionChapterItemSubPara>
                        Introduce yourself
                      </QuestionChapterItemSubPara>
                    </QuestionChapterItemSpan>
                    <QuestionChapterPointContainer>
                      <QuestionChapterPoint></QuestionChapterPoint>
                    </QuestionChapterPointContainer>
                  </QuestionChapterItemElement>
                </QuestionChapterItemContainer>
                <QuestionChapterItemContainer>
                  <QuestionChapterItemElement>
                    <QuestionChapterItemPart>
                      <QuestionChapterPictureContainer>
                        <QuestionChapterPictureChildContainer>
                          <QuestionChapterPictureSvg>
                            <QuestionChapterPictureDefs>
                              <QuestionChapterPictureLine>
                                <QuestionChapterPictureStop></QuestionChapterPictureStop>
                              </QuestionChapterPictureLine>
                            </QuestionChapterPictureDefs>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                          </QuestionChapterPictureSvg>
                        </QuestionChapterPictureChildContainer>
                      </QuestionChapterPictureContainer>
                      <QuestionChapterPictureSection>
                        <QuestionChapterPicture src={Emd} alt="" />
                      </QuestionChapterPictureSection>
                      <QuestionChapterPictureMain></QuestionChapterPictureMain>
                    </QuestionChapterItemPart>
                    <QuestionChapterItemSpan>
                      <QuestionChapterItemPara>
                        Checkpoint
                      </QuestionChapterItemPara>
                      <QuestionChapterItemSubPara>
                        Test your skills to access the next chapter
                      </QuestionChapterItemSubPara>
                    </QuestionChapterItemSpan>
                  </QuestionChapterItemElement>
                </QuestionChapterItemContainer>
              </QuestionChapterOneContainer>
              <QuestionChapterOneContainer>
                <QuestionChapterOneHeaderContainer>
                  <QuestionChapterOneHeader>Chapter 2</QuestionChapterOneHeader>
                  <QuestionChapterOnePara>
                    Lessons completed 1/4
                  </QuestionChapterOnePara>
                  <QuestionChapterProgressContainer>
                    <QuestionChapterProgress style={{ width: progressWidth }}>
                      <QuestionChapterProgressSpan>
                        {progressWidth}
                      </QuestionChapterProgressSpan>
                    </QuestionChapterProgress>
                  </QuestionChapterProgressContainer>
                </QuestionChapterOneHeaderContainer>
                <QuestionChapterItemContainer>
                  <QuestionChapterItemElement>
                    <QuestionChapterItemPart>
                      <QuestionChapterPictureContainer>
                        <QuestionChapterPictureChildContainer>
                          <QuestionChapterPictureSvg>
                            <QuestionChapterPictureDefs>
                              <QuestionChapterPictureLine>
                                <QuestionChapterPictureStop></QuestionChapterPictureStop>
                              </QuestionChapterPictureLine>
                            </QuestionChapterPictureDefs>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                          </QuestionChapterPictureSvg>
                        </QuestionChapterPictureChildContainer>
                      </QuestionChapterPictureContainer>
                      <QuestionChapterPictureSection>
                        <QuestionChapterPicture src={Monaliza} alt="" />
                      </QuestionChapterPictureSection>
                      <QuestionChapterPictureMain></QuestionChapterPictureMain>
                    </QuestionChapterItemPart>
                    <QuestionChapterItemSpan>
                      <QuestionChapterItemPara>Hello</QuestionChapterItemPara>
                      <QuestionChapterItemSubPara>
                        Learn greetings for meeting people
                      </QuestionChapterItemSubPara>
                    </QuestionChapterItemSpan>
                    <QuestionChapterPointContainer>
                      <QuestionChapterPoint></QuestionChapterPoint>
                    </QuestionChapterPointContainer>
                  </QuestionChapterItemElement>
                </QuestionChapterItemContainer>
                <QuestionChapterItemContainer>
                  <QuestionChapterItemElement>
                    <QuestionChapterItemPart>
                      <QuestionChapterPictureContainer>
                        <QuestionChapterPictureChildContainer>
                          <QuestionChapterPictureSvg>
                            <QuestionChapterPictureDefs>
                              <QuestionChapterPictureLine>
                                <QuestionChapterPictureStop></QuestionChapterPictureStop>
                              </QuestionChapterPictureLine>
                            </QuestionChapterPictureDefs>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                          </QuestionChapterPictureSvg>
                        </QuestionChapterPictureChildContainer>
                      </QuestionChapterPictureContainer>
                      <QuestionChapterPictureSection>
                        <QuestionChapterPicture src={David} alt="" />
                      </QuestionChapterPictureSection>
                      <QuestionChapterPictureMain></QuestionChapterPictureMain>
                    </QuestionChapterItemPart>
                    <QuestionChapterItemSpan>
                      <QuestionChapterItemPara>
                        Introducing yourself
                      </QuestionChapterItemPara>
                      <QuestionChapterItemSubPara>
                        Say your name
                      </QuestionChapterItemSubPara>
                    </QuestionChapterItemSpan>
                    <QuestionChapterPointContainer>
                      <QuestionChapterPoint></QuestionChapterPoint>
                    </QuestionChapterPointContainer>
                  </QuestionChapterItemElement>
                </QuestionChapterItemContainer>
                <QuestionChapterItemContainer>
                  <QuestionChapterItemElement>
                    <QuestionChapterItemPart>
                      <QuestionChapterPictureContainer>
                        <QuestionChapterPictureChildContainer>
                          <QuestionChapterPictureSvg>
                            <QuestionChapterPictureDefs>
                              <QuestionChapterPictureLine>
                                <QuestionChapterPictureStop></QuestionChapterPictureStop>
                              </QuestionChapterPictureLine>
                            </QuestionChapterPictureDefs>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                          </QuestionChapterPictureSvg>
                        </QuestionChapterPictureChildContainer>
                      </QuestionChapterPictureContainer>
                      <QuestionChapterPictureSection>
                        <QuestionChapterPicture src={Sogreat} alt="" />
                      </QuestionChapterPictureSection>
                      <QuestionChapterPictureMain></QuestionChapterPictureMain>
                    </QuestionChapterItemPart>
                    <QuestionChapterItemSpan>
                      <QuestionChapterItemPara>
                        Saying how you are
                      </QuestionChapterItemPara>
                      <QuestionChapterItemSubPara>
                        Talk about how you feel
                      </QuestionChapterItemSubPara>
                    </QuestionChapterItemSpan>
                    <QuestionChapterPointContainer>
                      <QuestionChapterPoint></QuestionChapterPoint>
                    </QuestionChapterPointContainer>
                  </QuestionChapterItemElement>
                </QuestionChapterItemContainer>
                <QuestionChapterItemContainer>
                  <QuestionChapterItemElement>
                    <QuestionChapterItemPart>
                      <QuestionChapterPictureContainer>
                        <QuestionChapterPictureChildContainer>
                          <QuestionChapterPictureSvg>
                            <QuestionChapterPictureDefs>
                              <QuestionChapterPictureLine>
                                <QuestionChapterPictureStop></QuestionChapterPictureStop>
                              </QuestionChapterPictureLine>
                            </QuestionChapterPictureDefs>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                          </QuestionChapterPictureSvg>
                        </QuestionChapterPictureChildContainer>
                      </QuestionChapterPictureContainer>
                      <QuestionChapterPictureSection>
                        <QuestionChapterPicture src={Europ} alt="" />
                      </QuestionChapterPictureSection>
                      <QuestionChapterPictureMain></QuestionChapterPictureMain>
                    </QuestionChapterItemPart>
                    <QuestionChapterItemSpan>
                      <QuestionChapterItemPara>
                        Developing fluency
                      </QuestionChapterItemPara>
                      <QuestionChapterItemSubPara>
                        Introduce yourself
                      </QuestionChapterItemSubPara>
                    </QuestionChapterItemSpan>
                    <QuestionChapterPointContainer>
                      <QuestionChapterPoint></QuestionChapterPoint>
                    </QuestionChapterPointContainer>
                  </QuestionChapterItemElement>
                </QuestionChapterItemContainer>
                <QuestionChapterItemContainer>
                  <QuestionChapterItemElement>
                    <QuestionChapterItemPart>
                      <QuestionChapterPictureContainer>
                        <QuestionChapterPictureChildContainer>
                          <QuestionChapterPictureSvg>
                            <QuestionChapterPictureDefs>
                              <QuestionChapterPictureLine>
                                <QuestionChapterPictureStop></QuestionChapterPictureStop>
                              </QuestionChapterPictureLine>
                            </QuestionChapterPictureDefs>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                          </QuestionChapterPictureSvg>
                        </QuestionChapterPictureChildContainer>
                      </QuestionChapterPictureContainer>
                      <QuestionChapterPictureSection>
                        <QuestionChapterPicture src={Emd} alt="" />
                      </QuestionChapterPictureSection>
                      <QuestionChapterPictureMain></QuestionChapterPictureMain>
                    </QuestionChapterItemPart>
                    <QuestionChapterItemSpan>
                      <QuestionChapterItemPara>
                        Checkpoint
                      </QuestionChapterItemPara>
                      <QuestionChapterItemSubPara>
                        Test your skills to access the next chapter
                      </QuestionChapterItemSubPara>
                    </QuestionChapterItemSpan>
                  </QuestionChapterItemElement>
                </QuestionChapterItemContainer>
              </QuestionChapterOneContainer>
              <QuestionChapterOneContainer>
                <QuestionChapterOneHeaderContainer>
                  <QuestionChapterOneHeader>Chapter 3</QuestionChapterOneHeader>
                  <QuestionChapterOnePara>
                    Lessons completed 1/4
                  </QuestionChapterOnePara>
                  <QuestionChapterProgressContainer>
                    <QuestionChapterProgress style={{ width: progressWidth }}>
                      <QuestionChapterProgressSpan>
                        {progressWidth}
                      </QuestionChapterProgressSpan>
                    </QuestionChapterProgress>
                  </QuestionChapterProgressContainer>
                </QuestionChapterOneHeaderContainer>
                <QuestionChapterItemContainer>
                  <QuestionChapterItemElement>
                    <QuestionChapterItemPart>
                      <QuestionChapterPictureContainer>
                        <QuestionChapterPictureChildContainer>
                          <QuestionChapterPictureSvg>
                            <QuestionChapterPictureDefs>
                              <QuestionChapterPictureLine>
                                <QuestionChapterPictureStop></QuestionChapterPictureStop>
                              </QuestionChapterPictureLine>
                            </QuestionChapterPictureDefs>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                          </QuestionChapterPictureSvg>
                        </QuestionChapterPictureChildContainer>
                      </QuestionChapterPictureContainer>
                      <QuestionChapterPictureSection>
                        <QuestionChapterPicture src={Monaliza} alt="" />
                      </QuestionChapterPictureSection>
                      <QuestionChapterPictureMain></QuestionChapterPictureMain>
                    </QuestionChapterItemPart>
                    <QuestionChapterItemSpan>
                      <QuestionChapterItemPara>Hello</QuestionChapterItemPara>
                      <QuestionChapterItemSubPara>
                        Learn greetings for meeting people
                      </QuestionChapterItemSubPara>
                    </QuestionChapterItemSpan>
                    <QuestionChapterPointContainer>
                      <QuestionChapterPoint></QuestionChapterPoint>
                    </QuestionChapterPointContainer>
                  </QuestionChapterItemElement>
                </QuestionChapterItemContainer>
                <QuestionChapterItemContainer>
                  <QuestionChapterItemElement>
                    <QuestionChapterItemPart>
                      <QuestionChapterPictureContainer>
                        <QuestionChapterPictureChildContainer>
                          <QuestionChapterPictureSvg>
                            <QuestionChapterPictureDefs>
                              <QuestionChapterPictureLine>
                                <QuestionChapterPictureStop></QuestionChapterPictureStop>
                              </QuestionChapterPictureLine>
                            </QuestionChapterPictureDefs>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                          </QuestionChapterPictureSvg>
                        </QuestionChapterPictureChildContainer>
                      </QuestionChapterPictureContainer>
                      <QuestionChapterPictureSection>
                        <QuestionChapterPicture src={David} alt="" />
                      </QuestionChapterPictureSection>
                      <QuestionChapterPictureMain></QuestionChapterPictureMain>
                    </QuestionChapterItemPart>
                    <QuestionChapterItemSpan>
                      <QuestionChapterItemPara>
                        Introducing yourself
                      </QuestionChapterItemPara>
                      <QuestionChapterItemSubPara>
                        Say your name
                      </QuestionChapterItemSubPara>
                    </QuestionChapterItemSpan>
                    <QuestionChapterPointContainer>
                      <QuestionChapterPoint></QuestionChapterPoint>
                    </QuestionChapterPointContainer>
                  </QuestionChapterItemElement>
                </QuestionChapterItemContainer>
                <QuestionChapterItemContainer>
                  <QuestionChapterItemElement>
                    <QuestionChapterItemPart>
                      <QuestionChapterPictureContainer>
                        <QuestionChapterPictureChildContainer>
                          <QuestionChapterPictureSvg>
                            <QuestionChapterPictureDefs>
                              <QuestionChapterPictureLine>
                                <QuestionChapterPictureStop></QuestionChapterPictureStop>
                              </QuestionChapterPictureLine>
                            </QuestionChapterPictureDefs>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                          </QuestionChapterPictureSvg>
                        </QuestionChapterPictureChildContainer>
                      </QuestionChapterPictureContainer>
                      <QuestionChapterPictureSection>
                        <QuestionChapterPicture src={Sogreat} alt="" />
                      </QuestionChapterPictureSection>
                      <QuestionChapterPictureMain></QuestionChapterPictureMain>
                    </QuestionChapterItemPart>
                    <QuestionChapterItemSpan>
                      <QuestionChapterItemPara>
                        Saying how you are
                      </QuestionChapterItemPara>
                      <QuestionChapterItemSubPara>
                        Talk about how you feel
                      </QuestionChapterItemSubPara>
                    </QuestionChapterItemSpan>
                    <QuestionChapterPointContainer>
                      <QuestionChapterPoint></QuestionChapterPoint>
                    </QuestionChapterPointContainer>
                  </QuestionChapterItemElement>
                </QuestionChapterItemContainer>
                <QuestionChapterItemContainer>
                  <QuestionChapterItemElement>
                    <QuestionChapterItemPart>
                      <QuestionChapterPictureContainer>
                        <QuestionChapterPictureChildContainer>
                          <QuestionChapterPictureSvg>
                            <QuestionChapterPictureDefs>
                              <QuestionChapterPictureLine>
                                <QuestionChapterPictureStop></QuestionChapterPictureStop>
                              </QuestionChapterPictureLine>
                            </QuestionChapterPictureDefs>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                          </QuestionChapterPictureSvg>
                        </QuestionChapterPictureChildContainer>
                      </QuestionChapterPictureContainer>
                      <QuestionChapterPictureSection>
                        <QuestionChapterPicture src={Europ} alt="" />
                      </QuestionChapterPictureSection>
                      <QuestionChapterPictureMain></QuestionChapterPictureMain>
                    </QuestionChapterItemPart>
                    <QuestionChapterItemSpan>
                      <QuestionChapterItemPara>
                        Developing fluency
                      </QuestionChapterItemPara>
                      <QuestionChapterItemSubPara>
                        Introduce yourself
                      </QuestionChapterItemSubPara>
                    </QuestionChapterItemSpan>
                    <QuestionChapterPointContainer>
                      <QuestionChapterPoint></QuestionChapterPoint>
                    </QuestionChapterPointContainer>
                  </QuestionChapterItemElement>
                </QuestionChapterItemContainer>
                <QuestionChapterItemContainer>
                  <QuestionChapterItemElement>
                    <QuestionChapterItemPart>
                      <QuestionChapterPictureContainer>
                        <QuestionChapterPictureChildContainer>
                          <QuestionChapterPictureSvg>
                            <QuestionChapterPictureDefs>
                              <QuestionChapterPictureLine>
                                <QuestionChapterPictureStop></QuestionChapterPictureStop>
                              </QuestionChapterPictureLine>
                            </QuestionChapterPictureDefs>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                            <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
                          </QuestionChapterPictureSvg>
                        </QuestionChapterPictureChildContainer>
                      </QuestionChapterPictureContainer>
                      <QuestionChapterPictureSection>
                        <QuestionChapterPicture src={Emd} alt="" />
                      </QuestionChapterPictureSection>
                      <QuestionChapterPictureMain></QuestionChapterPictureMain>
                    </QuestionChapterItemPart>
                    <QuestionChapterItemSpan>
                      <QuestionChapterItemPara>
                        Checkpoint
                      </QuestionChapterItemPara>
                      <QuestionChapterItemSubPara>
                        Test your skills to access the next chapter
                      </QuestionChapterItemSubPara>
                    </QuestionChapterItemSpan>
                  </QuestionChapterItemElement>
                </QuestionChapterItemContainer>
              </QuestionChapterOneContainer>
            </QuestionTimeline>
          </QuestionSubContainer>
        </QuestionContainer>
      </QuestionWrapper>
    </QuestionMain>
  );
};

export default Question;
