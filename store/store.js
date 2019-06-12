import { createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import generadora from '../Saga/Saga';
import CONSTANTES from './Constantes';
const reducerPrueba = (state = [],action) => {
    switch(action.type){
        case '222': 
            return [...state,1];
        break;
        default:
            return state;
        
    }
};

const reducerSession = (state = null,action) => {
    
    
    switch(action.type){
        case CONSTANTES.ESTABLECER_SESION:
            return action.usuario;
        break;
        case CONSTANTES.SESSION_INVALID:
            return action.usuario;
        break;
        case CONSTANTES.GET_SESSION:
        console.log('reducer state',state);
        console.log('reducer',action);
            return state;
        break;

        default:
            return state;
        
    }
}


const reducers = combineReducers({
    reducerSession,
    reducerPrueba,
    form
})

const sagaMiddleware = createSagaMiddleware (); 

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(generadora);
export default store;