import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import {  Text, StyleSheet, Button, View, TextInput, Image, Modal, Pressable } from "react-native";
// Contains all components, used for styling purposes
import { ScreenContainer } from 'react-native-screens';
import * as Font from 'expo-font';
// Used to authenticate the user
import { AuthContext } from './context';
// For responsive design
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import axiosInstance from '../helpers/axiosInterceptors';
import axiosRegister from '../helpers/axiosRegister';
import { NavigationEvents } from 'react-navigation';


// User is taken to this component when the app is opened 
export const SignIn = ({ navigation}) => { 
    const [number, onChangeText] = React.useState(null);
    const { signIn } = React.useContext(AuthContext);
    const [form, setForm] = React.useState({});

    const onChange = ({name, value}) => {
      setForm({...form, [name]:value});
    }

    const onSubmit = () => {
      if(form.username && form.password) {
        axiosLogin(form);
      }
    }
    return (
        // Formatting logo and arrow buttons
        <ScreenContainer style={StyleSheet.container}>
          <ScrollView>
            <View style={[styles.logoView, ({paddingTop: hp('20%')})]}>
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
            {/* Ask the user for their username and password */}
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('0.5%')}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Username"
                    />
                </View>
                <View style={{paddingVertical: hp('0.5%')}}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Password"
                    />
                </View>
                {/* Link that allows the user to reset their password */}
                {/* <Text style={{ color: 'blue', textAlign: 'right', paddingTop: hp('0.5%'), textDecorationLine: 'underline'}} onPress={() => navigation.push('ForgotPassword')}>Forgot password?</Text> */}
            </View>

            {/* Button that allows the user to log in to their account*/}
            <View style={{paddingTop: hp('2%'), paddingHorizontal: wp('10%')}}>
              <Pressable style={styles.button} onPress={() => signIn()}>  
                <Text style={styles.textStyle}>Login</Text>
              </Pressable>
                {/* Link that allows the user to sign up*/}
              <Text style={{ color: 'blue', textAlign: 'right', paddingTop: hp('1%')}} onPress={() => navigation.push('CreateAccount')}>Sign up {'>'}</Text>
            </View>
            </ScrollView>
        </ScreenContainer>
    );
}

// Component that allows the user to create a new account
export const CreateAccount = ({navigation}) => {
    // After the user enters their first name, last name, username, email, and password,
    // their account is created, their account information is sent in json format and is stored in the database
    const { signUp } = React.useContext(AuthContext);
    const [number, onChangeText] = React.useState(null);

    const [form, setForm] = React.useState({});
    const [errors, setErrors] = React.useState({});

    const onChange = ({name, value}) => {
      setForm({...form, [name]:value});
    }

    const onSubmit = () => {
      //validation
      console.log('form: ', form);

      //username validation
      if (!form.username) {
        setErrors((prev) => {
          return {...prev, userName: 'Please add a username'};
        });
      }
      //firstname validation
      if(!form.firstName) {
        setErrors((prev) => {
          return{...prev, firstName:'Please enter a first name'};
        });
      }

      //check if every all fields are inputted
      if(Object.values(form).length === 5 && Object.values(form).every((item) => item.trim().length > 0)) {
        //post request to api 
        axiosRegister(form);
        navigation.navigate(SignIn);
      }
      

    }


    return (
        // Background images and logos
        <ScreenContainer style={StyleSheet.container}>
          <ScrollView>
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
                {/* User inputs their first and last name when signing up for a new account*/}
                <View style={{paddingVertical: hp('0.5%'), flexDirection: 'row'}}>
                    <TextInput
                        style={styles.inputNarrowLeft}
                        onChangeText={(value) => {
                          onChange({name: 'firstName', value});
                        }}
                        placeholder="First Name"
                        error={errors.firstName}
                    />
                    <TextInput
                        style={styles.inputNarrowRight}
                        onChangeText={(value) => {
                          onChange({name: 'lastName', value});
                        }}
                        placeholder="Last Name"
                        error={errors.lastName}
                    />
                </View>

                {/* User inputs their email when creating a new account */}
                <View style={{paddingVertical: hp('0.5%')}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                          onChange({name: 'email', value});
                        }}
                        placeholder="Email"
                        error={errors.email}
                    />
                </View>
                {/* User inputs their username when creating a new account */}
                <View style={{paddingVertical: hp('0.5%')}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                          onChange({name: 'username', value});
                        }}
                        placeholder="Username"
                        error={errors.username}
                    />
                </View>
                {/* User inputs their password when creating a new account*/}
                <View style={{paddingVertical: hp('0.5%')}}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={(value) => {
                          onChange({name: 'password', value});
                        }}
                        placeholder="Password"
                        error={errors.password}
                    />
                </View>
            </View>
            {/* Once button is clicked, the user's account is created, and is directed back to the login page */}
            <View style={{paddingTop: hp('2%'), paddingHorizontal: wp('10%')}}>
              <Pressable onPress={onSubmit} style={styles.button}>
                <Text style={styles.textStyle}>JOIN NOW</Text>
              </Pressable>
            </View>
          </ScrollView>
        </ScreenContainer>
    );
}
//() => signUp()

// User is taken to this component when they forget their password
export const ForgotPassword = ({navigation}) => {
    // Ideally, users input their email and will receive a validation code, but the functionality is not
    // implemented due to time limitations, this is a prood of concept and shows the user interaction and flow.
    const { signUp } = React.useContext(AuthContext);
    const [number, onChangeText] = React.useState(null);
    return (
        <ScreenContainer style={StyleSheet.container}>
          <ScrollView>
            <View style={styles.logoView}>
                <View style={{alignItems: 'center'}}>
                  <Image style={{width: 250, height: 150, resizeMode: 'contain'}} source={require('../assets/img/logo-full.png')} />
                </View>
                {/* Instructions */}
                <Text style={styles.password}>Forgot Your Password</Text>
                <Text style={{marginHorizontal: wp('10%'), fontSize: 16, marginBottom: hp('2%')}}>To reset your password please enter the email that you used to register for CFGI.</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('0.5%')}}>
                    {/* User enters their email */}
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Email"
                    />
                </View>
            </View>
            {/* Button that allows the user to continue to the next component */}
            <View style={{paddingTop: hp('4%'), paddingHorizontal: wp('10%')}}>
              <Pressable onPress={() => navigation.push('ResetPassword')} style={styles.button}>
                <Text style={styles.textStyle}>CONTINUE</Text>
              </Pressable>
            </View>
           
            {/* Defines formatting of phone screen */}
            <View style={{alignItems: 'center', paddingVertical: hp('6%')}}>
                <Image style={{marginTop: hp('16%'), position: 'absolute', width:'100%', height: hp('19%')}} source={require('../assets/img/water.png')} />
                <View style={styles.circleRedBottom}></View>
                <View style={styles.circleOrangeBottom}></View>
            </View>
          </ScrollView>
        </ScreenContainer>
    );
}

// Once the user enters their email, they are taken to this component
// This component will allow the user to enter in a code sent to their email (from previous component)
// But like the component above, this is a proof of concept that shows the user interaction and flow
export const ResetPassword = () => {    
    const { signUp, signIn } = React.useContext(AuthContext);
    const [number, onChangeText] = React.useState(null);

    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <ScreenContainer style={StyleSheet.container}>
            {/* Sets the logo and background formatting */}
            <View style={styles.logoView}>
                <View style={{paddingVertical: hp('2%'), alignItems: 'center'}}>
                    <View style={{alignItems: 'center'}}>
                        <Image style={{width: 250, height: 100, resizeMode: 'contain'}} source={require('../assets/img/logo-full.png')} />
                    </View>
                </View>
                
                <Text style={styles.password}>An email was sent to you. </Text>
                <Text style={{marginHorizontal: wp('10%'), fontSize: 16, marginBottom: hp('2%')}}>Please enter the validation code and your new password.</Text>
            </View>
            {/* User can enter their validation code here */}
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('0.5%')}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Validation Code"
                    />
                </View>

                {/* User can enter in a new password here */}
                <View style={{paddingVertical: hp('0.5%')}}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="New Password"
                    />
                </View>

                {/* User can enter in the new password again to confirm*/}
                <View style={{paddingVertical: hp('0.5%')}}>
                    <TextInput
                        secureTextEntry={true}
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
                {/* A modal is brought up once the user's password has been changed in the database */}
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Password successfully set!</Text>
                        <Pressable
                            style={[styles.buttonModal, styles.buttonClose]}
                            onPress={() => signIn()}
                        >
                            {/* Now user can log in */}
                        <Text style={styles.textStyleModal}>LOGIN</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            {/* Modal will bring up a Confirm Password dialogue and when clicked logs the user in*/}
            <View style={{paddingTop: hp('2%'), paddingHorizontal: wp('10%')}}>
              <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
                <Text style={styles.textStyle}>CONFIRM PASSWORD</Text>
              </Pressable>
            </View>
            {/* Formats logo and backgrouund */}
            <View style={{alignItems: 'center'}}>
                <Image style={{marginTop: hp('6%'), position: 'absolute', width:'100%', height: hp('25%')}} source={require('../assets/img/water.png')} />
                <View style={styles.circleRedBottom}></View>
                <View style={styles.circleOrangeBottom}></View>
            </View>
        </ScreenContainer>
    );
}

// Stylesheets for signing in
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c3bffa',
      alignItems: 'center',
      justifyContent: 'center',
    },

    // Formatting the CFGI introduction text
    CFGI: {
        color: '#69676F',
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: hp('2%'),
        // fontFamily: 'Righteous-Regular'
    },

    // Formatting welcome text
    welcome: {
        color: '#3F3356',
        fontSize: 32,
        textAlign: 'center',
        paddingVertical: hp('1%'),
        // fontFamily: 'Righteous-Regular'
    },

    // Formatting password text
    password: {
        color: '#3F3356',
        fontSize: 24,
        textAlign: 'center',
        paddingVertical: hp('1%'),
    },

    // Formatting all buttons
    buttonContainer: {
        paddingHorizontal: 50,
        paddingVertical: 25,
        justifyContent: "center",
    },

    // Formatting all buttons
    button: {
        borderRadius: 10,
        paddingVertical: 13,
        paddingHorizontal: 55,
        marginTop: 5,
        backgroundColor: "#4C67F6"
      },
  
    //   Formatting general text
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 14
      },

    //   Formatting button text
    buttonText: {
        // fontFamily:'Oxygen-Bold', 
        fontSize: 14,
    },

    // Formatting all text input
    inputContainer: {
        marginHorizontal: wp('10%'),
        marginVertical: hp('2%'),
    },

    // Formatting all text input
    input: {
        height: hp('5%'),
        padding: hp('1%'),
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#DADADA'
      },

    //   Formatting first name
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

    //   Formatting last name
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

    //   Formatting the logo
      logoView: {
          alignItems: 'center',
          paddingTop: hp('7%')
      },

    //  Styling for logo 
      logo: {
          height: hp('22%'),
          width: hp('22%')
      },

    //   Styling for logo (version 2)
      logoFull: {
        height: hp('8.4%'),
        width: wp('75%')
      },

    //   Visual element
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

    //   Visual element
      circleBlue: {
        width: hp('5%'),
        height: hp('5%'),
        borderRadius: hp('5%') / 2,
        marginLeft: wp('65%'),
        marginTop: -hp('3%'),
        backgroundColor: "#3C65CC",
      },
      
     //   Visual element
      circleOrange: {
        width: hp('9%'),
        height: hp('9%'),
        borderRadius: hp('9%') / 2,
        marginLeft: '85%',
        marginTop: -hp('3%'),
        backgroundColor: "#FF6E00",
      },

    //   Visual element
      circleYellow: {
        width: hp('3%'),
        height: hp('3%'),
        borderRadius: hp('3%') / 2,
        marginRight: '65%',
        marginTop: hp('12%'),
        backgroundColor: "#FAC007",
      },

    //   Visual element
      circleRed: {
        width: hp('15%'),
        height: hp('15%'),
        borderRadius: hp('15%') / 2,
        marginRight: '126%',
        marginTop: hp('2%'),
        backgroundColor: "#FF564F",
      },

    //   Visual element
      circleRedBottom: {
        width: hp('9%'),
        height: hp('9%'),
        borderRadius: hp('9%') / 2,
        marginRight: '60%',
        marginTop: hp('3%'),
        backgroundColor: "#FF564F",
      },

    //   Visual element
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

    //   Formatting the modal
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

    //   Formatting the modal
      buttonModal: {
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: 5,
        elevation: 2,
      },

    //   Formatting the modal exit button
      buttonClose: {
        backgroundColor: "#2196F3",
      },

    //   Formatting the modal text
      textStyleModal: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },

    //   Formatting the modal text
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: 'bold'
      }
  });
