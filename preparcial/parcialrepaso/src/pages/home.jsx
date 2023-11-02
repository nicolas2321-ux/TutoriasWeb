import React from 'react';
import '../assets/home.css'
import Button from '../components/Button';
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();
    
    function handleStartQuiz() {
        navigate('/Quizzes');
    }
    return (
        <div className="home-container">
      <h1>Bienvenido a la Página de Preguntas</h1>
      <p>El lugar donde puedes poner a prueba tus conocimientos.</p>
      <Button 
      text="Comenzar"
      onClick={handleStartQuiz}
      />
      <Button 
      text={"Ver preguntas guardadas"}
        onClick={() => navigate('/questions')}
      />
    </div>
    );
};

export default Home;
