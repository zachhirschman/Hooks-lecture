import React, {useState,useEffect} from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import AllFriends from "./Components/AllFriends/AllFriends"
import Axios from "axios"
import NewFriend from './Components/NewFriend/NewFriend';

function App() {
  let [myFriends, setMyFriends] = useState([])

  useEffect(() =>{
    Axios.get('/api/get-friends').then(response =>{
      console.log("Got response: ", response.data)
        setMyFriends(response.data)
    })
  },[])

  function deleteFriend(id){
    Axios.delete(`/api/delete-friend/${id}`).then(response =>{
        setMyFriends(response.data)
    })
  }

  function postFriend(payload){
    console.log("Sending :", payload)
    Axios.post(`/api/post-friend`,payload).then(response =>{
      setMyFriends(response.data)
    })
  }

  return (
    <div className="App">
      <Header/>
      <span>
        <NewFriend postFriendFn = {postFriend}/>
        <AllFriends deleteFriendFn = {deleteFriend} friends = {myFriends}/>
      </span>
    </div>
  );
}

export default App;
