import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { ScreenContainer } from 'react-native-screens';
// for responsive design
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';


// Landing page for the financial assistance page, this is from the financial stack 
// defined in App.js
export const FinScreen = ({navigation}) => { 
    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.topContainer}>
            </View>
            
            {/* Flavor and description text here */}
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>APPLY</Text>
            </View>
            <Text style={styles.header}>Emergency Financial Assistance</Text>

            {/* Describes briefly what the financial assistance feature is for */}
            <Text style={styles.mainText}>For any student in need of financial assistance for amenities 
                such as transportation fees, food, and emergency housing, we have an
                application for financial assistance thanks to the generiosity of our donors*
            </Text>
            <Text style={styles.specialText}>*Terms and conditions apply</Text>

        <View style={styles.buttonContainer}>
            {/* Button that will lead the user to the actual application, which is a component called FinDocs */}
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("FinDocs")} underlayColor={'#F7F5F9'}>
                <Text style={styles.buttonText}>APPLY NOW</Text>
            </TouchableOpacity>


            {/* Link to terms and conditions that will be written later 
            Will list everything the user will agree to when they apply for assistance */}
        <Text style={{ color: '#4C67F6', paddingTop: wp('5%'), paddingLeft: wp('5%'), textDecorationLine: 'underline'}} onPress={() => navigation.navigate('termsAndConditions')}>TERMS AND CONDITIONS</Text>

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
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 3
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

    // Defining dimensions and padding for logo
    img: {
        width: wp('60%'),
        height: hp('10%'),
        alignSelf: 'center',
        resizeMode: 'contain'
    },


    buttonStyle: {
        // fontFamily:'Oxygen-Bold', 
        borderRadius: 10,
        paddingVertical: 13,
        paddingHorizontal: 55,
        marginTop: 5,
        backgroundColor: "#4C67F6"
    },

});
