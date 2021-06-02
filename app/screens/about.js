//about
import React, { useState, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { AuthContext } from '../screens/context';
import { Divider } from "react-native-elements";
import { ScreenContainer } from 'react-native-screens';
// importing and using `Carousel`
import Carousel from 'react-native-snap-carousel';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen';

/* This is the about page that contains CFGI news and about information.
 */

const exampleItems = [
    {
        img: <Image styles={{
            alignSelf:"center", top: 100,
          }} source={require("../assets/img/builtInAmerica.png")}/>,
        
    },
    {
        img: <Image styles={{
            alignSelf:"center", top: 100,
          }} source={require("../assets/img/immigrationStories.png")}/>,
    },
  ];
 
 export const AboutScreen = ({ navigation, route}) => { 
    
    const [carouselItems, setCarouselItems] = useState(exampleItems);
    const [activeIndex, setActiveIndex] = useState(0);
    const ref = useRef(null);

    const renderItem = useCallback(({ item, index }) => (
        <View  
        >
          <View>{item.img}</View>
        </View>
      ), []);
    return (
        <ScrollView>
        <ScreenContainer style={styles.container}>
        
            <View style={styles.inCol}>
            <View style={{padding: hp('5%'), flex: 1}}>
                <Image style={{ resizeMode:"contain", alignSelf:'center'}} source={require('../assets/img/logo-full.png')} />
            </View>  
                <Text style={ styles.title }>WHAT'S NEW</Text>
            </View>
            
            <View style={{ top: 20, flexDirection:'row', justifyContent: 'center', }}>
            
            <Carousel  style={{alignContent: 'center',}}
            layout={"default"}
            ref={ref}
            data={carouselItems}
            sliderWidth={300}
            itemHeight={460}
            itemWidth={350}
            renderItem={renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
            firstItem={0}
            />
        </View>

            <View style={{top: 100, alignContent: 'right'}}>
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

            <View style={{top:150, alignContent: 'right'}}>
                <Text style={styles.h1}>MEET</Text>
                <Image style={styles.yellowLine} source={require("../assets/img/yellowLine.png")}/>
                <Text style={styles.h2}>The Founders</Text>
                <Image style={styles.fullLenImg} source={require("../assets/img/founders.png")}/>
            </View>
           
        </ScreenContainer>
        <View style={{padding: 80}}></View>
        </ScrollView> 
    );
  }

  const styles = StyleSheet.create({ 
    title:{
        top: 20, 
        fontSize: 26, 
        textAlign: 'left', 
        right: 100, 
        fontWeight:'bold',
        paddingBottom:20,
    },
    
    container: {
        flex: 1,
        backgroundColor: '#F7F5F9',
        alignItems: 'center',
        justifyContent: 'center',
      },       
    header: {
      top: 50,
      left: 35,
      flexDirection: 'column',
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
    backbtn: {
        top: 70, left: 20, width: 50, height: 50,
    },

    fullLenImg: {
        width: 410, height: 460,
    },

    inCol: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#F7F5F9',
        alignItems: 'center',
        justifyContent: 'center'
      },

    cardLayout: {
        justifyContent: 'flex-start',
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
});


