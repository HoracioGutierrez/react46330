const storeInicial = {
    titulo : "Mi Pagina",
    links : ["usuarios","productos","contacto"],
    contador : 0,
    usuarios : [],
    valor : "",
    productos : {
        pending : false,
        current : [],
        error : ""
    },
    producto : {
        pending : false,
        current : {},
        error : ""
    },
    producto_nuevo : {
        titulo : "",
        precio : 0,
        descripcion : "",
        stock : 1,
        pending : false
    },
    usuario : {
        username : "",
        password : "",
        logged : false
    }
}

const reducer = (storeAnterior,action) => {
    switch(action.type){

        case "USUARIO_LOGIN" : 
            return  {
                ...storeAnterior,
                usuario : {
                    ...storeAnterior.usuario,
                    logged : true
                }
            }

        case "USUARIO_CAMBIA" : 
            return {
                ...storeAnterior,
                usuario : {
                    ...storeAnterior.usuario,
                    [action.target] : action.valor
                }
            }

        case "PRODUCTO_NUEVO_AGREGAR_PENDING" : 
            return {
                ...storeAnterior,
                producto_nuevo : {
                    ...storeAnterior.producto_nuevo,
                    pending : true
                }
            }

        case "PRODUCTO_NUEVO_CAMBIO" : 
            return {
                ...storeAnterior,
                producto_nuevo : {
                    ...storeAnterior.producto_nuevo,
                    /* pending : false, */
                    [action.target] : action.valor
                }
            }
        
        case "PRODUCTO_NUEVO_AGREGAR_SUCCESS" : 
            return {
                ...storeAnterior,
                producto_nuevo : {
                    ...storeAnterior.producto_nuevo,
                    pending : false
                },
                productos : {
                    ...storeAnterior.productos,
                    current : [
                        ...storeAnterior.productos.current,
                        {
                            ...action.nuevoProducto
                        }
                    ]
                }
            }

        case "PRODUCTO_DETALLE_PENDING" :
            return {
                ...storeAnterior,
                producto : {
                    ...storeAnterior.producto,
                    pending : true
                }
            }

        case "PRODUCTO_DETALLE_SUCCESS" :
            return {
                ...storeAnterior,
                producto : {
                    ...storeAnterior.producto,
                    pending : false,
                    current : action.producto
                }
            }

        case "PRODUCTO_DETALLE_ERROR" :
            return {
                ...storeAnterior,
                producto : {
                    ...storeAnterior.producto,
                    pending : false,
                    error : action.error
                }
            }

        case "PRODUCTOS_PEDIR_ERROR" : 
            return {
                ...storeAnterior,
                productos : {
                    ...storeAnterior.productos,
                    error : action.err,
                    pending : false
                }
            }

        case "PRODUCTOS_PEDIR_PENDING" : 
            return {
                ...storeAnterior,
                productos : {
                    ...storeAnterior.productos,
                    pending : true
                }
            }

        case "PRODUCTOS_PEDIR_SUCCESS" : 
            return {
                ...storeAnterior,
                productos : {
                    ...storeAnterior.productos,
                    current : action.productos,
                    pending : false
                }
            }

        case "CONTADOR_AUMENTAR":
            return {
                ...storeAnterior,
                contador : storeAnterior.contador + 1
            }

        case "CONTADOR_RESETEAR":
            return {
                ...storeAnterior,
                contador : 0
            }

        case "CONTADOR_RESTAR":
            return {
                ...storeAnterior,
                contador : storeAnterior.contador - 1
            }

        case "USUARIO_AGREGAR":
            return {
                ...storeAnterior,
                usuarios : [
                    ...storeAnterior.usuarios,
                    {
                        id : Math.random(),
                        nombre : storeAnterior.valor
                    }
                ],
                valor : ""
            }

        case "VALOR_CAMBIAR":
            return {
                ...storeAnterior,
                valor : action.valor
            }

        case "USUARIO_BORRAR":
            return {
                ...storeAnterior,
                usuarios : storeAnterior.usuarios.filter((usuario)=>{ 
                    return usuario.id == action.id ? false : true 
                })
            }

        default : 
            return storeInicial
    }
}

export default reducer