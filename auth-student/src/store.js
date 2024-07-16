import {  applyMiddleware, createStore } from 'redux'
import {thunk} from 'redux-thunk'
import RootReducer from './redux/reducer'
import { app } from './config/firbaseconfig';
const store = createStore(RootReducer,applyMiddleware(thunk))
export default store; 