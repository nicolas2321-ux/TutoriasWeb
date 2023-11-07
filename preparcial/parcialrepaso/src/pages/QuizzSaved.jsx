import { useEffect, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import Card from "../components/Card";
import Button from "../components/Button";

export function QuizzSaved() {
    const [data, setData] = useState([]); 
    const [questions, setQuestions] = useState([]);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState([]);
    const [numeroPreguntas  , setNumeroPreguntas] = useState(0);
    const [finish, setFinish] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('tests')) || [];
        setData(stored);
        setQuestions(stored.preguntas);
        setQuestionNumber(stored.numero_pregunta);
        setAnswers(stored.respuestas);
        setCurrentQuestion(stored.preguntas[stored.numero_pregunta]);
        setNumeroPreguntas(stored.preguntas.length);
    }, []);

    function cambiarPregunta(){
        setCurrentQuestion(questions[questionNumber]);
    }
     
     



    const handleAnswer = (answer) => {
        answers[questionNumber] = answer;
        setAnswers(answers);
    }

    const handlerNextQuestion = () => {
        if(answers[questionNumber] === undefined) {
            alert('Debes seleccionar una respuesta');
          } else {
            setQuestionNumber(questionNumber + 1);
            cambiarPregunta();
          }
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
    const handlerGuardarTest = () => {
        const object = {
          preguntas: questions,
          respuestas: answers,
          numero_pregunta: questionNumber,
          fecha: new Date(),
        };
        const tests = localStorage.setItem('tests', JSON.stringify(object));
        
      }
      const obtenerFecha = () => {
        const fechaActual = new Date();
        console.log(fechaActual);

    }


if(finish === true){
return(
    <div>
    <h1>Resultados</h1>
    <p>Respuestas correctas: {correctAnswers}</p>
    <p>Respuestas incorrectas: {incorrectAnswers}</p>
    <Button onClick={() => window.location.reload()} text="Reiniciar" />
  </div>
)
}else{
if(data.length == 0) {
<h1> No hay preguntas guardadas</h1>
}else{
    return (
        <div>
          <Card question={currentQuestion} handlerAns={handleAnswer} numeroPregunta={questionNumber+1} 
          cantidadPreguntas={numeroPreguntas}/>
          {questionNumber !== questions.length - 1 ? (
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
                    <Button  text="Ver fecha" onClick={obtenerFecha}>Obtener fecha</Button>   
        </div>
      );
}
}
 
}