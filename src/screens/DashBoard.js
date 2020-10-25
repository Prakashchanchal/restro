
import React,{useEffect, useState,Component} from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {inject,observer} from 'mobx-react';
import {DarkMode,LightMode} from '../utility/Theme'
const dark= {
    backgroundColor:'black',
    color:'blue',
    
}
const light ={
    backgroundColor:'white',
    color:'black'
}
@inject('theme')
@observer
export default class HomeScreen extends Component {
   constructor(props)
   {
       super(props);
       this.props=props
       this.state={
           theme:this.props.theme.theme
       }
   }
   
    render(){
        console.log(this.props.theme.theme)
    return (
      <View style={[Styles.darkMode,{backgroundColor:this.props.theme.theme.backGroundColor}]}>
        <Text style={[Styles.Text,{color:this.props.theme.theme.color}]}>Home Screen</Text>
        <TouchableOpacity 
        onPress={()=>{(this.props.theme.theme==LightMode)?
            this.props.theme.updateTheme(DarkMode):
            this.props.theme.updateTheme(LightMode)}}>
            <Text style={[Styles.Text,{color:this.props.theme.theme.color}]}>
                Hello
            </Text>
        </TouchableOpacity>
        <Text>{this.props.theme.time}</Text>
        <TouchableOpacity onPress={()=>this.props.theme.updateTime('hello')}>
            <Text>hello</Text>
        </TouchableOpacity> 
      </View>
    );
  }}
const Styles=StyleSheet.create(
    {
        darkMode:{
            flex: 1, alignItems: 'center', justifyContent: 'center'
            
        },
        Text:{
            fontSize:24
        }
    }
)