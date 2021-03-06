import React from 'react'
import {connect} from "react-redux"
import {pedirProductosError,pedirProductosPending,pedirProductosSuccess,cambioProductoNuevo,agregarProductoNuevoPending,agregarProductoNuevoSuccess,agregarProductoNuevoError} from "../../api/actions"
import {Link} from "react-router-dom"

class Productos extends React.Component {

    componentDidMount(){
        if(this.props.productos.current.length==0){
            //Esto se ejecuta despues de que paso el primer render
            this.props.pedirProductosPending()
            fetch("http://localhost:4000/productos")
            .then(res=>res.json())
            .then(res=>{
                this.props.pedirProductosSuccess(res)
            })
            .catch(err=>{
                this.props.pedirProductosError(err)
            })
        }
    }


    manejarCambio = (e) => {
        //console.log("Cambio")
        this.props.cambioProductoNuevo(e.target.dataset.target,e.target.value)
    }

    manejarAgregar = () => {
        
        this.props.agregarProductoNuevoPending()
        fetch("http://localhost:4000/productos",{
            method : "POST",
            headers : {"content-type":"application/json"},
            body : JSON.stringify(this.props.producto_nuevo)
        })
        .then((res)=>{
            return res.json()
        })
        .then(nuevoProducto=>{
            this.props.agregarProductoNuevoSuccess(nuevoProducto)
        })
        .catch((err)=>{
            this.props.agregarProductoNuevoError(err)
        })
        //this.props.agregarProductoNuevo()
    }

    
    render(){

        const {pending,current,error} = this.props.productos
        const {titulo,precio,stock,descripcion,pending:prod_nuevo_pending} = this.props.producto_nuevo

        return (
            <div>
                <h2>Productos</h2>
                {prod_nuevo_pending?<p>Creando producto...</p>:null}
                <section>
                    <div>
                        <input data-target="titulo" onChange={this.manejarCambio} type="text" placeholder="Titulo" value={titulo}/>
                    </div>

                    <div>
                        <input data-target="precio" onChange={this.manejarCambio} type="number" placeholder="Precio" value={precio}/>
                    </div>

                    <div>
                        <input data-target="stock" onChange={this.manejarCambio} type="number" placeholder="Stock" value={stock}/>
                    </div>

                    <div>
                        <textarea data-target="descripcion" onChange={this.manejarCambio} value={descripcion}></textarea>
                    </div>

                    <button onClick={this.manejarAgregar}>Agregar</button>

                </section>

                {pending?<p>Pidiendo productos...</p>:null}
                {error?<p>error</p>:null}
                {current.map(producto=>(
                    <article key={producto.id}>
                        <h3>{producto.titulo} - ${producto.precio}</h3>
                        <Link to={`/productos/${producto.id}`}>ver mas...</Link>
                    </article>
                ))}
            </div>
        )
    }

}

export default connect(
    ({productos,producto_nuevo}) => ({productos,producto_nuevo}),
    {pedirProductosError,pedirProductosPending,pedirProductosSuccess,cambioProductoNuevo,agregarProductoNuevoPending,agregarProductoNuevoSuccess,agregarProductoNuevoError}
)(Productos)
