import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Contador from "./Contador"
import Usuarios from "./Usuarios"

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            titulo : "Mi Pagina",
            links : ["usuarios","productos","contacto"],
            contador : 0,
            usuarios : [],
            valor : ""
        }
    }

    aumentarContador = () => {
        this.setState({
            contador : this.state.contador + 1
        })
    }
    
    resetearContador = () => {
        this.setState({
            contador : 0
        })
    }

    restarContador = () => {
        this.setState({
            contador : this.state.contador - 1
        })
    }


    agregarUsuario = (e) => {
        e.preventDefault()

        /* const copia = this.state.usuarios.slice(0)
        copia.push(this.state.valor) */

        /* const copia = [...this.state.usuarios]
        copia.push(this.state.valor) */

        //const copia = [...this.state.usuarios,this.state.valor]

        this.setState({
            usuarios : [
                ...this.state.usuarios,
                {
                    id : Math.random(),
                    nombre : this.state.valor
                }
            ],
            valor : ""
        })
    }

    manejarCambio = (e) => {
        this.setState({
            valor : e.target.value
        })
    }

    borrarUsuario = (id) => {
        this.setState({
            usuarios : this.state.usuarios.filter((usuario)=>{ 
                return usuario.id == id ? false : true 
            })
        })
    }

    render(){

        const {titulo,links,contador,valor,usuarios} = this.state

        return (
            <>
                <Header titulo={titulo} links={links}/>

                {/* <Usuarios valor={valor} usuarios={usuarios} agregarUsuario={this.agregarUsuario} manejarCambio={this.manejarCambio} borrarUsuario={this.borrarUsuario}/>

                <Contador contador={contador} aumentarContador={this.aumentarContador} resetearContador={this.resetearContador} restarContador={this.restarContador}/> */}
                
                <Main/>
                <Footer links={links}/>
            </>
        )
    }
        
}


export default App