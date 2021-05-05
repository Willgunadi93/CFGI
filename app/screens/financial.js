import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { ScreenContainer } from 'react-native-screens';
// for responsive design
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {SvgUri } from 'react-native-svg-uri'; 


// Landing page for the financial assistance page, this is from the financial stack 
// defined in App.js
export const FinScreen = ({navigation}) => { 
    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.topContainer}>
                {/* Should change this to svg */}
                {/* Logo here */}
                <Image source={require("../assets/img/logo-full.png")} style={styles.img}/>
                {/* <SvgUri source={require("../assets/img/logo.svg")}/> */}
            </View>
            
            {/* Flavor and description text here */}
            <View style={styles.titleContainer}>
            {/* View here */}
                <Text style={styles.titleText}>APPLY</Text>
                 {/*View here?  */}
            </View>
            <Text style={styles.header}>Emergency Financial Assistance</Text>

            {/* View here */}
            {/* Describes briefly what the financial assistance feature is for */}
            <Text style={styles.mainText}>For any student in need of financial assistance for amenities 
                such as transportation fees, food, and emergency housing, we have an
                application for financial assistance thanks to the generiosity of our donors*
            </Text>
            <Text style={styles.specialText}>*Terms and conditions apply</Text>
        {/* </View> */}

        <View style={styles.buttonContainer}>
            {/* Button that will lead the user to the actual application, which is a component called FinDocs */}
            <Button style={styles.buttonText} title='APPLY NOW' onPress={() => navigation.navigate('FinDocs')}/>
            {/* Link to terms and conditions that will be written later 
            Will list everything the user will agree to when they apply for assistance */}
        <Text style={{ color: 'blue', paddingTop: wp('5%'), textDecorationLine: 'underline'}}>TERMS AND CONDITIONS</Text>

    </View>
   </ScreenContainer>
    );
  }
  

//   Stylesheet for this screen
  const styles = StyleSheet.create({        
    container: {
      flex: 1,
      backgroundColor: '#F7F5F9',
      alignItems: 'center',
      justifyContent: 'center',
    },

    // Defines orientation of the logo
    topContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },

    //   Description text of what financial assistance does
    mainText: {
        textAlign: 'left',
        paddingLeft: wp('15%'),
        paddingRight: wp('15%'),
        paddingTop: hp('3%'), 
        paddingBottom: hp('4%'),
        fontSize: 18
    }, 

    // Terms and conditions apply text, italicizes it
    specialText: {
        fontStyle: 'italic',
        textAlign: 'left',
        paddingRight: wp('25%'),
        fontSize: 15
    }, 

    // Styling for the button
    buttonContainer: {
        paddingHorizontal: wp('20%'),
        paddingVertical: hp('3%'),
        justifyContent: 'center',
    },

    // Text on the button
    buttonText: {
        // fontFamily:'Oxygen-Bold', 
        fontSize: 18,
    },

    // APPLY
    titleText: {
        fontSize: 25,
        textAlign: 'left',
        fontWeight: 'bold',
        paddingRight: wp('52%'),
        paddingTop: hp('4%'),
        color: '#FF6E00',
    },

    // Orients title text and header text
    titleContainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    },

    // Emergency Financial Assistance
    header: {
        fontSize: 25,
        textAlign: 'left',
        fontWeight: 'bold',
        width: wp('90%'),
        paddingLeft: wp('10%'), 
        paddingTop: hp('1%'), 
        paddingBottom: hp('1%'), 
        color: '#3F3356'
    },

    // Defining dimensiosn and padding for logo
    img: {
        width: wp('60%'),
        height: hp('10%'),
        alignSelf: 'center',
        resizeMode: 'contain'
    }

});
