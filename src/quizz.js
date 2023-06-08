import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './quizz.css';
import des from "./image/DESbanner.PNG";

function OtherPage() {
  const history = useHistory();
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const handleOptionClick = (isCliente) => {
    if (isCliente) {
      history.push('/quizzCustomers/1234');
    } else {
      history.push('/quizzNoCustomers/1234');
    }
  };

  return (
    <div className="App">
      <img src={des} className="App-logo" alt="logo" />
      <div className="option-buttons">
        <br />
        <a href="/quizzCustomers/1234">Soy cliente de Oracle</a>
        <br></br>
        <a href="/quizzNoCustomers/1234">No soy cliente de Oracle</a>
      </div>
    </div>
  );
}

export default OtherPage;
