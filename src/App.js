import React, { Component } from 'react';
import './App.css';
import { Header} from "./components/Header";
import { Player } from "./components/Player"
import AddPlayerForm from './components/AddPlayerForm'

class App extends Component {
  state = {
    title: 'Scoreboard',
    players: [
        {
            name:'chariss',
            score: 0,
            id: 1
        },
        {
            name:'max',
            score: 0,
            id: 2
        },
        {
            name:'mike',
            score: 0,
            id: 3
        },
        {
            name:'james',
            score: 0,
            id: 4
        }
        ],
  };

    handleChangeScore = (index, delta) => {
        this.setState( prevState => (
            {score: prevState.players[index].score += delta}
        ));
    };



    handleRemovePlayer = (id) => {
    this.setState( prevState => (
        { players: prevState.players.filter(player => player.id !== id) }
    ));
  };

    prevPlayerId = 4;

    handleAddPlayer = (name) => {
        this.setState(prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name,
                        score: 0,
                        id: this.prevPlayerId += 1,
                    }]
            }
        })
};

  render() {
    const {title, players} = this.state;
    return (
        <div className="scoreboard">
          <Header
              title={title}
              players ={players}
          />
            {players.map((player, index) =>(
                <Player
                    changeScore={this.handleChangeScore}
                    id={player.id}
                    index={index}
                    score={player.score}
                    removePlayer={this.handleRemovePlayer }
                    key={player.id.toString()}
                    name={player.name}
                />
            ))}
            <AddPlayerForm
                addPlayer={this.handleAddPlayer}
            />
        </div>

    );
  }
}

export default App;
