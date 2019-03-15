import React  from 'react';

import Stats from './Stats'
import  StopWatch from './StopWatch'
import { Consumer } from "../context";

export const Header = () => {
 return (
     <Consumer>
         {context => (
         <header>
             <Stats />
             <h1>{context.title}</h1>
             <StopWatch />
         </header>
         )}
     </Consumer>

 )
};
