import React, {useState} from "react"
import axios from "axios"

export function useButtonAction(type,address, payload){
    return axios[type](`/api/${address}`, payload? payload : null)
}

