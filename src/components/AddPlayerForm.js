import React, { createRef } from 'react';
import { Consumer } from "../context";

const AddPlayerForm = () =>{

    const playerInput = createRef();

      return (
          <Consumer>
          {context => {
              const handleSubmit = (e) => {
                  e.preventDefault();
                  context.addPlayer(playerInput.current.value);
                  e.currentTarget.reset()
              };
              return (
                  <form onSubmit={handleSubmit}>
                      <input
                          type="text"
                          ref={playerInput}
                          placeholder="Enter player name"
                      />
                      <input
                          type="submit"
                          value=" Add player"
                      />
                  </form>
                  )}}
          </Consumer>
      )};

export default AddPlayerForm;