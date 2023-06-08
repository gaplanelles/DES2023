import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import des from "./image/DESbanner.PNG";

import './QR.css';

function OtherPage() {
  const [email, setUserEmail] = useState('');

  const [points, setPoints] = useState('51');
  

 

  const { activity } = useParams();
  console.log(activity)

  useEffect(() => {
    if (points) {
      setPoints(points);
    }
  }, [points]);



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://130.61.48.101:8002/addscore', {

        email,
        activity
      });

      console.log(response.data);

      setUserEmail('');

      setPoints('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">

      <img src={des} className="App-logo" alt="logo" />

      

      <div className="columns-container">
        <div className="column">
          
        </div>

        <div className="column center-column">
          <div className="centered-content">
            <h1>¡Gracias por participar!</h1>
            <h2>Por favor, introduce tu email para reclamar los puntos:</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </label>
              <br />

              <br />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>

        <div className="column">
         
        </div>


      </div>
      <br></br>
        <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>    
      <br></br>
      <br></br>
      <br></br>
      <br></br>      
      <br></br>
      <br></br>
      <br></br>
      <br></br>



    </div>
  );
}

export default OtherPage;
