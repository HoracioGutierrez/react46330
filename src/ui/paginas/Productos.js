import React from 'react'
import Contador from "../componentes/Contador"

const Productos = ({contador,aumentarContador,resetearContador,restarContador}) => {
    return (
        <div>
            <h2>Productos</h2>
            <Contador contador={contador} aumentarContador={aumentarContador} resetearContador={resetearContador} restarContador={restarContador}/>
        </div>
    )
}

export default Productos
