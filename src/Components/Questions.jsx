import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const shuffleArray = (array) => {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Questions = () => {
  const { category } = useParams();
  const [questions, setQuestions] = useState([]);
  const [lock, setLock] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=multiple`
        );
        const result = await response.json();
        console.log(result);
        setQuestions(result.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSelection = (questionIndex, option) => {
    if (lock) {
      // Do nothing if locked
      return;
    }

    // Lock the selection to prevent further clicks
    setLock(true);

    // Check if the answer is correct
    const isCorrect = questions[questionIndex].correct_answer === option;

    // Highlight the selected answer box
    const selectedOption = document.getElementById(
      `option_${questionIndex}_${option}`
    );
    if (selectedOption) {
      selectedOption.style.backgroundColor = isCorrect ? "green" : "red";
    }

    // If the answer is incorrect, highlight the correct answer
    if (!isCorrect) {
      const correctOption = document.getElementById(
        `option_${questionIndex}_${questions[questionIndex].correct_answer}`
      );
      if (correctOption) {
        correctOption.style.backgroundColor = "green";
      }
    }
  };
  return (
    <div className="questions-container">
      {questions.length > 0 ? (
        questions.map((question, index) => {
          // Combine correct and incorrect answers
          const allOptions = [
            ...question.incorrect_answers,
            question.correct_answer,
          ];
          // Shuffle the options only once when the question is displayed
          const shuffledOptions =
            index === 0 ? shuffleArray(allOptions) : allOptions;
          return (
            <div className="question-container" key={index}>
              <div className="title">
                <span>Q.{index + 1}</span>
                {question.question
                  .replace(/&quot;/g, '"')
                  .replace(/&#039;/g, "'")}
              </div>

              <div className="options">
                <ul>
                  {shuffledOptions.map((option, optionIndex) => (
                    <li
                      key={optionIndex}
                      id={`option_${index}_${option}`}
                      onClick={() => {
                        handleSelection(index, option);
                      }}
                    >
                      {option.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Questions;
