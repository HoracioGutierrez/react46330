import React from 'react'
import {Switch , Route} from "react-router-dom"
import Home from '../paginas/Home'
import Clientes from '../paginas/Clientes'
import Contacto from '../paginas/Contacto'
import Productos from '../paginas/Productos'
import Producto from "../paginas/Producto"


const Main = () => {
    return (
        <main>

            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>

                <Route path="/usuarios">
                    <Clientes/>
                </Route>

                <Route path="/productos" exact>
                    <Productos/>
                </Route>

                <Route path="/productos/:id" component={Producto}/>

                <Route path="/contacto">
                    <Contacto/>
                </Route>
            </Switch>

        </main>
    )
}

export default Main