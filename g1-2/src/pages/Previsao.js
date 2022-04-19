import { StyleSheet, View, Text, Button, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState, useLayoutEffect, useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import { GetPrevisao } from '../services/GetPrevisao';
import MyButton from '../components/MyButton';

export default function Previsao({ navigation }) {

    const [previsao, setPrevisao] = useState({})
    const [icone, setIcone] = useState('')
    const [nome, setNome] = useState('')
    const [resumo, setResumo] = useState('')
    const [uf, setUf] = useState('')
    const [tempMax, setTempMax] = useState('')
    const [tempMin, setTempMin] = useState('')
    const [ventos, setVentos] = useState('')

    const route = useRoute();
    const geocode = route.params.geocode
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;

    const image = { uri: "https://wallpaperaccess.com/full/1188394.jpg" };

    const voltar = () => {
        navigation.replace("Home")
    }

    useLayoutEffect(() => {


        GetPrevisao(geocode).then((data) => {
            setPrevisao(data)
            setIcone(data[geocode][dataAtual]["manha"]['icone'])
            setNome(data[geocode][dataAtual]["manha"]['entidade'])
            setResumo(data[geocode][dataAtual]["manha"]['resumo'])
            setUf(data[geocode][dataAtual]["manha"]['uf'])
            setTempMax(data[geocode][dataAtual]["manha"]['temp_max'])
            setTempMin(data[geocode][dataAtual]["manha"]['temp_min'])
            setVentos(data[geocode][dataAtual]["manha"]['int_vento'])
        })

    }, [])




    return (
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.container}>
                <Image style={styles.imagem} source={{ uri: icone }}></Image>
                <Text style={styles.text}>{nome} - {uf}</Text>
                <Text style={styles.subtext}>{resumo}</Text>
                <View style={{ padding: 25 }}>
                    <View style={styles.temp}>
                        <Text style={{ color: 'blue', fontSize: 30, fontWeight: 'bold' }}>{tempMin}ºC      </Text>
                        <Text style={{ color: 'red', fontSize: 30, fontWeight: 'bold' }}>{tempMax}ºC</Text>
                    </View>
                    <View style={styles.temp}>
                        <Text style={{ fontSize: 18 }}> MIN          </Text>
                        <Text style={{ fontSize: 18 }}>            MAX</Text>
                    </View>
                </View>
                <View style={{ padding: 10 }}>
                    <Text style={styles.subtext}>Ventos {ventos}</Text>
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
        width: 150,
        height: 150,
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