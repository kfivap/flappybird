import './Obstruction.css'
import {useContext, useEffect, useRef, useState} from "react";
import {GameContext} from "../GameContext";

export const Obstruction = (props) => {


    const [position, setPosition] = useState(props.initPos);

    const [transition, setTransition] = useState('linear')

    const context = useContext(GameContext)

    useEffect( () => {
            let pos
            // console.log(position)

            if(position>-50){


                pos = setInterval(() => setPosition(prevState => prevState-10), context.gameOverTimeout+200);

                return () => clearInterval(pos);
            }

            else {

                setTransition('step-start')
context.setScore(prevState => prevState+1)
                setRnd(rndFunc())
                setPosition(150)
                setTimeout(()=>{setTransition('linear')}, 200)

            }


        }, [position]
    );

    const [rnd, setRnd] = useState()


    function rndFunc(){
        return (  Math.floor(Math.random() * 41)+5)
    }






    const obsBottom = useRef()
    const passageRef = useRef()

    useEffect( ()=> {
        try {
           const ps =  passageRef.current.getBoundingClientRect()
            const br = context.birdRect
            // console.log(ps.left< context.birdRect.left)
            if(ps.left-50> context.birdRect.left && br.right+(window.innerWidth*0.15)>ps.right
            )  {
            context.setPassageRect(ps)

            }
            if(ps.left+50> context.birdRect.left && br.right+(window.innerWidth*0.15)>ps.right
            )  {
                context.setPassageRect(ps)

            }
else {
                context.setPassageRect(0)
            }




        } catch (e) {
            // console.log(e)
        }
    }, [position])




    return (
        <div>
        <div>

            <div className='obstruction' style={{left: `${position}vw`,
                transitionTimingFunction: transition
            }}>

                <div className='obstructionTop' style={{height: `${rnd}vh`}}
                     ref={obsBottom}
                >&nbsp; </div>
                <div className='passage'
                ref = {passageRef}
                > &nbsp;</div>
                <div className='obstructionBottom'
                     style={{height: `${100-rnd-40}vh`}}
                > &nbsp;</div>
            </div>
        </div>

</div>
    )
}