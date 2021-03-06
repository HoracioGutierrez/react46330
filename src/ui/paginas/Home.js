import React from 'react'
import {connect} from "react-redux"
import {login} from "../../api/actions"

const Home = ({usuario,login}) => {

    const manejarCambio = () => {

    }

    
    const manejarClick = () => {
      login()
    }

    return (
        <div>
          <div>
            <input onChange={manejarCambio} data-target="username" type="text" placeholder="Username" value={usuario.username}/>
          </div>
          <div>
            <input onChange={manejarCambio} data-target="password" type="password" placeholder="Password" value={usuario.password}/>
          </div>
          <button onClick={manejarClick}>Login</button>
        </div>
    )
}

export default connect(
  ({usuario})=>({usuario}),
  {login}
)(Home)
