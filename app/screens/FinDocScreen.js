import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { TouchableHighlight } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
// for responsive design 
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';

// Actual page for applying for financial assistance, allows users to upload documents and fill out answers
// to submit to the database so their application process is manually reviewed
// Part of financial aid stack defined in App.js, directly from landing page
export const FinAppScreen = ({navigation}) => { 
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Back button that allows the user to go back to the landing screen */}
            <TouchableHighlight onPress={() => navigation.goBack()}>
                <View style={styles.backButtonContainer}>
                    <Ionicons name="arrow-back-circle" size={40} color="#4C67F6"/>
                </View>
            </TouchableHighlight>

            {/* Allows the user to input an amount of aid */}
            <Text style={styles.header}>Requested amount of aid:</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style={styles.moneyInput}
                        // onChangeText={onChangeText}
                        // onChangeText={(text) => {this.setState({text});}}
                        // value={this.state.inputValue}
                        placeholder="$"
                        // multiline onChange={(event) => this.onChangeText(event)}
                        // onChange={(event) =>
                        //     this.onChangeText(event)
                        //   }
                        //   onContentSizeChange={(event) => {
                        //     this.setState({ height: event.nativeEvent.contentSize.height })
                        //   }}
                    />
                </View>
            </View>
    
            {/* Long answer question that the user can type in extensively. Question is vague to allow all types of situations
            but answer must be thorough and detailed in order to be accepted */}
            <Text style={styles.header}>Provide justification on why you need the money:</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style={styles.input}
                        // onChangeText={onChangeText}
                    />
                </View>
            </View>
            {/* Allows users to attach necessary financial documents and upload them to the database */}
            <Text style={styles.header}>Attach Documents</Text>
            <Text style={styles.mainText}>Please provide the following documents:</Text>
            {/* Insert upload docs here */}

            <View style={styles.buttonContainer}>
                {/* Allows the user to save the current application and come back to it later */}
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>SAVE</Text>
                </TouchableOpacity>
                <View style={styles.space}></View>
                {/* Submits the current application by uploading to the database, will be manually reviewed by CFGI */}
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    );
  }


// Stylesheet
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F5F9',
      alignItems: 'center',
      justifyContent: 'center',
    },

    // Defines styling for the back button
    backButtonContainer: {
        flexDirection: 'row', 
        alignItems: 'flex-start',
        paddingRight: wp('67%')
    },
    
    // Defines styling for all section headers
    header: {
        fontSize: 25,
        textAlign: 'left', 
        fontWeight: 'bold',
        paddingLeft: wp('13%'),
        paddingRight: wp('13%'),
        paddingTop: hp('4%'),
        color: '#3F3356'
    },

    // Defines text for instructions
    mainText: {
        textAlign: 'left',
        fontSize: 16
    }, 

    // Defines the styling for both buttons 
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: hp('2%'),
        justifyContent: 'space-around'
    },

    // Defines styling for both save and submit buttons
    buttonStyle: {
        // fontFamily:'Oxygen-Bold', 
        backgroundColor:"#4C67F6",
        padding: 10, 
        width: wp('30.6%'),
        height: hp('6.5%'),
        alignContent: 'space-between',
    },

    // Styling for the text inside the buttons
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },

    // Defines padding for all text box containers
    inputContainer: {
        marginHorizontal: hp('6.5%'),
        marginVertical: wp('1%'),
    },

    // make new lines when text reaches end of box
    // Defines the actual input text boxes themselves
    input: {
        height: hp('20%'),
        width: wp('76%'),
        padding: wp('3%'),
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#DADADA'
      },

    // make new lines when text reaches end of box
    // Defines how user inputs text in the money amount textbox
    moneyInput: {
        height: hp('5%'),
        width: wp('76%'),
        padding: wp('3%'),
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#DADADA',
      },

    // Defines the space between the submit and save buttons (only way to define this ufortunately)
    space: {
        padding: wp('2%')
    }
});
