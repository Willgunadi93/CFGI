//import
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import {  Text, StyleSheet, Button, View, TextInput, Image } from "react-native";
import { ScreenContainer } from 'react-native-screens';
import * as Font from 'expo-font';
import { AuthContext } from './context';

export const SignIn = ({ navigation}) => {  //login component
    //buttons to login and sign up for an account
    //LOGIN = logs in after users enter their email and password
    //Signup = prompts users to create an account if they dont have one
    const [number, onChangeText] = React.useState(null);

    const { signIn } = React.useContext(AuthContext);
    return (
        <ScreenContainer style={StyleSheet.container}>
            <View style={styles.logoView}>
                <View style={{paddingBottom: 50, alignItems: 'center'}}>
                    <Image style={{marginTop: 50, marginBottom: 20}} source = {require('../assets/img/arrow-left.png')} />
                    <Image style={{marginLeft: -10}}source = {require('../assets/img/arrow-right.png')} />
                    <View style={{position: 'absolute', alignItems: 'center'}}>
                        <Image style={styles.logo} source={require('../assets/img/logo.png')} />
                    </View>
                </View>
                
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
                <Button titleStyle={styles.buttonText} title='LOGIN' onPress={() => signIn()}/>
                <Text style={{ color: 'blue', textAlign: 'right', paddingTop: 10}} onPress={() => navigation.push('CreateAccount')}>Sign up {'>'}</Text>
            </View>
        </ScreenContainer>
    );
}

export const CreateAccount = () => {        //create an account component
    //After users enters information(fname,lname,email,password), join-now creates the account;
    const { signUp } = React.useContext(AuthContext);
    return (
        <ScreenContainer style={styles.container}>
            <Text>Sign up Today</Text>
            <Button title="Join Now" onPress={() => signUp()}/>
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
        paddingVertical: 15,
        // fontFamily: 'Righteous-Regular'
    },

    welcome: {
        color: '#3F3356',
        fontSize: 32,
        textAlign: 'center',
        paddingVertical: 10,
        // fontFamily: 'Righteous-Regular'
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

      logoView: {
          alignItems: 'center',
          paddingTop: 60
      },

      logo: {
          height: 160,
          width: 160
      },

      backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },

      backdrop: {
        flex:1,
        flexDirection: 'column'
      },
  });