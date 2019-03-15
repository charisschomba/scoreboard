import React, { Component,createContext } from 'react';

const scoreBoardContext = createContext({});

export const Consumer = scoreBoardContext.Consumer;

class Provider extends Component {
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
    console.warn(this.state)
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
    return(
      <scoreBoardContext.Provider value={{
        players:this.state.players,
        changeScore: this.handleChangeScore,
        removePlayer: this.handleRemovePlayer,
        title: this.state.title,
        addPlayer: this.handleAddPlayer,
      }}>
        {this.props.children}
      </scoreBoardContext.Provider>
    );
  };
}

export default Provider;