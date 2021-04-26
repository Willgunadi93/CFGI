import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { ScreenContainer } from 'react-native-screens';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {SvgUri } from 'react-native-svg-uri'; 


export const FinScreen = ({navigation}) => { 
    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.topContainer}>
                {/* Should change this to svg */}
                <Image source={require("../assets/img/logo-full.png")} style={styles.img}/>
                {/* <SvgUri source={require("../assets/img/logo.svg")}/> */}
            </View>
            
            <View style={styles.titleContainer}>
            {/* View here */}
                <Text style={styles.titleText}>APPLY</Text>
                 {/*View here?  */}
                 </View>
                <Text style={styles.header}>Emergency Financial Assistance</Text>

            {/* View here */}
                <Text style={styles.mainText}>For any student in need of financial assistance for amenities 
                    such as transportation fees, food, and emergency housing, we have an
                    application for financial assistance thanks to the generiosity of our donors*
                </Text>
                <Text style={styles.specialText}>*Terms and conditions apply</Text>
            {/* </View> */}

            <View style={styles.buttonContainer}>
                <Button style={styles.buttonText} title='APPLY NOW' onPress={() => navigation.navigate('FinDocs')}/>
            <Text style={{ color: 'blue', paddingTop: wp('5%'), textDecorationLine: 'underline'}}>TERMS AND CONDITIONS</Text>

        </View>
   </ScreenContainer>
    );
  }
  

  const styles = StyleSheet.create({        
    container: {
      flex: 1,
      backgroundColor: '#F7F5F9',
      alignItems: 'center',
      justifyContent: 'center',
    },

    topContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },

    mainText: {
        textAlign: 'left',
        paddingLeft: wp('15%'),
        paddingRight: wp('15%'),
        paddingTop: hp('3%'), 
        paddingBottom: hp('4%'),
    }, 

    specialText: {
        fontStyle: 'italic',
        textAlign: 'left',
        paddingRight: wp('25%'),
    }, 

    buttonContainer: {
        paddingHorizontal: wp('20%'),
        paddingVertical: hp('3%'),
        justifyContent: 'center',
    },

    buttonText: {
        // fontFamily:'Oxygen-Bold', 
        fontSize: 14,
    },

    titleText: {
        fontSize: 25,
        textAlign: 'left',
        fontWeight: 'bold',
        paddingRight: wp('50%'),
        paddingTop: hp('4%'),
        color: '#FF6E00',
    },

    titleContainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    },

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

    img: {
        width: wp('60%'),
        height: hp('10%'),
        alignSelf: 'center',
        resizeMode: 'contain'
    }

});
