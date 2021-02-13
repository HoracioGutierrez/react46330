import React from 'react'
import Nav from "./Nav"
import {NavLink} from "react-router-dom"

const Header = ({titulo,links}) => {
    return (
        <header>
            <NavLink to="/" exact>
                <h1>{titulo}</h1>
            </NavLink>
            <Nav links={links}/>
        </header>
    )
}

export default Header
