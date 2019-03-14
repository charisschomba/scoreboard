import React from 'react';

export const Counter = ({score, changeScore, index}) => {

        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
                <span className="counter-score"> {score} </span>
                <button className="counter-action increment" onClick={() => changeScore(index, +1)}> + </button>
            </div>
        )

};