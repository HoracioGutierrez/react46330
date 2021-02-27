import React from "react"
import {connect} from "react-redux"
import {aumentarContador,resetearContador,restarContador} from "../../api/actions"
//import {bindActionCreators} from "redux"

const Contador = ({contador,aumentarContador,resetearContador,restarContador}) => {
    return(
        <>
            <p>Contador : {contador}</p>
            <button onClick={aumentarContador}>+</button>
            <button onClick={resetearContador}>resetear</button>
            <button onClick={restarContador}>-</button>
        </>
    )
}

//const mapDispatchToProps = { aumentarContador }

/* const mapDispatchToProps = (dispatch) => { 
    return { 
        //nombreDelProp : action
        aumentarContador : bindActionCreators(aumentarContador,dispatch)
    }
} */

export default connect(
    ({contador}) => ({contador}),
    { aumentarContador , resetearContador , restarContador }
)(Contador)