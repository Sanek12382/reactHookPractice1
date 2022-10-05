import React from 'react'

 export function CounterComp ( {count, text}  ){
    if( text[text.length]!=" ")
    {text=text+" ";}
    if (count % 2===0){
        text=text+"even "
    } else { text=text+"odd "}

    return(
       <p>{text}{count}</p>
    )
}