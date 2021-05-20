import React from 'react';
import {StyleSheet, View, TouchableOpacity, Modal, Text, TouchableHighlight, Pressable, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LegalCard({name, languages, expertise, onPress}){

    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <View>

        <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible} 
        onRequestClose={() => {
        setModalVisible(!modalVisible);}}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}><Ionicons name="arrow-back-circle" size={45} color="#4C67F6"/></Pressable>
            <Image style={{alignSelf:"center",borderRadius:50, height:"15%", resizeMode:"contain"}}source={require('../assets/img/attorneydefault.png')}/>
            <Text style={{paddingTop: 10,fontSize:18, fontWeight:'bold', textAlign:"center", color:'#3F3356'}}>{name}</Text>
            <Text style={{textAlign:"center", color:"#459EFF", textDecorationLine: "underline", marginBottom:20}}>Avvo Profile</Text>
            <ScrollView>
                <Text style={{color:"#3F3356"}}><Text style={styles.textStyle}>About:{"\n"}</Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <Text style={{color:"#3F3356"}}><Text style={styles.textStyle}>Expertise:  </Text>{expertise}</Text>
                <Text style={{color:"#3F3356"}}><Text style={styles.textStyle}>Languages:  </Text> {languages}</Text>
                <Text style={{color:"#3F3356"}}><Text style={styles.textStyle}>Location:  </Text> Pasedena, California</Text>
                
                {/* Hours Available */}
                <View style={{flexDirection:"row"}}>
                <Text style={styles.textStyle}>Hours:</Text> 
                <Text style={{marginTop:5, lineHeight: 20, color:"#3F3356"}}>Mon 9am-5pm PST{"\n"}Tues 9am-5pm PST{"\n"}Wed 9am-5pm PST{"\n"}Thurs 9am-5pm PST{"\n"}Fri 9am-5pm PST</Text>
                </View>
                {/* /// */}

                <Text style={{color:"#3F3356"}}><Text style={styles.textStyle}>Phone Number: </Text> (714) 200-6182</Text>
                <Text style={{color:"#3F3356"}}><Text style={styles.textStyle}>Email: </Text> pAnteater@uci.edu</Text>
            </ScrollView>

            {/* Button */}
            <View style={{paddingHorizontal:40}}>
                <TouchableHighlight onPress={onPress} onPressOut={()=>setModalVisible(!modalVisible)} style={styles.button} activeOpacity={1} underlayColor="#0A30F6">
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.buttonText}>SCHEDULE</Text>
                    </View>
                </TouchableHighlight>
            </View>
            {/* Button End */}
            </View>
            </View>
        </Modal>
        </View>
        
        {/* Legal Cards Display */}
        <View style={styles.cardContainer} >
           <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.content}>
                <View style={{flexDirection:'row'}}>
                    <Image style={{flex:0.5, height:'100%', resizeMode:"contain", alignItems: "flex-start", borderRadius:50}}source={require('../assets/img/attorneydefault.png')}/>
                    <View style={{paddingLeft:10}}>
                    <Text style={{fontWeight:'bold',color:"#3F3356"}}>{name}</Text>
                    <Text style={{color:"#3F3356"}}><Text style={{fontWeight:'bold',color:"#3F3356"}}>Expertise:  </Text>{expertise}</Text>
                    <Text style={{color:"#3F3356"}}><Text style={{fontWeight:'bold',color:"#3F3356"}}>Languages:  </Text> {languages}</Text>
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
      marginTop: 10
    },
    content:{
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)"
      },
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
      button:{
        borderRadius: 15,
        paddingVertical: 13,
        backgroundColor: '#4C67F6',
        marginTop:15,
        width:"90%",
        alignSelf:"center"
    },
    buttonText:{
        color: 'white',
        fontSize:15,
        fontWeight: 'bold',
        textAlign:'center',
        width:'100%'
    },
    textStyle:{
        fontWeight:'bold',
        lineHeight: 30,
        flex:0.3,
        color:"#3F3356"
    }
})