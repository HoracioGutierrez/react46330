import React from 'react'
import Nav from "./Nav"

const Header = ({titulo}) => {

    //const {titulo} = props
    //const {titulo:titulo} = props
    //console.log(props.titulo)
    //const titulo = props.titulo

    return (
        <header>
            <h1>{titulo}</h1>
            <Nav/>
        </header>
    )
}

export default Header
