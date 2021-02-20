import React from "react"

const Contador = ({contador,aumentarContador,resetearContador,restarContador}) => {
    return(
        <>
            <p>Contador : {contador}</p>
            <button onClick={aumentarContador}>+</button>
            <button onClick={resetearContador}>resetear</button>
            <button onClick={restarContador}>-</button>
        </>
    )
}

export default Contador