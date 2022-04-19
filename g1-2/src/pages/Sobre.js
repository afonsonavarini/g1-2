import { StyleSheet, View, Text, Button, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import MyButton from '../components/MyButton'

const image = { uri: "https://www.teahub.io/photos/full/0-2160_free-nice-white-wallpaper-seedless-fruit.jpg" };

export default function Sobre({ navigation }) {

    const voltar = () => {
        navigation.replace("Home")
    }

    return (
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.container}>

                <View style={{ padding: 20 }}>
                    <Image style={styles.imagem} source={{ uri: "https://i.imgur.com/a2LIWmy.png" }}></Image>
                </View>
                <Text style={styles.text}>Afonso Navarini</Text>
                <Text style={styles.subtext}>(1120458)</Text>
                <View style={{ padding: 50, alignItems: 'center', }}>
                    <Text style={styles.subtext}>São João da Urtiga - RS</Text>
                    <Text style={styles.subtext}>afonsonavarini@hotmail.com</Text>
                    <Text style={styles.subtext}>(54) 996982868</Text>
                </View>
                <View style={{ padding: 20 }}>
                    <MyButton press={voltar} text="Voltar"></MyButton>
                </View>

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imagem: {
        borderWidth: 2,
        borderColor: 'black',
        width: 250,
        height: 250,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    subtext: {
        fontSize: 20,
    },
    temp: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});