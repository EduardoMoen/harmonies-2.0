import React, { useContext } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Contador from "../components/Contador";
import { GameContext } from "../contexts/GameContext";
import { useNavigation } from "@react-navigation/native";

export default function Animais1() {

    const {jogador1, jogador2, setJogador1} = useContext(GameContext)
    const navigation = useNavigation()

    const pegaAnimal1 = num => setJogador1({...jogador1, animal1: num})
    const pegaAnimal2 = num => setJogador1({...jogador1, animal2: num})
    const pegaAnimal3 = num => setJogador1({...jogador1, animal3: num})
    const pegaAnimal4 = num => setJogador1({...jogador1, animal4: num})
    const pegaAnimal5 = num => setJogador1({...jogador1, animal5: num})
    const pegaAnimal6 = num => setJogador1({...jogador1, animal6: num})
    const pegaAnimal7 = num => setJogador1({...jogador1, animal7: num})
    const pegaAnimal8 = num => setJogador1({...jogador1, animal8: num})

    function buttonAnimais1() {
        jogador2.nome === undefined ?  navigation.navigate('Total') : navigation.navigate('Animais2')
    }    

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Animais</Text>
            <Text style = {styles.nome}>{jogador1.nome}</Text>
            <View style = {styles.components}>
                <Contador animal pegaValor = {pegaAnimal1}/>
                <Contador animal pegaValor = {pegaAnimal2}/>
                <Contador animal pegaValor = {pegaAnimal3}/>
                <Contador animal pegaValor = {pegaAnimal4}/>
                <Contador animal pegaValor = {pegaAnimal5}/>
                <Contador animal pegaValor = {pegaAnimal6}/>
                <Contador animal pegaValor = {pegaAnimal7}/>
                <Contador animal pegaValor = {pegaAnimal8}/>
            </View>
            <View>
                <TouchableOpacity style = {styles.botao} onPress={buttonAnimais1}>
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
        backgroundColor: '#D7CCC8'
    },
    botao: {
        backgroundColor: '#5D4037',
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
    },
    title: {
        color: 'black',
        fontSize: 40
    },
    nome: {
        color: 'black',
        fontSize: 30
    },
})