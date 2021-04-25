import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { ScreenContainer } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {FinAppScreen } from './FinDocScreen';
// import { AuthStack } from '../app/App.js';
// import {navigation} from 'App.js';

// const Stack = createStackNavigator();

export const FinScreen = ({navigation}) => { 
    // const {navigation} = props;
    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.container}>
                <Image source={require("../assets/img/logo-full.png")}
                style={styles.img}/>
                <Text style={styles.title}>APPLY</Text>
                <Text style={styles.header}>Emergency Financial Assistance</Text>

                <Text style={styles.mainText}>For any student in need of financial assistance for amenities 
                    such as transportation fees, food, and emergency housing, we have an
                    application for financial assistance thanks to the generiosity of our donors*
                </Text>
                <Text style={styles.specialText}>*Terms and conditions apply</Text>
            </View>

            <View style={styles.buttonContainer}>
            <Button style={styles.buttonText} title='APPLY NOW' onPress={() => navigation.navigate('FinDocs')}/>
            <Text style={{ color: 'blue', paddingTop: 15, textDecorationLine: 'underline'}}>TERMS AND CONDITIONS</Text>

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
        textAlign: 'left',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30, 
        paddingBottom: 30
    }, 

    specialText: {
        // padding: 50,
        // justifyContent: 'center',
        fontStyle: 'italic',
        textAlign: 'left',
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
    title: {
        fontSize: 25,
        textAlign: 'left',
        fontWeight: 'bold',
        // paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30, 
        // paddingBottom: 30, 
        color: '#FF6E00'
    },

    header: {
        fontSize: 25,
        textAlign: 'left', 
        fontWeight: 'bold',
        // justifyContent: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30, 
        paddingBottom: 5, 
        color: '#3F3356'
    }

});
