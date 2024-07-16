import StudentReducer from '../reducer/userReducer'
import { combineReducers  } from 'redux'
const RootReducer = combineReducers({
    user : StudentReducer
})
export default RootReducer