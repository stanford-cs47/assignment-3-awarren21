import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  Linking,
  TouchableWithoutFeedback
} from 'react-native';

// Import third-party components here
import { material } from 'react-native-typography'; //consider using this!
import { Metrics, Colors } from '../Themes';

export default function Articles(props) {
  handlePress = () => {
    Linking.openURL(props.url);
  };
  return ( 
  <TouchableWithoutFeedback 
    onPress={() => handlePress()}>
    <View style = {styles.container}>
      <Text style={material.headline}>{props.title}</Text>   
      <Text style={material.body1}>{props.snippet}</Text>
      <Text style={material.button}>{props.author}</Text>
      <Text style={material.caption}>{props.date}</Text>
    </View>
  </TouchableWithoutFeedback>
  );

}
const styles = StyleSheet.create({
container: {
  flex: 1,
  width: '100%',
  paddingVertical: 10,
  paddingHorizontal: 25,
  justifyContent:'flex-start',
  alignItems: 'flex-start',
  }
});
