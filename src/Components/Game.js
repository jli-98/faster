import React, { useEffect, useState } from "react"

let clickCount = 0;

export default function Game(props){
    const [btnText, setBtnText] = useState('Wait...');
    // const [finalTime, setFinalTime] = useState('1');
    const avgClickTime = localStorage.setItem('score', 2);
    const startTime = performance.now();

    useEffect(()=>{
        console.log('From Game Component ' + props.randTime)
        const clickSpace = document.querySelector('.click-space')
        clickSpace.style.backgroundColor = 'red';
        clickSpace.style.color = 'white';

        console.log(`Start Time: ${startTime}`);

        //sets random countdown
        setTimeout(()=>{
            clickSpace.style.backgroundColor = 'green'
            clickSpace.style.color = 'white';
            setBtnText('Click!');
        }, props.randTime * 1000)
    }, []);

    const handleStart = () =>{
        const clickSpace = document.querySelector('.click-space');
        console.log('begin click:' + clickCount);
        ++clickCount;
        if(clickCount === 1){
            //tells user to try again when they click too early
            //maybe add two separate components to this one or to the app.js
            if(clickSpace.style.backgroundColor === 'red'){
                setTimeout(()=>{
                    setBtnText = 'Too early'
                }, 5000)
                window.location.reload(false);
            }
            
            //calculates the reaction time of the click
            const endTime = performance.now()
            const finalTime = Math.floor(endTime - startTime); 
            
            console.log(`End Time: ${endTime}`);
            console.log('final time: ' + finalTime);
    
            setBtnText(`${finalTime} ms`);
            console.log('end click:' + clickCount);

        }else if(clickCount === 2){
            //sets startGame to false to rerender home component in ternary operator in app.js
            props.setStartGame(false);
            console.log(props.startGame);
            //resets click counter
            clickCount = 0;
        }
        
    }

    return(
        <div className="click-space" onMouseDown={handleStart}>
            <p>{btnText}</p>
        </div>
    );
}

// IDEA
// move 'Click to start' onto a different component and using ternary conditional to swap to waiting... and wait for click
// and then use useEffect? to immediately rng for count down time and wait for click