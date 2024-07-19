import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    text: "Two-wheeled vehicles have high maneuverability, but you must not squeeze between other vehicles.",
    options: [{ id: 0, isCorrect: true, isIncorrect: false }],
  },
  {
    text: "I farted just now?",
    options: [{ id: 1, isCorrect: true, isIncorrect: false }],
  },
];

function App() {
  //Properties!

  const [showFinalResults, setFinalResults] = useState();
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Helper Functions
  const optionClicked = (isCorrect) => {
    console.log(isCorrect);
  };

  return (
    <div className="App">
      {/* 1. Header */}
      <h1>Japan Driving Test</h1>
      {/* 2. Current Score */}
      <h2>Current Score: {score}</h2>
      {showFinalResults ? (
        // 4. Final Results
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>1 out of 5 correct - 20%</h2>
          <button>try again?</button>
        </div>
      ) : (
        // 3. Question Cards
        <div className="question-card">
          <h2>
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.isCorrect}TRUE
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
