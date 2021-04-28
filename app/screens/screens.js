//import
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image, Pressable, TextInput } from "react-native";
import { Card } from "react-native-elements";
import { AuthContext } from '../screens/context';
//import { TextInput } from 'react-native-gesture-handler';
import { ScreenContainer } from 'react-native-screens';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen';

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

  export const LegalScreen = () => {   //Jobs page component
    return (
      <View style={styles.container}>
        <Text>Legal page component</Text>
      </View>
    );
  }
  export const FinScreen = () => {   //Jobs page component
    return (
      <View style={styles.container}>
        <Text>Financial Aid component</Text>
      </View>
    );
  }
  export const DonateScreen = () => {   //Jobs page component
    return (
      <View style={styles.container}>
        <Text>Donate page component</Text>
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