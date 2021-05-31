
import * as React from 'react';
import { View, Text,  StyleSheet, ScrollView,  TouchableOpacity,Image } from "react-native";
import { AuthContext } from '../screens/context';
import { ScreenContainer } from 'react-native-screens';
import LegalCard from '../screens/legalCard';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen';

/*
This is the home page. It contains the cards for Upcomming Appointments 
Saved Financial Forms. It also links users to the CFGI News and User Profile page.
*/
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

 export const HomeScreen = ({navigation}) => { 
    //List of Cards of saved Financial Applications
    var cards =  users.map(u => {
    return (
        <View key={u.key} name = {u.name} expertise = {u.expertise} languages = {u.languages} onPress={() => navigation.navigate('calendar')}>
        </View>
    );}
    );
    return (
        <ScrollView>
            <ScreenContainer style={styles.container}>
            {/* logo */}
            <View style={styles.inRow}> 
                <Image style={styles.logo} source={require("../assets/img/logo-full.png")}/>
            </View>

            {/* cards for saved financial forms */}
           
            <View style={styles.section2}>
                <Text style={styles.h1}>Saved Financial Forms</Text>
                <Text style={styles.subh1}>Financial forms not yet submitted</Text>
                {/* Where the cards populate 
                <View style={{padding: 30}}>
                {cards}
                </View>
                */ }
                
                <TouchableOpacity  onPress={() => navigation.navigate("Financial")}>
                <View style={styles.cardLayout} name="card"  pointerEvents="none">
                    <Image style={styles.FormImg} source={require("../assets/img/notSubmittedFin.png")} />         
                    <Text style={styles.section2_Txt}>Saved at 7:00 AM - May 8, 2019 </Text>
                    <Text style={styles.deleteText}>Delete draft</Text>
                </View>
                </TouchableOpacity>
            </View> 
   </ScreenContainer>
   <View style={{padding:100}}></View> 
   </ScrollView>
    );
  }

  const styles = StyleSheet.create({   
    inRow: {
        flexDirection: 'row', backgroundColor: '#F7F5F9',
      },

    icon:{
        width: 30, height: 30, margin:50, resizeMode:"contain", 
    },

    PersonImg: {
        width: 80, height: 80, resizeMode:"contain", 
    },
    FormImg: {
         width: 50, height: 50, resizeMode:"contain", 
    },

    section1_Txt: {
        fontSize: 16, left: 10, top: 10
    },
    section2_Txt: {
        fontSize: 15, left: 10, top: 22
    },

    h1: {
         fontSize: 22, fontWeight: 'bold',
    },
    subh1: {
        fontSize: 18, left: 5, padding: 5
    },
    deleteText: {
        fontSize: 12,
        textAlign: 'right',
        color: 'red',
        marginTop: 3,
        textDecorationLine: 'underline',
        left: -10
    },
    section2: {
        top: 100, paddingEnd: 20,   backgroundColor: '#F7F5F9',
    },

    logo:{
        top: 45, resizeMode:"contain",
    },

    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F5F9',
    },

    cardLayout: {
        flexDirection: 'row', 
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 1,
        marginTop: 10,
        borderRadius: 10,
        padding: 2,
    },
})