//import
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import {  Text, StyleSheet, Button } from "react-native";
import { ScreenContainer } from 'react-native-screens';

export const SignIn = ({ navigation}) => {  //login component
    //buttons to login and sign up for an account
    //LOGIN = logs in after users enter their email and password
    //Signup = prompts users to create an account if they dont have one
    return (
        <ScreenContainer style={StyleSheet.container}>
            <Text>Welcome</Text>
            <Text>Forgot password</Text>
            <Button title='LOGIN' onPress={() => alert('Complete')}/>   
            <Button title='Sign up' onPress={() => navigation.push('CreateAccount')}/>
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
  });