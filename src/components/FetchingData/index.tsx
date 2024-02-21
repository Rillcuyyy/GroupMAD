import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const YourComponent = () => {

    const [users, setUsers]= useState([]);

    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>setUsers(response.data)).catch((err)=>console.log(err))
    },[]);

    const resderUserCard =({item})=>{
        return(
            <View style={style.card}>
                
                <Text>
                <Text style={style.title}>Name: </Text>
                <Text style={style.content}>{item.name}</Text>
                </Text>
                <Text>
                <Text style={style.title}>Username: </Text>
                <Text style={style.content}>{item.username}</Text>
                </Text>
                <Text>
                <Text style={style.title}>Email: </Text>
                <Text style={style.content}>{item.email}</Text>
                </Text>
                <Text>
                <Text style={style.title}>Address: </Text>
                <Text style={style.content}>{item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}</Text>
                </Text>
                <Text>
                <Text style={style.title}>Phone: </Text>
                <Text style={style.content}>{item.phone}</Text>
                </Text>
            </View>
        )
    }
    
    return (
        <View style={style.container}>
            <FlatList
            data={users}
            keyExtractor={(item)=> item.id.toString()}
            renderItem={resderUserCard}/>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20

    },

    card:{
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
        borderWidth: 1

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black'
        

    },
    content: {
        fontSize: 18,
        marginBottom: 5,
        color: 'black',
    },
    email: {
        color: 'red',
        marginBottom: 5,

    },
    username: {
        fontStyle: 'italic',
        marginBottom: 5,
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


});

export default YourComponent;