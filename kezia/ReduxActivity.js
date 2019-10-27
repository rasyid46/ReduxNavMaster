import React,{Component} from 'react';
import{
    StyleSheet,
    View,
    Button
} from 'react-native';
import Redux from './Redux/Redux';

class ReduxActivity extends Component{
    static navigationOptions = {
        title: 'Home',
        headerStyle: {backgroundColor:'white'},
        headerTintColor:'#fff',
        headerTitleStyle:{fontWeight:'bold'},
    };
    render(){
        return(
            <View style={styles.container}>
                <View ><Redux/></View>
                <View >
                    <Button title="Redux" onPress={()=>this.props.navigation.navigate("Redux")}/>
                    <Button title="Data Diri" onPress={()=>this.props.navigation.navigate("DataDiri")}/>
                </View>
            </View>
        )
    }
};

export default ReduxActivity;