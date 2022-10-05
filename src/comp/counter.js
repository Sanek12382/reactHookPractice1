import React from 'react'

 export function CounterComp ( {count, text}  ){
    text=text+" ";
    return(
       <p>{text}{count}</p>
    )
}