import React, { createContext } from 'react';

const scoreBoardContext = createContext({});

export const Provider = scoreBoardContext.Provider;
export const Consumer = scoreBoardContext.Consumer;