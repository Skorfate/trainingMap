import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import StylesRow from '../../styles/StyleRow';
import GradientButtonApp from '../button/GradientButton';




const field = props => (
    <View style={{ margin: 10 }}>
        <TextInput
            placeholder={props.ph} onChangeText={props.input.onChange} secureTextEntry={props.ste == 'false' ? false : true}
            style={styles.inputField} autoCapitalize='none'
            onBlur={props.input.onBlur}  value={props.input.value}/>
        <View style={styles.linea} />
        {props.meta.touched && props.meta.error && <Text style={{ color: 'red' }}>{props.meta.error}</Text>}
    </View>
);

const LoginForm = (props) => {
    return (
        <View>
            <Field name='user' component={field} ph='Usuario' ste={'false'} />
            <Field name='password' component={field} ph='Contraseña' ste={'true'} />
            <View style = {styles.marginButtons}>
                <GradientButtonApp colorBegin ="#D69C00" colorEnd = "#E7D000" direccion = "diagonal"
                    title="Iniciar Sesión" action={props.handleSubmit((values) => {
                        
                    })} />
            </View>
        </View>
    );
};



const validate = (values) => {
    const errors = {};
    console.log(values.user);
    if (!values.user) {
        errors.user = 'Requerido';
    }



    if (!values.password) {
        errors.password = 'Requerido';
    }


    return errors;
};


const styles = StyleSheet.create({

    linea: {
        backgroundColor: '#DCDCDC',
        height: 2
    },
    inputField: {
        marginBottom: 5,
        color: '#008cd8'
    },
    marginButtons:{
        margin:20
    }

});


export default reduxForm({ form: 'LoginForm', validate, })(LoginForm);