import React from 'react'
import Usuarios from "../componentes/Usuarios"

const Clientes = ({valor,usuarios,agregarUsuario,manejarCambio,borrarUsuario}) => {
    return (
        <div>
            <h2>Usuarios</h2>
            <Usuarios valor={valor} usuarios={usuarios} agregarUsuario={agregarUsuario} manejarCambio={manejarCambio} borrarUsuario={borrarUsuario}/>
        </div>
    )
}

export default Clientes
