import React from 'react'
import {connect} from "react-redux"
import {pedirDetalleProductoPending,pedirDetalleProductoError,pedirDetalleProductoSuccess} from "../../api/actions"
import Contador from '../componentes/Contador'

class Producto extends React.Component {

    componentDidMount(){
        //console.log(this)
        this.props.pedirDetalleProductoPending()
        fetch("http://localhost:4000/productos/"+this.props.match.params.id)
        .then(res=>res.json())
        .then(res=>{
            this.props.pedirDetalleProductoSuccess(res)
        })
        .catch(err=>{
            this.props.pedirDetalleProductoError(err)
        })
    }

    render(){
        const {error,current,pending} = this.props.producto
        return (
            <div>
                <h2>Detalle de Producto</h2>
                <h3>{current.titulo} - ${current.precio}</h3>
                <p>Descripcion : {current.descripcion}</p>
                <p>Stock : {current.stock}</p>
                <Contador/>
            </div>
        )
    }
}

export default connect(
    ({producto}) => ({producto}),
    {pedirDetalleProductoPending,pedirDetalleProductoError,pedirDetalleProductoSuccess}
)(Producto)
