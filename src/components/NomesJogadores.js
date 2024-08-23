import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";

export default function NomesDosJogadores({ numero, pegaNome }) {

    const [nome, setNome] = useState('')

    useEffect(() => {
        pegaNome(nome)
    }, [nome])

    return (
        <View style = {styles.container}>
            <TextInput
                style = {styles.text}
                placeholder = {`Jogador ${numero}`}
                placeholderTextColor={'#333333'}
                value = {nome}
                onChangeText={(text) => setNome(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
    },
    text:{
        backgroundColor: '#FFFFFF',
        color: '#333333',
        marginStart: 50,
        marginEnd: 50,
        borderRadius: 30,
        textAlign: 'center',
        fontSize: 30, 
        marginBottom: 30       
    }
})