import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RutaNoAutentificada from './component/NoAutentificados/RutaNoAutentificadas';
import {Provider} from 'react-redux';
import Store from './store/store';
import Map from './component/Autentificados/Map';
export default function App() {
  return (
    
    <Provider store={Store}>
        <RutaNoAutentificada/>
    </Provider>
  
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
