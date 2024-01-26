import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts, Ubuntu_700Bold, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';

const Person = ({ name, age }) => {

    let [fontsLoaded, fontError] = useFonts({
        Ubuntu_700Bold,
        Ubuntu_500Medium
    });

    if (!fontsLoaded && !fontError) {
        return <Text>Carregando...</Text>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Nome: {name}</Text>
            <Text style={styles.textStyle}>Idade: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        width: '90%',
        margin: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontFamily: 'Ubuntu_700Bold'
    }

})

export default Person;
