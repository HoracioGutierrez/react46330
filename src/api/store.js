import {createStore,combineReducers} from "redux"
import reducer from "./reducer"

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//const store = createStore(combineReducers({Usuarios}))

export default store