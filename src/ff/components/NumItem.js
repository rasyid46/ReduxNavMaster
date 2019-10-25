import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

export default class NumItem extends Component {
    render() {
        return(            
            <TouchableOpacity>
                <View style={styles.container}>
                    <Text>{this.props.cityName}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'white',
        padding:10,
        margin:10
    }
})