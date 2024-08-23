import React, { useContext } from "react";
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GameContext } from "../contexts/GameContext";
import Totais from "../components/Totais";
import { CommonActions, useNavigation } from "@react-navigation/native";

export default function Total() {

    const {numeroJogadores, jogador1, jogador2, jogador3, jogador4, total1, total2, total3, total4, zerar} = useContext(GameContext)
    const navigation = useNavigation()

    function buttonTotal() {
        zerar()
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{name: 'Nomes'}],
        }))
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Total</Text>
            <View style = {styles.components}>
                <Totais nome = {jogador1.nome} resultado = {total1}/>
                {numeroJogadores > 1 ? <Totais nome = {jogador2.nome} resultado = {total2}/> : false}
                {numeroJogadores > 2 ? <Totais nome = {jogador3.nome} resultado = {total3}/> : false}
                {numeroJogadores > 3 ? <Totais nome = {jogador4.nome} resultado = {total4}/> : false}
            </View>
            <View>
                <TouchableOpacity style = {styles.botao} onPress={buttonTotal}>
                    <Text style = {styles.textoBotao}>Reiniciar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF5E1'
    },
    components: {
        flex: 1,
        marginTop: 20
    },
    botao: {
        backgroundColor: '#B8860B',
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
    title: {
        color: '#000000',
        fontSize: 40,
        marginTop: 50
    },
})