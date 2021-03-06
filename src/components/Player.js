import React, { PureComponent } from 'react';
import { Counter } from "./Counter";

export class Player extends PureComponent {
    render(){
        const {
            name,
            id,
            index,
            changeScore,
            score,
            handleIncrement,
            removePlayer
        } = this.props
        return (
        <div className="player">
        <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
        {name}
    </span>
        < Counter
        index={index}
        changeScore={changeScore}
        score={score}
        handleIncrement={handleIncrement}
        />
        </div>
    )}
};

