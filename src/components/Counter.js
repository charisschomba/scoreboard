import React from 'react';
import { Consumer } from "../context";

export const Counter = ({score, index}) => {

    return (
        <Consumer>
            {({changeScore, players}) => (
                <div className="counter">
                    <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
                    <span className="counter-score"> {players[index].score} </span>
                    <button className="counter-action increment" onClick={() => changeScore(index, +1)}> + </button>
                </div>
            )}
        </Consumer>

    )};