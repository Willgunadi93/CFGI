
import * as React from 'react';
import { View, Text,  StyleSheet, ScrollView,  TouchableOpacity,Image } from "react-native";
import { AuthContext } from '../screens/context';
import { ScreenContainer } from 'react-native-screens';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen';

/*
This is the home page. It will contain cards for Saved Financial Forms in the future.
 It also links users to the CFGI News and User Profile page.
*/


 export const HomeScreen = ({navigation}) => { 
    return (
        <ScreenContainer style={styles.container}>
            {/* cards for saved financial forms */}
            <View style={styles.inCol}>
            <Text style={styles.welcome_Txt}>WELCOME TO</Text>
            <Image style={styles.logo} source={require("../assets/img/logo.png")}/>

                <View style={styles.section2}>
                    <Text style={styles.section2_Txt}>New feature coming soon!</Text>
                    <Text style={styles.h1}>Saved Financial Forms</Text>
                    <Text style={styles.subh1}>Financial forms not yet submitted</Text>
                </View>
            </View> 
        </ScreenContainer>
    );
  }

  const styles = StyleSheet.create({   
    inCol: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7F5F9',
      },
    welcome_Txt: {
        color: "#3F3356",fontSize: 36, textAlign: 'center', fontWeight: 'bold',
    },

    h1: {
         fontSize: 22, fontWeight: 'bold',  
    },
    subh1: {
        fontSize: 18, left: 5, padding: 5,   
    },
    section2: {
        top: 130, paddingEnd: 20,  
        backgroundColor: '#F7F5F9',
    },
    section2_Txt: {
        fontSize: 26, right:30,fontWeight: 'bold', color: "#3F3356",paddingBottom: hp('1%'),
       },
    logo:{
        width: 200, height: 200, top: 35, resizeMode:"contain",  
    },

    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F5F9',
    },
})