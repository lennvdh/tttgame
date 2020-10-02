import React from "react";
import Squares from "./squares";

export default function Board({squares, onClick}) {

    return(
        <div className="board">
            {squares.map((squares, i) =>{
                <Squares key={i} value={squares} onClick={()=> onClick(i)}/>
            })}
        </div>
    )

}