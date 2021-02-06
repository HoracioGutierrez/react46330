//tengo que traer a React
//CommonJS
//const React = require("react")
//ES6
import React from "react"

//Tengo que traer a React-DOM
import ReactDOM from "react-dom"

import App from "./App"
//Tengo que tener un componente de React
//Todos los componentes de React siempre son funciones
//Todos los componentes de React siempre van en mayuscula
//Todos los componentes de React siempre tienen retorno 
//Si el componente es de tipo clase tiene que extender a la clase Component
//Si el componente es de tipo clase tiene que tener un metodo llamado render()

/* 
function Foo(){
    return "Hola Mundo"
}

const Foo = () => {
    return "Hola Mundo"
}
*/

/* 
class Foo extends React.Component {
    render(){
        return "Hola Mundo"
    }
}
 */

//Tengo que renderizar el componente en el DOM
ReactDOM.render(
    //Foo()
    //<Foo/>,
    <App/>,
    document.getElementById("root")
)