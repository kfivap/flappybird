import React, {useEffect, useState} from 'react'

export const GameContext = React.createContext()


export const GameProvider = ({children}) => {

    const [pos, setPos] = useState(~~(window.innerHeight * 0.45))

    const [falling, setFalling] = useState(true)

    const [score, setScore] = useState(0)
    const [gameOverTimeout, setGameOverTimeout] = useState(0)
    const [restart, setRestart] = useState(false)
    const [immortal, setImmortal] = useState(false)


    useEffect(() => {

        if (pos + 40 + 50 < window.innerHeight && falling) {
            const posss = setInterval(() => setPos(pos + 30), 100);
            // console.log(4554)

            return () => clearInterval(posss);
        }
    }, [falling, pos]);





const [birdRect, setBirdRect] = useState()


    const [passageRect, setPassageRect] = useState()

    useEffect(()=>{
        if(passageRect){

            // console.log(birdRect.bottom , passageRect.bottom)
if(birdRect.top> passageRect.top && birdRect.bottom<passageRect.bottom){
    //console.log('go')
}else{
    if(!immortal){
    setGameOverTimeout(99999900) //115 days
  //  console.log('lose')

        let localMax = parseInt(localStorage.getItem('maxScore'))

        if(!localMax){
            localStorage.setItem('maxScore', score)
        }
        if(localMax<=score){
        localStorage.setItem('maxScore', score)}
    }
    else{
         setImmortal(false)
    }
}

            }
    },[passageRect, gameOverTimeout] )



    return (
        <GameContext.Provider value={{

            pos, setPos,
            falling, setFalling,

            birdRect,setBirdRect,

            passageRect, setPassageRect,
            score, setScore,
            gameOverTimeout, setGameOverTimeout,
            restart, setRestart,
            immortal, setImmortal,

        }}>
            {children}
        </GameContext.Provider>
    )
}
