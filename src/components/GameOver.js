import {useContext} from "react";
import {GameContext} from "../GameContext";
import './GameOver.css'

export const GameOver  = () =>{

    const context = useContext(GameContext)



    const clickHandler = () =>{
        context.setImmortal(true)
        context.setGameOverTimeout(0)
        context.setScore(0)
        context.setRestart(true)
       context.setPos(~~(window.innerHeight * 0.45))

    }

    const maxScore = localStorage.getItem('maxScore')


if (context.gameOverTimeout>50000){

    return (<div className='GameOver'>

        <div className='Restart'>
            <br/>
            Your Score: {context.score}
            <br/>
            Max: {maxScore} <small>(localstorage)</small>
            <br/>
            <br/>
            <button  onClick={clickHandler}>Restart game</button>
    </div>
    </div>)
}

    return(null)
}