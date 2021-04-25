//import
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import {  Text, StyleSheet, Button, View, TextInput, Image, Modal, Pressable } from "react-native";
import { ScreenContainer } from 'react-native-screens';
import * as Font from 'expo-font';
import { AuthContext } from './context';

export const SignIn = ({ navigation}) => {  //login component
    //buttons to login and sign up for an account
    //LOGIN = logs in after users enter their email and password
    //Signup = prompts users to create an account if they dont have one
    const [number, onChangeText] = React.useState(null);

    const { signIn } = React.useContext(AuthContext); //WHERE THE PICTURE OF IT!!!!!!!!!
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
                <Text style={{ color: 'blue', textAlign: 'right', paddingTop: 5, textDecorationLine: 'underline'}} onPress={() => navigation.push('ForgotPassword')}>Forgot password?</Text>
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
    const [number, onChangeText] = React.useState(null);
    return (
        <ScreenContainer style={StyleSheet.container}>
            <View style={styles.logoView}>
                <View style={{paddingVertical: 85, alignItems: 'center'}}>
                    <View style={{alignItems: 'center', position: 'absolute'}}>
                        <View style={styles.circleBlue}></View>
                        <View style={styles.circleYellow}></View>
                        <View style={styles.circleOrange}></View>
                        <View style={{ alignItems: 'center', position: 'absolute'}}>
                            <Image style={styles.logo} source={require('../assets/img/logo.png')} />
                        </View>
                    </View>
                </View>
                
                <Text style={styles.welcome}>SIGN UP TODAY!</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={{alignItems: 'center', position: 'absolute'}}>
                    <View style={styles.circleRed}></View>
                </View>
                <View style={{paddingVertical: 5, flexDirection: 'row'}}>
                    <TextInput
                        style={styles.inputNarrowLeft}
                        onChangeText={onChangeText}
                        placeholder="First Name"
                    />
                    <TextInput
                        style={styles.inputNarrowRight}
                        onChangeText={onChangeText}
                        placeholder="Last Name"
                    />
                </View>

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
            </View>
            <View style={styles.buttonContainer}>
                <Button titleStyle={styles.buttonText} title='Join Now' onPress={() => signUp()}/>
            </View>
        </ScreenContainer>
    );
}

export const ForgotPassword = ({navigation}) => {        //create a password resetting component
    //After users enters information(fname,lname,email,password), join-now creates the account;
    const { signUp } = React.useContext(AuthContext);
    const [number, onChangeText] = React.useState(null);
    return (
        <ScreenContainer style={StyleSheet.container}>
            <View style={styles.logoView}>
                <View style={{paddingVertical: 30, alignItems: 'center'}}>
                    <View style={{alignItems: 'center'}}>
                        <Image style={styles.logoFull} source={require('../assets/img/logo-full.png')} />
                    </View>
                </View>
                
                <Text style={styles.password}>Forgot Your Password</Text>
                <Text style={{marginHorizontal: 50, fontSize: 16, marginBottom: 20}}>To reset your password please enter the email that you used to register for CFGI.</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: 5}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Email"
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button titleStyle={styles.buttonText} title='CONTINUE' onPress={() => navigation.push('ResetPassword')}/>
            </View>
            {/* <View style={{alignItems: 'center'}}>
                <View style={{position: 'absolute'}}>
                    <Image style={styles.water} source={require('../assets/img/water.png')} />
                    <View style={{alignItems: 'center'}}>
                        <View style={styles.circleRedBottom}></View>
                        <View style={styles.circleOrangeBottom}></View>
                    </View>
                </View>
            </View> */}
            <View style={{alignItems: 'center', paddingVertical: 50}}>
                <Image style={{marginTop: 100, position: 'absolute', width:'100%', height: 150}} source={require('../assets/img/water.png')} />
                <View style={styles.circleRedBottom}></View>
                <View style={styles.circleOrangeBottom}></View>
            </View>
        </ScreenContainer>
    );
}

export const ResetPassword = () => {        //create a password resetting component
    //After users enters information(fname,lname,email,password), join-now creates the account;
    const { signUp, signIn } = React.useContext(AuthContext);
    const [number, onChangeText] = React.useState(null);

    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <ScreenContainer style={StyleSheet.container}>

            <View style={styles.logoView}>
                <View style={{paddingVertical: 10, alignItems: 'center'}}>
                    <View style={{alignItems: 'center'}}>
                        <Image style={styles.logoFull} source={require('../assets/img/logo-full.png')} />
                    </View>
                </View>
                
                <Text style={styles.password}>An email was sent to you. </Text>
                <Text style={{marginHorizontal: 50, fontSize: 16, marginBottom: 10}}>Please enter the validation code and your new password.</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: 5}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Validation Code"
                    />
                </View>

                <View style={{paddingVertical: 5}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="New Password"
                    />
                </View>

                <View style={{paddingVertical: 5}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Confirm Password"
                    />
                </View>
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Password successfully set!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => signIn()}
                        >
                        <Text style={styles.textStyle}>LOGIN</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <View style={styles.buttonContainer}>
                <Button titleStyle={styles.buttonText} title='CONFIRM PASSWORD' onPress={() => setModalVisible(true)}/>
            </View>
            <View style={{alignItems: 'center'}}>
                <Image style={{marginTop: 50, position: 'absolute', width:'100%', height: 150}} source={require('../assets/img/water.png')} />
                <View style={styles.circleRedBottom}></View>
                <View style={styles.circleOrangeBottom}></View>
            </View>
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
        //fontFamily: 'righteous-regular'
    },

    welcome: {
        color: '#3F3356',
        fontSize: 32,
        textAlign: 'center',
        paddingVertical: 10,
        // fontFamily: 'Righteous-Regular'
    },

    password: {
        color: '#3F3356',
        fontSize: 24,
        textAlign: 'center',
        paddingVertical: 10,
    },

    buttonContainer: {
        paddingHorizontal: 50,
        paddingVertical: 25,
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

      inputNarrowLeft: {
        height: 40,
        width: 137,
        padding: 10,
        marginRight: 8,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#DADADA'
      },

      inputNarrowRight: {
        height: 40,
        width: 137,
        padding: 10,
        marginLeft: 8,
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

      logoFull: {
        height: 63,
        width: 305
      },

      water: {
        height: 150,
        width: "100%",
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

      circleBlue: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginLeft: 250,
        marginTop: -30,
        backgroundColor: "#3C65CC",
      },
      
      circleOrange: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        marginLeft: '85%',
        marginTop: -30,
        backgroundColor: "#FF6E00",
      },

      circleYellow: {
        width: 23,
        height: 23,
        borderRadius: 23 / 2,
        marginRight: '65%',
        marginTop: 100,
        backgroundColor: "#FAC007",
      },

      circleRed: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
        marginRight: '126%',
        marginTop: 20,
        backgroundColor: "#FF564F",
      },

      circleRedBottom: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        marginRight: '60%',
        marginTop: 20,
        backgroundColor: "#FF564F",
      },

      circleOrangeBottom: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: '20%',
        marginTop: 30,
        backgroundColor: "#FAC007",
      },

      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },

      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },

      button: {
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: 5,
        elevation: 2
      },

      buttonOpen: {
        backgroundColor: "#F194FF",
      },

      buttonClose: {
        backgroundColor: "#2196F3",
      },

      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },

      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: 'bold'
      }
  });