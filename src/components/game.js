import React, {useState} from "react";
import Board from "./board";
import {calculateWinner} from "../helper";
import {array} from "prop-types";

export default function Game() {
    const [history, setHistory] = useState([array(9).fill(0)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "x" : "o";

    const handleClick = (i) =>{
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        if (winner || squares[i]){
            return;
        }
        squares[i] = xO;
        setHistory([historyPoint, squares]);
        setHistory(historyPoint.length);
        setXIsNext(!xIsNext);
    }

    const jumpTo = (move, step) => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
    }

    const renderMoves = () => {
        history.map((_step, move)=>{
            const destination = move ? `Go to move ${move}` : "Go to start";
            return(
                <li key={move}>
                    <button onClick={()=> jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    }
    return(
        <>
            <h1>tic tac toe</h1>
            <Board squares={history[stepNumber]} onClick={handleClick}/>
            <div className="info-wrapper">
                <div>
                    <h3>History</h3>
                    {renderMoves()}
                </div>
                <h3>{winner ? "winner" : "next player " + xO}</h3>
            </div>

        </>
    )
}
