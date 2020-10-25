import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid, Platform 
} from 'react-native';
// import CaptureScreen
import CameraRollExtended from 'react-native-store-photos-album'
import {captureScreen} from 'react-native-view-shot';
import CameraRoll from "@react-native-community/cameraroll";
const App = ({navigation}) => {
  const [imageURI, setImageURI] = useState(
    'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/325466_1100-1100x628.jpg',
  );
  const [savedImagePath, setSavedImagePath] = useState('');
  
  const takeScreenShot = () => {
    // To capture Screenshot
    captureScreen({
      // Either png or jpg (or webm Android Only), Defaults: png
      format: 'jpg',
      // Quality 0.0 - 1.0 (only available for jpg)
      quality: 0.8, 
    }).then(
      //callback function to getthe result URL of the screnshot
        
      Uri => {
        setSavedImagePath(Uri);
        setImageURI(Uri);
        navigation.navigate('Download',{
            itemId:Uri   
           })
        
      },
      (error) => console.error('Oops, Something Went Wrong', error),
    );
    
  };
    return(
        <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          React Native Example to Take Screenshot Programmatically
        </Text>
        <Image
          source={{uri: imageURI}}
          style={{
            width: 200,
            height: 300,
            resizeMode: 'contain',
            marginTop: 5
          }}
        />
        
        <Text style={styles.textStyle}>
          {
            savedImagePath ?
            `Saved Image Path\n ${savedImagePath}` : ''
          }
        </Text>
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={takeScreenShot}>
            <Text style={styles.buttonTextStyle}>
              Take Screenshot
            </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>

    )
}
export default App;
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