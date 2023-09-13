import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Countdown from "react-countdown-clock";
import ReactPlayer from "react-player";
import {
  QuizBody,
  QuizApp,
  ScoreSection,
  QuestionSection,
  QuestionCount,
  QuestionCountSpan,
  QuestionText,
  AnswerSection,
  QuizButton,
  InputContainer,
  InputfieldContainer,
  Inputfield,
  QuizAppHeader,
  QuizAppAudio,
  ScoreSectionImg,
  ScoreSectionbackground,
  ScoreSectionProgress,
} from "./Body.elements";
import questions from "../../utils/QuizQ.json";
import lowScoreSVG from "../../assets/level-0.svg";
import mediumScoreSVG from "../../assets/level-2.svg";
import highScoreSVG from "../../assets/level-4.svg";
import extraHighScoreSVG from "../../assets/level-5.svg";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import LinearProgress from "@mui/material/LinearProgress";

const Body = () => {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState(""); // Use a different state variable for the user's email input
  const [emails, setEmails] = useState([]); // Use this state variable to store the array of emails fetched from Firestore
  const [nameEntered, setNameEntered] = useState(false);
  const [emailEntered, setEmailEntered] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchEmails = async () => {
      const emailCol = collection(db, "email");
      const emailSnapshot = await getDocs(emailCol);
      const emailList = emailSnapshot.docs.map((doc) => doc.data().email);
      setEmails(emailList); // Set the fetched emails to the 'emails' state variable
    };

    fetchEmails();
  }, []);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 9 / questions.length);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const timeIsUp = () => {
    setShowScore(true);
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    setNameEntered(true);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    setEmailEntered(true);

    // Save name and email to Firebase
    addDoc(collection(db, "email"), {
      name: name,
      email: userEmail, // Use 'userEmail' instead of 'email'
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const getScoreSVG = (score) => {
    score = Math.round(score);
    if (score <= (9 * 1) / 3) {
      return lowScoreSVG;
    } else if (score <= (9 * 2) / 3) {
      return mediumScoreSVG;
    } else if (score < 9) {
      return highScoreSVG;
    } else {
      return extraHighScoreSVG;
    }
  };

  const calculateScorePercentage = (score, total) => (score / total) * 100;

  return (
    <QuizBody>
      <QuizApp>
        {!nameEntered ? (
          <InputContainer>
            <h3>عرفنا باسمك الكريم؟</h3>
            <InputfieldContainer>
              <form onSubmit={handleNameSubmit}>
                <Inputfield
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#7cc6fe",
                    border: "none",
                    padding: "5px",
                    cursor: "default",
                    borderRadius: "8px",
                    marginLeft: "4px",
                  }}
                >
                  <FaArrowRight size="1.2em" />
                </button>
              </form>
            </InputfieldContainer>
          </InputContainer>
        ) : !emailEntered && showScore ? (
          <InputContainer>
            <h3>ارجو تزويدنا ببريدك الالكتروني لتصلك النتيجة على الايميل:</h3>
            <InputfieldContainer>
              <form onSubmit={handleEmailSubmit}>
                <Inputfield
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#7cc6fe",
                    border: "none",
                    padding: "5px",
                    cursor: "default",
                    borderRadius: "8px",
                    marginLeft: "4px",
                  }}
                >
                  <FaArrowRight size="1.2em" />
                </button>
              </form>
            </InputfieldContainer>
          </InputContainer>
        ) : showScore ? (
          <ScoreSection>
            <ScoreSectionbackground>
              <ScoreSectionImg src={getScoreSVG(score)} alt="score indicator" />
            </ScoreSectionbackground>
            <h3> درجتك التقريبية في الايلتس </h3>
            <br />
            {Math.round(score)}

            <ScoreSectionProgress>
              <p>1</p>
              <progress value={calculateScorePercentage(score, 9)} max="100" />
              <p>9</p>
            </ScoreSectionProgress>
          </ScoreSection>
        ) : (
          <>
            <Countdown
              seconds={420}
              color="#ffffff"
              alpha={0.9}
              size={50}
              onComplete={timeIsUp}
            />
            <QuestionSection>
              <QuestionCount>
                <QuestionCountSpan>
                  Question {currentQuestion + 1}
                </QuestionCountSpan>
                /{questions.length}
                <QuizAppHeader>
                  اختار الكلمة او العبارة الي تكمل معنى الجملة
                </QuizAppHeader>
              </QuestionCount>
              <QuestionText>
                {questions[currentQuestion].questionText}
                {questions[currentQuestion].audioUrl && (
                  <QuizAppAudio>
                    <ReactPlayer
                      url={questions[currentQuestion].audioUrl}
                      controls
                      width="100%"
                      height="50px"
                    />
                  </QuizAppAudio>
                )}
              </QuestionText>
            </QuestionSection>
            <AnswerSection>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <QuizButton
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </QuizButton>
              ))}
            </AnswerSection>
          </>
        )}
      </QuizApp>
    </QuizBody>
  );
};

export default Body;
