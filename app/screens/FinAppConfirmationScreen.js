import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
// for responsive design 
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';

// Confirmation page after submitting
export const FinAppConfirmationScreen = ({navigation}) => {

    return (
    <ScrollView>
        <View style={styles.container}>
            <Text style={styles.header}>Thank You for Applying</Text>
            <Text style={styles.mainText}>We have received your application. 
            We will reach out to you via email once we have a status update on your application.</Text>
            <View style={styles.break}></View>
            <Text style={styles.mainText}>Please prepare all financial documents supporting your request, including bank statements;
            federal income tax returns; bank statements; investment records; and records of untaxed
            income, all of which from either the United States or from your home country.
            We will ask for them once we accept your status. 
            </Text>

            <View style={styles.buttonContainer}>
                {/* Redirects user back to the home tab */}
                <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>RETURN TO HOME</Text>
                </TouchableOpacity>
               
            </View>
        </View>
    </ScrollView>
    );
  }


// Stylesheet
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F5F9',
      justifyContent: 'center',
    },
    
    // Defines section header
    header: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        width: wp('90%'),
        paddingLeft: wp('10%'), 
        paddingTop: hp('1%'), 
        paddingBottom: hp('1%'), 
        color: '#3F3356'
    },

    // Defines text 
    mainText: {
        textAlign: 'center',
        fontSize: 19,
        paddingLeft: wp('13%'),
        paddingRight: wp('10.6%'),
        textAlign: 'left'
    }, 

    // Defines the styling for button 
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: hp('2%'),
        justifyContent: 'space-around'
    },

    // Defines styling for button
    buttonStyle: {
        // fontFamily:'Oxygen-Bold', 
        borderRadius: 10,
        paddingVertical: 13,
        paddingHorizontal: 55,
        marginTop: 5,
        backgroundColor: "#4C67F6"
    },

    // Styling for the text inside the button
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 3
    },

    break: {
        padding: wp('5%')
    }
});
