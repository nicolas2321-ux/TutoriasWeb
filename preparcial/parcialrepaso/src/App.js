import { Route, Router, Routes } from "react-router";
import Home from "./pages/home";
import QuizConfig from "./pages/QuizConfig";
import QuestionList from "./pages/QuestionList";


function App() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Quizzes" element={<QuizConfig/>} />
    <Route path="/questions" element={<QuestionList/>} />
  </Routes>
  );
}

export default App;
