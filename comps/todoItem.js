import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style = {styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding:16,
        marginTop : 16,
        borderColor: 'orange',
        borderWidth:1,
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 2.5,
    },
    
})
