import React, { useEffect, useState } from 'react';
import styles from '../assets/QuizConfis.module.css'
import { useNavigate } from 'react-router';
import Quizz from './Quizz';
import { getQuestions } from '../services/api';

const QuizConfig = () => {
  const navigate = useNavigate();
  const [numQuestions, setNumQuestions] = useState(10);
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const [setConfig, setSetConfig] = useState(false);
  const [questions, setQuestions] = useState([]);



  const handleStartQuiz = async() => {
    const object = {
        amount: numQuestions,
        category: category,
        difficulty: difficulty,
        type: type,
    }
    const getQuestiones = await getQuestions(object);
    setQuestions(getQuestiones.results);
    setSetConfig(true);
  };
  const goBack = () => {
    navigate('/');
  }
  const handlerShowQuizzSaved = () =>{
    navigate('/quizzSaved');
  }


  return (
      <div>
      {setConfig ? (
       <Quizz
       questions = {questions}
       />
    ) : ( <>
        <h1>Configuración del Quiz</h1>
        <form>
          <label>
            Número de Preguntas:
            <input
              type="number"
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
            />
          </label>
  
          <label>
            Categoría:
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Seleccionar Categoría</option>
              <option value="9">General Knowledge</option>
              <option value="17">Science: Nature</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="27">Animals</option>
              {/* Agrega más opciones según tus necesidades */}
            </select>
          </label>
  
          <label>
            Dificultad:
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
              <option value="">Seleccionar Dificultad</option>
              <option value="easy">Fácil</option>
              <option value="medium">Intermedia</option>
              <option value="hard">Difícil</option>
            </select>
          </label>
  
          <label>
            Tipo de Pregunta:
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Seleccionar Tipo</option>
              <option value="multiple">Opción Múltiple</option>
              <option value="boolean">Verdadero/Falso</option>
            </select>
          </label>
  
          <button type="button" onClick={handleStartQuiz}>
            Comenzar el Quiz
          </button>
          <button style={{marginTop:"15px", backgroundColor:"#94122c"}} type="button" onClick={goBack}>
            Regresar
          </button>
          <button style={{marginTop:"15px"}} onClick={handlerShowQuizzSaved}>
            Regresar al quizz guardado
          </button>
  
        </form>
        </>)}
    </div>
  );
};

export default QuizConfig;
