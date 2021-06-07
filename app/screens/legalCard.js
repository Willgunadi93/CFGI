import React from 'react';
import {StyleSheet, View, TouchableOpacity, Modal, Text, Pressable, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 
import { Linking } from 'react-native';
import { WebView } from 'react-native-webview';

//Global variable that allows us to share the selected attorney 'calendly' link with CalendlyScreen component below
var link = '';

//Calendly Page
export const CalendlyScreen = () => {
    return (
    //Webview component that takes the Calendly link of attorney
     <WebView source={{uri : link}}/>
    );
}

export default function LegalCard({name, languages, expertise, onPress, linkedin, avvo, otherlink, about, location, hours, phone, calendly}){
    
    //Modal state
    const [modalVisible, setModalVisible] = React.useState(false);
    
    return (
        <View>
        {/* Attorney Modal Profile Page */}
        <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible} 
        onRequestClose={() => {
        setModalVisible(!modalVisible);}}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
            {/* Back button for Attorney Modal Profile */}
            <Pressable onPress={() => setModalVisible(!modalVisible)}><AntDesign name="arrowleft" size={24} color="#459EFF" /></Pressable>
            {/* Attorney Default Profile Image*/}
            <Image style={{alignSelf:"center",borderRadius:50, height:"13%", resizeMode:"contain"}}source={require('../assets/img/attorneydefault.png')}/>
            {/* Attorney Name */}
            <Text style={{paddingTop: 10,fontSize:18, fontWeight:'bold', textAlign:"center", color:'#3F3356'}}>{name}</Text>
            {/* Shows avvo link and/or linkedIn link if provided */}
            {avvo !== ""? (<Text style={{textAlign:"center", color:"#459EFF", textDecorationLine: "underline"}} onPress={() => {Linking.openURL(avvo)}}>Avvo Profile</Text>):null}
            {linkedin !== ""?(<Text style={{textAlign:"center", color:"#459EFF", textDecorationLine: "underline", marginBottom:20}} onPress={() => {Linking.openURL(linkedin)}}>LinkedIn</Text>): null}
            
            {/* Attorney Information that you can scroll */}
            <ScrollView>
                <Text style={{color:"#3F3356", marginBottom: 10}}><Text style={styles.textStyle}>About:{"\n"}</Text>{about}</Text>
                <Text style={{color:"#3F3356", marginBottom: 10}}><Text style={styles.textStyle}>Expertise:  </Text>{expertise.join(", ")}</Text>
                <Text style={{color:"#3F3356", marginBottom: 10}}><Text style={styles.textStyle}>Languages:  </Text> {languages}</Text>
                {/* Location */}
                <View style={{flexDirection:"row"}}>
                <Text style={styles.textStyle}>Location:</Text> 
                <Text style={{color:"#3F3356", flex: 0.9, justifyContent:'flex-start', paddingLeft: 10, marginBottom: 10}}>{location}</Text>
                </View>
                {/* Hours Available */}
                <View style={{flexDirection:"row", marginBottom: 10}}>
                <Text style={styles.textStyle}>Hours:</Text> 
                <Text style={{color:"#3F3356", lineHeight: 20, flex: 0.9, justifyContent:'flex-start', paddingLeft: 10}}>{hours}</Text>
                </View>
                {/* Phone Number */}
                <Text style={{color:"#3F3356"}}><Text style={styles.textStyle}>Phone Number: </Text> {phone}</Text>
            </ScrollView>
            
            {/* Schedule Button that opens Calendly page of Attorney */}
            <View style={{paddingHorizontal:40}}>
                {/* Sets the variable 'link' to the given attorney calendly link */}
                <TouchableOpacity onPressIn={ () => link = calendly} onPress={onPress} onPressOut={()=>setModalVisible(!modalVisible)} style={styles.button}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.buttonText}>SCHEDULE</Text>
                    </View>
                </TouchableOpacity>
            </View>

            </View>
            </View>
        </Modal>
        </View>
        
        {/* Legal Cards Display; when clicked opens the modal profile above */}
        <View style={styles.cardContainer} >
           <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.content}>
                <View style={{flexDirection:'row'}}>
                    <Image style={{flex:0.2, height:'100%', resizeMode:"contain", alignSelf: "flex-start",}}source={require('../assets/img/attorneydefault.png')}/>
                    <View style={{paddingLeft:10, flex:0.8}}>
                    <Text style={{fontWeight:'bold',color:"#3F3356", paddingBottom: 6, fontSize: 16}}>{name}</Text>
                    <Text style={{color:"#3F3356"}}><Text style={{fontWeight:'bold',color:"#3F3356"}}>Expertise: </Text>{expertise.join(", ")}</Text>
                    <Text style={{color:"#3F3356"}}><Text style={{fontWeight:'bold',color:"#3F3356"}}>Language: </Text> {languages}</Text>
                    </View>
                </View>  
             </View>
            </TouchableOpacity>
         </View>
         
        </View>
    );
}

const styles = StyleSheet.create({        
    cardContainer: {
      backgroundColor: 'white',
      borderRadius: 10,
      elevation: 1,
      marginTop: 10,
      flex: 1
    },
    //Card content
    content:{
        padding: 20
    },
    //For modal; sets the modal style framework
    centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    //Sets the background dark, when the modal is opened
    backgroundColor: "rgba(0, 0, 0, 0.2)"
      },
    //For modal; how the modal look
    modalView: {
    backgroundColor: "white",
    borderRadius: 30,
    flex: 0.9,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom:20,
    padding:30,
    },
    //Schedule Button
    button:{
    borderRadius: 15,
    paddingVertical: 13,
    backgroundColor: '#4C67F6',
    marginTop:15,
    width:"90%",
    alignSelf:"center"
    },
    //Schedule Button Text
    buttonText:{
        color: 'white',
        fontSize:15,
        fontWeight: 'bold',
        textAlign:'center',
        width:'100%'
    },
    //text style for attorney profile modal
    textStyle:{
        fontWeight:'bold',
        color:"#3F3356"
    }
})