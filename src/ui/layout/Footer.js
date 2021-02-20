import React from 'react'
import Nav from '../componentes/Nav'

const Footer = ({links}) => {
    return (
        <footer>
            <p>&copy; Copyright 2021</p>
            <Nav links={links}/>
        </footer>
    )
}

export default Footer