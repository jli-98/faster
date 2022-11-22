import logo from './logo.svg';
import './App.css';
import Game from './Components/Game';
import React, {useEffect, useState} from 'react';
import Home from './Components/Home';

function App() {
  const [startGame, setStartGame] = useState();

  //gets random number between 2-5
  const getRandomTime = () =>{
      const min = Math.ceil(2);
      const max = Math.floor(6)
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
      {/* {startGame? <Game gameInfo={[resetGame, randTime]}/> :<Home/> } */}
      { startGame ? <Game gameInfo={[startGame, setStartGame, randTime]}/> : <Home gameInfo={[startGame, setStartGame, randTime]}/>}
      {/* <Game resetGame={resetGame}/> */}
    </div>
  );
} 

export default App;
