import React, { createContext } from 'react';

const scoreBoard = createContext({});

export const scoreBoardProvider = scoreBoard.Provider;
export const scoreBoardConsumer = scoreBoard.Consumer;
