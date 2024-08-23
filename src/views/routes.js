import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Nomes from "./Nomes";
import Florestas from "./Florestas";
import Montanhas from "./Montanhas";
import Total from "./Total";
import Campos from "./Campos";
import Construcoes from "./Construcoes";
import Rios from "./Rios";
import Animais1 from "./Animais1";
import Animais2 from "./Animais2";
import Animais3 from "./Animais3";
import Animais4 from "./Animais4";

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName = 'Nomes' screenOptions={{headerShown:false}}>
            <Stack.Screen name = 'Nomes' component = {Nomes}/>
            <Stack.Screen name = 'Florestas' component = {Florestas}/>
            <Stack.Screen name = 'Montanhas' component = {Montanhas}/>
            <Stack.Screen name = 'Campos' component = {Campos}/>
            <Stack.Screen name = 'Construcoes' component = {Construcoes}/>
            <Stack.Screen name = 'Rios' component = {Rios}/>
            <Stack.Screen name = 'Animais1' component = {Animais1}/>
            <Stack.Screen name = 'Animais2' component = {Animais2}/>
            <Stack.Screen name = 'Animais3' component = {Animais3}/>
            <Stack.Screen name = 'Animais4' component = {Animais4}/>
            <Stack.Screen name = 'Total' component = {Total}/>
        </Stack.Navigator>
    )
}