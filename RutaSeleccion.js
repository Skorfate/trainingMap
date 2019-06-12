import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import RutasAuth from './component/Autentificados/RutasAut';
import  NoAutentificados from './component/NoAutentificados/RutaNoAutentificadas';
import StackNav from './template/Drawer/StackNav'


class RutaSeleccion extends Component {
   
    
    render() {
        const {navigation} = this.props;
        console.log('this.props: ',this.props);
        console.log('this.props[usuario]: ',this.props['usuario']);
        console.log('this.props usuario: ',this.props.usuario);
        return ( 
        <View style={{ flex: 1, alignContent: 'center'}}>                    
            {this.props.usuario && this.props.usuario.isLogin ? <StackNav/> :  <NoAutentificados/>}  
        </View>         
        );
      }
}

const mapStateToProps = (state,ownProps) => {
    return {
        usuario : state.reducerSession
    }
}
 
export default connect(mapStateToProps,null)(RutaSeleccion);