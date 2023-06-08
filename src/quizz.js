import React from 'react';

import './quizz.css';
import des from "./image/DESbanner.PNG";

function OtherPage() {




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
