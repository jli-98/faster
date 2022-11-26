import React, {useState} from "react";

export default function Home(props){

    const handleStart = () =>{
        props.setStartGame(true);
    }

    return(
        <div className="click-space" onClick={handleStart}>
            <p>Click to Start...</p>
        </div>
    );
};