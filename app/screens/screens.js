import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, Pressable, ImageBackground, ScrollView, TextInput, Linking, TouchableHighlight, TouchableOpacity} from "react-native";
import { ScreenContainer } from 'react-native-screens';
import { Card } from "react-native-elements";
import { useState } from 'react';
import { AuthContext } from '../screens/context';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { ScreenContainer } from 'react-native-screens';

//import webview
import { WebView } from 'react-native-webview';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen';

//What Stephanie Added
import LegalButton from '../screens/legalbuttons';
import { Alert } from 'react-native';
//

export const JobScreen = () => {   //Jobs page component

  // Set variables and states
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company_name, setCompanyName] = useState('');

  //Field Error States; 'false' means no errors
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const checkTextInput = () => {
    //Check for the First Name TextInput
    if (!first_name.trim()) {
      Alert.alert('Empty Input', 'Please enter your first name.');
      return;
    }
    //Check for the Last Name TextInput
    if (!last_name.trim()) {
      Alert.alert('Empty Input', 'Please enter your last name.');
      return;
    }
    // Check for the Email TextInput
    if (!email.trim()) {
      Alert.alert('Empty Input', 'Please enter your email address.')
      return;
    }
    if (emailError) {
      Alert.alert('Invalid Input', "Please provide a valid email address.")
      return;
    }
    // Check for the Phone Number TextInput
    if (phoneError) {
      Alert.alert('Invalid Input', 'Please provide a valid phone number,\nall numbers together with no parantheses ("()") and no dashes ("-"). Pluses ("+") are allowed.')
      return;
    }
    // Check for the Company Name TextInput
    if (!company_name.trim()) {
      Alert.alert('Empty Input', 'Please enter the company name.')
      return;
    }
    //Checked Successfully
    Alert.alert('Submit Successfully', 'Thank you for signing up,\nwe will reach out to you soon.');
  };


  //Validation for only regex expression
  function onlyRegex (item, expression, error) {
    var exp = new RegExp(expression)
    if(!exp.test(item)){
        error(true)
    }
    else{
        error(false)
    }
}

  //Validation for the optional phone number
  function optional_phone (item, expression, error) {
    if (item === '') {
      error(false)
    }
    else{
      onlyRegex(item, expression, error)
    }
  }

    return (
      <ScrollView>
      <View style={styles.jobContainer}>
      <View style={{padding: hp('3%'), flex: 1}}>
        <Text style={styles.jobTitle}>CAREERS</Text>
        <Text style={styles.jobSubtitle}>THIS FEATURE IS COMING SOON!</Text>
        <Text style={{fontSize: 14, color: "#000000", lineHeight: 16, paddingBottom: hp('2%')}}>
          We are looking for companies took the CFGI{'\n'}
          diversity pledge and are open to considering{'\n'}
          sponsorship for the right candidates. </Text>
        <Text style={{fontSize: 14, fontWeight:'bold', color: "#000000", lineHeight: 14, paddingBottom: hp('0%')}}>
          Want to be on our partner list?{'\n'}</Text>
        <Text style={{fontSize: 14, color: '#000000', fontWeight:'bold',paddingBottom: hp('2.8%')}}>Please sign up below, we will contact you soon.
          </Text>
        
          <Text style={styles.header}>First Name</Text>
          <View style={{paddingVertical: hp('1%')}}>
            <TextInput //placeholder="First Name"
            onChangeText={name => setFirstName(name)}
            style={styles.jobInput}
            />
          </View>
          <Text style={styles.header}>Last Name</Text>
          <View style={{paddingVertical: hp('1%')}}>
            <TextInput //placeholder="Last Name"
            onChangeText={name => setLastName(name)}
            style={styles.jobInput} 
            />
          </View>
          <Text style={styles.header}>Email Address</Text>
          <View style={{paddingVertical: hp('1.5%')}}>
            <TextInput //placeholder="Email Address"
            onChangeText={name => setEmail(name)}
            style={styles.jobInput} 
            onEndEditing={name => onlyRegex(name.nativeEvent.text,'^.+@.+\\..+$', setEmailError)}
            />
          </View>
          <Text style={styles.header}>Phone Number (optional)</Text>
          <View style={{paddingVertical: hp('1.5%')}}>
            <TextInput style={styles.jobInput} //placeholder="Phone Number (optional)"
            onChangeText={name => setPhone(name)}
            onEndEditing={name => optional_phone(name.nativeEvent.text, "^(\\+)?[0-9]{9,18}$", setPhoneError)}
            />
          </View>
          <Text style={styles.header}>Company Name</Text>
          <View style={{paddingVertical: hp('1.5%')}}>
            <TextInput style={styles.jobInput} //placeholder="Company Name"
            onChangeText={name => setCompanyName(name)}/>
          </View>
        </View>

        {/* <View style={{paddingVertical: hp('1%')}}>
            <TextInput inputContainerStyle={{backgroundColor:'white', borderRadius:30, height:40}}
            containerStyle={{margin:0, padding:0, backgroundColor:'white', borderRadius:30, borderWidth:1, borderTopColor:'#4C67F6', borderEndColor:'#4C67F6', borderColor:'#4C67F6', borderBottomColor:'#4C67F6'}}
            inputStyle={{fontStyle:'italic', fontSize:14}} 
            onChangeText={searchFilterFunction} value={searchJob}
            placeholder="  This feature is under construction."/>
          </View> */}
          
          {/* <View style={{paddingVertical: hp('1%')}}> 
          <SearchBar inputContainerStyle={{backgroundColor:'white', borderRadius:30, height:40}}
            containerStyle={{margin:0, padding:0, backgroundColor:'white', borderRadius:30, borderWidth:1, borderTopColor:'#4C67F6', borderEndColor:'#4C67F6', borderColor:'#4C67F6', borderBottomColor:'#4C67F6'}}
            inputStyle={{fontStyle:'italic', fontSize:14}} 
            onChangeText={searchLocFunction} value={searchLoc} 
            clearIcon={true}
            searchIcon={() => <Ionicons name="location-outline" color='gray' size={19}/>}
            placeholder="  Please check back soon!"/> 
          </View> */}

      <View style={{alignContent: 'center', paddingLeft: wp('32.2%'), marginTop: hp('0.6%')}}>
        <TouchableOpacity onPress={checkTextInput} style={styles.jobButton} underlayColor="#0A30F6">
            <Text style={styles.jobTextStyle}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={{width: hp('15%'), height: hp('6%') ,top: hp('10%'), left: hp('3.5%')}}> 
        <Text style={{fontSize: 16, color: "#000000", fontWeight: 'bold'}}>Results</Text>
      </View>

      <View style={{top: hp('7%'), paddingStart: hp('1.5%'), paddingEnd: hp('1%')}}> 
      <Card containerStyle={styles.cardLayout} name="card"  pointerEvents="none">
        <Text style={styles.positionCategory} >Job Category </Text>
          <Text style={styles.positionTitle} >Potential Job Posting</Text>
          <Text style={styles.positionLocation} >City, State Code</Text>
          <Text style={styles.postTime} >Posted 52 minnutes ago </Text>
      </Card></View>
      
      <View style={{padding: 40}}></View>
      </View>
      </ScrollView>
    );
  }

   //Job Page Comments Function: To Be Implemented

  // <View style={{top: hp('15%'), paddingStart: hp('1.5%'), paddingEnd: hp('1%')}}> 
  //       <TouchableOpacity onPress={() => console.log("Haven't added job details.")}>
  //         <Card containerStyle={styles.cardLayout} name="card"  pointerEvents="none">
  //           <Text style={styles.positionCategory} >UI/UX Design </Text>
  //           <Text style={styles.positionTitle} >SaaS Homepage redesign and onboarding updates </Text>
  //           <Text style={styles.positionLocation} >Albany, NY </Text>
  //           <Text style={styles.postTime} >Posted 51 minnutes ago </Text>
  //         </Card></TouchableOpacity>
          
  //         <TouchableOpacity onPress={() => console.log("Haven't added job details.")}>
  //         <Card containerStyle={styles.cardLayout} name="card"  pointerEvents="none">
  //           <Text style={styles.positionCategory} >Information Technology </Text>
  //           <Text style={styles.positionTitle} >Web/app designer required to create web apps </Text>
  //           <Text style={styles.positionLocation} >Blackwood, WA </Text>
  //           <Text style={styles.postTime} >Posted 51 minnutes ago </Text>
  //         </Card></TouchableOpacity>

  //         <TouchableOpacity onPress={() => console.log("Haven't added job details.")}>
  //         <Card containerStyle={styles.cardLayout} name="card"  pointerEvents="none">
  //           <Text style={styles.positionCategory} >Technology </Text>
  //           <Text style={styles.positionTitle} >Adobe Systems Careers - Performance Media, Analyst </Text>
  //           <Text style={styles.positionLocation} >Santa Ana, CA </Text>
  //           <Text style={styles.postTime} >Posted 24 days ago </Text>
  //         </Card></TouchableOpacity>
  //     </View>

  
  //  export const CalendlyScreen = () => {
  //    return (
  //     <WebView source={{uri : 'https://testingcfgi.s3-us-west-1.amazonaws.com/webview.html'}}/>
  //    );
  //  }

  export const LegalScreen = ({navigation}) => {   //Jobs page component
    return (
      <View style={styles.legalContainer}>
      {/* <Image style={{width:'50%', height:"15%", resizeMode:"contain", alignSelf:'center'}}source={require('../assets/img/Screenslogo.png')}/> */}
      <View style={{paddingBottom: 30, paddingTop:30}}>
          <Text style={styles.legalTitle}>Legal Services</Text>
          <Text style={{fontSize:18}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Text>
      </View>
      <View style={styles.body}>
          <LegalButton text='View Appointment' onPress={() => console.log("Haven't added page.")} icon='calendar' />
          <LegalButton text="Schedule with Attorneys" onPress={() => navigation.navigate('AppointDocs')} icon='calendar-check' />
          {/* <LegalButton text="Frequently Asked Questions" onPress={() => console.log("Haven't added page.")} icon='chat' />
          <LegalButton text="Resource Library" onPress={() => console.log("Haven't added page.")} icon='book-reader'/> */}
      </View>
    </View>

    );
  }


  
  export const DonateScreen = () => {   //Donate page component
    return (
      <View style={{paddingTop: "5%", paddingHorizontal: "5%", backgroundColor: '#F7F5F9'}}>
        <View style={{paddingTop: "5%"}}>
          <Image style={{marginBottom: hp('3%'), marginLeft: wp('15%')}} source = {require('../assets/img/arrow-left.png')} />
          <Image style={{marginLeft: -wp('15%'), marginRight: wp('5%')}} source = {require('../assets/img/arrow-right.png')} />
        </View>
        <View style={{flexDirection: 'row', paddingTop: "5%", paddingHorizontal: "5%"}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 24, color: "#FF6E00", fontWeight: 'bold'}}>Inspired to Give</Text>
            <Text style={{fontSize: 54, color: "#3F3356", fontWeight: 'bold'}}>Donate{'\n'}Now</Text>
          </View>
          <Image style={{width: hp('20%'), height: hp('20%'), marginLeft: wp('2%')}} source={require('../assets/img/donation-box.png')} />
        </View>
        
        <View style={{paddingHorizontal: "5%"}}>
          <View style={{paddingRight: "25%", paddingTop: "1%"}}>
            <Text style={{fontSize: 18, color: "#3F3356"}}>
              With your donation,{'\n'}we can continue to support international 
              students with financial assistance, legal help, job opportunities, 
              so they can stay and thrive in the United States. 
            </Text>
          </View>
        </View>
        <View style={{paddingTop: "5%", paddingHorizontal: "25%"}}>
          <Pressable style={styles.button} onPress={ ()=>{ Linking.openURL('https://www.paypal.com/donate?hosted_button_id=SXQDLBKH55C42')}}>
            <Text style={styles.textStyle}>DONATE</Text>
          </Pressable>
        </View>
        {/* <WebView style={{padding: 50}} source={{uri : 'https://paypalbutton.s3-us-west-1.amazonaws.com/paypal.html'}}/> */}
        <View style={{alignItems: "center"}}>
          <View style={{flexDirection: 'row', paddingTop: "5%"}}>
            <Text style={{fontSize: 12, color: "#FF6E00", opacity: 0.8}}>Help international students{'\n'}reach for the American dream</Text>
            <Image style={{width: hp('3%'), height: hp('4%'), marginLeft: hp('2%')}} source={require('../assets/img/sun.png')} />
          </View>
        </View>
      </View> 
    );
  }

  const styles = StyleSheet.create({

    jobContainer: {
      flex: 1,
      backgroundColor: '#F7F5F9',
      //alignItems: 'center',
      justifyContent: 'center',
    },

    jobButton: {
      borderRadius: 10,
      width: hp('17%'),
      height: hp('4.8%'),
      alignContent: "center",
      backgroundColor: "#4C67F6"
    },

    jobTextStyle: {
      color: "#FFFFFF",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 16,
      marginTop: hp('1%')
    },

    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 16
    },

    button: {
      borderRadius: 10,
      paddingVertical: 13,
      paddingHorizontal: 55,
      marginTop: 5,
      backgroundColor: "#4C67F6"
    },

    legalContainer: { //Attorney/Appointment
      backgroundColor: '#F7F5F9',
      padding: 30
    },
    legalTitle:{ //Legal Services
      fontSize:32,
      textAlign: 'left',
      color: '#3F3356'
    },
    AsubTitle:{ //Attorney/Appointment
      color:'#FF564F',
      fontSize: 24,
      fontWeight:'bold',
      paddingTop:20
    },
    attorneyTitle:{ //Attorney/Appointment
      color: "#3F3356",
      fontSize: 24,
      fontWeight:'bold'
    },
    legalResults:{ //Attorney/Appointment
        fontSize:24,
        color: "#3F3356",
        fontWeight:'bold',
        paddingRight: 10,
        alignSelf:'flex-end'
    },

    dropdown:{ //Attorney/Appointment
      borderColor: '#4C67F6',
      borderWidth: 1,
      borderRadius: 11,
      padding:10,
      marginTop:10,
      fontWeight:'bold',
      backgroundColor:'white',
      color: 'black'
    },

    jobInput: {
      height: hp("6%"),
      width: hp('35%'),
      alignSelf: 'center',
      padding: hp('1.5%'),
      borderWidth: 1,
      borderRadius: 6,
      backgroundColor: 'white',
      borderColor: '#4C67F6',
      fontSize: 15,
    },

    jobTitle: {
      color:'#FF6E00',
      fontSize: 24,
      fontWeight:'bold',
      paddingTop: hp('3.5%'),
      paddingBottom: hp('1%'),
    },

    jobSubtitle: {
      color: "#3F3356",
      fontSize: 24,
      fontWeight:'bold',
      paddingBottom: hp('1%'),
    },

    cardLayout: {
      backgroundColor: 'white',
      borderWidth: 0, // Remove Border
      shadowColor: 'rgba(0,0,0, 0.0)', // Remove Shadow IOS
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0, // This is for Android
      borderRadius: 15,
    },

    positionCategory: {
      fontSize: 13,  
      color: '#3C65CC',  
      marginBottom: 13, 
      marginTop: -7,
      textAlign: 'right',
    },

    positionTitle: {
      fontSize: 16, 
      //left: hp('6%'), 
      top: -5, 
      fontWeight: 'bold',
      textAlign: 'left',
    },

    positionLocation: {
      fontSize: 13, 
      //left: hp('6.1%'), 
      color: '#50555C', 
      marginTop: 2,
    },

    postTime: {
      fontSize: 11, 
      textAlign: 'right',
      marginLeft: 149, 
      color: '#929599', 
      marginBottom: -8, 
      marginTop: 13,
    },

    header: {
      fontSize: 15,
      //textAlign: 'left', 
      marginLeft: hp('8%'),
      //paddingRight: wp('13%'),
      paddingTop: hp('2%'),
      color: '#3F3356'
  }
});