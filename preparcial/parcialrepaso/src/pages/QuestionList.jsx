import React, { useEffect, useState } from 'react';
import styles from '../assets/List.module.css'
import Button from '../components/Button';
import { useNavigate } from 'react-router';
const QuestionList = () => {
  const [storedQuestions, setStoredQuestions] = useState([]);
  const navigate = useNavigate();


    useEffect(() => {
      const stored = JSON.parse(localStorage.getItem('preguntas')) || [];
      setStoredQuestions(stored);
    }, []);
    
    const handlerEliminarPregunta = (index) => {
      const stored = JSON.parse(localStorage.getItem('preguntas'));
      stored.splice(index, 1);
      localStorage.setItem('preguntas', JSON.stringify(stored));
      setStoredQuestions(stored);
    }
  
  
    return (
    <div className={styles.container}>
      <h1>Lista de Preguntas</h1>
      <ul>
        {storedQuestions.map((question, index) => (
          <li key={index}  className={styles.question}>
            <h3>{question.pregunta.category}</h3>
            <p>{question.pregunta.question}</p>
            <p>Respuesta correcta: {question.pregunta.correct_answer}</p>
            {question.pregunta.incorrect_answers.map((answer, index) => (
              <p key={index}>Respuestas incorrectas: {answer}</p>
            ))}
            <Button text="Eliminar" onClick={() => {handlerEliminarPregunta(index)}}/>

          </li>
        ))}
      </ul>
      <Button text="Volver" onClick={() => navigate('/')}/>
    </div>
  );
};

export default QuestionList;
