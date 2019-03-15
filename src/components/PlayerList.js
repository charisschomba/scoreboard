import React from 'react';
import {Player} from "./Player";
import { Consumer } from "../context";

const PlayerList = () => (
    <Consumer>
        {context => (
            context.players.map((player, index) =>(
                <Player
                    changeScore={context.changeScore}
                    id={player.id}
                    index={index}
                    score={player.score}
                    removePlayer={context.removePlayer }
                    key={player.id.toString()}
                    name={player.name}
                />
            )))
        }
    </Consumer>
   );

export default PlayerList;