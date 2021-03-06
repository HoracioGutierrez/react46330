import React from 'react'
import {Switch , Route} from "react-router-dom"
import Home from '../paginas/Home'
import Clientes from '../paginas/Clientes'
import Contacto from '../paginas/Contacto'
import Productos from '../paginas/Productos'
import Producto from "../paginas/Producto"
import { RutaPrivada } from '../componentes/RutasCustomizadas'


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

                {/* <Route path="/productos" exact>
                    <Productos/>
                </Route> */}
                <RutaPrivada valida={false} path="/productos" component={Productos}/>

                <Route path="/productos/:id" component={Producto}/>

                <Route path="/contacto">
                    <Contacto/>
                </Route>
            </Switch>

        </main>
    )
}

export default Main