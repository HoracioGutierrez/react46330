import React from 'react'
import {NavLink} from "react-router-dom"

const Nav = ({links}) => {
    return (
        <nav>
            {links.map((link)=>{
                return (
                    <NavLink key={link} to={link}>{link}</NavLink>
                )
            })}
        </nav>
    )
}

export default Nav
