import "./app.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from "./Components/Questions";

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/quiz/:topic" element={<Questions/>}></Route>
        </Routes>
      </Router>
    </>
  );
}
