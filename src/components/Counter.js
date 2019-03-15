import React from 'react';
import { Consumer } from "../context";

export const Counter = ({score, index}) => {

    return (
        <Consumer>
            {context => (
                <div className="counter">
                    <button className="counter-action decrement" onClick={() => context.changeScore(index, -1)}> - </button>
                    <span className="counter-score"> {score} </span>
                    <button className="counter-action increment" onClick={() => context.changeScore(index, +1)}> + </button>
                </div>
            )}
        </Consumer>

    )};