import React, { PureComponent } from 'react';
import { Counter } from "./Counter";
import { Consumer } from "../context";

export class Player extends PureComponent {
    render(){
        const {
            index,
            handleIncrement,
        } = this.props;
        return (
        <div className="player">
            <Consumer>
              {
              ({players, removePlayer}) => (
                <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(players[index].id)}>✖</button>
                {players[index].name}
                </span>
              )
              }
            </Consumer>

        < Counter
        index={index}
        handleIncrement={handleIncrement}
        />
        </div>
    )}
};

