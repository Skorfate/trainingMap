import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../../template/form/Formulario'
import { connect } from 'react-redux';

class Login extends React.Component {
    loginUsuaruio = (values) => {
        console.log(values);
        
        
      };
    
    render() {
        const {navigation} = this.props;
        return (           
            <View style={{ justifyContent: 'center',padding: 30, alignContent: 'center' }}>
                <LoginForm login={this.loginUsuaruio} />
            </View>
            
        );
      }
}

const mapStateToProps = (state,ownProps) => {
    return {
        prop : state.reducerPrueba
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        autentificarse: () => {
            dispatch({type: 'LOGIN',datos : values})
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Login);