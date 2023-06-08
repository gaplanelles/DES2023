//import logo from './logo.svg';


import React from 'react';
import Router from './Router';

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;


/*
import { Suspense } from "react";
import { fetchData } from "./fetchData";
import rbf1photo from "./image/f1RB.jpg";
import verstappenPhoto from "./image/verstapen.jpg";
import des from "./image/des.png";
import './App.css';

const apiData = fetchData("https://jsonplaceholder.typicode.com/users");

function App() {
  const data = apiData.read();
//   <img src={logo} className="App-logo" alt="logo" />
  return (
    <div className="App">
      <h1>DES Málaga 2023</h1>
      <img src={des} className="App-logo" alt="logo" />
      <div className="columns-container">
        <div className="column">
          <img src={verstappenPhoto} alt="vers" className="column-image" />
        </div>
        <div className="column">
          <div className="leaderboard-container">
            
            <h2>Gamification Leaderboard</h2>
            <Suspense fallback={<div>Loading...</div>}>
              <table className="card">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Suspense>
          </div>
        </div>
        <div className="column">
          <img src={rbf1photo} alt="ORB" className="column-image" />
        </div>
      </div>
    </div>
  );
}

export default App;

*/