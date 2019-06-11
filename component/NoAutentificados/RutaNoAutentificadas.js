import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Login';
const RutaNoAutentificada = createStackNavigator(
    {
        Login: {
            screen: Login
        }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
        defaultNavigationOptions: {
            headerVisible: true
        }
    }

);

export default createAppContainer(RutaNoAutentificada);
