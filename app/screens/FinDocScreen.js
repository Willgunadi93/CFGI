import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { AuthContext } from '../screens/context';
import { ScreenContainer } from 'react-native-screens';


export const FinAppScreen = () => { 
    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: 5}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Email"
                    />
                </View>
            </View>
        </ScreenContainer>
    );
  }


const styles = StyleSheet.create({        
    container: {
      flex: 1,
      backgroundColor: '#F7F5F9',
      alignItems: 'center',
      justifyContent: 'center',
    },

    mainText: {
        justifyContent: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30, 
        paddingBottom: 30
    }, 

    specialText: {
        // padding: 50,
        justifyContent: 'center',
        fontStyle: 'italic',
    }, 

    buttonContainer: {
        paddingHorizontal: 50,
        paddingVertical: 20,
        justifyContent: "center",
    },

    buttonText: {
        // fontFamily:'Oxygen-Bold', 
        fontSize: 14,
    },

});
