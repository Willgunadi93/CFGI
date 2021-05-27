import React from 'react';
import {StyleSheet, TouchableHighlight, Text, View} from 'react-native';
import {FontAwesome5, Entypo} from '@expo/vector-icons';


//This is the buttons used for the Legal Services Page
export default function LegalButton({text, onPress, icon}){

    var iconicons = <FontAwesome5 name={icon} size={26} color="white"></FontAwesome5>;
    if (icon == 'chat'){
        iconicons = <Entypo name="chat" size={26} color="white"></Entypo>;
    }
    return (
        <View style={styles.container}> 
        <TouchableHighlight onPress={onPress} style={styles.button} activeOpacity={1} underlayColor="#0A30F6">
            <View style={{flexDirection:'row', alignItems:'center'}}>
                {iconicons}
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 16,
        paddingVertical: 25,
        paddingHorizontal: 25,
        backgroundColor: '#4C67F6',
        elevation:5,
        margin: 5
    },
    buttonText:{
        color: 'white',
        fontSize:18,
        fontWeight: 'bold',
        textAlign:'center',
        width:'100%'

    }
})