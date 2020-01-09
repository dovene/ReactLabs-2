import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = props =>{
    return (
     <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        paddingTop: 36,
        backgroundColor: 'red',
      },
      headerText: {
        color: 'white',
        fontSize: 18
        
      },
});

export default Header;