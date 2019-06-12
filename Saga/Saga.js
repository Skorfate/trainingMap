import { takeEvery, call } from 'redux-saga/effects'
import CONSTANTES from '../store/Constantes';

const auth = (usuario) => {
    
    if(usuario.user == 'ruben' && usuario.password == '123456'){
       return {isLogin: true, name: 'ruben'};
    }else{
       return {isLogin: false, error : 'Usuario invalido'};
    } 
}

function* generadoraLogin(values){
    
    const log = yield call(auth,values.usuario);
    
}

export default function* generadora(){
    yield takeEvery(CONSTANTES.LOGIN,generadoraLogin);
    
}
