import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, Pressable } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ScreenContainer } from 'react-native-screens';
import { AuthContext } from '../screens/context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen';

export const JobScreen = () => {   //Jobs page component
    return (
      <View style={styles.container}>
        <Text>Jobs page</Text>
      </View>
    );
  }

  export const LegalScreen = () => {   //Jobs page component
    return (
      <View style={styles.container}>
        <Text>Legal page component</Text>
      </View>
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
  });
