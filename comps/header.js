import React from 'react';

import { View, Text, StyleSheet} from 'react-native';

export default function  Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
            <Text style={styles.title2}>tap to delete</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 25,
        backgroundColor: 'orange',
        borderStyle: 'solid',
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
    },
    title:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    title2:{
        padding: 15,
        textAlign: 'center',
        color: '#fff',
        fontSize: 17.5,
        
    },
});