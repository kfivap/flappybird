import './Screen.css'
import {GameContext} from "../GameContext";
import {useContext} from "react";

export const Screen = ()=>{

    const context = useContext(GameContext)

    const clickHandler = ()=>{
context.setPos(context.pos - 135)

        context.setFalling(false)

        setTimeout(()=>{context.setFalling(true)}, 100)

    }


    return(
        <div className='Screen' onClick={ clickHandler}></div>
    )
}