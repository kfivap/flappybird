
import React, {useContext} from 'react'

import {Bird} from "./Bird";
import {Screen} from "./Screen";
import {Obstruction} from "./Obstruction";
import {Score} from "./Score";
import {GameOver} from "./GameOver";
import {GameContext} from "../GameContext";



export const Game = (props) => {

    const context = useContext(GameContext)



if(context.restart ){

    context.setRestart(false)
    return null
}


    return (
<>
    <Screen/>
    <Bird/>
<Score/>
<GameOver/>

    <Obstruction initPos={0}/>
    <Obstruction initPos={70}/>
    <Obstruction initPos={140}/>

</>
    )
}