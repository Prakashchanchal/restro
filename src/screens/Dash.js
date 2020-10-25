import React,{useState} from 'react';
import { Button, View,Switch,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Dash=()=>{
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{flexDirection:'row'}}>
        {(isEnabled==true)?
        <Text style={{color:'blue'}}>hello</Text>:<Text style={{color:'green'}}>hello</Text>
        }<Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );}

export default Dash;