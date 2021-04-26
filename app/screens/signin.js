//import
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import {  Text, StyleSheet, Button, View, TextInput, Image, Modal, Pressable } from "react-native";
import { ScreenContainer } from 'react-native-screens';
import * as Font from 'expo-font';
import { AuthContext } from './context';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen';

export const SignIn = ({ navigation}) => {  //login component
    //buttons to login and sign up for an account
    //LOGIN = logs in after users enter their email and password
    //Signup = prompts users to create an account if they dont have one
    const [number, onChangeText] = React.useState(null);

    const { signIn } = React.useContext(AuthContext);
    return (
        <ScreenContainer style={StyleSheet.container}>
            <View style={styles.logoView}>
                <View style={{paddingBottom: hp('8%'), alignItems: 'center'}}>
                    <Image style={{marginTop: hp('8%'), marginBottom: hp('2%')}} source = {require('../assets/img/arrow-left.png')} />
                    <Image style={{marginLeft: -hp('1%')}}source = {require('../assets/img/arrow-right.png')} />
                    <View style={{position: 'absolute', alignItems: 'center'}}>
                        <Image style={styles.logo} source={require('../assets/img/logo.png')} />
                    </View>
                </View>
                
                <Text style={styles.CFGI}>COMMUNITY FOR GLOBAL {"\n"} INNOVATION</Text>
                <Text style={styles.welcome}>WELCOME</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('0.5%')}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Email"
                    />
                </View>
                <View style={{paddingVertical: hp('0.5%')}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Password"
                    />
                </View>
                <Text style={{ color: 'blue', textAlign: 'right', paddingTop: hp('0.5%'), textDecorationLine: 'underline'}} onPress={() => navigation.push('ForgotPassword')}>Forgot password?</Text>
            </View>

            <View style={{paddingTop: hp('2%'), paddingHorizontal: wp('10%')}}>
              <Pressable style={styles.button} onPress={() => signIn()}>
                <Text style={styles.textStyle}>Login</Text>
              </Pressable>
              <Text style={{ color: 'blue', textAlign: 'right', paddingTop: hp('1%')}} onPress={() => navigation.push('CreateAccount')}>Sign up {'>'}</Text>
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
                <View style={{paddingVertical: hp('13%'), alignItems: 'center'}}>
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
                <View style={{paddingVertical: hp('0.5%'), flexDirection: 'row'}}>
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

                <View style={{paddingVertical: hp('0.5%')}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Email"
                    />
                </View>
                <View style={{paddingVertical: hp('0.5%')}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Password"
                    />
                </View>
            </View>
            <View style={{paddingTop: hp('2%'), paddingHorizontal: wp('10%')}}>
              <Pressable onPress={() => signUp()} style={styles.button}>
                <Text style={styles.textStyle}>JOIN NOW</Text>
              </Pressable>
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
                <View style={{paddingVertical: hp('4%'), alignItems: 'center'}}>
                    <View style={{alignItems: 'center'}}>
                        <Image style={styles.logoFull} source={require('../assets/img/logo-full.png')} />
                    </View>
                </View>
                
                <Text style={styles.password}>Forgot Your Password</Text>
                <Text style={{marginHorizontal: wp('10%'), fontSize: 16, marginBottom: hp('2%')}}>To reset your password please enter the email that you used to register for CFGI.</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('0.5%')}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Email"
                    />
                </View>
            </View>
            <View style={{paddingTop: hp('4%'), paddingHorizontal: wp('10%')}}>
              <Pressable onPress={() => navigation.push('ResetPassword')} style={styles.button}>
                <Text style={styles.textStyle}>CONTINUE</Text>
              </Pressable>
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
            <View style={{alignItems: 'center', paddingVertical: hp('6%')}}>
                <Image style={{marginTop: hp('12%'), position: 'absolute', width:'100%', height: hp('19%')}} source={require('../assets/img/water.png')} />
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
                <View style={{paddingVertical: hp('2%'), alignItems: 'center'}}>
                    <View style={{alignItems: 'center'}}>
                        <Image style={styles.logoFull} source={require('../assets/img/logo-full.png')} />
                    </View>
                </View>
                
                <Text style={styles.password}>An email was sent to you. </Text>
                <Text style={{marginHorizontal: wp('10%'), fontSize: 16, marginBottom: hp('2%')}}>Please enter the validation code and your new password.</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('0.5%')}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Validation Code"
                    />
                </View>

                <View style={{paddingVertical: hp('0.5%')}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="New Password"
                    />
                </View>

                <View style={{paddingVertical: hp('0.5%')}}>
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
                            style={[styles.buttonModal, styles.buttonClose]}
                            onPress={() => signIn()}
                        >
                        <Text style={styles.textStyleModal}>LOGIN</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            {/* <View style={styles.buttonContainer}>
                <Button titleStyle={styles.buttonText} title='CONFIRM PASSWORD' onPress={() => setModalVisible(true)}/>
            </View> */}
            <View style={{paddingTop: hp('2%'), paddingHorizontal: wp('10%')}}>
              <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
                <Text style={styles.textStyle}>CONFIRM PASSWORD</Text>
              </Pressable>
            </View>
            <View style={{alignItems: 'center'}}>
                <Image style={{marginTop: hp('6%'), position: 'absolute', width:'100%', height: hp('25%')}} source={require('../assets/img/water.png')} />
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
        paddingVertical: hp('2%'),
        // fontFamily: 'Righteous-Regular'
    },

    welcome: {
        color: '#3F3356',
        fontSize: 32,
        textAlign: 'center',
        paddingVertical: hp('1%'),
        // fontFamily: 'Righteous-Regular'
    },

    password: {
        color: '#3F3356',
        fontSize: 24,
        textAlign: 'center',
        paddingVertical: hp('1%'),
    },

    buttonContainer: {
        paddingHorizontal: 50,
        paddingVertical: 25,
        justifyContent: "center",
    },

    button: {
        borderRadius: 10,
        paddingVertical: 13,
        paddingHorizontal: 55,
        marginTop: 5,
        backgroundColor: "#4C67F6"
      },
  
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 14
      },

    buttonText: {
        // fontFamily:'Oxygen-Bold', 
        fontSize: 14,
    },

    inputContainer: {
        marginHorizontal: wp('10%'),
        marginVertical: hp('2%'),
    },

    input: {
        height: hp('5%'),
        padding: hp('1%'),
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#DADADA'
      },

      inputNarrowLeft: {
        height: hp('5%'),
        width: wp('39%'),
        padding: wp('2%'),
        marginRight: wp('1%'),
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#DADADA'
      },

      inputNarrowRight: {
        height: hp('5%'),
        width: wp('39%'),
        padding: 10,
        marginLeft: wp('1%'),
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#DADADA'
      },

      logoView: {
          alignItems: 'center',
          paddingTop: hp('10%')
      },

      logo: {
          height: hp('22%'),
          width: hp('22%')
      },

      logoFull: {
        height: hp('8.4%'),
        width: wp('75%')
      },

      water: {
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
        width: hp('5%'),
        height: hp('5%'),
        borderRadius: hp('5%') / 2,
        marginLeft: wp('65%'),
        marginTop: -hp('3%'),
        backgroundColor: "#3C65CC",
      },
      
      circleOrange: {
        width: hp('9%'),
        height: hp('9%'),
        borderRadius: hp('9%') / 2,
        marginLeft: '85%',
        marginTop: -hp('3%'),
        backgroundColor: "#FF6E00",
      },

      circleYellow: {
        width: hp('3%'),
        height: hp('3%'),
        borderRadius: hp('3%') / 2,
        marginRight: '65%',
        marginTop: hp('12%'),
        backgroundColor: "#FAC007",
      },

      circleRed: {
        width: hp('15%'),
        height: hp('15%'),
        borderRadius: hp('15%') / 2,
        marginRight: '126%',
        marginTop: hp('2%'),
        backgroundColor: "#FF564F",
      },

      circleRedBottom: {
        width: hp('9%'),
        height: hp('9%'),
        borderRadius: hp('9%') / 2,
        marginRight: '60%',
        marginTop: hp('3%'),
        backgroundColor: "#FF564F",
      },

      circleOrangeBottom: {
        width: hp('5%'),
        height: hp('5%'),
        borderRadius: hp('5%') / 2,
        marginRight: '20%',
        marginTop: hp('3%'),
        backgroundColor: "#FAC007",
      },

      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: hp('3%')
      },

      modalView: {
        margin: hp('3%'),
        backgroundColor: "white",
        borderRadius: 10,
        padding: hp('5%'),
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

      buttonModal: {
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: 5,
        elevation: 2,
      },

      buttonOpen: {
        backgroundColor: "#F194FF",
      },

      buttonClose: {
        backgroundColor: "#2196F3",
      },

      textStyleModal: {
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