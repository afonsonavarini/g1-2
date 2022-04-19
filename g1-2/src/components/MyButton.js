import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'

export default function MyButton(props) {
    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={props.press} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        marginTop: 20,
        paddingHorizontal: 100
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#296d98",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});