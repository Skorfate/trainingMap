import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import Store from './store/store';
import RutaSeleccion from './RutaSeleccion';
export default function App() {
  return (
    <View style={{flex:1}}>
      <Provider store={Store}>
          <RutaSeleccion/>
      </Provider>
    </View>
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
