import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { estilo } from '../css/Styles';
import { Ionicons,AntDesign, Feather  } from '@expo/vector-icons'; 
export default function Home({ navigation }) {
    return (
        <View style={estilo.conteudo}>
            <Text> Tela Home</Text>

            <View style={estilo.barra}>
                <TouchableOpacity style={estilo.btn} onPress={() => {
                    navigation.navigate("Cliente")
                }}>
                    <Ionicons name="person" size={24} color="white" />
                </TouchableOpacity>
            


            {/*===============contato====================*/}
            
                <TouchableOpacity style={estilo.btn} onPress={() => {
                    navigation.navigate("Contato")
                }}>
                <AntDesign name="contacts" size={24} color="white" />
                </TouchableOpacity>
            
            {/*=============== Fim contato====================*/}


             {/*=============== portifolio====================*/}
            
                <TouchableOpacity style={estilo.btn} onPress={() => {
                    navigation.navigate("Portifolio")
                }}>
                    <Feather name="list" size={24} color="white" />
                </TouchableOpacity>
            </View>
                 {/*=============== Fim do portifolio====================*/}





        </View>
    );
}