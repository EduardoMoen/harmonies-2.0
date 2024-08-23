import React, { createContext, useEffect, useState } from "react";

export const GameContext = createContext({})

export default function GameProvider({ children }) {

    const modelo = {
        nome: '',
        verde: 0,
        cinza: 0,
        amarelo: 0,
        vermelho: 0,
        azul: 0,
        animal1: 0,
        animal2: 0,
        animal3: 0,
        animal4: 0,
        animal6: 0,
        animal7: 0,
        animal8: 0,
    }

    const [jogador1, setJogador1] = useState(modelo)
    const [jogador2, setJogador2] = useState(modelo)
    const [jogador3, setJogador3] = useState(modelo)
    const [jogador4, setJogador4] = useState(modelo)

    const [total1, setTotal1] = useState(0)
    const [total2, setTotal2] = useState(0)
    const [total3, setTotal3] = useState(0)
    const [total4, setTotal4] = useState(0)

    useEffect(() => {
        somarTudo(jogador1, setTotal1)
    }, [jogador1])

    useEffect(() => {
        somarTudo(jogador2, setTotal2)
    }, [jogador2])

    useEffect(() => {
        somarTudo(jogador3, setTotal3)
    }, [jogador3])

    useEffect(() => {
        somarTudo(jogador4, setTotal4)
    }, [jogador4])

    function somarTudo(jg, setTotal) {
        const valores = Object.values(jg).filter(value => typeof value === 'number')
        const somatorio = valores.reduce((x , y) => x + Number(y), 0)
        setTotal(somatorio)
    }    
    
    const [numeroJogadores, setNJ] = useState(0)
    const [nome1, setNome1] = useState('')
    const [nome2, setNome2] = useState('')
    const [nome3, setNome3] = useState('')
    const [nome4, setNome4] = useState('')

    function criarArray() {
        let jogadores = []
        if (nome1 != '' && nome1 != null) {
            jogadores.push(nome1)
        }
        if (nome2 != '' && nome2 != null) {
            jogadores.push(nome2)
        }
        if (nome3 != '' && nome3 != null) {
            jogadores.push(nome3)
        }
        if (nome4 != '' && nome4 != null) {
            jogadores.push(nome4)
        }
        setNJ(jogadores.length)
        setJogador1({...jogador1, nome: jogadores[0]})
        setJogador2({...jogador2, nome: jogadores[1]})
        setJogador3({...jogador3, nome: jogadores[2]})
        setJogador4({...jogador4, nome: jogadores[3]})
    }

    function zerar() {
        setJogador1(modelo)
        setJogador2(modelo)
        setJogador3(modelo)
        setJogador4(modelo)
    }

    return(
        <GameContext.Provider value={{
            
            criarArray, numeroJogadores,
            jogador1, setJogador1, total1,
            jogador2, setJogador2, total2,
            jogador3, setJogador3, total3,
            jogador4, setJogador4, total4,
            setNome1, setNome2, setNome3, setNome4,
            zerar
            }}>
            {children}
        </GameContext.Provider>
    )
}