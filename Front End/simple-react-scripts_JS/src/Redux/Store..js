import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducers from './Reducers/RootReducers'


const middleware = [thunk]

const Store = createStore(RootReducers, applyMiddleware(...middleware))


export default Store

