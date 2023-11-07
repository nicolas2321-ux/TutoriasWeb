import React, { useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useState } from 'react';

const Quizz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [ActualQuestion, setActualQuestion] = useState(questions[currentQuestion]);
  const [answers, setAnswers] = useState([]);
  const [finish, setFinish] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [numeroPreguntas  , setNumeroPreguntas] = useState(0);
  
  useEffect(() => {
    setAnswers([]);
    setNumeroPreguntas(questions.length);
  }, []);

  
  useEffect (() => {

   setActualQuestion(questions[currentQuestion]);

  }, [currentQuestion]);

  const handleAnswer = (answer) => {
    console.log("entre")
    answers[currentQuestion] = answer;
    setAnswers(answers);
    
  }

  const handleFinish = () => {
    
    let correct = 0;
    let incorrect = 0;
    answers.forEach((answer, index) => {
    
      if(answer == questions[index].correct_answer) {
        console.log('correcto');
        correct++;
      } else {
        console.log('incorrecto');
        incorrect++;
      }
    });
    setCorrectAnswers(correct);
    setIncorrectAnswers(incorrect);
    setFinish(true);
  }
  const handlerNextQuestion = () => {
    if(answers[currentQuestion] === undefined) {
      alert('Debes seleccionar una respuesta');
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }
  const handlerGuardarTest = () => {
    const object = {
      preguntas: questions,
      respuestas: answers,
      numero_pregunta: currentQuestion,
    };
    const tests = localStorage.setItem('tests', JSON.stringify(object));
    
  }

  return (
  
    <>
{
  finish ? (
    <div>
      <h1>Resultados</h1>
      <p>Respuestas correctas: {correctAnswers}</p>
      <p>Respuestas incorrectas: {incorrectAnswers}</p>
      <Button onClick={() => window.location.reload()} text="Reiniciar" />
    </div>
  ) : (
    <div>
      <Card question={ActualQuestion} handlerAns={handleAnswer} numeroPregunta={currentQuestion+1} 
      cantidadPreguntas={numeroPreguntas}/>
      {currentQuestion !== questions.length - 1 ? (
        <Button
          text="Siguiente pregunta"
          onClick={handlerNextQuestion}
        />
      ) : (
        <Button onClick={handleFinish} text="Finalizar" />
      )}
              <Button
          text="Guardar Test"
          onClick={handlerGuardarTest}
        />
    </div>
  )
}

   
   






    </>




  );
};

export default Quizz;
