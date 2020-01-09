import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
const[userNumber, setUserNumber] = useState();

const startGame = (selectedNumber)=>{
 setUserNumber(selectedNumber)
}
const retryGame =()=>{
  setUserNumber()
}

let content =  <StartGameScreen onGameStart={startGame} />

if (userNumber){
  content = <GameScreen userChoice={userNumber} retry={retryGame}/>
}

  return (
    <View style={styles.container}>
      <Header title="Guess a number" />
        {content}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
