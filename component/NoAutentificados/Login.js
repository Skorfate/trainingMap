import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../../template/form/Formulario'
import { connect } from 'react-redux';
import { accionLogin,accionSession,accionSessionBad } from '../../store/Action';

class Login extends React.Component {
    loginUsuaruio = (values) => {
        console.log('accionLogin_ ',accionLogin);
        this.props.autentificarse(values);
        console.log(this.props.prop);
      };
    
    render() {
        const {navigation} = this.props;
        return (           
            <View style={{ justifyContent: 'center',padding: 30, alignContent: 'center' }}>
                <LoginForm login={this.loginUsuaruio} />
                {this.props.usuario && this.props.usuario.isError && <Text style={{ color: 'red' }}>Usuario invalido</Text>}
            </View>
            
        );
      }
}

const mapStateToProps = (state,ownProps) => {
    return {
        usuario : state.reducerSession
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
        autentificarse: (values) => {
            if(values.user == 'ruben' && values.password == '123456'){
                dispatch(accionSession({isLogin: true, name: 'ruben',isError:false}))
             }else{
                 dispatch(accionSessionBad({isLogin: false, error : 'Usuario invalido',isError:true}))

             
             }
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Login);