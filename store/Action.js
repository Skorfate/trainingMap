import CONSTANTE from './Constantes';

export const accionLogin = (values) =>({    
        type: CONSTANTE.LOGIN,
        usuario : values,
});

export const accionSession = (values) =>({
        type: CONSTANTE.ESTABLECER_SESION,
        usuario : values        
    });

export const accionSessionBad = (values) =>({
    type: CONSTANTE.SESSION_INVALID,
        usuario : values        
    });

export const accionGetSession = () =>({
    type: CONSTANTE.GET_SESSION,

});