import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios'

export const GetPrevisao = (geocode) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`https://apiprevmet3.inmet.gov.br/previsao/${geocode}`)
            resolve(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    )
}


