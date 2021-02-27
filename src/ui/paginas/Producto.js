import React from 'react'
import {connect} from "react-redux"
import {} from "../../api/actions"

class Producto extends React.Component {

    componentDidMount(){
        console.log(this.props.match.params.id)
        fetch("http://localhost:4000/productos/"+this.props.match.params.id)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
        })
    }

    render(){
        return (
            <div>
                <h2>Detalle de Producto</h2>
            </div>
        )
    }
}

export default Producto
