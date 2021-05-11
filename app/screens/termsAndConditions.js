import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableHighlight } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
// for responsive design 
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';


// Page that will describe the terms and conditions of the user accepting 
// financial aid from CFGI
export const termsAndConditions = ({navigation}) => {
    return (
    <ScrollView>
        <View style={styles.container}>
            {/* Back button that allows the user to go back to the landing screen */}
            <TouchableHighlight onPress={() => navigation.goBack()} underlayColor={'#F7F5F9'}>
                <View style={styles.backButtonContainer}>
                    <Ionicons name="arrow-back-circle" size={40} color="#4C67F6"/>
                </View>
            </TouchableHighlight>

            <Text style={styles.titleText}>Terms and Conditions</Text>
            {/* The actual terms and conditions */}
            <Text style={styles.mainText}>
            </Text>
        </View>
    </ScrollView>
    );
  }


// Stylesheet
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F5F9',
    //   alignItems: 'center',
      justifyContent: 'center',
    },

    // Defines styling for the back button
    backButtonContainer: {
        flexDirection: 'row', 
        alignItems: 'flex-start',
        paddingLeft: wp('10%')
    },
    
    // Defines styling for all section headers
    header: {
        fontSize: 18,
        textAlign: 'left', 
        paddingLeft: wp('13%'),
        paddingRight: wp('13%'),
        paddingTop: hp('2.2%'),
        color: '#3F3356'
    },

    // Defines text for uploading documents
    mainText: {
        textAlign: 'center',
        fontSize: 16,
        paddingLeft: wp('13%'),
        paddingRight: wp('13%'),
        textAlign: 'left'
    }, 

    titleText: {
        fontSize: 25,
        textAlign: 'left',
        fontWeight: 'bold',
        width: wp('90%'),
        paddingLeft: wp('10%'), 
        paddingTop: hp('1%'), 
        paddingBottom: hp('1%'), 
        color: '#3F3356'
    }
});
