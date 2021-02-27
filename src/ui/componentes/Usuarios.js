import React from "react"
import {connect} from "react-redux"
import {agregarUsuario,manejarCambio,borrarUsuario} from "../../api/actions"

const Usuarios = ({valor,usuarios,manejarCambio,agregarUsuario,borrarUsuario}) => {

    const manejarSubmit = e => {
        e.preventDefault()
        agregarUsuario(valor)
    }

    const handleChange = (e) => {
        const valor = e.target.value
        manejarCambio(valor)
    }

    return (
        <>
            <form onSubmit={manejarSubmit}>
                <input type="text" onChange={handleChange} value={valor}/>
                <button>Agregar</button>
            </form>

            <ul>
                {usuarios.map((usuario)=>{
                    return(
                        <li key={usuario.id}>
                            {usuario.nombre}
                            <button onClick={()=>borrarUsuario(usuario.id)}>borrar</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default connect(
    ({usuarios,valor})=>({valor,usuarios}),
    {agregarUsuario,manejarCambio,borrarUsuario}
)(Usuarios)