// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe(){
    function handleButton(event){
        console.log("Good!")
    }

    return (
        <button onClick={handleButton}>Eyes on me</button>
    )
}