
//import
import { useLinkProps } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { FontDisplay } from 'expo-font';
import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput, ImageBackground, ScrollView,Pressable  } from "react-native";
import { AuthContext } from '../screens/context';
//import { TextInput } from 'react-native-gesture-handler';
import { ScreenContainer } from 'react-native-screens';

//what I added
import LegalButton from '../screens/legalbuttons';
import {SearchBar} from 'react-native-elements';
import LegalCard from '../screens/legalCard';

export const HomeScreen = () => {   //home page component

    const { signOut } = React.useContext(AuthContext);
    return (
      <View style={styles.container}>
        <Text>Home page component!</Text>
        <Button title="Sign out" onPress={() => signOut()}/>
      </View>
    );
  }
export const JobScreen = () => {   //Jobs page component
    return (
      <View style={styles.container}>
        <Text>Jobs page</Text>
      </View>
    );
  }

  export const LegalScreen = () => {   //Legal page component

    return (
        <View style={styles.legalContainer}>
          <Image style={{width:'50%', height:"15%", resizeMode:"contain", alignSelf:'center'}}source={require('../assets/img/Screenslogo.png')}/>
          <View style={styles.header}>
              <Text style={styles.legalTitle}>Legal Services</Text>
              <Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Text>
          </View>
          <View style={styles.body}>
              <LegalButton text='View Appointment' onPress={useLinkProps.handleSubmit} icon='calendar' />
              <View style={styles.space}/>
              <LegalButton text="Schedule with Attorneys" onPress={useLinkProps.handleSubmit} icon='calendar-check' />
              <View style={styles.space}/>
              <LegalButton text="Frequently Asked Questions" onPress={useLinkProps.handleSubmit} icon='chat' />
              <View style={styles.space}/>
              <LegalButton text="Resource Library" onPress={useLinkProps.handleSubmit} icon='book-reader'/>
          </View>
        </View>
    );
  }

  ///Dummy data of Attorneys. One issue, can't call <Image source={require(u.image)}/>
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

 export const AppointmentScreen = () => {

    var cards =  users.map(u => {
      return (
        <LegalCard key={u.key} onPress={useLinkProps.handleSubmit}>
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
  //<Image source={require('../assets/img/logo-full.png')} />
  export const DonateScreen = () => {   //Jobs page component
    return (
      <ScreenContainer style={StyleSheet.container}>
        <View style={{paddingVertical: 30, alignItems: 'center'}}>
            <View style={{alignItems: 'center'}}>
              
              <Image style={{marginTop: 30, marginBottom: 20, marginLeft: 100}} source = {require('../assets/img/arrow-left.png')} />
              <Image style={{marginLeft: -10, marginRight: 100}}source = {require('../assets/img/arrow-right.png')} />
            </View>
            <View style={{flexDirection: 'row', paddingTop: 30}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 24, color: "#FF6E00", fontWeight: 'bold'}}>Inspired to Give</Text>
                <Text style={{fontSize: 54, color: "#3F3356", fontWeight: 'bold'}}>Donate{'\n'}Now</Text>
              </View>
              <Image style={{width: 150, height: 150, marginTop: 20, marginLeft: 20}} source={require('../assets/img/donation-box.png')} />
            </View>
            
            <View style={{paddingLeft: 30, paddingRight: 100, paddingTop: 5}}>
              <Text style={{fontSize: 18, color: "#3F3356"}}>
                With your donation,{'\n'}we can continue to support international 
                students with financial assistance, legal help, job opportunities, 
                so they can stay and thrive in the United States. 
              </Text>
            </View>
            <View style={{paddingTop: 20}}>
              <Pressable style={styles.button}>
                <Text style={styles.textStyle}>DONATE</Text>
              </Pressable>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 30}}>
              <Text style={{fontSize: 12, color: "#FF6E00", opacity: 0.8}}>Help international students{'\n'}reach for the American dream</Text>
              <Image style={{width: 28, height: 36, marginLeft: 10}} source={require('../assets/img/sun.png')} />
            </View>
        </View>
      </ScreenContainer>
    );
  }

  const styles = StyleSheet.create({        
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
    }
  });
