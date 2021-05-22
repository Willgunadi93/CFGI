import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { TouchableHighlight } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
// for responsive design 
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
// import CheckBox from '@react-native-community/checkbox';


// Actual page for applying for financial assistance, allows users to upload documents and fill out answers
// to submit to the database so their application process is manually reviewed
// Part of financial aid stack defined in App.js, directly from landing page
export const FinAppScreen = ({navigation}) => {
    // Set variables and states for opening dropdown menus 
    const [status_open, setStatusOpen] = useState(false);
    const [status_value, setStatusValue] = useState(null);

    const [marital_open, setMaritalOpen] = useState(false);
    const [marital_value, setMaritalValue] = useState(null);

    const [degree_open, setDegreeOpen] = useState(false);
    const [degree_value, setDegreeValue] = useState(null);

    // Set variables and states for short and long answer text input
    const [first_name, setFirstName] = useState(null);
    const [last_name, setLastName] = useState(null);
    const [other_status, setOtherStatus] = useState(null);
    const [other_degree, setOtherDegree] = useState(null);
    const [int_student, setIntStud] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [university, setUni] = useState(null);
    const [study, setStudy] = useState(null);
    const [grad_year, setGradYear] = useState(null);
    const [children, setChildren] = useState(null);
    const [aid, setAid] = useState(null);
    const [reason, setReason] = useState(null);


    // Set all dropdown menu choices and their values
    const [degree_options, setDegreeItems] = useState([
        {label: "Associate's", value: 'associate'},
        {label: "Bachelor's", value: 'bachelor'}, 
        {label: "Master's", value: 'master'},
        {label: "Doctoral", value: 'doctoral'},
        {label: "Professional", value: 'professional'},
        {label: "Other", value: 'other'}
    ]);

    const [marital_choices, setMaritalItems] = useState([
        {label: 'Single', value: 'single'},
        {label: 'Married', value: 'married'}, 
        {label: 'Widowed', value: 'widowed'},
        {label: 'Divorced', value: 'divorced'},
        {label: 'Domestic Partnership', value: 'partnership'}
    ]);

    const [status_choices, setStatusItems] = useState([
        {label: 'F-1 without work authorization', value: 'f1_no_work'},
        {label: 'F-1 with work permit based on financial hardship', value: 'work_permit'}, 
        {label: 'F-1 CPT', value: 'cpt'},
        {label: 'F-1 Pre-Completion OPT', value: 'pre-opt'},
        {label: 'F-1 Regular OPT', value: 'regular_opt'},
        {label: 'F-1 STEM OPT', value: 'stem_opt'},
        {label: 'J-1 without work authorization', value: 'j1_no_work'},
        {label: 'J-1 work authorized', value: 'j1_work'},
        {label: 'DACA with work permit', value: 'daca_work'},
        {label: 'DACA without work permit', value: 'daca_no_work'},
        {label: 'Green Card/Lawful Permanent Resident (LPR)', value: 'lpr'},
        {label: 'Other', value: 'other'},
    ]);

    // Checks if the user has checked the checkbox
    // const [toggleCheckBox, setToggleCheckBox] = useState(false);

    //Field Error States; 'false' means no errors
    const [fNameError, setfNameError] = useState(false);
    const [LNameError, setLNameError] = useState(false);

    //Validation for only regex expression
    function onlyRegex (item, expression, error){
        var exp = new RegExp(expression)
        if(!exp.test(item)){
            error(true)
        }
        else{
            error(false)
        }
    }
    
    return (
    <ScrollView>
        <View style={styles.container}>
            {/* Back button that allows the user to go back to the landing screen */}
            <TouchableHighlight onPress={() => navigation.goBack()} underlayColor={'#F7F5F9'}>
                <View style={styles.backButtonContainer}>
                    <Ionicons name="arrow-back-circle" size={40} color="#4C67F6"/>
                </View>
            </TouchableHighlight>

            <Text style={styles.mainText}>Please read through this document carefully and answer all questions carefully and accurately.
            By filling it out, you agree to the <Text style={{ color: 'blue', textDecorationLine: 'underline'}} onPress={() => navigation.navigate('termsAndConditions')}>Terms and Conditions</Text>.</Text>

            <Text style={styles.header}>First Name</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    {/* <TextInput
                        style = {styles.shortAnswerInput}
                        // value = {first_name}
                        setValue = {setFirstName}

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
                    /> */}

                    {/* Stephanie Edit */}
                    <TextInput
                        onChangeText={name => setFirstName({name})}
                        onChange={name => onlyRegex(name.nativeEvent.text, '^[a-zA-Z]+$', setfNameError)}
                        style={[styles.shortAnswerInput,{borderColor: fNameError? '#E76060': '#DADADA'}]}
                    />
                    {fNameError? <Text style={{color:'#E76060'}}>Please provide a valid entry.</Text>: null}
                    {/* ===== */}
                </View>
            </View>

            <Text style={styles.header}>Family/Last Name</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    {/* <TextInput
                        style = {styles.shortAnswerInput}
                        value = {last_name}
                        setValue = {setLastName}

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
                    /> */}
                    <TextInput
                        onChangeText={name => setLastName({name})}
                        onChange={name => onlyRegex(name.nativeEvent.text, '^[a-zA-Z]+$',setLNameError)}
                        style={[styles.shortAnswerInput,{borderColor: LNameError? '#E76060': '#DADADA'}]}
                    />
                    {LNameError? <Text style={{color:'#E76060'}}>Please provide a valid entry.</Text>: null}
                    {/* ===== */}
                </View>
            </View>

            {/* Use calendar functionality for date of */}

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

            <Text style={styles.header}>University/college you're currently attending</Text>
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

            <Text style={styles.header}>What degree are you seeking?</Text>
            <DropDownPicker
                // Set menu choices
                items = {degree_options}
                // Set the open state
                open = {degree_open}
                // Set the value of the selected choice
                value = {degree_value}
                setValue = {setDegreeValue}
                setitems = {setDegreeItems}
                setOpen = {setDegreeOpen}
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
            

            <Text style={styles.header}>If you put "Other" in the last question, please put in your degree. 
            Otherwise, put "N/A" (no quotes).</Text>
                <View style={styles.inputContainer}>
                    <View style={{paddingVertical: hp('1%')}}>
                        <TextInput
                            style={styles.shortAnswerInput}
                            value = {other_degree}
                            setValue = {setOtherDegree}

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


            <Text style={styles.header}>Field of study</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style = {styles.shortAnswerInput}
                        value = {study}
                        setValue = {setStudy}
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


            <Text style={styles.header}>Expected year of graduation</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style = {styles.shortAnswerInput}
                        value = {grad_year}
                        setValue = {setGradYear}
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

            <Text style={styles.header}>If you have children, please note how many. Otherwise, put "N/A" (no quotes).</Text>
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

            <Text style={styles.header}>What is your current U.S. immigration status?</Text>
            <DropDownPicker
                // Set menu choices
                items = {status_choices}
                // Set the open state
                open = {status_open}
                // Set the value of the selected choice
                value = {status_value}
                setValue = {setStatusValue}
                setitems = {setStatusItems}
                setOpen = {setStatusOpen}
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

            <Text style={styles.header}>If you put "Other" in the last question, please put in your status.
            Otherwise, put "N/A" (no quotes).</Text>
                <View style={styles.inputContainer}>
                    <View style={{paddingVertical: hp('1%')}}>
                        <TextInput
                            style={styles.shortAnswerInput}
                            value = {other_status}
                            setValue = {setOtherStatus}

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


            {/* Allows the user to input an amount of aid */}
            <Text style={styles.header}>How much financial assistance are you seeking?*</Text>
            <View style={{paddingTop: hp('1%')}}></View>
            <Text style={styles.mainText}>*Most CFGI scholarships are between $200-$1000 USD and are offered on a one-time basis for a specific need.</Text>
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
            <Text style={styles.header}>Why do you need support? If you or any family members have a situation that has caused to incur 
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


            {/* Temporary until uploading files is implemented */}
            <View style={{paddingVertical: hp('3%')}}></View>

            <Text style={styles.mainText}>I have filled out this application with complete accuracy and care.
            I understand that any incomplete, inaccurate, or invalid information may result in this application getting rejected. 
            I agree to the Terms and Conditions.</Text>
            <View style={{paddingLeft: wp('45%')}}>
            {/* <CheckBox
                disabled = {false}
                value = {toggleCheckBox}
                onValueChange = {(newValue) => setToggleCheckBox(newValue)}
            /> */}
            </View>

            <View style={styles.buttonContainer}>
                {/* Allows the user to save the current application and come back to it later */}
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>SAVE</Text>
                </TouchableOpacity>
                {/* Submits the current application by uploading to the database, will be manually reviewed by CFGI */}
                {/* Directs user to confirmation screen */}
                <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("FinAppConfirmation")} underlayColor={'#F7F5F9'}>
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
        borderRadius: 10,
        paddingVertical: 13,
        paddingHorizontal: 55,
        marginTop: 5,
        backgroundColor: "#4C67F6"
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
