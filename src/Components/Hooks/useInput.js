import React, {useState} from "react"
export const useInput = (initialValue) =>{
    let [value, setValue] = useState(initialValue)

    let handleChange = (event) =>{
        console.log("Input hook: ", event.target.value)
        const {value} = event.target
        setValue(value)
    }

    return{
        value,
        onChange: handleChange
    }
}