import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import AllFriends from "./Components/AllFriends/AllFriends"
import Axios from "axios"
import NewFriend from './Components/NewFriend/NewFriend';

function App() {

  function deleteFriend(id){
    // Endpoint: /api/delete-friend/:id
  }

  function postFriend(payload){
    // Endpoint: /api/post-friend
  }

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
