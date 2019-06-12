import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,MenuItem,FlatList } from 'react-native';
import Mapa from '../../component/Autentificados/Map';
import drawerStyle from '../../styles/DrawerStyle';
import {Container, Content, Header, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator,DrawerItems, createStackNavigator, createAppContainer } from 'react-navigation';
/*class MenuDrawer extends Component {
    constructor(){
        this.dato = [
            {key: 1,screenName : 'Mapa', icon: 'home', name: 'home',},
            {key: 2,screenName : 'Mapa', icon: 'home', name: 'Buscar',},
            {key: 3,screenName : 'Mapa', icon: 'home', name: 'Grupos',},
            {key: 4,screenName : 'Mapa', icon: 'home', name: 'Contacto',},
            {key: 4,screenName : 'Mapa', icon: 'sign-out', name: 'Salir',},
        ];
    }
}*/


const CustomDrawerContentComponent = (props) => (
        <Container style={{paddingTop:25}}>
        <Header style={styles.header}>
        <Body style={{flex:1}}>
        <Image
        style={styles.avatar}
          source={{uri:'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <Text style ={styles.description}>Ruben Araya</Text>
        </Body>
        </Header>
        <Content>
        <DrawerItems {...props}/>
        </Content>
        </Container>
      )
   
const DrawerNav = createDrawerNavigator({
        "Mapa": {
         navigationOptions: {
          drawerIcon: () => (
              <Icon name='home' 
              color='#F50057'/>
          ),
          },
        screen: (props) => <Mapa {...props} propName="Mapa" />
      },
      "Buscar": {
          navigationOptions: {
          drawerIcon: () => (
              <Icon name='search' 
              color='#F50057'/>
          ),
          },
        screen: (props) => <Mapa {...props} propName="Buscar" />
      },
      "Grupo": {
            navigationOptions: {
          drawerIcon: () => (
              <Icon name='users' 
              color='#F50057'/>
          ),
          },
        screen: (props) => <Mapa {...props} propName="Grupo" />
      },
      "Salir": {
            navigationOptions: {
          drawerIcon: () => (
              <Icon name='sign-out' 
              color='#F50057'/>
          ),
          },
        screen: (props) => <Mapa {...props} propName="Grupo" />
      }
    }, 
    {
      initialRouteName: 'Mapa',
      drawerPosition: 'left',
      contentComponent: CustomDrawerContentComponent,
      contentOptions: {
          activeTintColor: '#F50057',
          inactiveTintColor :'#1999CE',
          activeBackgroundColor :'#E8EAF6',
        },
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose'
    }
    );
    
    export default DrawerNav;     


  const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:250,
    alignSelf:'center',
    alignItems: 'center'
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white", 
    marginBottom:5,
    alignSelf:'center',
    alignItems: 'center'
   
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:50,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "white",
    marginTop:10,
    textAlign: 'center',
    alignSelf:'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});