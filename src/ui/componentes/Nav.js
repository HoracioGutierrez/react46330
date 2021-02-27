import React from 'react'
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"

const Nav = ({links}) => {
    return (
        <nav>
            {
                links.map((link)=>{
                    return (
                        <NavLink key={link} to={`/${link}`}>{link}</NavLink>
                    )
                })
            }
        </nav>
    )
}

export default connect(
    ({ links }) => ({ links })
)(Nav)
