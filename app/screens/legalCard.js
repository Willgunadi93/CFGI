import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

export default function LegalCard(props){
    return (
        
        <View style={styles.cardContainer}>
            <TouchableOpacity>
            <View style={styles.content}>
                {props.children}  
            </View>
            </TouchableOpacity>
        </View>
    )
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
    }
})