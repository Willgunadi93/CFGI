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
import {SearchBar} from 'react-native-elements'; //Stand in for eventual drop down component
import LegalCard from '../screens/legalCard';
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

  //Dummy Data for Attorneys. One issue, can't call <Image source={require(u.image)}/> within it.
  const users = [
    {
       name: 'Bill Gunadi',
       expertise: 'OPT, CPT, H1B',
       languages: 'English, Hindi',
       image: '../assets/img/attorneydefault.png',
       key:'1'
    },
    {
      name: 'Taylor Mason',
      expertise: 'OPT, CPT, H1B',
      languages: 'English, Hindi',
      image: '../assets/img/attorneydefault.png',
      key:'2'
   },
    {
      name: 'Kristine Park',
      expertise: 'OPT, CPT, H1B',
      languages: 'English, Hindi',
      image: '../assets/img/attorneydefault.png',
      key:'3'
  }
   ]
   ////
  
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
          <LegalButton text="Frequently Asked Questions" onPress={() => console.log("Haven't added page.")} icon='chat' />
          <View style={{margin:5}}/>
          <LegalButton text="Resource Library" onPress={() => console.log("Haven't added page.")} icon='book-reader'/>
      </View>
    </View>

    );
  }

  export const AppointmentScreen = ({navigation}) => {

    var cards =  users.map(u => {
      return (
        <LegalCard key={u.key} name = {u.name} expertise = {u.expertise} languages = {u.languages} onPress={() => navigation.navigate('calendar')}>
        </LegalCard>
      );
    }
    );

    return (
      <ScrollView>
        
        <View style={{padding: 30, flex:1}}>
          <Image style={{height:'30%', resizeMode:"contain", alignSelf:'center'}}source={require('../assets/img/Screenslogo.png')}/>
          <Text style={styles.AsubTitle}>DIRECTORY</Text>
          <Text style={styles.attorneyTitle}>Find A CFGI Attorney For A Consultation</Text>
        </View>
         
        <ImageBackground source={require('../assets/img/legalwave.png')} style={{resizeMode:'cover'}}>
        <View style={{paddingHorizontal: 30}}>
          <TextInput value="EXPERTISE:" style={styles.dropdown}/>
          <TextInput value="LANGUAGE:"style={styles.dropdown}/>
          <View style={{margin:5}}/>
        </View>
        <View style={{padding:30, flexDirection:'row', paddingBottom:0}}>
          <Text style={styles.legalResults}> 15 Results</Text>
          <SearchBar
          inputContainerStyle={{backgroundColor:'white', borderRadius:30, height:35,}}
          containerStyle={{flex:1, margin:0, padding:0, backgroundColor:'white', borderRadius:30, borderWidth:1, borderTopColor:'#4C67F6', borderEndColor:'#4C67F6', borderColor:'#4C67F6', borderBottomColor:'#4C67F6'}}
          placeholder="Attorney Name"
          inputStyle={{fontStyle:'italic', fontSize:16}}
          onChangeText={''} //Have not added interaction for searching.
          value={""}/>
        </View>
        </ImageBackground>

        <View style={{padding: 30}}>
        {cards}
        </View>
      </ScrollView>

    );
  }
  
  export const DonateScreen = () => {   //Jobs page component
    return (
      <ScreenContainer style={StyleSheet.container}>
        <View style={{paddingVertical: hp('3%'), alignItems: 'center'}}>
            <View style={{alignItems: 'center'}}>
              <Image source={require('../assets/img/logo-full.png')} />
              <Image style={{marginTop: hp('4%'), marginBottom: hp('3%'), marginLeft: wp('15%')}} source = {require('../assets/img/arrow-left.png')} />
              <Image style={{marginLeft: -wp('15%'), marginRight: wp('5%')}}source = {require('../assets/img/arrow-right.png')} />
            </View>
            <View style={{flexDirection: 'row', paddingTop: hp('3%')}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 24, color: "#FF6E00", fontWeight: 'bold'}}>Inspired to Give</Text>
                <Text style={{fontSize: 54, color: "#3F3356", fontWeight: 'bold'}}>Donate{'\n'}Now</Text>
              </View>
              <Image style={{width: hp('20%'), height: hp('20%'), marginTop: hp('3%'), marginLeft: hp('3%')}} source={require('../assets/img/donation-box.png')} />
            </View>
            
            <View style={{paddingLeft: hp('4%'), paddingRight: wp('25%'), paddingTop: hp('1%')}}>
              <Text style={{fontSize: 18, color: "#3F3356"}}>
                With your donation,{'\n'}we can continue to support international 
                students with financial assistance, legal help, job opportunities, 
                so they can stay and thrive in the United States. 
              </Text>
            </View>
            <View style={{paddingTop: hp('3%')}}>
              <Pressable style={styles.button}>
                <Text style={styles.textStyle}>DONATE</Text>
              </Pressable>
            </View>
            <View style={{flexDirection: 'row', paddingTop: hp('4%')}}>
              <Text style={{fontSize: 12, color: "#FF6E00", opacity: 0.8}}>Help international students{'\n'}reach for the American dream</Text>
              <Image style={{width: hp('3%'), height: hp('4%'), marginLeft: hp('2%')}} source={require('../assets/img/sun.png')} />
            </View>
        </View>
      </ScreenContainer>
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
