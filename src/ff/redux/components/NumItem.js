// importing modules
import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

// Creating NumItem untuk list bagi Flat List
const NumItem=props=>{
    return(
        <TouchableOpacity>
            <View style={styles.listItem}>
                <Text>{props.number}</Text>
            </View>
        </TouchableOpacity>
    );
};

// Creating Styling
const styles=StyleSheet.create({
        listItem:{
            width:'100%',
            padding:10,
            margin:10,
            backgroundColor:'white'
        }
});

export default NumItem;