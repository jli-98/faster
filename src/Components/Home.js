import React, {useState} from "react";

export default function Home(props){

    const handleStart = () =>{
        props.gameInfo[1](true);
        console.log(props.gameInfo[0])
    }

    return(
        <div className="click-space" onClick={handleStart}>
            Click to Start...
        </div>
    );
};