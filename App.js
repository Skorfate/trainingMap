import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import Store from './store/store';
import RutaSeleccion from './RutaSeleccion';
export default function App() {
  return (    
    <Provider store={Store}>
        <RutaSeleccion/>
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
