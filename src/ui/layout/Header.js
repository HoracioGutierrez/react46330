import React from 'react'
import Nav from "../componentes/Nav"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"

const Header = ({titulo}) => {
    return (
        <header>
            <NavLink to="/" exact>
                <h1>{titulo}</h1>
            </NavLink>
            <Nav/>
        </header>
    )
}

/* const mapStateToProps = (store) => {
    return {
        //nombreDeProp : valorDelStore
        titulo : store.titulo
    }
} */

/* const mapStateToProps = (store) => {
    const {titulo} = store
    return { titulo }
} */

/* const mapStateToProps = ({ titulo }) => ({ titulo }) */


export default connect(
    ({ titulo }) => ({ titulo })
)(Header)
