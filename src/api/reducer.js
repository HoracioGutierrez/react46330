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
}

const reducer = (storeAnterior,action) => {
    switch(action.type){

        case "USUARIOS_PEDIR_ERROR" : 
            return {
                ...storeAnterior,
                productos : {
                    ...storeAnterior.productos,
                    error : action.err,
                    pending : false
                }
            }

        case "USUARIOS_PEDIR_PENDING" : 
            return {
                ...storeAnterior,
                productos : {
                    ...storeAnterior.productos,
                    pending : true
                }
            }

        case "USUARIOS_PEDIR_SUCCESS" : 
            return {
                ...storeAnterior,
                productos : {
                    ...storeAnterior.productos,
                    current : action.usuarios,
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