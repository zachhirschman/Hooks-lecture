import React, {useState} from "react"
import {useInput} from "../Hooks/useInput"
import "./NewFriend.css"
import Axios from "axios";

export default function NewFriend(props){

    let name = useInput('')
    let image = useInput('')

    return(
        <div className = "NewFriend-Parent">
            <h1>Add a new Friend</h1>
            <div className = "newFriend-Parent_input-container">
                <div>
                    New Friend Name: 
                    <input value = {name.value} {...name}/>

                    New Friend Picture: 
                    <input value = {image.value} {...image}/>
                </div>
            </div>

            <button onClick = {() => props.postFriendFn({name:name.value,image:image.value})}>Add New Friend</button>

        </div>
    )
}