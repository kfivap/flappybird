import {useContext, useEffect, useState} from "react";
import {GameContext} from "../GameContext";

export const Score  = () =>{

    const context = useContext(GameContext)

    const [score, setScore] = useState()

    useEffect(()=>{
setScore(context.score)
   
    }, [context.score])

    return(<h1>{score}</h1>)
}