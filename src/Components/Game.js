import React, { useEffect, useState } from "react"

export default function Game(props){
    const [btnText, setBtnText] = useState('Wait...');
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const avgClickTime = localStorage.setItem('score',2);

    useEffect(()=>{
        console.log('From Game Component ' + props.gameInfo[2])
        const clickSpace = document.querySelector('.click-space')
        clickSpace.style.backgroundColor = 'red';
        clickSpace.style.color = 'white';
        //maybe consider using performance.now() to measure time
        setStartTime(Date.now());
    

        setTimeout(()=>{
            clickSpace.style.backgroundColor = 'green'
            clickSpace.style.color = 'white';
            setBtnText('Click!');
        }, props.gameInfo[2] * 1000)
    }, []);

    // function gameStartCountDown() {
    //     const randomTime = getRandomTime();
    //     const clickSpace = document.querySelector('.click-space');
    //     console.log(randomTime);

    //     setTimeout(()=>{
    //         const clickSpace = document.querySelector('.click-space');
    //         clickSpace.style.backgroundColor = 'green';
    //         clickSpace.style.color = 'white';
    //         setBtnText('Click!');
    //         props.resetGame();
    //     }, randomTime * 1000)
        
        
    // }

    const handleStart = () =>{
        setEndTime(Date.now());
        const finalTime = endTime - startTime;
        console.log(finalTime);

        const clickSpace = document.querySelector('.click-space');
        clickSpace.style.backgroundColor = 'red';
        clickSpace.style.color = 'white';
        setBtnText('Waiting...');
        //sets start game to false to rerender home component
        props.gameInfo[1](false);
        console.log(props.gameInfo[0]);
        // gameStartCountDown();
    }

    return(
        <div className="click-space" onClick={handleStart}>
            <p>{btnText}</p>
        </div>
    );
}

// IDEA
// move 'Click to start' onto a different component and using ternary conditional to swap to waiting... and wait for click
// and then use useEffect? to immediately rng for count down time and wait for click