import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const Title = ({text})=> {
    return (
        <View>
            <Text style={header.input}> {text} </Text>
        </View>
    );
};



const header = StyleSheet.create({
    input:{
        fontSize: 35,
        color: 'black',
        fontWeight:'bold',
        marginLeft: 5,
        margin: 10,
        marginBottom: 30
        
    },
});

export default Title;