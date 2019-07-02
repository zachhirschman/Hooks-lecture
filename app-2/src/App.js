import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import AllFriends from "./Components/AllFriends/AllFriends"
import Axios from "axios"
import NewFriend from './Components/NewFriend/NewFriend';

function App() {


  return (
    <div className="App">
      <Header/>
      <span>
        {/* Render newFriend and allFriend components. Pass Appropriate props */}
      </span>
    </div>
  );
}

export default App;
