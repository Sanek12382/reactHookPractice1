import React from 'react'

export const ButtonComp=({onClick, text})=>{
    return(
        <button onClick={onClick}>{text}</button>
    )
}