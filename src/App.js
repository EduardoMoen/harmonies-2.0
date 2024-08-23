import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import GameProvider from "./contexts/GameContext";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./views/routes";

export default function App() {

    return (
        <SafeAreaView style = {styles.container}>
            <NavigationContainer>
                <GameProvider>
                    <Routes />
                </GameProvider>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})