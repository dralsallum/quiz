import React, { useState } from "react";
import {
  LearnContainer,
  LearnSubWhole,
  LearnWhole,
  LearnWrapper,
  LearnWrapperTop,
} from "./Learn.element";
import TestNav from "../TestNav/TestNav";
import Sure from "../Sure/Sure";
import Project from "../Project/Project";
import questions from "../../utils/TestQ.json";

const Learn = () => {
  // Declare a state variable to store the user's answer
  const [userAnswer, setUserAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submittedAnswer, setSubmittedAnswer] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [hearts, setHearts] = useState(5);

  // Function to handle button clicks

  const handleSureButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 9 / questions.length);
    }

    // if didn't work
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);

      // Update the progress
      const newProgress = (nextQuestion / questions.length) * 100;
      setProgress(newProgress);
    } else {
      setShowScore(true);
      setProgress(100); // Progress is 100% when the quiz ends
    }
  };
  return (
    <LearnWrapperTop>
      <LearnWrapper>
        <LearnContainer>
          <LearnWhole>
            <LearnSubWhole>
              <TestNav progress={progress} hearts={hearts} />
              <Project
                Project
                setSelectedAnswer={setSelectedAnswer}
                score={score}
                currentQuestion={currentQuestion}
                setScore={setScore}
                setProgress={setProgress}
                userAnswer={userAnswer}
                selectedAnswer={selectedAnswer} // Pass down the selected answer
                submittedAnswer={submittedAnswer}
                handleSureButtonClick={handleSureButtonClick}
              />
              <Sure
                handleSureButtonClick={handleSureButtonClick}
                setSelectedAnswer={setSelectedAnswer}
                selectedAnswer={selectedAnswer}
              />
            </LearnSubWhole>
          </LearnWhole>
        </LearnContainer>
      </LearnWrapper>
    </LearnWrapperTop>
  );
};

export default Learn;
