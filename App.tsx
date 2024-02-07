import React from 'react';
import {View, Image, ScrollView, StyleSheet} from 'react-native';
import image1 from './assets/img.jpg'
import image2 from './assets/img2.jpg'
import Title from './src/components/Title'
import Input from './src/components/input'

const App = () => { 
    
    return (
    <View>
      
        <Title text="Basic RN"/>
        <Title text="Basic ReactNative"/>
        <ScrollView>
        <Input placeholder="Input your Name"/>
        <Input placeholder="Input your Nim"/>
            <Image source={image1} style={imageStyle.input}/>
            <Image source={image2} style={imageStyle.input}/>
        </ScrollView>
    </View>
    );
};

const imageStyle = StyleSheet.create({
  input: {
      width: 400,
      height: 400,
  },
})


export default App;