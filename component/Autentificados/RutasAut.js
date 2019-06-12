import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Mapa from './Map';
import Login from '../NoAutentificados/Login';

const leftIcon = (navigation, icon) => <Icon
    name={icon}
    style={{ marginLeft: 20 }}
    size={20}
    color='white'
    onPress={() => navigation.openDrawer()}
/>

const navigationOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e'
        },        
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: '#fff'
        }
    }
};

const RutasAuth = createDrawerNavigator(
    {
        map: {
            screen: Mapa,
            navigationOptions: ({ navigation }) => ({
                title: 'Mapa de entrenamiento',
                drawerLabel: 'Mapas',
                drawerIcon: ({ tintColor }) => (<Icon name="home" size={24} style={{ color: tintColor }} />),
                headerLeft: leftIcon(navigation, 'bars')
            })
        },
        Salir : {
            screen: Mapa,
            navigationOptions: ({ navigation }) => ({
                title: 'Cerrar Sesion',
                drawerLabel: 'Cerrar Sesion',
                drawerIcon: ({ tintColor }) => (<Icon name="sign-out" size={24} style={{ color: tintColor }} />),
                headerLeft: leftIcon(navigation, 'bars')
            })
        },
        Contacto : {
            screen: Mapa,
            navigationOptions: ({ navigation }) => ({
                title: 'Contacto',
                drawerLabel: 'contacto',
                drawerIcon: ({ tintColor }) => (<Icon name="id-card" size={24} style={{ color: tintColor }} />),
                headerLeft: leftIcon(navigation, 'bars')
            })
        }

    },
    {
        drawerBackgroundColor: 'white',
        contentOptions: {
            activeTintColor: 'blue',
            activeBackgroundColor: 'transparent',
            inactiveTintColor: 'red',
            itemsConstainerStyle: {
                marginVertical : 4,
            }
        },  
        defaultNavigationOptions : navigationOptions
    }
);


export default createAppContainer(RutasAuth);