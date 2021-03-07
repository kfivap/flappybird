
import './Bird.css'
import {useContext, useEffect, useRef,} from "react";
import {GameContext} from "../GameContext";

export const Bird = () =>{


    const context = useContext(GameContext)


    const birdRef = useRef()

useEffect( ()=> {
    try {

         context.setBirdRect(birdRef.current.getBoundingClientRect())
    } catch (e) {
        console.log(e)
    }
}, [context.pos, context.falling])


    return(
        <div className='bird' style={{top: context.pos}}
        ref={birdRef}
        >{context.pos}</div>
    )
}