import React from 'react';
import {View, Image, ScrollView, StyleSheet,Text, TouchableOpacity} from 'react-native';
// import image1 from './assets/img.jpg'
// import image2 from './assets/img2.jpg'
import Title from './src/components/Title'
import Input from './src/components/input'

const App = () => { 
    
    return (
    <View>
        {/* <Title text="Basic RN"/> */}
    <Title text="Welcome"/>
        <ScrollView>
        <Text style={style.username}>Username</Text>
        <Input placeholder="Masukan username anda"/>
        <Text style={style.password}>Password</Text>
        <Input placeholder="Masukan password anda"/>
            {/* <Image source={image1} style={imageStyle.input}/>
            <Image source={image2} style={imageStyle.input}/> */}
        <TouchableOpacity style={styles.button}>
            <Text>Sing in</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: "#EF710C",
        padding: 15,
        borderRadius: 10,
        margin: 20,
        color: 'white',
        marginHorizontal: 10,
        
    }
});


const style = StyleSheet.create({
    username: {
        fontSize: 20,
        color: 'black',
        marginLeft: 14,
        marginBottom: 0,
        fontWeight: 'bold'
    },
        password: {
            fontSize: 20,
            color: 'black',
            marginLeft: 14,
            marginBottom: 0,
            fontWeight: 'bold',
            marginTop: 20
        }
})



export default App;