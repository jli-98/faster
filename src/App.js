import './App.css';
import Game from './Components/Game';
import React, {useState} from 'react';
import Home from './Components/Home';

function App() {
  const [startGame, setStartGame] = useState();

  //gets random number between 3-6
  const getRandomTime = () =>{
      const min = Math.ceil(3);
      const max = Math.floor(7)
      return Math.floor(Math.random() * (max-min) + min);
  }

  const randTime = getRandomTime();

  const handleStart = () =>{
    // setStartGame(true);
  }

  //get data from game component to save to app component and set random time
  const resetGame = () =>{
    setStartGame(false);
    console.log(startGame);
  }

  return (
    <div className="App" onClick={handleStart}>
      <h1>Faster</h1>
      { startGame ? 
      <Game 
        startGame={startGame}
        setStartGame={setStartGame}
        randTime={randTime}/> : <Home setStartGame={setStartGame}/>}
    </div>
  );
} 

export default App;
