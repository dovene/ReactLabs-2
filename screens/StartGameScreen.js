import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors'
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [userConfirmed, setUserConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    
    const controlUserInput = (inputText)=>{
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }
    const onResetBtnClick = ()=>{
        setEnteredValue('');
        setUserConfirmed(false);
    }

    const confirmUserInput = ()=>{
        const chosenNumber = parseInt(enteredValue)
        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            Alert.alert('Invalid number','Number has to be between 0 and 99',[{text:'Okay', style:'destructive', onPress: onResetBtnClick }])
            return;
        }

        setSelectedNumber(chosenNumber)
        setUserConfirmed(true);
        setEnteredValue('')
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if(userConfirmed){
        confirmedOutput = 
        <Card style={styles.confirmationContainer}> 
            <Text>You selected </Text>
            <NumberContainer>{selectedNumber} </NumberContainer>
            <Button title='Start Game' onPress={()=>props.onGameStart(selectedNumber)}/>
        </Card>
        
    }


    return (

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Test</Text>

                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <TextInput 
                    style={styles.inputStyle} 
                    blurOnSubmit autoCorrect={false}
                    keyboardType='number-pad' 
                    maxLength={2}
                    onChangeText = {controlUserInput}
                    value = {enteredValue} />

                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button color={Colors.primary} title="Reset" onPress={onResetBtnClick} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={confirmUserInput} />
                        </View>
                    </View>

                </Card>
            {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        width: '100%',

        alignItems: 'center',

    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    }, button: {
        flex: 1,
        margin: 10
    }, inputStyle: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        height: 30,
        marginVertical: 10,
        minWidth: 55,
        textAlign: 'center'
    },
    inputContainer: {
        width: 400,
        maxWidth: '90%',
        alignItems: 'center',
    },
    buttonsContainer: {

        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,

    },confirmationContainer:{
        margin: 10,
        padding: 10,
        alignItems: 'center',
    },
});

export default StartGameScreen;