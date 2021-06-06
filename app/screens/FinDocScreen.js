import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
// for responsive design 
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import { Divider } from 'react-native-elements';

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
    const [reason, setReason] = useState(null)

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


    // Field Error States; 'false' means no errors
    const [fNameError, setfNameError] = useState(false);
    const [LNameError, setLNameError] = useState(false);
    const [degreeError, setDegreeError] = useState(false);
    const [statusError, setStatusError] = useState(false);
    const [maritalError, setMaritalError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [text1Error, setText1Error] = useState(false);
    const [uniError, setUniError] = useState(false);
    const [otherDegreeError, setOtherDegreeError] = useState(false);
    const [studyError, setStudyError] = useState(false);
    const [gradYearError, setGradYearError] = useState(false);
    const [childrenError, setChildrenError] = useState(false);
    const [otherStatusError, setOtherStatusError] = useState(false);
    const [aidError, setAidError] = useState(false);
    const [reasonError, setReasonError] = useState(false);
    
    // Validation for only regex expression
    function onlyRegex (item, expression, error) {
        var exp = new RegExp(expression)
        if(!exp.test(item)){
            error(true)
        }
        else{
            error(false)
        }
    }
    
    // Validation for non-empty states
    function nonEmpty(item, error){
        if(item === ''){
            error(true)
        }
        else{
            error(false)
        }
    }

    function onSubmitEntry(){
        var values = [degree_value, status_value, marital_value, first_name, last_name, other_status, other_degree, int_student,phone, email,
        university, study, grad_year, children, aid, reason];
        var states = [setDegreeError, setStatusError, setMaritalError, setfNameError, setLNameError, setOtherStatusError, setOtherDegreeError, setText1Error, setPhoneError, setEmailError, setUniError,
        setStudyError, setGradYearError, setChildrenError, setAidError, setReasonError];
        
        //Check if none of them have been answered
        for(var x = 0; x < values.length; x++){
            if (values[x] === null){
                states[x](true);
            }
        }
    }

    // If all the inputs are filled in, the user will be taken to the confirmation page (add database)
    function onSubmission(){
        var errors = [degreeError, statusError, maritalError, reasonError, aidError, otherStatusError, childrenError, gradYearError, 
            studyError, otherDegreeError, uniError, text1Error, phoneError, emailError, maritalError, statusError, degreeError,LNameError,fNameError];
        if(errors.every((e) => e === false))
            return(navigation.navigate("FinAppConfirmation"));
    }

    // Our actual screen
    return (
    <ScrollView>
        <View style={styles.container}>
            <View style={{}}>
            <Text style={{paddingTop: 30, paddingBottom:20, fontWeight:'bold', fontSize:24, textAlign:'center', color: "#3F3356"}}>EMERGENCY FINANCIAL AID APPLICATION</Text>
            <Text style={[styles.mainText, ({textAlign:'center', paddingBottom: 30})]}>Please read through this document thoroughly and answer all questions carefully and accurately. By filling it out, you agree to the <Text style={{ color: 'blue', textDecorationLine: 'underline'}} onPress={() => navigation.navigate('termsAndConditions')}>Terms and Conditions</Text>.</Text>
            <Divider></Divider>
            </View>

            <Text style={styles.header}>First Name</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    {/* Stephanie Edit */}
                    <TextInput
                        // setValue = {setFirstName}
                        // value = {first_name}
                        onChangeText={name => setFirstName({name})}
                        onChange={name => nonEmpty(name.nativeEvent.text, setfNameError)}
                        style={[styles.shortAnswerInput,{borderColor: fNameError? '#E76060': '#DADADA'}]}
                    />
                    {fNameError? <Text style={{color:'#E76060'}}>Please enter your first name.</Text>: null}
                </View>
            </View>

            <Text style={styles.header}>Family/Last Name</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        onChangeText={name => setLastName({name})}
                        onChange={name => nonEmpty(name.nativeEvent.text, setLNameError)}
                        style={[styles.shortAnswerInput,{borderColor: LNameError? '#E76060': '#DADADA'}]}
                    />
                    {LNameError? <Text style={{color:'#E76060'}}>Please enter your last name.</Text>: null}
                </View>
            </View>

            <Text style={styles.header}>Email Address</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style = {[styles.shortAnswerInput, {borderColor: emailError? '#E76060': '#DADADA'}]}
                        onChangeText={name => setEmail({name})}
                        onEndEditing={name => onlyRegex(name.nativeEvent.text,'^.+@.+\\..+$', setEmailError)}
                    />
                    {emailError? <Text style={{color:'#E76060'}}>Please provide a valid email address.</Text>: null}
                </View>
            </View>

            <Text style={styles.header}>Phone Number</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style = {[styles.shortAnswerInput, {borderColor: phoneError? '#E76060': '#DADADA'}]}
                        onChangeText={name => setPhone({name})}
                        onChange={name => onlyRegex(name.nativeEvent.text,"^(\\+)?[0-9]{9,18}$", setPhoneError)}
                    />
                    {phoneError? <Text style={{color:'#E76060'}}>Please provide a valid phone number, 
                    all numbers together with no parantheses ("()"), no dashes ("-"), and no spaces (" "). 
                    Pluses ("+") are allowed. </Text>: null}
                </View>
            </View>

            <Text style={styles.header}>Please elaborate on why you identify as an international student. Include details such as 
            country of origin, the process you undertook to get your visa(s) and obtain your status, etc.</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        // style={styles.input}
                        // value = {int_student}
                        // setValue = {setIntStud}
                        multiline = {true}
                        numberOfLines = {4}
                        textAlignVertical = {'top'}
                        style = {[styles.input, {borderColor: text1Error? '#E76060': '#DADADA'}]}
                        onChangeText={name => setIntStud({name})}
                        onChange={name => nonEmpty(name.nativeEvent.text, setText1Error)}
                    />
                    {text1Error? <Text style={{color:'#E76060'}}>Please answer the question.</Text>: null}
                </View>
            </View>

            <Text style={styles.header}>University/college you're currently attending</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style = {[styles.shortAnswerInput, {borderColor: uniError? '#E76060': '#DADADA'}]}
                        onChangeText={name => setUni({name})}
                        onChange={name => nonEmpty(name.nativeEvent.text, setUniError)}
                    />
                    {uniError? <Text style={{color:'#E76060'}}>Please enter your university name.</Text>: null}
                </View>
            </View>

            <Text style={styles.header}>What degree are you seeking?</Text>
            <DropDownPicker
                // Set menu choices
                items = {degree_options}
                // Set the open state
                open = {degree_open}
                // Set the value of the selected choice
               
                setValue = {setDegreeValue}
                value = {degree_value}
                setitems = {setDegreeItems}
                setOpen = {setDegreeOpen}

                // Change degree choice if the user changes choices
                onChangeValue = {degree => setDegreeValue(degree)}
                
                // There's no search bar
                searchable = {false}
                // Making it scrollable
                listMode = "SCROLLVIEW"
                // The height of the dropdown 
                maxHeight = {150} 
                // Added alignSelf to make container center
                style = {{width: wp('76%'), alignSelf:"center", borderColor: degreeError? "#E76060": 'black', borderWidth: degreeError? 1: 1}}
                // Added alignSelf center to make dropdown center
                containerStyle = {{width: wp('76%'), alignSelf:"center"}}
                onChangeValue={(value) => setDegreeError(false)}
            />
            {degreeError? <Text style={{color:'#E76060', paddingLeft: wp('13%') }}>Please select an entry.</Text>: null}
            <Text style={styles.header}>If you put "Other" in the last question, please put in your degree. 
            Otherwise, put "N/A" (no quotes).</Text>
                <View style={styles.inputContainer}>
                    <View style={{paddingVertical: hp('1%')}}>
                        <TextInput
                            // style={styles.shortAnswerInput}
                            // value = {other_degree}
                            // setValue = {setOtherDegree}
                            style = {[styles.shortAnswerInput, {borderColor: otherDegreeError? '#E76060': '#DADADA'}]}
                            onChangeText={name => setOtherDegree({name})}
                            onChange={name => nonEmpty(name.nativeEvent.text, setOtherDegreeError)}
                        />
                        {otherDegreeError? <Text style={{color:'#E76060'}}>Please enter a valid degree or "N/A".</Text>: null}
                </View>
            </View>

            
            <Text style={styles.header}>Field of study</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        // style = {styles.shortAnswerInput}
                        // value = {study}
                        // setValue = {setStudy}
                        style = {[styles.shortAnswerInput, {borderColor: studyError? '#E76060': '#DADADA'}]}
                        onChangeText={name => setStudy({name})}
                        onChange={name => nonEmpty(name.nativeEvent.text, setStudyError)}
                    />
                    {studyError? <Text style={{color:'#E76060'}}>Please enter your field of study.</Text>: null}
                </View>
            </View>


            <Text style={styles.header}>Expected year of graduation</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        // style = {styles.shortAnswerInput}
                        // value = {grad_year}
                        // setValue = {setGradYear}
                        style = {[styles.shortAnswerInput, {borderColor: gradYearError? '#E76060': '#DADADA'}]}
                        onChangeText={name => setGradYear({name})}
                        onChange={name => onlyRegex(name.nativeEvent.text, "^20[0-9]{2}$", setGradYearError)}
                    />
                    {gradYearError? <Text style={{color:'#E76060'}}>Please provide a valid graduation year.</Text>: null}
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
                // Changes the choice if the user changes their choice
                onChangeValue = {marital => setMaritalValue(marital)}
                // There's no search bar
                searchable = {false}
                // Making it scrollable
                listMode = "SCROLLVIEW"
                // The height of the dropdown 
                maxHeight = {150} 
                // Added alignSelf to make container center
                style = {{width: wp('76%'), alignSelf:"center", borderColor: maritalError? "#E76060": 'black', borderWidth: maritalError? 1: 1}} 
                // Added alignSelf center to make dropdown center
                containerStyle = {{width: wp('76%'), alignSelf:"center"}} 
                onChangeValue={(value) => setMaritalError(false)}
            />
            {maritalError? <Text style={{color:'#E76060', paddingLeft: wp('13%') }}>Please select your marital status.</Text>: null}

            <Text style={styles.header}>If you have children, please note how many. Otherwise, put "0" (no quotes).</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        // style = {styles.childrenInput}
                        // value = {children}
                        // setValue = {setChildren}
                        style = {[styles.shortAnswerInput, {borderColor: childrenError? '#E76060': '#DADADA'}]}
                        onChangeText={name => setChildren({name})}
                        onChange={name => onlyRegex(name.nativeEvent.text, "^[0-9][0-9]?$", setChildrenError)}
                    />
                    {childrenError? <Text style={{color:'#E76060'}}>Please enter the number of children you have, or 0.</Text>: null}
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
                // Change the status value if the user changes their mind
                onChangeValue = {status => setStatusValue(status)}
                // There's no search bar
                searchable = {false}
                // Making it scrollable
                listMode = "SCROLLVIEW"
                // The height of the dropdown 
                maxHeight = {150} 
                // Added alignSelf to make container center
                style = {{width: wp('76%'), alignSelf:"center", borderColor: statusError? "#E76060": 'black', borderWidth: statusError? 1: 1}} 
                // Added alignSelf center to make dropdown center
                containerStyle = {{width: wp('76%'), alignSelf:"center"}}
                onChangeValue={(value) => setStatusError(false)}
            />
            
            {statusError? <Text style={{color:'#E76060', paddingLeft: wp('13%') }}>Please select your immigration status.</Text>: null}

            <Text style={styles.header}>If you put "Other" in the last question, please put in your status.
            Otherwise, put "N/A" (no quotes).</Text>
                <View style={styles.inputContainer}>
                    <View style={{paddingVertical: hp('1%')}}>
                        <TextInput
                            // style={styles.shortAnswerInput}
                            // value = {other_status}
                            // setValue = {setOtherStatus}
                            style = {[styles.shortAnswerInput, {borderColor: otherStatusError? '#E76060': '#DADADA'}]}
                            onChangeText={name => setOtherStatus({name})}
                            onChange={name => nonEmpty(name.nativeEvent.text, setOtherStatusError)}
                        />
                        {otherStatusError? <Text style={{color:'#E76060'}}>Please enter your immigration status, or "N/A".</Text>: null}
                </View>
            </View>


            {/* Allows the user to input an amount of aid */}
            <Text style={styles.header}>How much financial assistance are you seeking?*</Text>
            <View style={{paddingTop: hp('1%')}}></View>
            <Text style={styles.mainText}>*Most CFGI scholarships are between $200-$1000 USD and are offered on a one-time basis for a specific need.</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        // style = {styles.shortAnswerInput}
                        // value = {aid}
                        // setValue = {setAid}
                        placeholder = "$ USD"
                        style = {[styles.shortAnswerInput, {borderColor: aidError? '#E76060': '#DADADA'}]}
                        onChangeText={name => setAid({name})}
                        onChange={name => onlyRegex(name.nativeEvent.text,'^[2-9][0-9][0-9](\.?[0-9]{2})?|1000$',setAidError)}
                    />
                    {aidError? <Text style={{color:'#E76060'}}>Please enter in an aid amount between 200 to 1000 (no "$" needed).</Text>: null}
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
                        // style = {styles.input}
                        // value = {reason}
                        // setValue = {setReason}
                        // onChangeText={(text) => {this.setState({text});}}
                        // value={this.state.text}
                        style = {[styles.input, {borderColor: reasonError? '#E76060': '#DADADA'}]}
                        onChangeText={name => setReason({name})}
                        onChange={name => nonEmpty(name.nativeEvent.text, setReasonError)}
                        multiline = {true}
                        numberOfLines = {4}
                        textAlignVertical = {'top'}
                    />
                    {reasonError? <Text style={{color:'#E76060'}}>Please answer the question.</Text>: null}
                </View>
            </View>


            {/* Future feature: have a file uploading feature so CFGI doesn't have to reach out to user separately */}
            <View style={{paddingVertical: hp('3%')}}></View>
            <View style={{flexDirection:'row', paddingHorizontal: wp('13%'), marginBottom:20}}>
                <View>
                    <Text style={[styles.mainText, ({paddingRight: wp('0'), paddingLeft: wp('0%')})]}>I have filled out this application with complete accuracy and care.
                    I understand that any incomplete, inaccurate, or invalid information may result in this application getting rejected. 
                    I agree to the Terms and Conditions.</Text> 
                </View>
            </View>

            {/* Future feature: use calendar functionality to get today's date as a signature*/}

            <View style={styles.buttonContainer}>
                {/* Allows the user to save the current application and come back to it later */}
                {/* Save button will be disabled until this feature is developed */}
                <View style={{opacity: 0.4}}>
                    <TouchableOpacity disabled={true} style={{borderColor: "#4C67F6", borderWidth:1, borderRadius: 10, backgroundColor:'white', paddingHorizontal: 55, paddingVertical: 13, marginTop: 5, marginRight: 5}}>
                        <Text style={[styles.buttonText,({color: "#4C67F6", fontWeight:'bold'})]}>SAVE</Text>
                    </TouchableOpacity>
                </View>
                {/* Submits the current application by uploading to the database, will be manually reviewed by CFGI */}
                {/* Directs user to confirmation screen */}
                <TouchableOpacity style={styles.buttonStyle} onPressIn={() => onSubmitEntry()} onPress={() =>onSubmission()} underlayColor={'#F7F5F9'}>
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
        paddingLeft: wp('13%'),
        paddingRight: wp('13%'),
        justifyContent: 'center'
    },

    // Defines styling for both save and submit buttons
    buttonStyle: {
        // fontFamily:'Oxygen-Bold', 
        borderRadius: 10,
        paddingVertical: 13,
        paddingHorizontal: 55,
        marginTop: 5,
        backgroundColor: "#4C67F6",
        alignSelf:'center'
    },


    // Styling for the text inside the buttons
    buttonText: {
        color: '#ffffff',
        fontSize: 15,
        textAlign: 'center',
        // flexDirection: 'row',
        alignSelf: 'center',
        fontWeight:'bold'
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
