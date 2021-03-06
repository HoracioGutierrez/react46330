import {Route,Redirect} from "react-router-dom"
import {connect} from "react-redux"

const RutaPrivadaComponent = (prop) => {
    if(prop.usuario.logged){
        return <Route path={prop.path} component={prop.component}/>
    }else{
        return <Redirect to="/"/>
    }
}

export const RutaPrivada = connect(
    ({usuario}) => ({usuario})
)(RutaPrivadaComponent)


export const RutaPublica = (prop) => {
    if(prop.valida){
        return <Redirect to="/logout"/>
    }else{
        return <Route path={prop.path} component={prop.component}/>
    }
}

