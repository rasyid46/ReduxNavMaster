import React, {Component} from 'react';
import {StyleSheet,Button,View,TextInput,Text} from 'react-native';
import {connect} from 'react-redux';//connect React Component ke redux store
//diPanggil fungsi action yang sudah di buat sebelumnya{actionGanjilGenap}
import {actionGanjilGenap} from './actions/index'
import { bindActionCreators } from 'redux';

//npm instal
//npm instal redux
//yarn add react redux
class AppGanjilGenap extends Component{
    prosesSubmit = ()=>{
        alert("oke")
    }
    render(){
        return(
            // <Pertama>
        <View> 
            <Text>AppGanjilGenap</Text>
            <TextInput placeholder = "input angka "/>
            <Button title ="Proses" onPress ={this.prosesSubmit}/>
        </View> 
        // </Pertama>
        )
    }
}
function mapStateToProps(state){// mengambil semua data dari file reducers/index.js
console.log('DAta Store Reducer');
console.log(state);
return{
    listMemberFormReducers : state
}
}
function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {actionGanjilGenap : actionGanjilGenap},
        dispatch,
    );
}
export default connect(
    mapStateToProps,
    matchDispatchToProps)(AppGanjilGenap)
