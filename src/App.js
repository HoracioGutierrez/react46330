import React /* , {Fragment} */ from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

const App = () => {
    return (
        <>
            <Header titulo="Mi Pagina"/>
            <Main/>
            <Footer/>
        </>
    )
}

/* class App extends React.Component {

    
    render(){
        return (
            <>
            <p>Hola Mundo</p>
            <p>Otro Texto</p>
            </>
            )
        }
        
    constructor(){

    }
}
 */
//CommonJS
//module.exports = App

//ES6
export default App