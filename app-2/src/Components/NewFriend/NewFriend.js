import React from "react"
import "./NewFriend.css"

export default function NewFriend(props){

    return(
        <div className = "NewFriend-Parent">
            <h1>Add a new Friend</h1>
            <div className = "newFriend-Parent_input-container">
                <div>
                    New Friend Name: 
                    <input />

                    New Friend Picture: 
                    <input/>
                </div>
            </div>

            <button>Add New Friend</button>

        </div>
    )
}