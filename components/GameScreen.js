import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomNumber = (min,max, exclude)=>{

    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() *(max - min)) + min;
    if(randomNum===exclude){
        generateRandomNumber(min,max,exclude);
    }else{
        return randomNum;
    }
}
const GameScreen = props =>{
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1,100,props.userChoice))

    return(
        <View>
            <Text> Opponent guess</Text>

            <NumberContainer>{currentGuess}

            </NumberContainer>
           <Card style={styles.buttonContainer}>
           <Button title='Lower'/>
            <Button title='Greater'/>
           </Card>
        </View>
    )

};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: center,
    },
    buttonContainer:{
        flexDirection: 'row',
        margin: 10,
        
    }

})
export default GameScreen;