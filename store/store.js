import { createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import generadora from '../Saga/Saga';
const reducerPrueba = (state = [],action) => {
    switch(action.type){
        case 'LOGIN': 
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

const sagaMiddleware = createSagaMiddleware (); 

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(generadora);
export default store;