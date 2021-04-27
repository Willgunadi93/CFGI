import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, Pressable, ImageBackground, ScrollView } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ScreenContainer } from 'react-native-screens';
import { AuthContext } from '../screens/context';

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
      <View style={styles.container}>
        <Text>Jobs page</Text>
      </View>
    );
  }

  //Dummy Data for Attorneys. One issue, can't call <Image source={require(u.image)}/> within it.
  const users = [
    {
       name: 'Kayla Johnson',
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

  export const LegalScreen = ({navigation}) => {   //Jobs page component
    return (
      <View style={styles.legalContainer}>
      <Image style={{width:'50%', height:"15%", resizeMode:"contain", alignSelf:'center'}}source={require('../assets/img/Screenslogo.png')}/>
      <View style={styles.header}>
          <Text style={styles.legalTitle}>Legal Services</Text>
          <Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Text>
      </View>
      <View style={styles.body}>
          <LegalButton text='View Appointment' onPress={() => console.log("Haven't added page.")} icon='calendar' />
          <View style={styles.space}/>
          <LegalButton text="Schedule with Attorneys" onPress={() => navigation.navigate('AppointDocs')} icon='calendar-check' />
          <View style={styles.space}/>
          <LegalButton text="Frequently Asked Questions" onPress={() => console.log("Haven't added page.")} icon='chat' />
          <View style={styles.space}/>
          <LegalButton text="Resource Library" onPress={() => console.log("Haven't added page.")} icon='book-reader'/>
      </View>
    </View>
        // <WebView source={{uri : 'https://testingcfgi.s3-us-west-1.amazonaws.com/webview.html'}}/>

    );
  }

  export const AppointmentScreen = () => {

    var cards =  users.map(u => {
      return (
        <LegalCard key={u.key}>
          <View style={{flexDirection:'row'}}>
            <Image style={{flex:0.5, width:'100%', height:'100%', resizeMode:"contain", alignItems: "flex-start",borderRadius:100}}source={require('../assets/img/attorneydefault.png')}/>
            <View style={{paddingLeft:10}}>
            <Text style={{fontWeight:'bold'}}>{u.name}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Expertise:  </Text>{u.expertise}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Languages:  </Text> {u.languages}</Text>
            </View>
          </View>
        </LegalCard>
      );
    }
    );
  
    return (
      <ScrollView>
        
        <View style={{padding: 30, marginTop:30, flex:1}}>
          <Image style={{height:'30%', resizeMode:"contain", alignSelf:'center'}}source={require('../assets/img/Screenslogo.png')}/>
          <Text style={styles.AsubTitle}>LEGAL</Text>
          <Text style={styles.attorneyTitle}>Find A CFGI Attorney For A Consultation</Text>
        </View>
         
        <ImageBackground source={require('../assets/img/legalwave.png')} style={{resizeMode:'cover'}}>
        <View style={{paddingHorizontal: 30}}>
          <TextInput value="EXPERTISE:" style={styles.dropdown}/>
          <TextInput value="LANGUAGE:"style={styles.dropdown}/>
          <View style={styles.space}/>
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
    container: {
      flex: 1,
      backgroundColor: '#c3bffa',
      alignItems: 'center',
      justifyContent: 'center',
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
      padding: 30
    },
    legalTitle:{ //Legal Services
      fontSize:32,
      textAlign: 'left',
      color: '#3F3356'
    },
    header:{ //Legal Services
      paddingBottom: 30
    },

    subTitle:{ //Legal Services
      fontSize:18
    },
    space:{
      margin: 5
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
    }
  });
