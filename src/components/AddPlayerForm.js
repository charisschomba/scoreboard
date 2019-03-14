import React, { Component, createRef } from 'react';

class AddPlayerForm extends Component {

    playerInput = createRef()
    t = createRef()

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value)
        e.currentTarget.reset()
    };

    render(){
      return (
    <form onSubmit={this.handleSubmit}>
    <input
        type="text"
        ref = {this.playerInput}
        placeholder="Enter player name"
    />
    <input
    type="submit"
    value=" Add player"
        />
    </form>
      );
    }
};
export default AddPlayerForm;