import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Totais({nome, resultado}) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.nome}>{nome}</Text>
            <Text style = {styles.resultado}>{resultado}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nome:{
        color: '#000000',
        fontSize: 40,
        textAlign: 'center'   
    },
    container: {
        marginTop: 25,
        backgroundColor: '#F0E68C',
        width: 200,
        borderRadius: 40,
    },
    resultado: {
        fontSize: 30,
        color: '#B8860B',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})