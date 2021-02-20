const storeInicial = {
    x : 1,
    titulo : "Mi Pagina",
    links : ["usuarios","productos","contacto"],
    contador : 0,
    usuarios : [],
    valor : ""
}

const reducer = (storeAnterior,action) => {
    switch(action.type){
        case "CONTADOR_AUMENTAR":
            return {...storeAnterior,valor:"Horacio"}
        case "CONTADOR_RESETEAR":
            return {...storeAnterior}
        case "CONTADOR_RESTAR":
            return {...storeAnterior}
        case "USUARIO_AGREGAR":
            return {...storeAnterior}
        case "VALOR_CAMBIAR":
            return {...storeAnterior}
        case "USUARIO_BORRAR":
            return {...storeAnterior}
        default : 
            return storeInicial
    }
}

export default reducer