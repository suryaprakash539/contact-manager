import {createStore,combineReducers,applyMiddleware} from 'redux'
import userReducer from '../reducers/userReducer'
import contactReducer from '../reducers/contactReducer'
import thunk from 'redux-thunk'

function configureStore(){
    const store=createStore(combineReducers({
        user:userReducer,
        contact:contactReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore