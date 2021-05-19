import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, Pressable, ImageBackground, ScrollView, TextInput } from "react-native";
import { ScreenContainer } from 'react-native-screens';
import { Card } from "react-native-elements";
import { AuthContext } from '../screens/context';
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
    return (
      <ScrollView>
      <View style={styles.jobContainer}>
      <View style={{padding: hp('5%'), flex: 1}}>
        <Image style={{height:'30%', resizeMode:"contain", alignSelf:'center'}} source={require('../assets/img/logo-full.png')} />
        <Text style={styles.jobTitle}>CAREER</Text>
        <Text style={styles.jobSubtitle}>Find A Job From Trusted Partners</Text>
        <Text style={{fontSize: 13, color: "#000000", lineHeight: 16, paddingBottom: hp('2%')}}>
          These companies took the CFGI diversity pledge{'\n'}
          and are open to considering sponsorship for the right candidates.
        </Text>
      </View>

      <View style={styles.inputContainer}>
          <View style={{paddingVertical: hp('1%')}}>
            <TextInput style={styles.input} placeholder="          job title, keywords, or company"/>
          </View>
          <View style={{paddingVertical: hp('1.2%')}}>
            <TextInput style={styles.input} placeholder="          zipcode or city"/>
          </View>
      </View>

      <View style={{height: hp('5%'), right: hp('12.5%'), top: hp('4.5%')}}>
        <Pressable style={styles.jobButton}>
            <Text style={styles.textStyle}>SEARCH</Text>
        </Pressable>
      </View>

      <View style={{width: hp('12%'), height: hp('5%'), right: hp('12.5%'), top: hp('21.5%')}}> 
        <Text style={{fontSize: 16, color: "#000000", fontWeight: 'bold'}}>105 Results</Text>
      </View>

      <View style={{top: 150, paddingStart: 22, paddingEnd: 16}}> 
        <Card containerStyle={styles.cardLayout} name="card"  pointerEvents="none">
          <Text style={styles.positionCategory} >UI/UX Design </Text>
          <Text style={styles.positionTitle} >SaaS Homepage redesign and onboarding updates </Text>
          <Text style={styles.positionLocation} >Albany, NY </Text>
          <Text style={styles.postTime} >Posted 51 minnutes ago </Text>
        </Card>
        <Card containerStyle={styles.cardLayout} name="card"  pointerEvents="none">
          <Text style={styles.positionCategory} >Information Technology </Text>
          <Text style={styles.positionTitle} >Web/app designer required to create web apps </Text>
          <Text style={styles.positionLocation} >Blackwood, WA </Text>
          <Text style={styles.postTime} >Posted 51 minnutes ago </Text>
        </Card>
        <Card containerStyle={styles.cardLayout} name="card"  pointerEvents="none">
          <Text style={styles.positionCategory} >Technology </Text>
          <Text style={styles.positionTitle} >Adobe Systems Careers - Performance Media, Analyst </Text>
          <Text style={styles.positionLocation} >Santa Ana, CA </Text>
          <Text style={styles.postTime} >Posted 24 days ago </Text>
        </Card>
      </View>
      
      <View style={{padding: 85}}></View>
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
      <Image style={{width:'50%', height:"15%", resizeMode:"contain", alignSelf:'center'}}source={require('../assets/img/Screenslogo.png')}/>
      <View style={{paddingBottom: 30}}>
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
        <Image style={{height: "10%", width:"50%", resizeMode:"contain", alignSelf:'center'}} source={require('../assets/img/Screenslogo.png')}/>
        <View style={{paddingTop: "5%"}}>
          <Image style={{marginBottom: hp('3%'), marginLeft: wp('15%')}} source = {require('../assets/img/arrow-left.png')} />
          <Image style={{marginLeft: -wp('15%'), marginRight: wp('5%')}} source = {require('../assets/img/arrow-right.png')} />
        </View>
        <View style={{flexDirection: 'row', paddingTop: "5%", paddingHorizontal: "5%"}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 24, color: "#FF6E00", fontWeight: 'bold'}}>Inspired to Give</Text>
            <Text style={{fontSize: 54, color: "#3F3356", fontWeight: 'bold'}}>Donate{'\n'}Now</Text>
          </View>
          <Image style={{width: hp('20%'), height: hp('20%'), marginTop: hp('3%'), marginLeft: hp('3%')}} source={require('../assets/img/donation-box.png')} />
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
          <Pressable style={styles.button}>
            <Text style={styles.textStyle}>DONATE</Text>
          </Pressable>
        </View>
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
      alignItems: 'center',
      justifyContent: 'center'
    },

    jobButton: {
      borderRadius: 10,
      width: 153,
      height: 35,
      left: 110,
      top: 80,
      backgroundColor: "#4C67F6"
    },

    textStyle: {
      color: "#FFFFFF",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 16,
      marginTop: 8
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
      fontSize: 16
    },
    legalContainer: { //Attorney/Appointment
      backgroundColor: '#F7F5F9',
      paddingRight: 30,
      paddingLeft: 30,
      paddingBottom: 30
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
  

    inputContainer: {
      width: wp('81%'),
      height: hp('6%'),
      left: hp('0.55%'),
      top: hp('3.5%'),
    },
    
    input: {
      height: hp('5%'),
      padding: hp('1.5%'),
      borderWidth: 1,
      borderRadius: 16,
      backgroundColor: 'white',
      borderColor: '#4C67F6',
      fontStyle: 'italic'
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
      left: hp('6%'), 
      top: -5, 
      fontWeight: 'bold',
    },

    positionLocation: {
      fontSize: 13, 
      left: hp('6.1%'), 
      color: '#50555C', 
      marginTop: 2
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