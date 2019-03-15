import React  from 'react';
import './App.css';
import { Header} from "./components/Header";
import AddPlayerForm from './components/AddPlayerForm'
import PlayerList from './components/PlayerList'

const App = () =>  {

  return (
    <div className="scoreboard">
        <Header />
        <PlayerList />
        <AddPlayerForm />
    </div>

  )};

export default App;
