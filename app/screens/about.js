//about
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { AuthContext } from '../screens/context';
import { Divider } from "react-native-elements";
import { ScreenContainer } from 'react-native-screens';
// importing and using `Carousel`
//import Carousel from './Carousel';

/* This is the about page that contains CFGI news and about information.
<Image style={{ width: 410, height: 460,top: 80}} source={require("../assets/img/immigrationStories.png")}/>
 */
 export const AboutScreen = ({ navigation, route}) => { 
    return (
        <ScrollView>
        <ScreenContainer style={styles.container}>
        
            <View style={styles.inCol}>
                <Image style={ styles.logo } source={require("../assets/img/logo-full.png")}/>
                <Text style={ styles.section1 }>WHAT'S NEW</Text>
                <Image style={{ width: 410, height: 460,top: 80}} source={require("../assets/img/builtInAmerica.png")}/>
            </View>

            {/* add carousel here put dots for swip*/}

            {/* about us section */}
            <View style={{top: 150, alignContent: 'right'}}>
                <Text style={styles.h1}>ABOUT US</Text>
                <Image style={styles.yellowLine} source={require("../assets/img/yellowLine.png")}/>
                <Text style={styles.h2}>What We Do</Text>
                <Text style={styles.mainText}>International students are struggling{"\n"}{"\n"}
                            with all the recent uncertainty around{"\n"}{"\n"}policy changes 
                            and the threat of{"\n"}{"\n"}deportation, many don’t know where to{"\n"}turn.{"\n"}{"\n"}{"\n"}
                            We are a non-profit organization that{"\n"}{"\n"}provides a list of companies that hire{"\n"}{"\n"}
                            foreign nationals. We offer qualifying{"\n"}{"\n"}students need-based financial{"\n"}{"\n"}assistance,
                            an online networking{"\n"}{"\n"}community in addition to volunteering{"\n"}{"\n"}opportunities to gain
                            work experience.*</Text>
            </View>

            {/* CFGI founders' information */}
            <View style={{top:200, alignContent: 'right'}}>
                <Text style={styles.h1}>MEET</Text>
                <Image style={styles.yellowLine} source={require("../assets/img/yellowLine.png")}/>
                <Text style={styles.h2}>The Founders</Text>
                <Image style={styles.fullLenImg} source={require("../assets/img/founders.png")}/>
            </View>
           
        </ScreenContainer>
        <View style={{padding:100}}></View>
        </ScrollView> 
    );
  }

  const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#F7F5F9',
        alignItems: 'center',
        justifyContent: 'center',
      },

    logo:{
        top: 20, 
        width: 300,
        height: 100,
        resizeMode:"contain", alignSelf:'center',
    },

    h1: {
        color: 'pink', fontSize: 36, textAlign: 'right', right: 15,
    },
    h2: {
        top: 5, fontSize: 36, textAlign: 'right', right: 15, paddingBottom:20,
    },

    yellowLine: {
        width: 210, height: 20, left: 210,
    },

    fullLenImg: {
        width: 410, height: 460,
    },

    inCol: {
        flexDirection: 'column',
      },

    mainText: { 
        left:20,
        top: 10,
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 50,
        paddingTop: 30, 
        paddingBottom: 30
    }, 

    section1:{
        top: 50, 
        fontSize: 26,
        fontWeight: 'bold',
    },
});