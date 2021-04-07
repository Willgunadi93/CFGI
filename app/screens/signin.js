//import
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import {  Text, StyleSheet, Button, View, TextInput } from "react-native";
import { ScreenContainer } from 'react-native-screens';

export const SignIn = ({ navigation}) => {  //login component
    //buttons to login and sign up for an account
    //LOGIN = logs in after users enter their email and password
    //Signup = prompts users to create an account if they dont have one
    const [number, onChangeText] = React.useState(null);
    return (
        <ScreenContainer style={StyleSheet.container}>
            <View>
                <Text style={styles.CFGI}>COMMUNITY FOR GLOBAL {"\n"} INNOVATION</Text>
                <Text style={styles.welcome}>WELCOME</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: 5}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Email"
                    />
                </View>
                <View style={{paddingVertical: 5}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Password"
                    />
                </View>
                <Text style={{ color: 'blue', textAlign: 'right', paddingTop: 5, textDecorationLine: 'underline'}} onPress={() => navigation.push('CreateAccount')}>Forgot password?</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button titleStyle={styles.buttonText} title='LOGIN' onPress={() => alert('Complete')}/>
                <Text style={{ color: 'blue', textAlign: 'right', paddingTop: 10}} onPress={() => navigation.push('CreateAccount')}>Sign up ></Text>
            </View>
        </ScreenContainer>
    );
}

export const CreateAccount = () => {        //create an account component
    //After users enters information(fname,lname,email,password), join-now creates the account;
    return (
        <ScreenContainer style={styles.container}>
            <Text>Sign up Today</Text>
            <Button title="Join Now" onPress={() => alert('To-Do')}/>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c3bffa',
      alignItems: 'center',
      justifyContent: 'center',
    },

    CFGI: {
        color: '#69676F',
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 20,
        fontFamily: 'Righteous-Regular'
    },

    welcome: {
        color: '#3F3356',
        fontSize: 32,
        textAlign: 'center',
        paddingVertical: 25,
        fontFamily: 'Righteous-Regular'
    },

    buttonContainer: {
        paddingHorizontal: 50,
        paddingVertical: 20,
        justifyContent: "center",
    },

    buttonText: {
        fontFamily:'Oxygen-Bold', 
        fontSize: 14,
    },

    inputContainer: {
        marginHorizontal: 50,
        marginVertical: 10,
    },

    input: {
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#DADADA'
      },
  });