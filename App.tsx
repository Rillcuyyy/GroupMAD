
import React from 'react';
import {SafeAreaView, StyleSheet, TextInput,Text,View,ScrollView,TouchableOpacity} from 'react-native';
const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  const App = () => { 
    
        return (
        <View>
            {/* <Title text="Basic RN"/> */}
        <Title text="Registration"/>
            <ScrollView>
                <Text style={style.username}>Username</Text>
                <Input placeholder="Masukan username anda"/>
                <Text style={style.password}>Password</Text>
                <Input placeholder="Masukan password anda"/>
            
            <TouchableOpacity style={styles.button}>
                <Text>Register</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
        );
};

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: "violet",
        padding: 15,
        borderRadius: 20,
        margin: 20,
        color: 'white',
        marginHorizontal: 25,
    },
});

export default TextInputExample;