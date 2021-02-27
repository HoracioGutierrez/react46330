export const aumentarContador = () => ({type:"CONTADOR_AUMENTAR"})

export const resetearContador = () => ({type:"CONTADOR_RESETEAR"})

export const restarContador = () => ({type:"CONTADOR_RESTAR"})

export const agregarUsuario = valor => ({type:"USUARIO_AGREGAR",valor})

export const manejarCambio = valor => ({type:"VALOR_CAMBIAR",valor:valor})

export const borrarUsuario = id => ({type:"USUARIO_BORRAR",id})

export const pedirUsuariosSuccess = usuarios => ({type:"USUARIOS_PEDIR_SUCCESS",usuarios})

export const pedirUsuariosPending = () => ({type:"USUARIOS_PEDIR_PENDING"})

export const pedirUsuariosError = err => ({type:"USUARIOS_PEDIR_ERROR",err}) 

export const pedirDetalleProductoPending = () => ({type:"USUARIO_DETALLE_PENDING"})

export const pedirDetalleProductoSuccess = () => ({type:"USUARIO_DETALLE_SUCCESS"})

export const pedirDetalleProductoError = () => ({type:"USUARIO_DETALLE_ERROR"})