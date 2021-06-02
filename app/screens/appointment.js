import * as React from 'react';
import { View, Text, StyleSheet, Modal, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import {SearchBar, Divider} from 'react-native-elements';
import LegalCard from '../screens/legalCard';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useCallback } from 'react';

//Dummy Data for Attorneys. One issue, can't call <Image source={require(u.image)}/> within it.
const users = [
    {
       name: 'Bill Gunadi',
       linkedin: "",
       avvo: "",
       otherlink: "",
       about: "Bill Gunadi is...",
       expertise: ['Family Green Cards', 'Work Permits'],
       languages: ['Spanish, Chinese, Hindi'],
       location: "N/A",
       hours: "N/A",
       phone:"N/A",
       calendly: 'https://testingcfgi.s3-us-west-1.amazonaws.com/webview.html',
       image: '../assets/img/attorneydefault.png',
       key:'1'
    },
    {
      name: 'Matthew W. Blaisdell',
      linkedin: "https://www.linkedin.com/in/matthew-blaisdell-esq",
      avvo: "https://www.avvo.com/attorneys/11232-ny-matthew-blaisdell-3817651.html",
      otherlink: "Blaisdelllaw.com",
      about: "Matthew Blaisdell, Esquire, is a general immigration practice with a focus on providing ongoing consulting services to students, visitors, and others seeking to identify an immigration strategy that best suits their goals. In addition to his practice, Matthew is deeply involved in advocacy related to professional ethics and consumer protection.",
      expertise: ['Family Green Cards', 'Employment Green Cards', 'Students', 'Work Permits'],
      languages: ['English'],
      location: "159 20th Street, Ste 1B, Brooklyn, NY 11232",
      hours: "M: 8:00 am – 3:00 pm (EST)\nTu: 10:00 am – 5:00 pm (EST)\nW:  8:00 am – 3:00 pm  (EST)\nTh:  11:00 am – 3:00 pm (EST)\nFr:  8:00 am – 3:00 pm (EST)",
      phone:"(347) 994-0177",
      calendly: "",
      image: '../assets/img/attorneydefault.png',
      key:'2'
   },
    {
      name: 'Seth Finberg',
      linkedin: "https://www.linkedin.com/in/seth-finberg-47071920a/",
      avvo: "",
      otherlink: "",
      about: "Seth Finberg grew up in Ft. Lauderdale and attended the University of Georgia School of Law.  He practiced Criminal Defense in Metro Atlanta before returning to South Florida to open an Immigration Law practice.  Seth is an Eagle Scout, enjoys playing the guitar, and coaches high school football along with men's/women's soccer.",
      expertise: ['Asylum', 'Employment Authorization Documents (EAD)', 'F-1 Visas', 'TPS Applications'],
      languages: ['English'],
      location: "Georgia, United States",
      hours: "Thurs: 6:00-7:30 pm (ET)",
      phone:"(954) 235-2277",
      calendly: "https://sethfinberg.s3-us-west-1.amazonaws.com/sethfinberg.html",
      image: '../assets/img/attorneydefault.png',
      key:'3'
  }
   ]
   ////

export const AppointmentScreen = ({navigation}) => {

    //Term & Conditions
    const [modalVisible, setModalVisible] = React.useState(true);

    //Expertise Dropdown
    const [expert_open, setExpertOpen] = useState(false);
    const [expert_value, setExpertValue] = useState(null);
    const [expert_items, setExpertItems] = useState([
      {label: 'Asylum', value: 'Asylum'},
      {label: 'Employment Authorization Documents (EAD)', value: 'Employment Authorization Documents (EAD)'},
      {label: 'Employment Green Cards', value: 'Employment Green Cards'},
      {label: 'Family Green Cards', value: 'Family Green Cards'},
      {label: 'F-1 Visas', value: 'F-1 Visas'},
      {label: 'Students', value: 'Students'},
      {label: 'TPS Applications', value: 'TPS Applications'},
      {label: 'Work Permits', value: 'Work Permits'}
    ]);
    //Language Dropdown
    const [lang_open, setLangOpen] = useState(false);
    const [lang_value, setLangValue] = useState(null);
    const [lang_items, setLangItems] = useState([
      {label: 'English', value: 'English'}
    ]);
    //Close Dropdowns when other opens
    const onExpertOpen = useCallback(() => {
      setLangOpen(false);
    }, []);
  
    const onLangOpen = useCallback(() => {
      setExpertOpen(false);
    }, []);

    var cards = [];

    //Expertise and Language is null.
    if(expert_value ===null && lang_value === null){
      var cards =  users.map(u => {
        return (
          <LegalCard key={u.key} name = {u.name} expertise = {u.expertise} languages = {u.languages} calendly={u.calendly} onPress={() => navigation.navigate("calendar")}
          linkedin = {u.linkedin} avvo={u.avvo} otherlink={u.otherlink} about={u.about} location={u.location} hours={u.hours} phone={u.phone}>
          </LegalCard>
        );}
      );
    }
    //Expertise and Language is selected.
    if(expert_value !== null && lang_value !== null){
      var cards =  users.map(u => {
        return (
          u.expertise.includes(expert_value) && u.languages.includes(lang_value)? <LegalCard key={u.key} name = {u.name} expertise = {u.expertise} languages = {u.languages} calendly={u.calendly} onPress={() => navigation.navigate("calendar")}
          linkedin = {u.linkedin} avvo={u.avvo} otherlink={u.otherlink} about={u.about} location={u.location} hours={u.hours} phone={u.phone}>
          </LegalCard>: null
        );}
      ).filter(e => e !== null)
    }
    //Expertise is selected and Language is null.
    if(expert_value !== null && lang_value === null){
      var cards =  users.map(u => {
        return (
          u.expertise.includes(expert_value)? <LegalCard key={u.key} name = {u.name} expertise = {u.expertise} languages = {u.languages} calendly={u.calendly} onPress={() => navigation.navigate("calendar")}
          linkedin = {u.linkedin} avvo={u.avvo} otherlink={u.otherlink} about={u.about} location={u.location} hours={u.hours} phone={u.phone}>
          </LegalCard>: null
        );}
      ).filter(e => e !== null)
    }
    //Expertise is null and Language is selected.
    if(expert_value === null && lang_value !== null){
      var cards =  users.map(u => {
        return (
          u.languages.includes(lang_value)? <LegalCard key={u.key} name = {u.name} expertise = {u.expertise} languages = {u.languages} calendly={u.calendly} onPress={() => navigation.navigate("calendar")}
          linkedin = {u.linkedin} avvo={u.avvo} otherlink={u.otherlink} about={u.about} location={u.location} hours={u.hours} phone={u.phone}>
          </LegalCard>: null
        );}
      ).filter(e => e !== null)
    }

    //Searchbar
    const [searchJob, setSearchJob] = React.useState(null);

    //Searching for Attorney Name
    if(searchJob !== null && searchJob !== ""){
      var cards =  cards.filter(u => {
        return (
          u.props["name"].includes(searchJob)
        );}
      );
    }

    function resetAll (){
      setExpertValue(null);
      setLangValue(null);
      setSearchJob(null);
    }

    return (
      <ScrollView style={{paddingTop:30, backgroundColor:"#F7F5F9", flex: 1}}>
        
        <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible} 
        onRequestClose={() => {
        setModalVisible(!modalVisible);}}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>TERMS AND CONDITIONS</Text>
              <Text style={{fontSize:15, marginTop: 10}}>By continuing, I understand CFGI does not provide legal advice. It is a pro bono attorney matching service. 
              CFGI does not carry professional liability insurance. Attorneys are independently responsible for any legal advice provided.</Text>
              <TouchableOpacity onPress={() => {setModalVisible(!modalVisible)}} style={{backgroundColor:'#4C67F6', alignSelf:'center', borderRadius: 10, paddingVertical: 13, paddingHorizontal: 55, marginTop: 15}}>
                <Text style={{fontSize: 15, color: 'white', fontWeight:'bold', alignSelf: 'center'}}>PROCEED</Text>
              </TouchableOpacity>
            </View>
            </View>
        </Modal>
        </View>
        
        <View style={{paddingHorizontal: 30, flex:1}}>
          {/* <Image style={{height:'30%', resizeMode:"contain", alignSelf:'center'}}source={require('../assets/img/Screenslogo.png')}/> */}
          <Text style={styles.AsubTitle}>DIRECTORY</Text>
          <Text style={styles.attorneyTitle}>Find A CFGI Attorney For A Consultation</Text>
        </View>
         
        <ImageBackground source={require('../assets/img/legalwave.png')} style={{resizeMode:'cover'}} imageStyle={{opacity:0.5}}>
        <View style={{paddingHorizontal: 30}}>
        <TouchableOpacity onPress={() => resetAll()}><Text style={{color: "#3C65CC", alignSelf:'flex-end', paddingRight: 5, fontStyle:'italic', textDecorationLine: "underline"}}>Reset All</Text></TouchableOpacity>
        <Text style={{fontWeight:"bold", fontSize:16, marginTop:25, color: "#3F3356"}}>EXPERTISE TYPE:</Text>
        
        <DropDownPicker
            onOpen={onExpertOpen}  
            open={expert_open}
            searchable = {false}
            value={expert_value}
            items={expert_items}
            setOpen={setExpertOpen}
            setValue={setExpertValue}
            setItems={setExpertItems}
            listMode = "SCROLLVIEW"
            placeholder="Select Attorney Expertise"
            placeholderStyle={{fontStyle:"italic"}}
            maxHeight = {150}
            labelStyle={{color:'#3F3356'}}
            dropDownContainerStyle={{
                zIndex : 1,
                borderColor: "#4C67F6",
            }}
            style={{
                borderColor: "#4C67F6",
                marginBottom:15,
                zIndex: 1
            }}
            containerStyle={{marginTop:10, zIndex: 1}}/> 
            
        <Text style={{fontWeight:"bold", fontSize:16, color: "#3F3356"}}>LANGUAGE:</Text>
             <DropDownPicker
            onOpen={onLangOpen}
            open={lang_open}
            searchable = {false}
            value={lang_value}
            items={lang_items}
            setOpen={setLangOpen}
            setValue={setLangValue}
            setItems={setLangItems}
            listMode = "SCROLLVIEW"
            placeholder="Select Language Fluency"
            placeholderStyle={{fontStyle:"italic"}}
            maxHeight = {150}
            labelStyle={{color:'#3F3356'}}
            dropDownContainerStyle={{
                borderColor: "#4C67F6"
            }}
            style={{
                borderColor: "#4C67F6",
                marginBottom:15,
                zIndex: -1
            }}
            containerStyle={{marginTop:10, marginBottom:10, zIndex: -1}}
        /></View>
        
        <Divider style={{ height:1.5, backgroundColor: '#E6E6E6', marginTop: 20, borderRadius:10, alignSelf:"center", width: "85%" }} />

        <View style={{padding:30, flexDirection:'row', paddingBottom:0}}>
          <Text style={styles.legalResults}> {cards.length} Results</Text>
          <SearchBar
          inputContainerStyle={{backgroundColor:'white', borderRadius:30, height:35,}}
          containerStyle={{flex:1, margin:0, padding:0, backgroundColor:'white', borderRadius:30, borderWidth:1, borderTopColor:'#4C67F6', borderEndColor:'#4C67F6', borderColor:'#4C67F6', borderBottomColor:'#4C67F6'}}
          placeholder="Type Attorney Name"
          inputStyle={{fontStyle:'italic', fontSize:15}}
          value={searchJob}
          onChangeText={e => setSearchJob(e)}
          />
        </View>
        </ImageBackground>
        
        {/* Where the cards populate */}
        <View style={{padding: 30, marginBottom: 15}}>
        {cards}
        </View>
      </ScrollView>

    );
  }

  const styles = StyleSheet.create({
    AsubTitle:{
      color:'#FF564F',
      fontSize: 24,
      fontWeight:'bold',
      paddingTop:20
    },
    attorneyTitle:{
      color: "#3F3356",
      fontSize: 24,
      fontWeight:'bold'
    },
    legalResults:{
        fontSize:24,
        color: "#3F3356",
        fontWeight:'bold',
        paddingRight: 10,
        alignSelf:'flex-end'
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
      flex: 0.3,
      width: "90%",
      shadowColor: "#000",
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      marginBottom:20,
      padding:30,
    },
});