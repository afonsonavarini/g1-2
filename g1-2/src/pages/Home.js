import { StyleSheet, View, Text, Button, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import MyButton from '../components/MyButton'
import { GetPrevisao } from '../services/GetPrevisao'




export default function Home({ navigation }) {


    const image = { uri: "https://1.bp.blogspot.com/-9_vyEvfvRdA/Xw39Lrlin4I/AAAAAAAAGO4/Yk_NaFb-zJs3TqjRyXvXe7D7pHuZhdR3ACLcBGAsYHQ/d/white-wallpaper-hd.png" };

    const trocaTela = (params) => {
        let geocode = params
        navigation.replace("Previsao", { geocode })
    }

    const trocaTelaSobre = () => {
        navigation.replace("Sobre")
    }


    return (
        <ImageBackground source={image} style={styles.image}>
            <View>
                <View style={styles.viewText}>
                    <Text style={styles.text}>Escolha a cidade</Text>
                </View>
                <MyButton press={() => trocaTela(4314100)} text="Passo Fundo"></MyButton>
                <MyButton press={() => trocaTela(4311809)} text="Marau"></MyButton>
                <MyButton press={() => trocaTela(4304705)} text="Carazinho"></MyButton>
                <MyButton press={() => trocaTela(4320800)} text="Soledade"></MyButton>
                <MyButton press={() => trocaTela(4307005)} text="Erechim"></MyButton>
                <View style={{ marginTop: 200 }}>
                    <MyButton press={trocaTelaSobre} text="Sobre"></MyButton>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20
    },
    text: {

        fontSize: 25,
        fontWeight: 'bold'

    },
    number: {
        color: 'blue',
        fontSize: 25,
        fontWeight: 'bold'

    },
    indice: {
        color: 'green',
        fontSize: 25,
        fontWeight: 'bold'

    },
    viewText: {
        marginTop: 20,
        padding: 10,
        justifyContent: "center",
        alignItems: 'center',
    },
    view: {
        marginTop: 20,
        paddingHorizontal: 100
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 50
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});