import React from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import MenuDrawer from './MenuDrawer';

const StackNav = createStackNavigator({
  Home: {
  	screen: MenuDrawer,
  	navigationOptions: ({ navigation }) => ({
  		header: null
  	})
  }
});
export default createAppContainer(StackNav);