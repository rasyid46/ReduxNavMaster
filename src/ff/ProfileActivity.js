//importing modul
import React,{Component} from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';

export default class ProfileActivity extends Component {
    //configuring navigation
    static navigationOptions={
        title:'Data Diri',
        headerStyle: {
            backgroundColor:'#73c6b6'
        }
    };
    render() {
        return(
            <View style={styles.container}>
                <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
        );
    }
}

//creating style
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff'
    },
    headerText:{
        fontSize:20,
        textAlign:'center',
        margin:10,
        fontWeight:'bold'
    }
});