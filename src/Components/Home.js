import React, {useEffect, useState} from "react";
import Loading from "./Loading";

export default function Home(props){
    const [loadingStatus, setLoading] = useState(true);

    const handleStart = () =>{
        props.setStartGame(true);
    }

    //Load css animation
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
            }, 1000);
    },[]);

    return(
        <div>
            { loadingStatus ?
                <Loading/>
                :<div className="click-space" onClick={handleStart}>
                    <p>Click to Start...</p>
                </div>    
            }
        </div>
    );
};