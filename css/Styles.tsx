import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({

    conteudo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },


    barra: {
        flexDirection:"row",
        width: '90%',
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 50,
        position: "absolute",
        bottom: 10,
    },
    btn: {
        flex:1,
        alignItems:"center",
        margin:5,
    },
    txtbtn: {
        color: "#fff",
        fontSize: 12,
    }



})