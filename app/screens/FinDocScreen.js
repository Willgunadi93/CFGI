import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { TouchableHighlight } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
// for responsive design 
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from '@react-native-community/checkbox';


// Actual page for applying for financial assistance, allows users to upload documents and fill out answers
// to submit to the database so their application process is manually reviewed
// Part of financial aid stack defined in App.js, directly from landing page
export const FinAppScreen = ({navigation}) => {
    // Set variables and states for opening dropdown menus 
    const [visa_open, setVisaOpen] = useState(false);
    const [visa_value, setVisaValue] = useState(null);

    const [marital_open, setMaritalOpen] = useState(false);
    const [marital_value, setMaritalValue] = useState(null);

    const [permit_open, setPermitOpen] = useState(false);
    const [permit_value, setPermitValue] = useState(null);

    // Set variables and states for short and long answer text input
    const [other_visa, setOtherVisa] = useState(null);
    const [int_student, setIntStud] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [university, setUni] = useState(null);
    const [children, setChildren] = useState(null);
    const [other_permit, setOtherPermit] = useState(null);
    const [aid, setAid] = useState(null);
    const [reason, setReason] = useState(null);


    // Set all dropdown menu choices and their values
    const [visa_choices, setVisaItems] = useState([
        {label: 'F-1', value: 'f1'},
        {label: 'J-1', value: 'j1'}, 
        {label: 'DACA', value: 'daca'},
        {label: 'Green Card (permanent resident)', value: 'green_card'},
        {label: 'Other', value: 'other'}
    ]);

    const [marital_choices, setMaritalItems] = useState([
        {label: 'Single', value: 'single'},
        {label: 'Married', value: 'married'}, 
        {label: 'Widowed', value: 'widowed'},
        {label: 'Divorced', value: 'divorced'},
        {label: 'Domestic Partnership', value: 'partnership'}
    ]);

    const [permit_choices, setPermitItems] = useState([
        {label: 'F-1 without work authorization', value: 'f1_no_work'},
        {label: 'F-1 Hardship EAD (work permit)', value: 'work_permit'}, 
        {label: 'F-1 CPT', value: 'cpt'},
        {label: 'F-1 Pre-Completion OPT', value: 'pre-opt'},
        {label: 'F-1 Regular OPT', value: 'regular_opt'},
        {label: 'F-1 STEM OPT', value: 'stem_opt'},
        {label: 'J-1 work authorized', value: 'j1_work'}
    ]);

    // Checks if the user has checked the checkbox
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
    <ScrollView>
        <View style={styles.container}>
            {/* Back button that allows the user to go back to the landing screen */}
            <TouchableHighlight onPress={() => navigation.goBack()} underlayColor={'#F7F5F9'}>
                <View style={styles.backButtonContainer}>
                    <Ionicons name="arrow-back-circle" size={40} color="#4C67F6"/>
                </View>
            </TouchableHighlight>

            <Text style={styles.header}>Select the type of visa you're current holding</Text>
            <DropDownPicker
                // Set menu choices
                items = {visa_choices}
                // Set the open state
                open = {visa_open}
                // Set the value of the selected choice
                value = {visa_value}
                setValue = {setVisaValue}
                setitems = {setVisaItems}
                setOpen = {setVisaOpen}
                // There's no search bar
                searchable = {false}
                // Making it scrollable
                listMode = "SCROLLVIEW"
                // The height of the dropdown 
                maxHeight = {150} 
                // Added alignSelf to make container center
                style = {{width: wp('76%'), alignSelf:"center"}} 
                // Added alignSelf center to make dropdown center
                containerStyle = {{width: wp('76%'), alignSelf:"center"}} 
            />

            <Text style={styles.header}>If you put "Other" in the last question, please put in the visa you carry. 
            Otherwise, put "N/A" (without quotes).</Text>
                <View style={styles.inputContainer}>
                    <View style={{paddingVertical: hp('1%')}}>
                        <TextInput
                            style={styles.shortAnswerInput}
                            value = {other_visa}
                            setValue = {setOtherVisa}

                            // onChangeText={onChangeText}
                            // onChangeText={(text) => {this.setState({text});}}
                            // value={this.state.text}
                            // multiline onChange={(event) => this.onChangeText(event)}
                            // onChange={(event) =>
                            //     this.onChangeText(event)
                            //   }
                        />
                </View>
            </View>

            <Text style={styles.header}>Please elaborate on why you identify as an international student. Include details such as 
            country of origin, the process you undertook to get your visa(s) and obtain your status, etc.</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style={styles.input}
                        value = {int_student}
                        setValue = {setIntStud}
                        multiline = {true}
                        numberOfLines = {4}
                        textAlignVertical = {'top'}
                    />
                </View>
            </View>

            <Text style={styles.header}>Phone Number</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style = {styles.shortAnswerInput}
                        value = {phone}
                        setValue = {setPhone}
                        
                        // onChangeText={onChangeText}
                        // onChangeText={(text) => {this.setState({text});}}
                        // value={this.state.text}
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

            <Text style={styles.header}>Email Address</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style = {styles.shortAnswerInput}
                        value = {email}
                        setValue = {setEmail}

                        // onChangeText={onChangeText}
                        // onChangeText={(text) => {this.setState({text});}}
                        // value={this.state.text}
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

            <Text style={styles.header}>University you're currently attending</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style = {styles.shortAnswerInput}
                        value = {university}
                        setValue = {setUni}
                        // onChangeText={onChangeText}
                        // onChangeText={(text) => {this.setState({text});}}
                        // value={this.state.text}
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

            <Text style={styles.header}>Marital Status</Text>
            <DropDownPicker
                // Set menu choices
                items = {marital_choices}
                // Set the open state
                open = {marital_open}
                // Set the value of the selected choice
                value = {marital_value}
                setValue = {setMaritalValue}
                setitems = {setMaritalItems}
                setOpen = {setMaritalOpen}
                // There's no search bar
                searchable = {false}
                // Making it scrollable
                listMode = "SCROLLVIEW"
                // The height of the dropdown 
                maxHeight = {150} 
                // Added alignSelf to make container center
                style = {{width: wp('76%'), alignSelf:"center"}} 
                // Added alignSelf center to make dropdown center
                containerStyle = {{width: wp('76%'), alignSelf:"center"}} 
            />            

            <Text style={styles.header}>If you have children, please note how many</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style = {styles.childrenInput}
                        value = {children}
                        setValue = {setChildren}
                        // onChangeText={onChangeText}
                        // onChangeText={(text) => {this.setState({text});}}
                        // value={this.state.text}
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

            <Text style={styles.header}>Select the work permit you currently carry</Text>
            <DropDownPicker
                // Set dropdown menu choices
                items = {permit_choices}
                // Set the open state
                open = {permit_open}
                // Set the value of the selected choice
                value = {permit_value}
                setValue = {setPermitValue}
                setitems = {setPermitItems}
                setOpen = {setPermitOpen}
                // There is no search bar
                searchable = {false}
                // Making it scrollable
                listMode = "SCROLLVIEW"
                // The height of the dropdown 
                maxHeight = {150} 
                // Added alignSelf to make container center
                style = {{width: wp('76%'), alignSelf:"center"}} 
                // Added alignSelf center to make dropdown center
                containerStyle = {{width: wp('76%'), alignSelf:"center"}} 
            />

            <Text style={styles.header}>If you put "Other" in the last question, please put in the visa you carry. 
            Otherwise, put "N/A" (without quotes).</Text>
                <View style={styles.inputContainer}>
                    <View style={{paddingVertical: hp('1%')}}>
                        <TextInput
                            style = {styles.shortAnswerInput}
                            value = {other_permit}
                            setValue = {setOtherPermit}
                            // onChangeText={onChangeText}
                            // onChangeText={(text) => {this.setState({text});}}
                            // value={this.state.text}
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

            {/* Allows the user to input an amount of aid */}
            <Text style={styles.header}>Requested amount of aid</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style = {styles.shortAnswerInput}
                        value = {aid}
                        setValue = {setAid}
                        placeholder = "$ USD"
                        // onChangeText={onChangeText}
                        // onChangeText={(text) => {this.setState({text});}}
                        // value={this.state.text}
                        
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

            {/* Long answer question that the user can type in extensively. Question specifically describes the types of financial 
            situations the user has to describe, answer must be thorough and detailed in order to be accepted */}
            <Text style={styles.header}>If you or any family members have a situation that has caused to incur 
            expenses, debts, or loss of income, describe the situation in the box below. 
            Specify the amounts of the expenses, debts, and income losses in as much detail as possible.
            Examples may include medical expenses, job loss, eviction, and homelessness.</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style = {styles.input}
                        value = {reason}
                        setValue = {setReason}
                        // onChangeText={(text) => {this.setState({text});}}
                        // value={this.state.text}
                        multiline = {true}
                        numberOfLines = {4}
                        textAlignVertical = {'top'}
                    />
                </View>
            </View>


            {/* Allows users to attach necessary financial documents and upload them to the database */}
            <Text style={styles.header}>Attach Documents</Text>
            <Text style={styles.mainText}>Please provide any and all financial documents that 
            prove your current financial situation and status. This includes any federal income tax returns, 
            bank statements, investment records, and records of untaxed income from either the United States or from your home country.</Text>
            {/* Insert upload docs here */}

            {/* Temporary until uploading files is implemented */}
            <View style={{paddingVertical: hp('3%')}}></View>

            <Text style={styles.mainText}>I have filled out this application with complete accuracy and care.
            I understand that any incomplete, inaccurate, or invalid information may result in this application getting rejected. 
            I agree to the Terms and Conditions.</Text>
            <View style={{paddingLeft: wp('45%')}}>
            <CheckBox
                disabled = {false}
                value = {toggleCheckBox}
                onValueChange = {(newValue) => setToggleCheckBox(newValue)}
            />
            </View>

            <View style={styles.buttonContainer}>
                {/* Allows the user to save the current application and come back to it later */}
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>SAVE</Text>
                </TouchableOpacity>
                {/* Submits the current application by uploading to the database, will be manually reviewed by CFGI */}
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
    );
  }


// Stylesheet
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F5F9',
    //   alignItems: 'center',
      justifyContent: 'center',
    },

    // Defines styling for the back button
    backButtonContainer: {
        flexDirection: 'row', 
        alignItems: 'flex-start',
        paddingLeft: wp('10%')
    },
    
    // Defines styling for all section headers
    header: {
        fontSize: 18,
        textAlign: 'left', 
        paddingLeft: wp('13%'),
        paddingRight: wp('13%'),
        paddingTop: hp('2.2%'),
        color: '#3F3356'
    },

    // Defines text for uploading documents
    mainText: {
        textAlign: 'center',
        fontSize: 16,
        paddingLeft: wp('13%'),
        paddingRight: wp('13%'),
        textAlign: 'left'
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
        alignItems: 'center',
        paddingTop: 3
    },

    // Defines padding for all text box containers
    inputContainer: {
        marginHorizontal: hp('6.5%'),
        marginVertical: wp('1%'),
    },

    // Defines the long form text boxes themselves
    input: {
        height: hp('30%'),
        width: wp('76%'),
        padding: wp('3%'),
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#DADADA'
      },

    // Defines how user inputs text in all short answer textboxes (amount of money, phone num, etc.)
    shortAnswerInput: {
        height: hp('5.2%'),
        width: wp('76%'),
        padding: wp('3%'),
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#DADADA',
      },

    // Tiny input text for number of children 
    childrenInput: {
        height: hp('5.2%'),
        width: wp('10%'),
        padding: wp('3%'),
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#DADADA',
    }
});
