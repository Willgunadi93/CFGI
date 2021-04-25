import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { ScreenContainer } from 'react-native-screens';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import {SvgUri } from 'react-native-svg-uri'; 


export const FinScreen = ({navigation}) => { 
    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.topContainer}>
                <Image source={require("../assets/img/logo-full.png")} style={styles.img}/>
            </View>
{/* 
            <View style={{flexDirection:'row'}}> 
          <Text style={{fontSize: 18, textAlign:'right', flex:1}}>textAlign:'right',{'\n'} flex:1</Text>
        </View> */}
            
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

    // bodycontainer: {
    //     alignItems: 'flex-start',
    // },

    mainText: {
        textAlign: 'left',
        paddingLeft: wp('15%'),
        paddingRight: wp('15%'),
        paddingTop: hp('3%'), 
        paddingBottom: hp('4%'),
    }, 

    specialText: {
        // paddingRight: 50,
        // justifyContent: 'center',
        fontStyle: 'italic',
        textAlign: 'left',
    }, 

    buttonContainer: {
        // paddingHorizontal: 50,
        paddingHorizontal: wp('20%'),
        // paddingVertical: 20,
        paddingVertical: hp('3%'),
        justifyContent: "center",
    },

    buttonText: {
        // fontFamily:'Oxygen-Bold', 
        fontSize: 14,
    },

    titleText: {
        fontSize: 25,
        textAlign: 'left',
        fontWeight: 'bold',
        // paddingRight: 50,
        paddingTop: hp('4%'),
        // paddingTop: 30, 
        // paddingBottom: 30, 
        color: '#FF6E00',
        // flex: 1
    },

    titleContainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    },

    header: {
        fontSize: 25,
        textAlign: 'left',
        // justifyContent: 'flex-start', 
        fontWeight: 'bold',
        width: wp('60%'),
        // justifyContent: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30, 
        paddingBottom: 5, 
        color: '#3F3356'
    },

    img: {
        width: wp('60%'),
        height: hp('10%'),
        alignSelf: 'center',
        resizeMode: 'contain'
    }

});
