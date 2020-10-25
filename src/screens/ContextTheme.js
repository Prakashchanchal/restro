import React, { useContext } from 'react';
import { View, Text, StyleSheet,FlatList, Button } from 'react-native';
import ThemeContext from '../context/ThemeContext'
const IndexScreen = () => {
  const {data,changeTheme} = useContext(ThemeContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title='add' onPress={changeTheme}/>
  <Text>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
