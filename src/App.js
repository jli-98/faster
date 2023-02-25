import './App.css';
import Game from './Components/Game';
import React, {useState} from 'react';
import Home from './Components/Home';

function App() {
  const [startGame, setStartGame] = useState(false);
  const [displayScore, setDisplayScore] = useState([]);

  //gets random number between 3-6
  const getRandomTime = () =>{
      const min = Math.ceil(3);
      const max = Math.floor(7)
      return Math.floor(Math.random() * (max-min) + min);
  }

  const randTime = getRandomTime();

  //default value of startGame is false to redirect to Home Component
  //Home Component changes value to true to start game
  return (
    <div className="App">
      <h1>Faster</h1>
      { startGame ? 
      <Game 
        startGame={startGame}
        setStartGame={setStartGame}
        randTime={randTime}
        setDisplayScore={setDisplayScore}/>
        : <Home setStartGame={setStartGame}/>}
      <h3>Scores: 
        {displayScore}
      </h3>
    </div>
  );
} 

export default App;
