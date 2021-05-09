import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { TouchableHighlight } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
// for responsive design 
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { Picker } from '@react-native-picker/picker'
import DropDownPicker from 'react-native-dropdown-picker';


// Actual page for applying for financial assistance, allows users to upload documents and fill out answers
// to submit to the database so their application process is manually reviewed
// Part of financial aid stack defined in App.js, directly from landing page
export const FinAppScreen = ({navigation}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Single', value: 'single'},
        {label: 'Married', value: 'married'}, 
        {label: 'Widowed', value: 'widowed'},
        {label: 'Divorced', value: 'divorced'},
        {label: 'Domestic Partnership', value: 'partnership'}
    ]);
    
    return (
        <ScrollView>
            <View style={styles.container}>
            {/* Back button that allows the user to go back to the landing screen */}
            <TouchableHighlight onPress={() => navigation.goBack()} underlayColor={'#F7F5F9'}>
            {/* backgroundColor: '#F7F5F9' */}
                <View style={styles.backButtonContainer}>
                    <Ionicons name="arrow-back-circle" size={40} color="#4C67F6"/>
                </View>
            </TouchableHighlight>

            <Text style={styles.header}>Select the type of visa you're current holding</Text>
            {/* Dropdown here */}

            <Text style={styles.header}>Please elaborate on why you identify as an international student. Include details such as 
            country of origin, the process you undertook to get your visas and obtain your status, etc.</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style={styles.input}
                        // onChangeText={(text) => {this.setState({text});}}
                        // value={this.state.text}
                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical={'top'}
                    />
                </View>
            </View>

            <Text style={styles.header}>Phone Number</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style={styles.shortAnswerInput}
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
                        style={styles.shortAnswerInput}
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
                        style={styles.shortAnswerInput}
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

            {/* Make this a drop down */}
            <Text style={styles.header}>Marital Status</Text>
            <DropDownPicker
                items = {items}
                    
                //What I changed, Stephanie
                open={open}
                value={value}
                setValue={setValue}
                setitems={setItems}
                setOpen={setOpen}
                searchable={false}
                listMode="SCROLLVIEW" //Making it scrollable
                maxHeight={150} //The height of the dropdown
                //

                // {[{label: 'Single', value: 'single'},
                // {label: 'Married', value: 'married'}, 
                // {label: 'Widowed', value: 'widowed'},
                // {label: 'Divorced', value: 'divorced'},
                // {label: 'Domestic Partnership', value: 'partnership']}
                // open = {open}
                // value = {value}
                // items = {items}
                // setValue = {setValue}
                // setItems = {setItems}
                // setopen = {setOpen}

                //What I changed, Stephanie
                style = {{width: wp('76%'), alignSelf:"center"}} //Added alignSelf to make container center
                containerStyle = {{width: wp('76%'), alignSelf:"center"}} //Added alignSelf center to make dropdown center
            /> 

{/* const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Single', value: 'single'},
        {label: 'Married', value: 'married'}, 
        {label: 'Widowed', value: 'widowed'},
        {label: 'Divorced', value: 'divorced'},
        {label: 'Domestic Partnership', value: 'partnership'}
    ]); */}
            

            <Text style={styles.header}>If you have children, please note how many</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style={styles.maritalInput}
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

            {/* Change this */}
            <Text style={styles.header}>Have you gotten or are you planning to get an OPT, work permit, STEM OPT, etc.?</Text>
            {/* <Picker
                // selectedValue={selectedLanguage}
                // onValueChange={(itemValue) =>
                //     setSelectedLanguage(itemValue)}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker> */}

            <Text style={styles.header}>If yes, please explain where you are in the process and 
            the current situation around the application process. If no, please put "N/A".</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style={styles.input}
                        // onChangeText={(text) => {this.setState({text});}}
                        // value={this.state.text}
                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical={'top'}
                    />
                </View>
            </View>

            {/* Allows the user to input an amount of aid */}
            <Text style={styles.header}>Requested amount of aid</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style={styles.shortAnswerInput}
                        // onChangeText={onChangeText}
                        // onChangeText={(text) => {this.setState({text});}}
                        // value={this.state.text}
                        placeholder="$ USD"
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
                        style={styles.input}
                        // onChangeText={(text) => {this.setState({text});}}
                        // value={this.state.text}
                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical={'top'}
                    />
                </View>
            </View>


            {/* Allows users to attach necessary financial documents and upload them to the database */}
            <Text style={styles.header}>Attach Documents</Text>
            <Text style={styles.mainText}>If you have them available, please provide any and all financial documents that 
            prove your current financial situation and status. This includes any federal income tax returns, 
            bank statements, investment records, and records of untaxed income from either the United States or from your home country.
            Otherwise, leave this section blank.</Text>
            {/* Insert upload docs here */}

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
    //   height: keyboard.keyboardShown? 510 - keyboard.keyboardHeight: 510
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

    // make new lines when text reaches end of box
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

    // make new lines when text reaches end of box
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

    maritalInput: {
        height: hp('5.2%'),
        width: wp('10%'),
        padding: wp('3%'),
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#DADADA',
    }
});
