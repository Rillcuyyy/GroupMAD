import React from 'react';
import {SafeAreaView, StyleSheet, TextInput,Text,View,ScrollView,TouchableOpacity} from 'react-native';
import SignInPage from './src/components/Signin';
import YourComponent from './src/components/FetchingData';


const App = () => {
  return (
    <View>
      <ScrollView>
      {/* <SignInPage/> */}
      <Text style={style.header}> Users List </Text>
      <YourComponent/>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  header: {
      fontSize: 45, 
      color: 'black', 
      fontWeight:'bold', 
      textAlign:'left',
      margin: 20,
      marginLeft: 0,
      marginBottom: 30,
      padding: 10,
  },
})


export default App;