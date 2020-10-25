// In App.js in a new project
import React,{useState} from 'react';
import { View, Text ,Switch} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/DashBoard'
import Dash from '../screens/Dash'
import Card from '../screens/CardDetails'
import ContextTheme from '../screens/ContextTheme'
import Download from '../screens/DownloadDetails'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Card">
        <Drawer.Screen name='Download' component={Download}/>
        <Drawer.Screen name='Card' component={Card}/>
          <Drawer.Screen name='ContextTheme' component={ContextTheme}/>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name='func' component={HomeScreen} options={{title:Dash}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;