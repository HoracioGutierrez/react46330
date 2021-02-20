const aumentarContador = () => {
    //Aca hago cosas probablemente
    return {type:"CONTADOR_AUMENTAR"}
}

const resetearContador = () => {
    return {type:"CONTADOR_RESETEAR"}
}

const restarContador = () => {
    return {type:"CONTADOR_RESTAR"}
}

const agregarUsuario = () => {
    return {type:"USUARIO_AGREGAR"}
}

const manejarCambio = () => {
    return {type:"VALOR_CAMBIAR"}
}

const borrarUsuario = () => {
    return {type:"USUARIO_BORRAR"}
}