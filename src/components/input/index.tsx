import React from "react";
import {TextInput, StyleSheet} from 'react-native';

const Input = ({placeholder}) => {
    return <TextInput placeholder={placeholder}style={style.input}/>
};

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        marginTop: 3,
    },
});

export default Input;