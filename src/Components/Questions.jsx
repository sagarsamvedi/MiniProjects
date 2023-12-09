import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Questions = () => {
  const { topic } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://quizapi.io/api/v1/questions?apiKey=XlZgt5fMy69bPWJ8A1l8C2UuoNGx6g7Job50DutD&category=sql&difficulty=Easy&limit=10"
      );

      const result = await api.json();
      console.log(result);
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="questions-container">

      {data.map((item) => (
        <div className="question-container" key ={item.id}>
          <div className="title"><span>Q.</span>{item.question}</div>
          <div className="options">
            <ul> {Object.keys(item.answers)
                  .filter((key) => item.answers[key] !== null)
                  .map((key) => (
                    <li key={key}>{item.answers[key]}</li>
                  ))}
            </ul>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default Questions;
