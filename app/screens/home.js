import * as React from 'react';
import { View, Text,  StyleSheet, ScrollView,  TouchableOpacity,Image } from "react-native";
import { AuthContext } from '../screens/context';
import { ScreenContainer } from 'react-native-screens';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen';

/*
This is the home page. It contains the cards for Upcomming Appointments 
Saved Financial Forms. It also links users to the CFGI News and User Profile page.
*/
 export const HomeScreen = ({navigation}) => { 
    return (
        <ScrollView>
            <ScreenContainer style={styles.container}>
            {/* top row of navigation */}
            <View style={styles.inRow}> 
                <TouchableOpacity  onPress={() => navigation.navigate("About")}>
                    <Image style={ styles.icon } source={require("../assets/img/CFGInews.png")}/>
                </TouchableOpacity>
                <Image style={styles.logo} source={require("../assets/img/logo-full.png")}/>
                <TouchableOpacity  onPress={() => navigation.navigate("Profile")}>
                <Image style={ styles.icon }  source={require("../assets/img/profile.png")}/>
                </TouchableOpacity>
            </View>

            {/* cards for upcomming appointments */}
            <View style={styles.section1}>
                <Text style={styles.h1}>Upcomming Appointments</Text>
            
                <TouchableOpacity  onPress={() => navigation.navigate("Legal")}>
                <View  style={styles.cardLayout} name="card"  pointerEvents="none">
                    <Image style={styles.PersonImg} source={require("../assets/img/attorney.png")} />         
                    <Text style={styles.section1_Txt} >Attorney: Toby Renolds{"\n"}{"\n"}Starting @ 7:00 AM - May 8, 2019 </Text>
                    <Image  style={{resizeMode:"contain"}} source={require("../assets/img/rightArrow.png")} />         
                </View>
                </TouchableOpacity>
            </View> 

            {/* cards for saved financial forms */}
            <View style={styles.section2}>
                <Text style={styles.h1}>Saved Financial Forms</Text>
                
                <TouchableOpacity  onPress={() => navigation.navigate("Financial")}>
                <View style={styles.cardLayout} name="card"  pointerEvents="none">
                    <Image style={styles.FormImg} source={require("../assets/img/notSubmittedFin.png")} />         
                    <Text style={styles.section2_Txt}>Status: not yet submitted{"\n"}{"\n"}Submitted at 7:00 AM - May 8, 2019 </Text>
                    <Text style={{ fontSize: 12, textAlign: 'right',color: 'red', marginTop: -2, textDecorationLine: 'underline'}}>Delete draft</Text>
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
        flexDirection: 'row',
      },

    icon:{
        width: 30, height: 30, margin:50, resizeMode:"contain", 
    },

    PersonImg: {
        width: 80, height: 80, resizeMode:"contain", 
    },
    FormImg: {
        width: 70, height: 70, resizeMode:"contain", 
    },

    section1_Txt: {
        fontSize: 16, left: 10, top: 10
    },
    section2_Txt: {
        fontSize: 13, left: 10, top: 10
    },

    h1: {
         fontSize: 22, fontWeight: 'bold', left: 15,
    },
    
    section1: {
        top: 50, paddingEnd: 20,
    },
    section2: {
        top: 100, paddingEnd: 20,
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
        padding: 10,
    },
});