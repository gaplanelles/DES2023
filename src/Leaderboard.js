import React, { Suspense, startTransition, useState, useEffect } from 'react';
import { fetchData } from "./fetchData";
import rbf1photo from "./image/f1RB.jpg";
import verstappenPhoto from "./image/verstapen.jpg";
import Red_Bull_background from "./image/Red_Bull_background.png";
import des from "./image/DESbanner.PNG";
import './App.css';

const apiData = fetchData("http://130.61.48.101:8002/scores");

function HomePage() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  let data;
  startTransition(() => {
    data = apiData.read();
  });

  const leaderboardData = data.slice(0, 15);
  const rbLeaderboardData = data.slice(0, 5);

  return (
    <div className="App">
      <img src={des} className="App-logo" alt="logo" />
      <div className="columns-container">
        <div className="column column-left">
          <div className="leaderboard-container">
            <h2>Gamification Leaderboard</h2>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyTable data={leaderboardData} />
            </Suspense>
          </div>
        </div>
        <div className="column column-right">
          <div className="leaderboard-container">
            <h2>Oracle Red Bull Leaderboard</h2>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyRBTable data={rbLeaderboardData} />
            </Suspense>
            <div className="countdown-container">
            <h2>Reparto de premios en:</h2>
            <CountdownTimer targetTime={getTargetTime()} currentTime={currentTime} />
          </div>
          </div>

        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <a href="/other/1234">Add Data</a>
    </div>
  );
}

function LazyTable({ data }) {
  return (
    <table className="card">
      <thead>
        <tr>
          <th>User</th>
          <th>Last Activity</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.user}</td>
            <td>{user.last_activity}</td>
            <td>{user.total_points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function LazyRBTable({ data }) {
  return (
    <table className="card">
      <thead>
        <tr>
          <th>User</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.user}</td>
            <td>{user.total_points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CountdownTimer({ targetTime, currentTime }) {
  const remainingTime = calculateRemainingTime(targetTime, currentTime);
  const formattedTime = formatTime(remainingTime);

  return <div className="countdown-timer">{formattedTime}</div>;
}



// Función para obtener la hora actual en formato HH:mm:ss
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

// Función para obtener la hora objetivo (14:00:00 o 18:30:00)
function getTargetTime() {
  const now = new Date();
  const targetHours = now.getHours() < 14 ? 14 : 18;
  const targetMinutes = targetHours === 14 ? 0 : 30;
  const targetSeconds = 0;
  return `${padZero(targetHours)}:${padZero(targetMinutes)}:${padZero(targetSeconds)}`;
}

// Función para calcular el tiempo restante en segundos entre la hora actual y la hora objetivo
function calculateRemainingTime(targetTime, currentTime) {
  const targetDate = new Date(`2000-01-01 ${targetTime}`);
  const currentDate = new Date(`2000-01-01 ${currentTime}`);
  const remainingTime = Math.max(targetDate - currentDate, 0);
  return Math.floor(remainingTime / 1000);
}

// Función para formatear el tiempo en formato HH:mm:ss
function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

// Función para agregar un cero delante de un número si es menor que 10
function padZero(number) {
  return number < 10 ? `0${number}` : number;
}

export default HomePage;
