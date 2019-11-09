import React from 'react';
import {Text,Image ,Dimensions,View,StyleSheet} from 'react-native';
import Screen1 from './src/Scenes/screen1.js'
export default class App extends React.Component{
    render(){
        return(
            <View style={styles.container}>
               <Screen1 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#12876f",
  }
})