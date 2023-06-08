import React, { useState } from 'react';
import axios from 'axios';
import './quizz.css';
import des from "./image/DESbanner.PNG";
import preguntas from "./preguntas";
import preguntasNoClientes from "./preguntasNoClientes";

function QuizzCustomers() {
  const [email, setUserEmail] = useState('');

  const [opcionSeleccionada, setOpcionSeleccionada] = useState(true);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [correct, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const [answersShown, setAnswersShown] = useState(false);
  const [mostrarExplicacion, setMostrarExplicacion] = useState(false);
  const activity = "quiz_1";

  function handleAnswerSubmit(isCorrect, e) {
    // Añadir puntuación
    if (isCorrect) setPuntuación(correct + 1);

    // Añadir estilos de pregunta
    e.target.classList.add(isCorrect ? "correct" : "incorrect");

    setMostrarExplicacion(true);

    // Cambiar a la siguiente pregunta
    setTimeout(() => {
      if (preguntaActual === getPreguntas().length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setMostrarExplicacion(false); // Ocultar la explicación al cambiar de pregunta
      }
    }, 5000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      const response = await axios.post('http://130.61.48.101:8002/addscore', {
        email,
        activity,
        correct
      });

      console.log(response.data);

      setUserEmail('');

    } catch (error) {
      console.error(error);
    }
  };

  const handleOpcionSeleccionadaChange = () => {
    setOpcionSeleccionada(!opcionSeleccionada);


    setIsFinished(false);

    setAnswersShown(false);
    setMostrarExplicacion(false);
  };

  const getPreguntas = () => {
    return opcionSeleccionada ? preguntas : preguntasNoClientes;
  };

  if (isFinished) {
    return (
      <div className="App">
        <img src={des} className="App-logo" alt="logo" />
        <div className="option-buttons">
          <div className="juego-terminado">
            <span>
              Obtuviste {correct} de {getPreguntas().length}
            </span>
          </div>
          <div className="centered-content">
            <h1>¡Gracias por participar!</h1>
            <h4>Por favor, introduce tu email para reclamar los puntos.</h4>
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </label>
              <br /><br />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (answersShown) {
    return (
      <main className="app">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <span>Pregunta {preguntaActual + 1} de</span> {getPreguntas().length}
          </div>
          <div className="titulo-pregunta">
            {getPreguntas()[preguntaActual].titulo}
          </div>
          <div>
            {
              getPreguntas()[preguntaActual].opciones.filter(
                (opcion) => opcion.isCorrect
              )[0].textoRespuesta
            }
          </div>
          <button
            onClick={() => {
              if (preguntaActual === getPreguntas().length - 1) {
                window.location.href = "/";
              } else {
                setPreguntaActual(preguntaActual + 1);
              }
            }}
          >
            {preguntaActual === getPreguntas().length - 1
              ? "Volver a jugar"
              : "Siguiente"}
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className="App">
      <img src={des} className="App-logo" alt="logo" />
      <div className="lado-izquierdo">
        <div className="numero-pregunta">
          <br />
          <span>Pregunta {preguntaActual + 1} de </span> {getPreguntas().length}
        </div>
        <br />
        <div className="opcion-seleccionada">
        <label>
        {getPreguntas()[preguntaActual].filtro}
          
          <br></br>
          <button
            className={`toggle-switch ${opcionSeleccionada ? "selected" : ""}`}
            onClick={handleOpcionSeleccionadaChange}
          >
            {opcionSeleccionada ? "Sí" : "No"}
          </button>
        </label>
      </div>
      <br />
        <div className='titulo-pregunta'>{getPreguntas()[preguntaActual].titulo}</div>
        <br />
      </div>
      <div className="lado-derecho">
        {getPreguntas()[preguntaActual].opciones.map((respuesta) => (
          <button
            key={respuesta.textoRespuesta}
            onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
          >
            {respuesta.textoRespuesta}
          </button>
        ))}
      </div>
      <br /><br /><br />
      {mostrarExplicacion && (
        <div className="explicacion">
          {getPreguntas()[preguntaActual].explicacion}
        </div>
      )}

    </div>
  );
}

export default QuizzCustomers;

