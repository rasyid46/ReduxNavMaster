import React, {Component} from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';

export default class HomeActivity extends Component {
    static navigationOptions={
        title:'Home',
        headerStyle: {
            backgroundColor:'#03a9f4'
        },
        headerTintColor:'#fff',
        headerTitleStyle: {
            fontWeight:'bold'
        }
    };

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>Home Activity</Text>
                <Button title="Go to Week 4" onPress={()=>this.props.navigation.navigate('Week4')}/><Text/>
            </View>
        );
    }  
/*  
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>Home Activity</Text>
                <Button title="Go to Week 4" onPress={()=>this.props.navigation.navigate('Week4')}/><Text/>
            </View>
        );
    }  
*/
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff',
        padding:10
    },
    headerText:{
        fontSize:20,
        textAlign:'center',
        margin:10,
        fontWeight:'bold'
    }
});
