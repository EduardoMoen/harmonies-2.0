import React, { useContext } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Contador from "../components/Contador";
import { GameContext } from "../contexts/GameContext";
import { useNavigation } from "@react-navigation/native";

export default function Rios() {

    const {numeroJogadores, jogador1, jogador2, jogador3, jogador4, setJogador1, setJogador2, setJogador3, setJogador4} = useContext(GameContext)
    const navigation = useNavigation()

    function buttonRios() {
        navigation.navigate('Animais1')
    }

    const pegaValor1 = valor => setJogador1({...jogador1, azul: valor})
    const pegaValor2 = valor => setJogador2({...jogador2, azul: valor})
    const pegaValor3 = valor => setJogador3({...jogador3, azul: valor})
    const pegaValor4 = valor => setJogador4({...jogador4, azul: valor})

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Rios</Text>
            <View style = {styles.components}>
                <Contador azul nome = {jogador1.nome} pegaValor = {pegaValor1}/>
                {numeroJogadores > 1 ? <Contador azul nome = {jogador2.nome} pegaValor = {pegaValor2}/> : false}
                {numeroJogadores > 2 ? <Contador azul nome = {jogador3.nome} pegaValor = {pegaValor3}/> : false}
                {numeroJogadores > 3 ? <Contador azul nome = {jogador4.nome} pegaValor = {pegaValor4}/> : false}
            </View>
            <View>
                <TouchableOpacity style = {styles.botao} onPress={buttonRios}>
                    <Text style = {styles.textoBotao}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#BBDEFB'
    },
    botao: {
        backgroundColor: '#1976D2',
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
        marginTop: 10
    },
    title: {
        color: 'black',
        fontSize: 50
    }
})