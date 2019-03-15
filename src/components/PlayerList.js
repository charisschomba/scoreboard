import React from 'react';
import {Player} from "./Player";
import { Consumer } from "../context";

const PlayerList = () => (
    <Consumer>
        {({players}) => (
            players.map((player, index) =>(
                <Player
                    index={index}
                    key={player.id.toString()}
                />
            )))
        }
    </Consumer>
   );

export default PlayerList;