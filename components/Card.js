import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = props =>{
    return (
    <View style={{...styles.inputContainer, ...props.style}}>{props.children}
    </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.28,
        elevation: 2, //elevation works only for android and shadows... for iOS
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
});

export default Card;