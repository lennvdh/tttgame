import React from "react";

const Squares = ({value, onClick}) => {
    const style = value ? `squares ${value}` : `squares`;

    return(
        <button className={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Squares;