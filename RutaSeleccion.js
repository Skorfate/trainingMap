import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import RutasAuth from './component/Autentificados/RutasAut';
import  NoAutentificados from './component/NoAutentificados/RutaNoAutentificadas';
import { accionGetSession} from './store/Action'



class RutaSeleccion extends React.Component {
   
    componentWillUpdate(){
        console.log('getSession',this.props.usuario);
        this.props.getSession();
    }
    render() {
        const {navigation} = this.props;
        return ( <View style={{ flex: 1 }}>            
           <RutasAuth/>
           
           </View>         
        );
      }
}

const mapStateToProps = (state,ownProps) => {
    return {
        usuario : state.reducerSesion,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getSession: () => {
            dispatch(accionGetSession());
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(RutaSeleccion);