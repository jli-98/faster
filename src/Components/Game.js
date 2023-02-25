import React, { useEffect, useState } from "react"

//tracks click to operate differently
let clickCount = 0;

export default function Game(props){
    const [statusText, setStatusText] = useState('Wait...');
    let clickScores = ["0"];
    const startTime = performance.now();

    //check for existing data
    if(JSON.parse(localStorage.getItem('scores')) == null){
        localStorage.setItem('scores', JSON.stringify(clickScores));
    }
    else{
        clickScores = JSON.parse(localStorage.getItem('scores'));
        props.setDisplayScore('0');
    }

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
            setStatusText('Click!');
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
                console.log('red');
                setStatusText('Too early!');
                setTimeout(()=>{
                    window.location.reload(false);
                }, 500);
                
            }
            else{
                //calculates the reaction time of the click
                const endTime = performance.now()
                const finalTime = Math.floor(endTime - startTime); 
                
                console.log(`End Time: ${endTime}`);
                console.log('final time: ' + finalTime);
        
                setStatusText(`${finalTime} ms`);
                console.log('end click:' + clickCount);

            }
            
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
            <p>{statusText}</p>
        </div>
    );
}
