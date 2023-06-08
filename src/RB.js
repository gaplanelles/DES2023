import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import des from "./image/DESbanner.PNG";
import rbf1photo from "./image/f1RB.jpg";
import verstappenPhoto from "./image/verstapen.jpg";
import './RB.css';

function OtherPage() {
  const [email, setUserEmail] = useState('');
  const [userName, setUserName] = useState('test');
  const [points, setPoints] = useState('51');
 

  const [min, setMinutes] = useState('');
  const [sec, setSeconds] = useState('');
  const [mil, setMilliseconds] = useState('');


  const { valor } = useParams();
  const activity = 'demo_rb'

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
        activity,
        min,
        sec,
        mil
      });

      console.log(response.data);

      setMinutes('');
      setSeconds('');
      setMilliseconds('');
      setUserEmail('');
      setUserName('');
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
          
            <form onSubmit={handleSubmit}>
              <div className="input-group">
              <h1>Introduce el tiempo del simulador:</h1>
              <h4>MM      :      SS      :      ms</h4>
                <input
                  type="number"
                  value={min}
                  onChange={(e) => setMinutes(e.target.value)}
                  className="time-input"
                />
                <span className="separator">:</span>
                <input
                  type="number"
                  value={sec}
                  onChange={(e) => setSeconds(e.target.value)}
                  className="time-input"
                />
                <span className="separator">:</span>
                <input
                  type="number"
                  value={mil}
                  onChange={(e) => setMilliseconds(e.target.value)}
                  className="time-input"
                />
              </div>
              <br />
              <h1>¡Gracias por participar!</h1>
            <h4>Por favor, introduce tu email para reclamar los puntos!</h4>
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


    </div>
  );
}

export default OtherPage;
