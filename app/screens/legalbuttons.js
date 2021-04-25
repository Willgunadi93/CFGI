import React from 'react';
import {StyleSheet, TouchableHighlight, Text, View} from 'react-native';
import {FontAwesome5, Entypo} from '@expo/vector-icons';


//This is the buttons used for the Legal Services Page
export default function LegalButton({text, onPress, icon}){
    
    //temporarily here, found this from an example
    // It changes the button color when pressed

    var [ isPress, setIsPress ] = React.useState(false);

    var touchProps = {
        activeOpacity: 1, //needs to be 1
        underlayColor: "#0A30F6",
        style: isPress ? styles.button : styles.buttonPressed,
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => null
        };
    /////////////////

    var iconicons = <FontAwesome5 name={icon} size={26} color="white"></FontAwesome5>;
    if (icon == 'chat'){
        iconicons = <Entypo name="chat" size={26} color="white"></Entypo>;
    }
    return (
        <View style={styles.container}> 
        <TouchableHighlight {...touchProps}>
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
        elevation:5
    },
    buttonText:{
        color: 'white',
        fontSize:18,
        fontWeight: 'bold',
        textAlign:'center',
        width:'100%'

    },
    buttonPressed:{
        borderRadius: 16,
        paddingVertical: 25,
        paddingHorizontal: 25,
        backgroundColor: '#4C67F6',
        elevation:5
    }
})