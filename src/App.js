import './App.css';
import React from "react";
import {Game} from "./components/Game";
import {GameProvider} from "./GameContext";


function App() {



    return (
        <GameProvider>
        <div className="App">

            <Game/>
        </div>
        </GameProvider>
    );
}

export default App;
