import React, { useEffect, useState } from "react";
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Contador({nome, pegaValor, verde, cinza, amarelo, vermelho, azul, animal}) {
    const [res, setRes] = useState(0)

    useEffect(() => {
        pegaValor(res)
    }, [res])

    const buttonStyles = [styles.botao]
    if(verde) buttonStyles.push(styles.botaoVerde)
    if(cinza) buttonStyles.push(styles.botaoCinza)
    if(amarelo) buttonStyles.push(styles.botaoAmarelo)
    if(vermelho) buttonStyles.push(styles.botaoVermelho)
    if(azul) buttonStyles.push(styles.botaoAzul)
    if(animal) buttonStyles.push(styles.botaoAnimal)
    

    return (
        <View style = {styles.container}>
            {nome === undefined ? false : <Text style = {styles.nome}>{nome}</Text>}
            <View style = {styles.corpo}>
                <TouchableOpacity style = {buttonStyles} onPress={() => setRes(res - 10)}>
                    <Text style = {styles.textoBotao}>-10</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {buttonStyles} onPress={() => setRes(res - 1)}>
                    <Text style = {styles.textoBotao}>-</Text>
                </TouchableOpacity>
                <Text style = { styles.valor }>
                    {res}
                </Text>
                <TouchableOpacity style = {buttonStyles} onPress={() => setRes(res + 1)}>
                    <Text style = {styles.textoBotao}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {buttonStyles} onPress={() => setRes(res + 10)}>
                    <Text style = {styles.textoBotao}>+10</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // flex: 1,
        paddingTop: 0,
        marginTop: 20,
    },
    valor: {
        fontSize: 35,
        textAlign: 'center',
        width: 100,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        color: '#333333'
    },
    corpo: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        justifyContent: 'space-evenly',
    },
    nome: {
        fontSize: 40,
        marginBottom: 10,
        color: '#000000'
    },
    textoBotao: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    botao: {
        backgroundColor: '#007BFF',
        width: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoVerde: {
        backgroundColor: '#4E7C59',
        width: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoCinza: {
        backgroundColor: '#37474F',
        width: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoAmarelo: {
        backgroundColor: '#B2A429',
        width: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoVermelho: {
        backgroundColor: '#C62828',
        width: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoAzul: {
        backgroundColor: '#1976D2',
        width: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoAnimal: {
        backgroundColor: '#5D4037',
        width: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
})