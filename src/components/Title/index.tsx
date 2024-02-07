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
        fontSize: 20,
        color: 'red',
        fontWeight:'bold',
        textAlign: 'center',
        margin: 10
    },
});

export default Title;