import React, { useState, useRef, useEffect } from "react";
import CorrectSound from "../../assets/correct.mp3";
import WrongSound from "../../assets/Wrong.mp3";
import { speakText } from "../../speechSynthesis";
import {
  AButton,
  ACon,
  AImgCon,
  AImgSubImg,
  ASubOne,
  ASubTwo,
  ASubWrap,
  AWrap,
  LCon,
  LSubWhole,
  LWhole,
  LWrap,
  LWrapTop,
  PACon,
  PAnswerBlockButton,
  PAnswerCon,
  PAnswerConBottom,
  PAnswerSubCon,
  PAnswerSubConBottom,
  PAnswerSubConTop,
  PAnswerSubTopLine,
  PAnswerTopArea,
  PAnswerTopLi,
  PAnswerTopSpaceCont,
  PAnswerTopSpaceReCont,
  PBorder,
  PCon,
  PLangCon,
  PLangSubCon,
  PLanguageImgCanvas,
  PLangImgCon,
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
  PLangSoundWrap,
  PLangSubWrap,
  PSecStart,
  PSecStartCon,
  PSecStartWrap,
  PSeqBlockButton,
  PStart,
  PStartHeader,
  PStartSpan,
  PSubCon,
  PSubStart,
  PTCon,
  PWrap,
  RButton,
  RCon,
  RHeader,
  RWrap,
  SButton,
  SButtonCon,
  SButtonSpan,
  SCon,
  SSubCon,
  SWrap,
  TConTop,
  TNav,
  TNavButton,
  TNavButtonImg,
  TNavHeartCon,
  TNavHeartImg,
  TNavHeartSpan,
  TNavProgressBottom,
  TNavProgressCon,
  TNavProgressLetTop,
  TNavProgressSubBottom,
  TNavProgressSupTop,
  TNavProgressTop,
  TNavProgressWrap,
  TWrapTop,
  SlWrap,
  SlCon,
  SlReCon,
  SlReSub,
  SlReHe,
  SlReSu,
  SlReSvg,
  SlSaCon,
  SlSaUl,
  SlSaLi,
  SlSaSub,
  SlSaLe,
  SlSaIc,
  SlSaBut,
  SlSaSubIc,
  SlSaIcSvg,
  SlSaPa,
  SlSaSpan,
  SlSm,
  SlSmFooter,
  SlSt,
  SlStBut,
  WrWrap,
  WrSubWrap,
  WrCon,
  WrLw,
  WrLwCon,
  WrLwText,
  PAnswerTopAre,
  RtTop,
  RtTopimg,
  RtMiddle,
  RSubHeader,
  RtReg,
  RtRegCon,
  RtRegSub,
  RtRegSu,
  RtRegBu,
  RtRegImg,
  RtRegUb,
  RtRegBt,
  CroWrap,
  CroCon,
  CroReCon,
  CroSubCon,
  CroTe,
  CroTeCon,
  CroTeHe,
  CroTeSpan,
  CroQa,
  CroQaWrap,
  CroQaSpan,
  CroQaBut,
  CroQaSp,
  GearSvg,
} from "./Project.elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Cross from "../../assets/cross.svg";
import Heart from "../../assets/Heart.svg";
import { useLesson } from "../../LessonContext";
import { useNavigate, useParams } from "react-router-dom";
import AvatarComponent from "../../Avatar";
import End from "../../assets/end.png";

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
  const [backgroundColor, setBackgroundColor] = useState(); // change it if type 5 not working
  const [isVisible, setIsVisible] = useState(false);
  const [maybe, setMaybe] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const { chapterName } = useParams();
  const [selectedPairs, setSelectedPairs] = useState([]);
  const [shuffledEnglish, setShuffledEnglish] = useState([]);
  const [shuffledArabic, setShuffledArabic] = useState([]);
  const [startTime, setStartTime] = useState(null);

  let questions = [];

  const removeAnswerFromSequence = (seqIndex) => {
    const newSequence = [...userAnswerSequence];
    newSequence.splice(seqIndex, 1);
    setUserAnswerSequence(newSequence);
  };

  try {
    questions = require(`../../utils/${chapterName}.json`);
  } catch (error) {
    // Handle the error, for example, setting questions to an empty array
    console.error(`Failed to load questions for ${chapterName}.`, error);
  }

  const getDuration = () => {
    if (startTime) {
      const duration = new Date() - startTime;
      const minutes = Math.floor(duration / 60000);
      const seconds = ((duration % 60000) / 1000).toFixed(0);
      return { minutes, seconds };
    }
    return { minutes: 0, seconds: 0 };
  };

  const duration = getDuration();

  const Modal = ({ resetQuiz }) => {
    return (
      <RCon>
        <RWrap>
          <RHeader>You Lost</RHeader>
          <RButton onClick={resetQuiz}>Take the quiz again</RButton>
        </RWrap>
      </RCon>
    );
  };

  const resetQuiz = () => {
    const defaultStates = {
      selectedAnswer: null,
      isCorrect: null,
      isButtonClicked: false,
      currentQuestion: 0,
      showScore: false,
      score: 0,
      progress: 0,
      hearts: 5,
      showModal: false,
      userAnswerSequence: [],
      scorePercentage: 0,
      sureText: "تحقق",
      backgroundColor: "#ffffff",
      isVisible: false,
      maybe: "",
      selectedAnswerIndex: null,
    };

    Object.keys(defaultStates).forEach((key) => {
      const setStateFunc = eval(
        "set" + key.charAt(0).toUpperCase() + key.slice(1)
      );
      setStateFunc(defaultStates[key]);
    });
  };

  const toggleSelection = (pairValue, index) => {
    if (selectedPairs.includes(pairValue)) {
      setSelectedPairs((prevPairs) =>
        prevPairs.filter((val) => val !== pairValue)
      );
    } else {
      setSelectedPairs((prevPairs) => [...prevPairs, pairValue]);
    }
  };

  const arePairsMatching = () => {
    // Assuming that each English word has only one correct Arabic match.
    let correctPairs = questions[currentQuestion].matchPairs;
    if (selectedPairs.length !== correctPairs.length * 2) {
      return false;
    }

    for (let i = 0; i < correctPairs.length; i++) {
      let pair = correctPairs[i];
      if (
        !selectedPairs.includes(pair.english) ||
        !selectedPairs.includes(pair.arabic)
      ) {
        return false;
      }
    }
    return true;
  };

  function shuffleArray(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const handleSpeechClick = () => {
    const textToSpeak = textToSpeakRef.current
      ? textToSpeakRef.current.innerText
      : "";
    speakText(textToSpeak);
  };

  // Helper function to play the sound
  const playSound = (filename) => {
    const audio = new Audio(filename);
    audio.play();
  };

  //update
  const handleAnswerButtonClick = (isCorrect, index) => {
    setSelectedAnswer(isCorrect);
    setSelectedAnswerIndex(index);
    setIsButtonClicked(true);
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const determineCorrectness = (currentQuestionType) => {
    switch (currentQuestionType) {
      case "type1":
      case "type3":
        return (
          JSON.stringify(userAnswerSequence) ===
          JSON.stringify(questions[currentQuestion].correctSequence)
        );
      case "type4":
        return (
          textareaValue.toLowerCase() ===
          questions[currentQuestion].correctAnswer.toLowerCase()
        );
      case "type5":
        return arePairsMatching();
      default:
        return selectedAnswer;
    }
  };

  const updateUIBasedOnCorrectness = (isCorrect) => {
    if (isCorrect) {
      setSureText("صح - متابعة");
      setBackgroundColor("#00ff00");
      setMaybe("رائع");
      playSound(CorrectSound);
    } else {
      setSureText("غلط - متابعة");
      setBackgroundColor("#ff0000");
      setMaybe("غلط");
      playSound(WrongSound);
    }
  };

  const updateScoreOrDecreaseHearts = (isCorrect) => {
    if (isCorrect) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
      setHearts(hearts - 1);
    }
  };

  const handleFirstClick = () => {
    setIsVisible(true);

    const currentQuestionType = questions[currentQuestion].questionType;
    const isAnswerCorrect = determineCorrectness(currentQuestionType);

    if (currentQuestionType === "type5") {
      setIsCorrect(isAnswerCorrect);
    }

    updateUIBasedOnCorrectness(isAnswerCorrect);
  };

  const handleSecondClick = () => {
    setSureText("تحقق");
    setBackgroundColor("#ffffff");
    setIsVisible(false);
    setSelectedPairs([]);

    const currentQuestionType = questions[currentQuestion].questionType;

    if (hearts <= 1) {
      setShowModal(true);
      return;
    }

    const isAnswerCorrect = determineCorrectness(currentQuestionType);
    updateScoreOrDecreaseHearts(isAnswerCorrect);

    if (currentQuestionType === "type1" || currentQuestionType === "type3") {
      setUserAnswerSequence([]);
    }

    if (hearts - 1 <= 0) {
      setShowModal(true);
      return;
    }

    setTimeout(() => {
      prepareForNextQuestionOrEndQuiz();
    }, 500);
  };

  const prepareForNextQuestionOrEndQuiz = () => {
    setIsCorrect(null);
    setSelectedAnswer(null);
    setSelectedAnswerIndex && setSelectedAnswerIndex(null);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTextareaValue("");
      const newProgress = (nextQuestion / questions.length) * 100;
      setProgress(newProgress);
    } else {
      endQuiz();
    }
  };

  const endQuiz = () => {
    setShowScore(true);
    setProgress(100);
  };

  const firstUpdate = useRef(true);

  useEffect(() => {
    // This block handles speaking the text for the new question
    const textToSpeak = textToSpeakRef.current
      ? textToSpeakRef.current.innerText
      : "";
    if (textToSpeak) {
      speakText(textToSpeak);
    }

    // This block handles shuffling the pairs
    const currentMatchPairs = questions[currentQuestion]?.matchPairs || [];
    const englishWords = currentMatchPairs.map((pair) => pair.english);
    const arabicWords = currentMatchPairs.map((pair) => pair.arabic);

    setShuffledEnglish(shuffleArray([...englishWords]));
    setShuffledArabic(shuffleArray([...arabicWords]));
  }, [currentQuestion, questions]);

  useEffect(() => {
    setStartTime(new Date());
  }, []);

  useEffect(() => {
    const percentage = Math.round((score / questions.length) * 100);
    setScorePercentage(percentage);
  }, [score, questions.length]);

  const QuizResults = ({ score, scorePercentage, resetQuiz, lessonIndex }) => {
    const { incrementLesson } = useLesson();
    const navigate = useNavigate();

    return (
      <RWrap>
        <RtTop>
          <RtTopimg src={End} alt="" />
        </RtTop>
        <RtMiddle>
          <RHeader>خلصت يابطل</RHeader>
          <RSubHeader>
            استغرق هذا الدرس {duration.minutes} دقيقة و {duration.seconds}{" "}
            ثانية. أحسنت في المواظبة على التعلّم!
          </RSubHeader>
          <RtReg>
            <RtRegCon>
              <RtRegSub></RtRegSub>
              <RtRegSu>اجمالي نقاطك</RtRegSu>
              <RtRegBu>
                <RtRegImg
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/f5358b2d4087a109790fc809eedc08c5.svg"
                  alt=""
                />
                <div>{score}</div>
              </RtRegBu>
            </RtRegCon>
            <RtRegCon>
              <RtRegUb></RtRegUb>
              <RtRegSu>عظيم</RtRegSu>
              <RtRegBt>
                <RtRegImg
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/9ace13520a375f5661415ff7d470f243.svg"
                  alt=""
                />
                <div>{scorePercentage}%</div>
              </RtRegBt>
            </RtRegCon>
          </RtReg>
        </RtMiddle>
        <RButton
          onClick={() => {
            resetQuiz();
            incrementLesson(1, lessonIndex); // <-- Increment lesson when the quiz is retaken
            navigate("/train"); // <-- Add this line to navigate to /train
          }}
        >
          خذ كويز مختلف
        </RButton>
      </RWrap>
    );
  };

  const renderQuestion = () => {
    const currentType = questions[currentQuestion].questionType;

    const SoundFirstSection = ({ text }) => (
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
              {text}
            </PLanguageSouFirstDiv>
          </PLanguageSouFirstSpan>
        </PLanguageSoundSubFirst>
      </PLanguageSoundFirst>
    );

    const AnswerSequence = ({ userAnswerSequence, options }) => (
      <PTCon>
        {userAnswerSequence.map((index, seqIndex) => (
          <PAnswerBlockButton
            onClick={() => removeAnswerFromSequence(seqIndex)}
          >
            {options[index].answerText}
          </PAnswerBlockButton>
        ))}
      </PTCon>
    );

    // The reusable QuestionComponent
    const QuestionComponent = ({ soundSecType }) => {
      const correctSequence = questions[currentQuestion].correctSequence;

      const checkSequence = () => {
        // Compare userAnswerSequence with correctSequence
        if (
          JSON.stringify(userAnswerSequence) === JSON.stringify(correctSequence)
        ) {
          handleAnswerButtonClick(true);
        } else {
          handleAnswerButtonClick(false);
        }
        setUserAnswerSequence([]);
      };

      return (
        <PSecStart>
          <PSecStartCon>
            <PLangCon>
              <PLangSubCon>
                <PLangImgCon>
                  <AvatarComponent
                    imgPath={questions[currentQuestion]?.avatar || ""}
                  />
                </PLangImgCon>
              </PLangSubCon>
              <PLangSubWrap>
                <PLangSoundWrap>
                  <SoundFirstSection
                    text={questions[currentQuestion].questionSubText}
                  />
                  <PLanguageSoundSec></PLanguageSoundSec>
                </PLangSoundWrap>
              </PLangSubWrap>
            </PLangCon>
          </PSecStartCon>
          <PSecStartWrap>
            <PAnswerCon>
              <PAnswerSubCon>
                <PAnswerSubConTop>
                  <PAnswerSubTopLine>
                    <PAnswerTopLi>
                      <PAnswerTopSpaceCont>
                        {soundSecType === "type1" ? (
                          <PAnswerTopArea>
                            <AnswerSequence
                              userAnswerSequence={userAnswerSequence}
                              options={questions[currentQuestion].answerOptions}
                            />
                          </PAnswerTopArea>
                        ) : (
                          <PAnswerTopAre>
                            <AnswerSequence
                              userAnswerSequence={userAnswerSequence}
                              options={questions[currentQuestion].answerOptions}
                            />
                          </PAnswerTopAre>
                        )}
                      </PAnswerTopSpaceCont>
                      <PAnswerTopSpaceReCont></PAnswerTopSpaceReCont>
                    </PAnswerTopLi>
                  </PAnswerSubTopLine>
                </PAnswerSubConTop>
                <PAnswerSubConBottom>
                  <PAnswerConBottom>
                    <PACon>
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
                    </PACon>
                  </PAnswerConBottom>
                </PAnswerSubConBottom>
              </PAnswerSubCon>
            </PAnswerCon>
          </PSecStartWrap>
        </PSecStart>
      );
    };

    // Main rendering logic
    if (currentType === "type1") {
      return <QuestionComponent soundSecType="type1" />;
    }

    if (currentType === "type3") {
      return <QuestionComponent soundSecType="type3" />;
    }

    if (currentType === "type4") {
      return (
        <WrWrap>
          <WrSubWrap>
            <WrCon>
              <PLangSubCon>
                <PLangImgCon>
                  <AvatarComponent
                    imgPath={questions[currentQuestion]?.avatar || ""}
                  />
                </PLangImgCon>
              </PLangSubCon>
              <SoundFirstSection
                text={questions[currentQuestion].questionSubText}
              />
            </WrCon>
          </WrSubWrap>
          <WrLw>
            <WrLwCon>
              <WrLwText
                value={textareaValue}
                data-test="challenge-translate-input"
                autocapitalize="off"
                autocomplete="off"
                autocorrect="off"
                spellcheck="false"
                class="_2EMUT _1QDX9 st_Fn _2ti2i"
                data-gramm="false"
                dir="ltr"
                lang="en"
                placeholder=" باللغة الإنجليزية"
                onChange={handleTextareaChange}
              ></WrLwText>
            </WrLwCon>
          </WrLw>
        </WrWrap>
      );
    }
    if (currentType === "type2") {
      return (
        <AWrap>
          <ASubWrap>
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <AButton
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect, index)
                  }
                >
                  <ACon
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
                      <AImgCon>
                        <AImgSubImg src={answerOption.imgPath} />
                      </AImgCon>
                    </ASubOne>
                    <ASubTwo>{answerOption.answerText}</ASubTwo>
                    {/* Adjacent JSX elements are now wrapped */}
                  </ACon>
                </AButton>
              )
            )}
          </ASubWrap>
        </AWrap>
      );
    }
    if (currentType === "type5") {
      return (
        <CroWrap>
          <CroCon>
            <CroReCon>
              <CroSubCon>
                <CroTe>
                  <CroQa>
                    <CroQaWrap>
                      {shuffledEnglish.map((word, index) => (
                        <CroQaBut
                          key={word}
                          onClick={() => toggleSelection(word, index)}
                          style={{
                            opacity: selectedPairs.includes(word) ? 0.5 : 1,
                          }}
                        >
                          <CroQaSp> {word}</CroQaSp>
                        </CroQaBut>
                      ))}

                      {shuffledArabic.map((word, index) => (
                        <CroQaBut
                          key={word}
                          onClick={() => toggleSelection(word, index)}
                          style={{
                            opacity: selectedPairs.includes(word) ? 0.5 : 1,
                          }}
                        >
                          <CroQaSp> {word}</CroQaSp>
                        </CroQaBut>
                      ))}
                    </CroQaWrap>
                  </CroQa>
                </CroTe>
              </CroSubCon>
            </CroReCon>
          </CroCon>
        </CroWrap>
      );
    }

    return (
      <div ref={textToSpeakRef}>{questions[currentQuestion].questionText}</div>
    );
  };

  return (
    <LWrapTop>
      {showModal && <Modal resetQuiz={resetQuiz} />}
      <LWrap>
        <LCon>
          <LWhole>
            <LSubWhole>
              <TWrapTop>
                <TConTop>
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
                    <TNavProgressCon>
                      <TNavProgressWrap>
                        <TNavProgressTop>
                          <TNavProgressSupTop></TNavProgressSupTop>
                          <TNavProgressLetTop>
                            <TNavProgressSubBottom></TNavProgressSubBottom>
                          </TNavProgressLetTop>
                        </TNavProgressTop>
                        <TNavProgressBottom progress={progress} />
                      </TNavProgressWrap>
                    </TNavProgressCon>
                    <TNavHeartCon>
                      <TNavHeartImg src={Heart} />
                      <TNavHeartSpan>{hearts}</TNavHeartSpan>
                    </TNavHeartCon>
                  </TNav>
                </TConTop>
              </TWrapTop>
              <PWrap>
                <PCon>
                  <PSubCon>
                    <PBorder ignoreStyle={showScore}>
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
                  </PSubCon>
                </PCon>
              </PWrap>
              <SWrap>
                <SCon>
                  <SSubCon backgroundColor={backgroundColor}>
                    <SButtonCon>
                      {currentQuestion < questions.length - 1 || !showScore ? (
                        <SButton onClick={handleFirstClick}>
                          <SButtonSpan>{sureText}</SButtonSpan>
                        </SButton>
                      ) : null}
                    </SButtonCon>
                  </SSubCon>
                </SCon>
              </SWrap>
              <SlWrap isVisible={isVisible}>
                <SlCon>
                  <SlReCon>
                    <SlReSub>
                      <SlReSu>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 200 200"
                          width="50" // set width to half the original
                          height="50" // set height to half the original
                        >
                          {/* Background Circle */}
                          <circle cx="100" cy="100" r="90" fill="#E5E5E5" />

                          {/* Gauge Background */}
                          <path
                            d="M 100 100 m -90, 0 a 90,90 0 0,1 180,0"
                            fill="#A9E9D9"
                          />

                          {/* Gauge Filled */}
                          <path
                            d="M 100 100 m -90, 0 a 90,90 0 0,1 90,-90"
                            fill="#38D48A"
                          />

                          {/* Gauge Needle */}
                          <line
                            x1="100"
                            y1="100"
                            x2="100"
                            y2="20"
                            stroke="#2F5BA4"
                            strokeWidth="8"
                            strokeLinecap="round"
                            transform="rotate(45,100,100)"
                          />

                          {/* Center Circle */}
                          <circle cx="100" cy="100" r="8" fill="#2F5BA4" />
                        </svg>
                      </SlReSu>
                    </SlReSub>
                    <SlReHe>{maybe}</SlReHe>
                  </SlReCon>
                  <SlSaCon>
                    <SlSaUl>
                      <SlSaLi>
                        <SlSaSub>
                          <SlSaLe>
                            <SlSaIc>
                              <SlSaBut>
                                <SlSaSubIc>
                                  <SlSaIcSvg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 500 500"
                                      width="20"
                                      height="20"
                                      preserveAspectRatio="xMidYMid meet"
                                      transform="scale(-1, 1)"
                                    >
                                      <defs>
                                        <clipPath id="__lottie_element_2">
                                          <rect
                                            width="500"
                                            height="500"
                                            x="0"
                                            y="0"
                                          ></rect>
                                        </clipPath>
                                        <g id="__lottie_element_10">
                                          <g
                                            transform="matrix(24.12849998474121,0,0,24.12849998474121,252.0500030517578,245.89999389648438)"
                                            opacity="1"
                                          >
                                            <g
                                              opacity="1"
                                              transform="matrix(1,0,0,1,0,0)"
                                            >
                                              <path
                                                fill="rgb(17,110,238)"
                                                fill-opacity="1"
                                                d=" M1.6030000448226929,-7.486999988555908 C1.50600004196167,-7.5 1.406999945640564,-7.499000072479248 1.3079999685287476,-7.485000133514404 C1.1100000143051147,-7.455999851226807 0.9160000085830688,-7.372000217437744 0.7580000162124634,-7.228000164031982 C0.7559999823570251,-7.22599983215332 0.7519999742507935,-7.223999977111816 0.75,-7.2220001220703125 C0.75,-7.2220001220703125 -2.7750000953674316,-3.9189999103546143 -2.7750000953674316,-3.9189999103546143 C-2.8910000324249268,-3.809999942779541 -3.0429999828338623,-3.75 -3.2019999027252197,-3.75 C-3.2019999027252197,-3.75 -6.458000183105469,-3.75 -6.458000183105469,-3.75 C-7.486000061035156,-3.75 -8.333000183105469,-2.9030001163482666 -8.333000183105469,-1.875 C-8.333000183105469,-1.875 -8.333000183105469,1.875 -8.333000183105469,1.875 C-8.333000183105469,2.9030001163482666 -7.486000061035156,3.75 -6.458000183105469,3.75 C-6.458000183105469,3.75 -3.2019999027252197,3.75 -3.2019999027252197,3.75 C-3.0429999828338623,3.75 -2.8910000324249268,3.809999942779541 -2.7750000953674316,3.9189999103546143 C-2.7750000953674316,3.9189999103546143 0.75,7.2210001945495605 0.75,7.2210001945495605 C0.7519999742507935,7.2230000495910645 0.7559999823570251,7.22599983215332 0.7580000162124634,7.228000164031982 C1.0750000476837158,7.515999794006348 1.534000039100647,7.563000202178955 1.8799999952316284,7.409999847412109 C2.2260000705718994,7.256999969482422 2.5,6.885000228881836 2.5,6.456999778747559 C2.5,6.456999778747559 2.5,-6.458000183105469 2.5,-6.458000183105469 C2.5,-6.886000156402588 2.2260000705718994,-7.257999897003174 1.8799999952316284,-7.410999774932861 C1.7940000295639038,-7.448999881744385 1.7000000476837158,-7.473999977111816 1.6030000448226929,-7.486999988555908z"
                                              ></path>
                                            </g>
                                          </g>
                                        </g>
                                        <filter
                                          id="__lottie_element_16"
                                          filterUnits="objectBoundingBox"
                                          x="0%"
                                          y="0%"
                                          width="100%"
                                          height="100%"
                                        >
                                          <feComponentTransfer in="SourceGraphic">
                                            <feFuncA
                                              type="table"
                                              tableValues="1.0 0.0"
                                            ></feFuncA>
                                          </feComponentTransfer>
                                        </filter>
                                        <mask
                                          id="__lottie_element_10_2"
                                          mask-type="alpha"
                                        >
                                          <g filter="url(#__lottie_element_16)">
                                            <rect
                                              width="500"
                                              height="500"
                                              x="0"
                                              y="0"
                                              fill="#ffffff"
                                              opacity="0"
                                            ></rect>
                                            <use></use>
                                          </g>
                                        </mask>
                                      </defs>
                                      <g clip-path="url(#__lottie_element_2)">
                                        <g
                                          transform="matrix(21.996498107910156,0,0,21.996498107910156,252.0500030517578,245.89999389648438)"
                                          opacity="1"
                                        >
                                          <g
                                            opacity="1"
                                            transform="matrix(1,0,0,1,0,0)"
                                          >
                                            <path
                                              fill="rgb(17,110,238)"
                                              fill-opacity="1"
                                              d=" M1.6030000448226929,-7.486999988555908 C1.50600004196167,-7.5 1.406999945640564,-7.499000072479248 1.3079999685287476,-7.485000133514404 C1.1100000143051147,-7.455999851226807 0.9160000085830688,-7.372000217437744 0.7580000162124634,-7.228000164031982 C0.7559999823570251,-7.22599983215332 0.7519999742507935,-7.223999977111816 0.75,-7.2220001220703125 C0.75,-7.2220001220703125 -2.7750000953674316,-3.9189999103546143 -2.7750000953674316,-3.9189999103546143 C-2.8910000324249268,-3.809999942779541 -3.0429999828338623,-3.75 -3.2019999027252197,-3.75 C-3.2019999027252197,-3.75 -6.458000183105469,-3.75 -6.458000183105469,-3.75 C-7.486000061035156,-3.75 -8.333000183105469,-2.9030001163482666 -8.333000183105469,-1.875 C-8.333000183105469,-1.875 -8.333000183105469,1.875 -8.333000183105469,1.875 C-8.333000183105469,2.9030001163482666 -7.486000061035156,3.75 -6.458000183105469,3.75 C-6.458000183105469,3.75 -3.2019999027252197,3.75 -3.2019999027252197,3.75 C-3.0429999828338623,3.75 -2.8910000324249268,3.809999942779541 -2.7750000953674316,3.9189999103546143 C-2.7750000953674316,3.9189999103546143 0.75,7.2210001945495605 0.75,7.2210001945495605 C0.7519999742507935,7.2230000495910645 0.7559999823570251,7.22599983215332 0.7580000162124634,7.228000164031982 C1.0750000476837158,7.515999794006348 1.534000039100647,7.563000202178955 1.8799999952316284,7.409999847412109 C2.2260000705718994,7.256999969482422 2.5,6.885000228881836 2.5,6.456999778747559 C2.5,6.456999778747559 2.5,-6.458000183105469 2.5,-6.458000183105469 C2.5,-6.886000156402588 2.2260000705718994,-7.257999897003174 1.8799999952316284,-7.410999774932861 C1.7940000295639038,-7.448999881744385 1.7000000476837158,-7.473999977111816 1.6030000448226929,-7.486999988555908z M1.25,-5.978000164031982 C1.25,-5.978000164031982 1.25,5.9770002365112305 1.25,5.9770002365112305 C1.25,5.9770002365112305 -1.9199999570846558,3.006999969482422 -1.9199999570846558,3.006999969482422 C-2.2669999599456787,2.681999921798706 -2.7260000705718994,2.5 -3.2019999027252197,2.5 C-3.2019999027252197,2.5 -6.458000183105469,2.5 -6.458000183105469,2.5 C-6.810999870300293,2.5 -7.083000183105469,2.2279999256134033 -7.083000183105469,1.875 C-7.083000183105469,1.875 -7.083000183105469,-1.875 -7.083000183105469,-1.875 C-7.083000183105469,-2.2279999256134033 -6.810999870300293,-2.5 -6.458000183105469,-2.5 C-6.458000183105469,-2.5 -3.2019999027252197,-2.5 -3.2019999027252197,-2.5 C-2.7260000705718994,-2.5 -2.2669999599456787,-2.681999921798706 -1.9199999570846558,-3.006999969482422 C-1.9199999570846558,-3.006999969482422 1.25,-5.978000164031982 1.25,-5.978000164031982z"
                                            ></path>
                                          </g>
                                        </g>
                                        <g mask="url(#__lottie_element_10_2)">
                                          <g
                                            transform="matrix(24.12849998474121,0,0,24.12849998474121,252.0500030517578,245.89999389648438)"
                                            opacity="1"
                                          >
                                            <g
                                              opacity="1"
                                              transform="matrix(1,0,0,1,0,0)"
                                            >
                                              <path
                                                fill="rgb(17,110,238)"
                                                fill-opacity="1"
                                                d=" M4.5879998207092285,-3.2260000705718994 C4.480000019073486,-3.2269999980926514 4.373000144958496,-3.200000047683716 4.2779998779296875,-3.1480000019073486 C4.183000087738037,-3.0959999561309814 4.104000091552734,-3.0199999809265137 4.046999931335449,-2.927999973297119 C3.990000009536743,-2.8359999656677246 3.9579999446868896,-2.7290000915527344 3.9549999237060547,-2.621000051498413 C3.9509999752044678,-2.513000011444092 3.9760000705718994,-2.4059998989105225 4.0269999504089355,-2.309999942779541 C4.38100004196167,-1.6139999628067017 4.583000183105469,-0.8320000171661377 4.583000183105469,0 C4.583000183105469,0.8320000171661377 4.38100004196167,1.6130000352859497 4.0269999504089355,2.309000015258789 C3.986999988555908,2.381999969482422 3.9609999656677246,2.4639999866485596 3.9519999027252197,2.546999931335449 C3.943000078201294,2.630000114440918 3.9519999027252197,2.7149999141693115 3.9769999980926514,2.7950000762939453 C4.001999855041504,2.875 4.041999816894531,2.9489998817443848 4.0960001945495605,3.013000011444092 C4.150000095367432,3.0769999027252197 4.215000152587891,3.130000114440918 4.289999961853027,3.1679999828338623 C4.364999771118164,3.2060000896453857 4.446000099182129,3.2290000915527344 4.53000020980835,3.234999895095825 C4.613999843597412,3.240999937057495 4.697999954223633,3.2290000915527344 4.7769999504089355,3.2019999027252197 C4.855999946594238,3.174999952316284 4.929999828338623,3.131999969482422 4.992000102996826,3.0759999752044678 C5.053999900817871,3.0199999809265137 5.104000091552734,2.953000068664551 5.139999866485596,2.877000093460083 C5.578999996185303,2.015000104904175 5.833000183105469,1.0360000133514404 5.833000183105469,0 C5.833000183105469,-1.0360000133514404 5.578999996185303,-2.015000104904175 5.139999866485596,-2.877000093460083 C5.089000225067139,-2.9800000190734863 5.010000228881836,-3.066999912261963 4.913000106811523,-3.128999948501587 C4.815999984741211,-3.190999984741211 4.703000068664551,-3.2239999771118164 4.5879998207092285,-3.2260000705718994z"
                                              ></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g
                                          transform="matrix(24.12849998474121,0,0,24.12849998474121,252.0500030517578,245.89999389648438)"
                                          opacity="1"
                                        >
                                          <g
                                            opacity="1"
                                            transform="matrix(1,0,0,1,0,0)"
                                          >
                                            <path
                                              fill="rgb(17,110,238)"
                                              fill-opacity="1"
                                              d=" M6.353000164031982,-5.177999973297119 C6.238999843597412,-5.178999900817871 6.127999782562256,-5.14900016784668 6.03000020980835,-5.091000080108643 C5.932000160217285,-5.0329999923706055 5.853000164031982,-4.948999881744385 5.798999786376953,-4.848999977111816 C5.744999885559082,-4.749000072479248 5.718999862670898,-4.636000156402588 5.724999904632568,-4.521999835968018 C5.730999946594238,-4.4079999923706055 5.767000198364258,-4.297999858856201 5.830999851226807,-4.203999996185303 C6.620999813079834,-2.993000030517578 7.083000183105469,-1.5540000200271606 7.083000183105469,0 C7.083000183105469,1.5540000200271606 6.620999813079834,2.993000030517578 5.830999851226807,4.203999996185303 C5.7829999923706055,4.2729997634887695 5.749000072479248,4.349999904632568 5.73199987411499,4.432000160217285 C5.715000152587891,4.513999938964844 5.715000152587891,4.5980000495910645 5.730999946594238,4.679999828338623 C5.747000217437744,4.76200008392334 5.7789998054504395,4.841000080108643 5.826000213623047,4.909999847412109 C5.873000144958496,4.979000091552734 5.933000087738037,5.038000106811523 6.002999782562256,5.084000110626221 C6.072999954223633,5.130000114440918 6.1519999504089355,5.160999774932861 6.234000205993652,5.176000118255615 C6.315999984741211,5.190999984741211 6.401000022888184,5.189000129699707 6.48199987411499,5.171000003814697 C6.564000129699707,5.1529998779296875 6.639999866485596,5.118000030517578 6.708000183105469,5.068999767303467 C6.776000022888184,5.019999980926514 6.834000110626221,4.958000183105469 6.877999782562256,4.88700008392334 C7.795000076293945,3.4830000400543213 8.333000183105469,1.8029999732971191 8.333000183105469,0 C8.333000183105469,-1.8029999732971191 7.795000076293945,-3.4830000400543213 6.877999782562256,-4.88700008392334 C6.822000026702881,-4.97599983215332 6.744999885559082,-5.048999786376953 6.6529998779296875,-5.099999904632568 C6.560999870300293,-5.151000022888184 6.458000183105469,-5.177000045776367 6.353000164031982,-5.177999973297119z"
                                            ></path>
                                          </g>
                                        </g>
                                        <g>
                                          <g>
                                            <path></path>
                                          </g>
                                        </g>
                                      </g>
                                    </svg>
                                  </SlSaIcSvg>
                                </SlSaSubIc>
                              </SlSaBut>
                            </SlSaIc>
                            <SlSaPa>
                              <SlSaSpan>
                                {questions[currentQuestion].questionExplain}
                              </SlSaSpan>
                            </SlSaPa>
                          </SlSaLe>
                        </SlSaSub>
                      </SlSaLi>
                    </SlSaUl>
                    <SlSm>
                      <SlSmFooter>
                        {questions[currentQuestion].answerExplain}
                      </SlSmFooter>
                    </SlSm>
                  </SlSaCon>
                  <SlSt>
                    <SlStBut onClick={handleSecondClick}>استمر</SlStBut>
                  </SlSt>
                </SlCon>
              </SlWrap>
            </LSubWhole>
          </LWhole>
        </LCon>
      </LWrap>
    </LWrapTop>
  );
};

export default Project;
