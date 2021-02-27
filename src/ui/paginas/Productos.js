import React from 'react'
import Contador from "../componentes/Contador"
import {connect} from "react-redux"
import {pedirUsuariosError,pedirUsuariosPending,pedirUsuariosSuccess} from "../../api/actions"
import {Link} from "react-router-dom"

class Productos extends React.Component {

    componentDidMount(){
        if(this.props.productos.current.length==0){
            //Esto se ejecuta despues de que paso el primer render
            this.props.pedirUsuariosPending()
            fetch("http://localhost:4000/productos")
            .then(res=>res.json())
            .then(res=>{
                this.props.pedirUsuariosSuccess(res)
            })
            .catch(err=>{
                this.props.pedirUsuariosError(err)
            })
        }
    }
    
    render(){

        const {pending,current,error} = this.props.productos

        return (
            <div>
                <h2>Productos</h2>
                {pending?<p>Pidiendo productos...</p>:null}
                {error?<p>error</p>:null}
                {current.map(producto=>(
                    <article key={producto.id}>
                        <h3>{producto.titulo} - ${producto.precio}</h3>
                        <Link to={`/productos/${producto.id}`}>ver mas...</Link>
                    </article>
                ))}
                <Contador/>
            </div>
        )
    }

}

export default connect(
    ({productos}) => ({productos}),
    {pedirUsuariosError,pedirUsuariosPending,pedirUsuariosSuccess}
)(Productos)
