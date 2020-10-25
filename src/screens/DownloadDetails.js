import React,{useRef} from 'react';
import {
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  PermissionsAndroid,
  Platform,
  Animated
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import useRotation from './useRotation'
const DownloadDetails = ({navigation, route}) => {
  const {itemId, otherParam} = route.params;
  const rotate = useRotation();
    const animatedStyle = { transform: [ { rotate } ] };
  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  async function savePicture() {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }

    CameraRoll.save(itemId, {type: 'auto'});
  }
  return (
    <View>
      <Text>Download Details</Text>
      <Text>{itemId}</Text>
      <Animated.Image
        source={{uri: itemId}}
        style={[{
          width: 200,
          height: 300,
          resizeMode: 'contain',
          marginTop: 5,
        },animatedStyle]}
      />
      <TouchableOpacity style={styles.buttonStyle} onPress={savePicture}>
        <Text style={styles.buttonTextStyle}>Download</Text>
      </TouchableOpacity>
    </View>
  );
};
export default DownloadDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    padding: 10,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
});
