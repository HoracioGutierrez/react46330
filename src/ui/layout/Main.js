import React from 'react'
import {Switch , Route} from "react-router-dom"
import Home from '../paginas/Home'
import Clientes from '../paginas/Clientes'
import Contacto from '../paginas/Contacto'
import Productos from '../paginas/Productos'


const Main = ({valor,usuarios,contador,aumentarContador,resetearContador,restarContador,agregarUsuario,manejarCambio,borrarUsuario}) => {
    return (
        <main>

            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>

                <Route path="/usuarios">
                    <Clientes valor={valor} usuarios={usuarios} agregarUsuario={agregarUsuario} manejarCambio={manejarCambio} borrarUsuario={borrarUsuario}/>
                </Route>

                <Route path="/productos">
                    <Productos contador={contador} aumentarContador={aumentarContador} resetearContador={resetearContador} restarContador={restarContador}/>
                </Route>

                <Route path="/contacto">
                    <Contacto/>
                </Route>
            </Switch>

        </main>
    )
}

export default Main