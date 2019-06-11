import { createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';

const reducerPrueba = (state = [],action) => {
    switch(action.type){
        case 'AUMENTAR_PRUEBA': 
            return [...state,1];
        break;
        default:
            return state;
        
    }
};

const reducers = combineReducers({
    reducerPrueba,
    form
})

const sagaMidleware = createSagaMiddleware (); 

const store = createStore(reducers, applyMiddleware(sagaMidleware));

export default store;