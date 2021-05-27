import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, Pressable, ImageBackground, ScrollView, TextInput, Linking, TouchableHighlight, TouchableOpacity} from "react-native";
import { ScreenContainer } from 'react-native-screens';
import { Card } from "react-native-elements";
import { AuthContext } from '../screens/context';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { GoogleSpreadsheet } from "google-spreadsheet";
//import { ScreenContainer } from 'react-native-screens';

//import webview
import { WebView } from 'react-native-webview';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen';

//What Stephanie Added
import LegalButton from '../screens/legalbuttons';
//



export const JobScreen = () => {   //Jobs page component

  // const [searchJob, setSearchJob] = React.useState('');
  // const [searchLoc, setSearchLoc] = React.useState('');
  // const searchFilterFunction = text => { setSearchJob(text); };
  // const searchLocFunction = text => { setSearchLoc(text); };

    return (
      <ScrollView>
      <View style={styles.jobContainer}>
      <View style={{padding: hp('3%'), flex: 1}}>
        <Text style={styles.jobTitle}>CAREERS</Text>
        <Text style={styles.jobSubtitle}>THIS FEATURE IS COMING SOON!</Text>
        <Text style={{fontSize: 13, color: "#000000", lineHeight: 16, paddingBottom: hp('2%')}}>
          We are looking for companies took the CFGI diversity{'\n'}
          pledge and are open to considering sponsorship for{'\n'}
          the right candidates. </Text>
        <Text style={{fontSize: 14, fontWeight:'bold', color: "#000000", lineHeight: 14, paddingBottom: hp('0%')}}>
          Want to be on our partner list?{'\n'}</Text>
        <Text style={{fontSize: 14, color: '#000000', fontWeight:'bold',paddingBottom: hp('2%')}}>Please sign up below, we will contact you soon.
          </Text>
        
          <View style={{paddingVertical: hp('1%')}}>
            <TextInput style={styles.jobInput} placeholder="First Name"/>
          </View>
          <View style={{paddingVertical: hp('1%')}}>
            <TextInput style={styles.jobInput} placeholder="Last Name"/>
          </View>
          <View style={{paddingVertical: hp('1%')}}>
            <TextInput style={styles.jobInput} placeholder="Email Address"/>
          </View>
          <View style={{paddingVertical: hp('1%')}}>
            <TextInput style={styles.jobInput} placeholder="Phone Number (optional)"/>
          </View>
          <View style={{paddingVertical: hp('1%')}}>
            <TextInput style={styles.jobInput} placeholder="Company Name"/>
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

      <View style={{height: hp('0%'), alignContent: 'center', top: hp('-5.8%')}}>
        <TouchableHighlight onPress={() => console.log("Submit successfully.")} style={styles.jobButton} activeOpacity={1} underlayColor="#0A30F6">
            <Text style={styles.jobTextStyle}>Submit</Text>
        </TouchableHighlight>
      </View>

      <View style={{width: hp('15%'), height: hp('6%') ,top: hp('16.5%'), left: hp('3.5%')}}> 
        <Text style={{fontSize: 16, color: "#000000", fontWeight: 'bold'}}>Results</Text>
      </View>

      <View style={{top: hp('13%'), paddingStart: hp('1.5%'), paddingEnd: hp('1%')}}> 
      <Card containerStyle={styles.cardLayout} name="card"  pointerEvents="none">
        <Text style={styles.positionCategory} >Job Category </Text>
          <Text style={styles.positionTitle} >Potential Job Posting</Text>
          <Text style={styles.positionLocation} >City, State Code</Text>
          <Text style={styles.postTime} >Posted XX minnutes ago </Text>
      </Card></View>
      
      <View style={{padding: 70}}></View>
      </View>
      </ScrollView>
    );
  }

  
  
   export const CalendlyScreen = () => {
     return (
      <WebView source={{uri : 'https://testingcfgi.s3-us-west-1.amazonaws.com/webview.html'}}/>
     );
   }

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
          <View style={{margin:5}}/>
          <LegalButton text="Schedule with Attorneys" onPress={() => navigation.navigate('AppointDocs')} icon='calendar-check' />
          <View style={{margin:5}}/>
          {/* <LegalButton text="Frequently Asked Questions" onPress={() => console.log("Haven't added page.")} icon='chat' />
          <View style={{margin:5}}/>
          <LegalButton text="Resource Library" onPress={() => console.log("Haven't added page.")} icon='book-reader'/> */}
      </View>
    </View>

    );
  }


  
  export const DonateScreen = () => {   //Jobs page component
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
          <Pressable style={styles.button} onPress={ ()=>{ Linking.openURL('hhttps://www.paypal.com/donate?hosted_button_id=SXQDLBKH55C42')}}>
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
      height: hp('4.6%'),
      left: 110,
      top: 80,
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
      padding: hp('2%'),
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: 'white',
      borderColor: '#4C67F6',
      fontStyle: 'italic',
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
    }
});