import React, { useContext, useState } from "react";
import { Button, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NomesDosJogadores from "../components/NomesJogadores";
import { useNavigation } from "@react-navigation/native";
import { GameContext } from "../contexts/GameContext";

export default function Nomes() {

    let { criarArray, setNome1, setNome2, setNome3, setNome4 } = useContext(GameContext)
    const navigation = useNavigation()   
    
    const [mapa, setMapa] = useState('Sortear Mapa')
    const [estilo, setEstilo] = useState(styles.botao)

    const pegaNome1 = nome => setNome1(nome)
    const pegaNome2 = nome => setNome2(nome)
    const pegaNome3 = nome => setNome3(nome)
    const pegaNome4 = nome => setNome4(nome)          

    function buttonNomes() {
        criarArray()
        navigation.navigate('Florestas')
    }

    function sortearMapa() {
        let cod = Math.floor(Math.random() * 2) + 1

        if (cod == 1) {
            setMapa('Água')
            setEstilo(styles.botaoAgua)
        } else {
            setMapa('Terra')
            setEstilo(styles.botaoTerra)
        }
    }

    return (
        <ScrollView style = { styles.container }>
            <Text style = {styles.title}>Harmonies Score</Text>
            <View style = {styles.components} >
                <NomesDosJogadores numero ={1} pegaNome = {pegaNome1}/>
                <NomesDosJogadores numero ={2} pegaNome = {pegaNome2}/>
                <NomesDosJogadores numero ={3} pegaNome = {pegaNome3}/>
                <NomesDosJogadores numero ={4} pegaNome = {pegaNome4}/>
            </View>
            <View style = {styles.botaoContainer}>
                <TouchableOpacity style = {estilo} onPress={sortearMapa}>
                    <Text style = {styles.textoBotao}>{mapa}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.botao, {marginTop: 30}]} onPress={buttonNomes}>
                    <Text style = {styles.textoBotao}>Next</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
    },
    botao: {
        backgroundColor: '#134d39e3',
        width: Dimensions.get('window').width - 100,
        marginStart: 50,
        marginEnd: 50,
        borderRadius: 30,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    textoBotao: {
        color: '#FFFFFF',
        fontSize: 30,
        textAlign: 'center'
    },
    components:{
        flex: 1,
        marginTop: 30
    },
    title: {
        color: 'black',
        fontSize: 40,
        marginTop: 20,
        marginBottom: 30,
        textAlign: 'center'
    },
    botaoContainer: {
        marginTop: 50
    },
    botaoTerra: {
        backgroundColor: '#5f3c06',
        width: Dimensions.get('window').width - 100,
        marginStart: 50,
        marginEnd: 50,
        borderRadius: 30,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    botaoAgua: {
        backgroundColor: '#2655d4',
        width: Dimensions.get('window').width - 100,
        marginStart: 50,
        marginEnd: 50,
        borderRadius: 30,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
})