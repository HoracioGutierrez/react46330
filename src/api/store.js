import {createStore,combineReducers} from "redux"
import reducer from "./reducer"

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//const store = createStore(combineReducers({Usuarios}))

//console.log(store.getState())

export default store