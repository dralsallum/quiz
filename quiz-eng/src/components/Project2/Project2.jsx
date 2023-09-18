import React, { useState, useRef, useEffect } from "react";
import { speakText } from "../../speechSynthesis";
import {
  AButton,
  AContainer,
  AImgContainer,
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
  PAContainer,
  PAnswerBlockButton,
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
  PLanguageImgContainer,
  PLanguageSouFirstDiv,
  PLanguageSouFirstSpan,
  PLanguageSounSec,
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
  PTContainer,
  PWrapper,
  RButton,
  RContainer,
  RHeader,
  RWrapper,
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
import questions from "../../utils/chapter1.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import Dude from "../../assets/dude.png";
import { Link } from "react-router-dom";
import Cross from "../../assets/cross.svg";
import Heart from "../../assets/Heart.svg";
import { useLesson } from "../../LessonContext";
import { useNavigate } from "react-router-dom";

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
  const [scorePercentage, setScorePercentage] = useState(0);
  const [sureText, setSureText] = useState("تحقق");
  const [isFirstClick, setIsFirstClick] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState();

  const Modal = ({ resetQuiz }) => {
    return (
      <RContainer>
        <RWrapper>
          <RHeader>You Lost</RHeader>
          <RButton onClick={resetQuiz}>Take the quiz again</RButton>
        </RWrapper>
      </RContainer>
    );
  };

  const QuizResults = ({ score, scorePercentage, resetQuiz, lessonIndex }) => {
    const { incrementLesson } = useLesson();
    const navigate = useNavigate();

    return (
      <RWrapper>
        <RHeader>خلصت يابطل</RHeader>
        <p>Your Score: {score}</p>
        <p>Your Score Percentage: {scorePercentage}%</p>
        <RButton
          onClick={() => {
            resetQuiz();
            incrementLesson(1, lessonIndex); // <-- Increment lesson when the quiz is retaken
            navigate("/train"); // <-- Add this line to navigate to /train
          }}
        >
          خذ كويز مختلف
        </RButton>
      </RWrapper>
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
    if (isFirstClick) {
      // Check if the answer is correct or not
      let isAnswerCorrect = false; // initialize as false

      // Handle special case for type1 questions
      if (
        questions[currentQuestion].questionType === "type1" ||
        questions[currentQuestion].questionType === "type3"
      ) {
        isAnswerCorrect =
          JSON.stringify(userAnswerSequence) ===
          JSON.stringify(questions[currentQuestion].correctSequence);
      } else {
        isAnswerCorrect = selectedAnswer;
      }

      // Set the SureText based on whether the answer is correct or not
      if (isAnswerCorrect) {
        setSureText("صح - متابعة");
        setBackgroundColor("#00ff00");
      } else {
        setSureText("غلط - متابعة");
        setBackgroundColor("#ff0000");
      }

      setIsFirstClick(false); // Update the state to mark that the first click has occurred.
      return;
    } else {
      // Reset the isFirstClick state and sureText for future clicks
      setIsFirstClick(true);
      setSureText("تحقق");
      setBackgroundColor("#ffffff");
    }

    if (hearts <= 1) {
      setShowModal(true);
      return;
    }

    // If no answer was selected, just return.
    if (
      selectedAnswer === null &&
      questions[currentQuestion].questionType !== "type1" &&
      questions[currentQuestion].questionType !== "type3"
    ) {
      return;
    }

    // Special case for type4 questions to check sequence
    if (
      questions[currentQuestion].questionType === "type1" ||
      questions[currentQuestion].questionType === "type3"
    ) {
      const correctSequence = questions[currentQuestion].correctSequence;

      // Compare userAnswerSequence with correctSequence
      if (
        JSON.stringify(userAnswerSequence) === JSON.stringify(correctSequence)
      ) {
        // The sequence is correct
        setIsCorrect(true);
        setScore(score + 1);
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
        setScore(score + 1);
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
        const percentage = Math.round((score / 10) * 100); // Since the score is out of 10
        setScorePercentage(percentage);
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
                    <PTContainer>
                      {userAnswerSequence.map((index) => (
                        <PAnswerBlockButton
                          style={{
                            marginLeft: "16px",
                            fontSize: "16px",
                          }}
                        >
                          {
                            questions[currentQuestion].answerOptions[index]
                              .answerText
                          }
                        </PAnswerBlockButton>
                      ))}
                    </PTContainer>
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
                    <PAContainer>
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
                    </PAContainer>
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
                  <PLanguageSounSec>
                    {/* here will be the answer */}
                    <PTContainer>
                      {userAnswerSequence.map((index) => (
                        <PAnswerBlockButton
                          style={{
                            marginLeft: "16px",
                            fontSize: "16px",
                          }}
                        >
                          {
                            questions[currentQuestion].answerOptions[index]
                              .answerText
                          }
                        </PAnswerBlockButton>
                      ))}
                    </PTContainer>
                  </PLanguageSounSec>
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
                    <PAContainer>
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
                    </PAContainer>
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
                      {showScore ? (
                        <QuizResults
                          score={score}
                          scorePercentage={scorePercentage}
                          resetQuiz={resetQuiz}
                        />
                      ) : (
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
                      )}
                    </PBorder>
                  </PSubContainer>
                </PContainer>
              </PWrapper>
              <SWrapper>
                <SContainer>
                  <SSubContainer backgroundColor={backgroundColor}>
                    <SButtonContainer>
                      <SButton onClick={evaluateAnswer}>
                        <SButtonSpan>{sureText}</SButtonSpan>
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
