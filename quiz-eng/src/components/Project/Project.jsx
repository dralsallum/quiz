import React, { useState, useRef, useEffect } from "react";
import { speakText } from "../../speechSynthesis";
import {
  AButton,
  AContainer,
  AImgContainer,
  AImgSubContainer,
  AImgSubImg,
  ASubOne,
  ASubTwo,
  ASubWrapper,
  AWrapper,
  LContainer,
  LSubWhole,
  LWhole,
  LWrapper,
  LWrapperTop,
  PAnswerBlockButton,
  PAnswerBlockButtonSpanOne,
  PAnswerBlockButtonSpanTwo,
  PAnswerBlockButtonSubSpanTwo,
  PAnswerBlockContainer,
  PAnswerBlockSpan,
  PAnswerContainer,
  PAnswerContainerBottom,
  PAnswerSubContainer,
  PAnswerSubContainerBottom,
  PAnswerSubContainerTop,
  PAnswerSubTopLine,
  PAnswerTopArea,
  PAnswerTopLi,
  PAnswerTopSpaceCont,
  PAnswerTopSpaceReCont,
  PBorder,
  PContainer,
  PLanguageContainer,
  PLanguageImgCanvas,
  PLanguageImgCanvasContainer,
  PLanguageImgContainer,
  PLanguageSouFirstDiv,
  PLanguageSouFirstSpan,
  PLanguageSoundButtonSpan,
  PLanguageSoundButtonSvg,
  PLanguageSoundFirst,
  PLanguageSoundFirstButton,
  PLanguageSoundFirstSpan,
  PLanguageSoundSec,
  PLanguageSoundSubFirst,
  PLanguageSoundWrapper,
  PLanguageSubContainer,
  PLanguageSubWrapper,
  PSecStart,
  PSecStartContainer,
  PSecStartWrapper,
  PSeqBlockButton,
  PStart,
  PStartHeader,
  PStartSpan,
  PSubContainer,
  PSubStart,
  PWrapper,
  SButton,
  SButtonContainer,
  SButtonSpan,
  SContainer,
  SSubContainer,
  SWrapper,
  TContainerTop,
  TNav,
  TNavButton,
  TNavButtonImg,
  TNavHeartContainer,
  TNavHeartImg,
  TNavHeartSpan,
  TNavProgressBottom,
  TNavProgressContainer,
  TNavProgressLetTop,
  TNavProgressSubBottom,
  TNavProgressSupTop,
  TNavProgressTop,
  TNavProgressWrapper,
  TWrapperTop,
} from "./Project.elements";
import questions from "../../utils/TestQ.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import Dude from "../../assets/dude.png";
import Baby from "../../assets/baby_2102727.png";
import { Link } from "react-router-dom";
import Cross from "../../assets/cross.svg";
import Heart from "../../assets/Heart.svg";

const Project = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const textToSpeakRef = useRef(null);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [progress, setProgress] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [userAnswerSequence, setUserAnswerSequence] = useState([]);

  const Modal = ({ resetQuiz }) => {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
            }}
          >
            You Lost
          </h1>
          <button
            style={{
              fontSize: "20px",
              padding: "5px",
              cursor: "pointer",
              backgroundColor: "#76d925",
              borderRadius: "5px",
            }}
            onClick={resetQuiz}
          >
            Take the quiz again
          </button>
        </div>
      </div>
    );
  };

  const resetQuiz = () => {
    // Reset all your states
    setSelectedAnswer(null);
    setIsCorrect(null);
    setIsButtonClicked(false);
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setProgress(0);
    setHearts(5);
    setShowModal(false); // Hide the modal
  };

  const handleSpeechClick = () => {
    const textToSpeak = textToSpeakRef.current
      ? textToSpeakRef.current.innerText
      : "";
    speakText(textToSpeak);
  };

  //update
  const handleAnswerButtonClick = (isCorrect, index) => {
    setSelectedAnswer(isCorrect);
    setSelectedAnswerIndex(index);
    setIsButtonClicked(true);
  };

  const evaluateAnswer = () => {
    // If hearts are 0, stop the function from continuing.
    if (hearts <= 1) {
      setShowModal(true);
      return;
    }

    // If no answer was selected, just return.
    if (
      selectedAnswer === null &&
      questions[currentQuestion].questionType !== "type4"
    ) {
      return;
    }

    // Special case for type4 questions to check sequence
    if (questions[currentQuestion].questionType === "type4") {
      const correctSequence = questions[currentQuestion].correctSequence;

      // Compare userAnswerSequence with correctSequence
      if (
        JSON.stringify(userAnswerSequence) === JSON.stringify(correctSequence)
      ) {
        // The sequence is correct
        setIsCorrect(true);
        setScore(score + 9 / questions.length);
      } else {
        // The sequence is incorrect
        setIsCorrect(false);
        setHearts(hearts - 1);

        // If hearts reach 0, stop the quiz.
        if (hearts - 1 <= 0) {
          setShowModal(true);
          return;
        }
      }
      // Reset the sequence for the next question
      setUserAnswerSequence([]);
    } else {
      // Update whether the selected answer was correct or not.
      setIsCorrect(selectedAnswer);

      // Update the score if the answer was correct.
      if (selectedAnswer) {
        setScore(score + 9 / questions.length);
      } else {
        // If the answer was wrong, decrement hearts by 1.
        setHearts(hearts - 1);

        // If hearts reach 0, stop the quiz.
        if (hearts - 1 <= 0) {
          setShowModal(true);
          return;
        }
      }
    }

    // Reset and prepare for the next question.
    setTimeout(() => {
      setIsCorrect(null);
      setSelectedAnswer(null);
      setSelectedAnswerIndex(null); // Reset the selected answer index

      // Move on to the next question if available.
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        const newProgress = (nextQuestion / questions.length) * 100;
        setProgress(newProgress);
      } else {
        // Otherwise, the quiz is done.
        setShowScore(true);
        setProgress(100);
      }
    }, 500);
  };

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const textToSpeak = textToSpeakRef.current
      ? textToSpeakRef.current.innerText
      : "";
    if (textToSpeak) {
      speakText(textToSpeak);
    }
  }, [currentQuestion]);

  const renderQuestion = () => {
    const currentType = questions[currentQuestion].questionType;

    if (currentType === "type1") {
      return (
        <PSecStart>
          <PSecStartContainer>
            <PLanguageContainer>
              <PLanguageSubContainer>
                <PLanguageImgContainer>
                  <PLanguageImgCanvas src={Dude} />
                </PLanguageImgContainer>
              </PLanguageSubContainer>
              <PLanguageSubWrapper>
                <PLanguageSoundWrapper>
                  <PLanguageSoundFirst>
                    <PLanguageSoundSubFirst>
                      <PLanguageSoundFirstSpan>
                        <PLanguageSoundFirstButton onClick={handleSpeechClick}>
                          <PLanguageSoundButtonSpan>
                            <PLanguageSoundButtonSvg>
                              <FontAwesomeIcon icon={faVolumeHigh} />
                            </PLanguageSoundButtonSvg>
                          </PLanguageSoundButtonSpan>
                        </PLanguageSoundFirstButton>
                      </PLanguageSoundFirstSpan>
                      <PLanguageSouFirstSpan>
                        <PLanguageSouFirstDiv ref={textToSpeakRef}>
                          {questions[currentQuestion].questionSubText}
                        </PLanguageSouFirstDiv>
                      </PLanguageSouFirstSpan>
                    </PLanguageSoundSubFirst>
                  </PLanguageSoundFirst>
                  <PLanguageSoundSec>
                    {/* here will be the answer */}
                  </PLanguageSoundSec>
                </PLanguageSoundWrapper>
              </PLanguageSubWrapper>
            </PLanguageContainer>
          </PSecStartContainer>
          <PSecStartWrapper>
            <PAnswerContainer>
              <PAnswerSubContainer>
                <PAnswerSubContainerTop>
                  <PAnswerSubTopLine>
                    <PAnswerTopLi>
                      <PAnswerTopSpaceCont>
                        <PAnswerTopArea></PAnswerTopArea>
                        {/* usually they are four components*/}
                      </PAnswerTopSpaceCont>
                      <PAnswerTopSpaceReCont></PAnswerTopSpaceReCont>
                    </PAnswerTopLi>
                  </PAnswerSubTopLine>
                </PAnswerSubContainerTop>
                <PAnswerSubContainerBottom>
                  <PAnswerContainerBottom>
                    <PAnswerBlockContainer>
                      {questions[currentQuestion].answerOptions.map(
                        (answerOption, index) => (
                          <PAnswerBlockSpan>
                            <PAnswerBlockButton
                              style={{
                                backgroundColor:
                                  selectedAnswerIndex === index
                                    ? isCorrect === null
                                      ? "initial"
                                      : isCorrect
                                      ? "#5ac900"
                                      : "red"
                                    : "initial",
                              }}
                              onClick={() =>
                                handleAnswerButtonClick(
                                  answerOption.isCorrect,
                                  index
                                )
                              }
                            >
                              <PAnswerBlockButtonSubSpanTwo>
                                {answerOption.answerText}
                              </PAnswerBlockButtonSubSpanTwo>
                            </PAnswerBlockButton>
                          </PAnswerBlockSpan>
                        )
                      )}
                    </PAnswerBlockContainer>
                  </PAnswerContainerBottom>
                </PAnswerSubContainerBottom>
              </PAnswerSubContainer>
            </PAnswerContainer>
          </PSecStartWrapper>
        </PSecStart>
      );
    }

    if (currentType === "type2") {
      return (
        <AWrapper>
          <ASubWrapper>
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <AButton
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect, index)
                  }
                >
                  <AContainer
                    style={{
                      backgroundColor:
                        selectedAnswerIndex === index
                          ? isCorrect === null
                            ? "initial"
                            : isCorrect
                            ? "#5ac900"
                            : "red"
                          : "initial",
                    }}
                  >
                    <ASubOne>
                      <AImgContainer>
                        <AImgSubImg src={answerOption.imgPath} />
                      </AImgContainer>
                    </ASubOne>
                    <ASubTwo>{answerOption.answerText}</ASubTwo>
                    {/* Adjacent JSX elements are now wrapped */}
                  </AContainer>
                </AButton>
              )
            )}
          </ASubWrapper>
        </AWrapper>
      );
    }

    if (currentType === "type3") {
      return (
        <div style={{ fontWeight: "bold" }} ref={textToSpeakRef}>
          {questions[currentQuestion].questionText}
        </div>
      );
    }

    if (currentType === "type4") {
      const correctSequence = questions[currentQuestion].correctSequence;
      const checkSequence = () => {
        // Compare userAnswerSequence with correctSequence
        if (
          JSON.stringify(userAnswerSequence) === JSON.stringify(correctSequence)
        ) {
          // The sequence is correct
          handleAnswerButtonClick(true); // Assuming that handleAnswerButtonClick takes a boolean to indicate if the answer is correct
        } else {
          // The sequence is incorrect
          handleAnswerButtonClick(false);
        }
        // Reset the sequence for the next question
        setUserAnswerSequence([]);
      };

      return (
        <PSecStart>
          <PSecStartContainer>
            <PLanguageContainer>
              <PLanguageSubContainer>
                <PLanguageImgContainer>
                  <PLanguageImgCanvas src={Dude} />
                </PLanguageImgContainer>
              </PLanguageSubContainer>
              <PLanguageSubWrapper>
                <PLanguageSoundWrapper>
                  <PLanguageSoundFirst>
                    <PLanguageSoundSubFirst>
                      <PLanguageSoundFirstSpan>
                        <PLanguageSoundFirstButton onClick={handleSpeechClick}>
                          <PLanguageSoundButtonSpan>
                            <PLanguageSoundButtonSvg>
                              <FontAwesomeIcon icon={faVolumeHigh} />
                            </PLanguageSoundButtonSvg>
                          </PLanguageSoundButtonSpan>
                        </PLanguageSoundFirstButton>
                      </PLanguageSoundFirstSpan>
                      <PLanguageSouFirstSpan>
                        <PLanguageSouFirstDiv ref={textToSpeakRef}>
                          {questions[currentQuestion].questionSubText}
                        </PLanguageSouFirstDiv>
                      </PLanguageSouFirstSpan>
                    </PLanguageSoundSubFirst>
                  </PLanguageSoundFirst>
                  <PLanguageSoundSec>
                    {/* here will be the answer */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        flexDirection: "row",
                        width: "100%",
                        alignSelf: "center",
                        textAlign: "center",
                      }}
                    >
                      {userAnswerSequence.map((index) => (
                        <PAnswerBlockButton
                          style={{
                            marginLeft: "26px",
                            fontSize: "16px",
                          }}
                        >
                          {
                            questions[currentQuestion].answerOptions[index]
                              .answerText
                          }
                        </PAnswerBlockButton>
                      ))}
                    </div>
                  </PLanguageSoundSec>
                </PLanguageSoundWrapper>
              </PLanguageSubWrapper>
            </PLanguageContainer>
          </PSecStartContainer>
          <PSecStartWrapper>
            <PAnswerContainer>
              <PAnswerSubContainer>
                <PAnswerSubContainerTop>
                  <PAnswerSubTopLine>
                    <PAnswerTopLi>
                      <PAnswerTopSpaceCont>
                        <PAnswerTopArea></PAnswerTopArea>
                        {/* usually they are four components*/}
                      </PAnswerTopSpaceCont>
                      <PAnswerTopSpaceReCont></PAnswerTopSpaceReCont>
                    </PAnswerTopLi>
                  </PAnswerSubTopLine>
                </PAnswerSubContainerTop>
                <PAnswerSubContainerBottom>
                  <PAnswerContainerBottom>
                    <div
                      style={{
                        marginTop: "1.5rem",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "12px",
                        flexDirection: "row",
                        width: "100%",
                        alignSelf: "center",
                        textAlign: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      {questions[currentQuestion].answerOptions.map(
                        (option, index) => (
                          <PSeqBlockButton
                            onClick={() =>
                              setUserAnswerSequence([
                                ...userAnswerSequence,
                                index,
                              ])
                            }
                          >
                            {option.answerText}
                          </PSeqBlockButton>
                        )
                      )}
                    </div>
                  </PAnswerContainerBottom>
                </PAnswerSubContainerBottom>
              </PAnswerSubContainer>
            </PAnswerContainer>
          </PSecStartWrapper>
        </PSecStart>
      );
    }

    return (
      <div ref={textToSpeakRef}>{questions[currentQuestion].questionText}</div>
    );
  };

  return (
    <LWrapperTop>
      {showModal && <Modal resetQuiz={resetQuiz} />}
      <LWrapper>
        <LContainer>
          <LWhole>
            <LSubWhole>
              <TWrapperTop>
                <TContainerTop>
                  <TNav>
                    <Link
                      to="/train"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <TNavButton>
                        <TNavButtonImg src={Cross} />
                      </TNavButton>
                    </Link>
                    <TNavProgressContainer>
                      <TNavProgressWrapper>
                        <TNavProgressTop>
                          <TNavProgressSupTop></TNavProgressSupTop>
                          <TNavProgressLetTop>
                            <TNavProgressSubBottom></TNavProgressSubBottom>
                          </TNavProgressLetTop>
                        </TNavProgressTop>
                        <TNavProgressBottom progress={progress} />
                      </TNavProgressWrapper>
                    </TNavProgressContainer>
                    <TNavHeartContainer>
                      <TNavHeartImg src={Heart} />
                      <TNavHeartSpan>{hearts}</TNavHeartSpan>
                    </TNavHeartContainer>
                  </TNav>
                </TContainerTop>
              </TWrapperTop>
              <PWrapper>
                <PContainer>
                  <PSubContainer>
                    <PBorder>
                      <PStart>
                        <PSubStart>
                          <PStartHeader>
                            <PStartSpan>
                              {questions[currentQuestion].questionText}
                            </PStartSpan>
                          </PStartHeader>
                        </PSubStart>
                        {renderQuestion()}
                      </PStart>
                    </PBorder>
                  </PSubContainer>
                </PContainer>
              </PWrapper>
              <SWrapper>
                <SContainer>
                  <SSubContainer>
                    <SButtonContainer>
                      <SButton onClick={evaluateAnswer}>
                        <SButtonSpan>تحقق</SButtonSpan>
                      </SButton>
                    </SButtonContainer>
                  </SSubContainer>
                </SContainer>
              </SWrapper>
            </LSubWhole>
          </LWhole>
        </LContainer>
      </LWrapper>
    </LWrapperTop>
  );
};

export default Project;
