import * as React from 'react';
import { View, Text,  StyleSheet, ScrollView,  TouchableOpacity,Image } from "react-native";
import { AuthContext } from '../screens/context';
import { Card,ListItem, Button, Icon } from "react-native-elements";
import { ScreenContainer } from 'react-native-screens';
import {ProfileScreen} from '../screens/profile.js';

 export const HomeScreen = ({navigation}) => { 
    return (
        <ScrollView>
            <ScreenContainer style={styles.container}>
            <View style={styles.inRow}> 
                <TouchableOpacity  onPress={() => navigation.navigate("About")}>
                    <Image style={ {width: 55, height: 55, top: 20, left: 10} } source={require("../assets/img/CFGInews.png")}/>
                </TouchableOpacity>
                <Image style={{ paddingLeft: 10, paddingRight: 10,width: 270, height: 55, top: 100,left: 5,right: 20}} source={require("../assets/img/logo-full.png")}/>
                <TouchableOpacity  onPress={() => navigation.navigate("Profile")}>
                <Image style={ {width: 50, height: 50, top: 23, left: 5}}  source={require("../assets/img/profile.png")}/>
                </TouchableOpacity>
            </View>

            <View style={styles.section1}>
                <Text style={styles.h1}>Upcomming Appointments</Text>
            
                <TouchableOpacity  onPress={() => navigation.navigate("Legal")}>
                <View  style={styles.cardLayout} name="card"  pointerEvents="none">
                    <Image style={styles.PersonImg} source={require("../assets/img/attorney.png")} />         
                    <Text style={styles.section1_Txt} >Attorney: Toby Renolds{"\n"}{"\n"}Starting @ 7:00 AM - May 8, 2019 </Text>
                    <Image  style={styles.cardArrow} source={require("../assets/img/rightArrow.png")} />         
                </View>
                </TouchableOpacity>
            </View> 

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
        //paddingLeft: 10,
        //paddingRight: 10,
      },

    img: {
        paddingLeft: 100,
        paddingRight: 100,
    },

    PersonImg: {
        width: 80, height: 80,
    },

    FormImg: {
        width: 70, height: 70,
    },

    section1_Txt: {
        fontSize: 16, left: 10, top: 10
    },
    section2_Txt: {
        fontSize: 13, left: 10, top: 10
    },

    cardArrow: {
        top: 30, left: 10
    },

    h1: {
         fontSize: 22, fontWeight: 'bold', left: 15,
    },
    
    section1: {
        top: 150, paddingEnd: 20,
    },
    section2: {
        top: 180, paddingEnd: 20,
    },

    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },

    mainText: {
        color: 'purple',
        paddingTop: 5,
        paddingBottom: 2,
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
