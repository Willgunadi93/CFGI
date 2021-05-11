import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, Pressable, ImageBackground, ScrollView, TextInput } from "react-native";
import {SearchBar} from 'react-native-elements';
import LegalCard from '../screens/legalCard';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useCallback } from 'react';

//Dummy Data for Attorneys. One issue, can't call <Image source={require(u.image)}/> within it.
const users = [
    {
       name: 'Bill Gunadi',
       expertise: 'OPT, CPT, H1B',
       languages: 'English, Hindi',
       image: '../assets/img/attorneydefault.png',
       key:'1'
    },
    {
      name: 'Taylor Mason',
      expertise: 'OPT, CPT, H1B',
      languages: 'English, Hindi',
      image: '../assets/img/attorneydefault.png',
      key:'2'
   },
    {
      name: 'Kristine Park',
      expertise: 'OPT, CPT, H1B',
      languages: 'English, Hindi',
      image: '../assets/img/attorneydefault.png',
      key:'3'
  }
   ]
   ////

export const AppointmentScreen = ({navigation}) => {

    //Expertise Dropdown
    const [expert_open, setExpertOpen] = useState(false);
    const [expert_value, setExpertValue] = useState(null);
    const [expert_items, setExpertItems] = useState([
      {label: 'Immigration', value: 'immigration'},
      {label: 'visa', value: 'visa'},
      {label: 'OPT', value: 'opt'}
    ]);
    //Language Dropdown
    const [lang_open, setLangOpen] = useState(false);
    const [lang_value, setLangValue] = useState(null);
    const [lang_items, setLangItems] = useState([
      {label: 'English', value: 'apple'},
      {label: 'Spanish', value: 'spanish'}
    ]);
    //Close Dropdowns when other opens
    const onExpertOpen = useCallback(() => {
      setLangOpen(false);
    }, []);
  
    const onLangOpen = useCallback(() => {
      setExpertOpen(false);
    }, []);

    //List of LegalCards of Attorneys
    var cards =  users.map(u => {
      return (
        <LegalCard key={u.key} name = {u.name} expertise = {u.expertise} languages = {u.languages} onPress={() => navigation.navigate('calendar')}>
        </LegalCard>
      );}
    );
    
    //Searchbar
    const [searchJob, setSearchJob] = React.useState('');
    const searchFilterFunction = text => { setSearchJob(text); };

    return (
      <ScrollView>
        
        <View style={{padding: 30, flex:1}}>
          <Image style={{height:'30%', resizeMode:"contain", alignSelf:'center'}}source={require('../assets/img/Screenslogo.png')}/>
          <Text style={styles.AsubTitle}>DIRECTORY</Text>
          <Text style={styles.attorneyTitle}>Find A CFGI Attorney For A Consultation</Text>
        </View>
         
        <ImageBackground source={require('../assets/img/legalwave.png')} style={{resizeMode:'cover'}}>
        <View style={{paddingHorizontal: 30}}>
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
            maxHeight = {100}
            placeholder="EXPERTISE:"
            placeholderStyle={{fontWeight:"bold"}}
            placeholder="EXPERTISE TYPE:"
            placeholderStyle={{fontWeight:"bold"}}
            dropDownContainerStyle={{
                borderColor: "#4C67F6"
            }}
            style={{
                borderColor: "#4C67F6",
                marginBottom:15,
                zIndex: 1
            }}
            containerStyle={{marginTop:30}}
        />
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
            maxHeight = {100}
            placeholder="LANGUAGE:"
            placeholderStyle={{fontWeight:"bold"}}
            dropDownContainerStyle={{
                borderColor: "#4C67F6"
            }}
            style={{
                borderColor: "#4C67F6",
                marginBottom:15,
                zIndex: 1
            }}
            labelStyle={{textAlign:'right'}}
            containerStyle={{marginTop:5}}
        />
        </View>
        <View style={{padding:30, flexDirection:'row', paddingBottom:0}}>
          <Text style={styles.legalResults}> 15 Results</Text>
          <SearchBar
          inputContainerStyle={{backgroundColor:'white', borderRadius:30, height:35,}}
          containerStyle={{flex:1, margin:0, padding:0, backgroundColor:'white', borderRadius:30, borderWidth:1, borderTopColor:'#4C67F6', borderEndColor:'#4C67F6', borderColor:'#4C67F6', borderBottomColor:'#4C67F6'}}
          placeholder="Attorney Name"
          inputStyle={{fontStyle:'italic', fontSize:16}}
          onChangeText={searchFilterFunction} value={searchJob}
          value={""}/>
        </View>
        </ImageBackground>
        
        {/* Where the cards populate */}
        <View style={{padding: 30}}>
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
    }
});