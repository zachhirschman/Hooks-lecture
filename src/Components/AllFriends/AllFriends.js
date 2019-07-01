import React, {useState, useEffect} from "react"
import "./AllFriends.css"
import MappedFriends from "../MappedFriends/MappedFriends"

export default function AllFriends(props){
    return(
        <div className = "Allfriends-parent">
            <div className = "section-header">
                <h1>All Friends</h1>
            </div>
                <MappedFriends friends = {props.friends} deleteFriendFn = {props.deleteFriendFn}/>
        </div>
    )
}