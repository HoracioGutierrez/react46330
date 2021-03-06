export const aumentarContador = () => ({type:"CONTADOR_AUMENTAR"})

export const resetearContador = () => ({type:"CONTADOR_RESETEAR"})

export const restarContador = () => ({type:"CONTADOR_RESTAR"})

export const agregarUsuario = valor => ({type:"USUARIO_AGREGAR",valor})

export const manejarCambio = valor => ({type:"VALOR_CAMBIAR",valor:valor})

export const borrarUsuario = id => ({type:"USUARIO_BORRAR",id})

export const pedirProductosSuccess = productos => ({type:"PRODUCTOS_PEDIR_SUCCESS",productos})

export const pedirProductosPending = () => ({type:"PRODUCTOS_PEDIR_PENDING"})

export const pedirProductosError = err => ({type:"PRODUCTOS_PEDIR_ERROR",err}) 

export const pedirDetalleProductoPending = () => ({type:"PRODUCTO_DETALLE_PENDING"})

export const pedirDetalleProductoSuccess = (producto) => ({type:"PRODUCTO_DETALLE_SUCCESS",producto})

export const pedirDetalleProductoError = (err) => ({type:"PRODUCTO_DETALLE_ERROR",err})

export const cambioProductoNuevo = (target,valor) => ({type:"PRODUCTO_NUEVO_CAMBIO",target,valor})

export const agregarProductoNuevoPending = () => ({type:"PRODUCTO_NUEVO_AGREGAR_PENDING"})


export const agregarProductoNuevoSuccess = (nuevoProducto) => {
    return {type:"PRODUCTO_NUEVO_AGREGAR_SUCCESS",nuevoProducto}
}


export const agregarProductoNuevoError = () => ({type:"PRODUCTO_NUEVO_AGREGAR_ERROR"})

export const usuarioCambiar = (target,valor) => ({type:"USUARIO_CAMBIA",target,valor})

export const login = () => ({type:"USUARIO_LOGIN"})