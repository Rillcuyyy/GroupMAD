/* eslint-disable prettier/prettier */
import React, {useState} from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity}  from "react-native";

const SignInPage = () => {

    return (
        <View>
            <Text style={style.header}> Registration </Text>
            <Text style={style.inputTitle}> Name </Text> 
            <TextInput placeholder="Masukkan nama lengkap anda" style={style.input} />
            <Text style={style.inputTitle}> Username </Text>
            <TextInput placeholder="Masukkan username anda" style={style.input} />
            <Text style={style.inputTitle}> Email </Text>
            <TextInput placeholder="Masukkan email anda" style={style.input} />
            <Text style={style.inputTitle}> Address </Text>
            <TextInput placeholder="Masukkan alamat anda" style={style.input} />
            <Text style={style.inputTitle}> Phone Number </Text>
            <TextInput keyboardType="numeric" placeholder="Masukkan nomor hp" style={style.input} />
            <TouchableOpacity style={style.button}>
            <Text style ={style.regis}>Register</Text>
            </TouchableOpacity>
        </View>
    )
};

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        margin: 20,
        marginTop: 5,
        padding: 10,
        paddingLeft: 15,
        borderRadius: 10,
        fontSize: 15,
    },
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
    inputTitle: {
        fontSize: 20,
        marginBottom: 0,
        marginLeft: 20,
        padding: 0,
        fontWeight: 'bold',
        color: 'black',
    },
    button: {
        width: 340,
        marginLeft: 30,
        borderRadius: 25,
        height: 50,
        paddingHorizontal: 20,
        alignItems: "center",
        backgroundColor: "#CA60ED",
        padding: 10,

    },
    regis: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    }

})


export default SignInPage;

