import React from "react"

const Usuarios = ({valor,usuarios,manejarCambio,agregarUsuario,borrarUsuario}) => {
    return (
        <>
            <form onSubmit={agregarUsuario}>
                <input type="text" onChange={manejarCambio} value={valor}/>
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

export default Usuarios