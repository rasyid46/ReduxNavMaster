import React, {Component} from 'react';
import {StyleSheet,View,Text, TextInput, Button} from 'react-native';
// import component redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'; //connect react component ke redux store
//panggil fungsi action yang sudah dibuat sebelumnya {actionGanjilGenap}
import {actionGanjilGenap} from './actions/index';

class AppGanjilGenap extends Component{
    prosesSubmit = () =>{
        alert('oke')
    }
    render(){
        return(
        <View>
            <Text>AppGanjilGenap</Text>
            <TextInput placeholder= "Input Angka"/>
            <Button title="Proses" onPress={this.prosesSubmit}/>
        </View>
        );
    }
}
//export default AppGanjilGenap;
function mapStateToProps(state){ // mengambil semua data dari file reducer/index.js
    console.log('Data Store Reducer');
    console.log(state);
    return{
        listNumberFormReducer:state,
    };
}
function matchDispatchTOProps(dispatch){
    return bindActionCreators(
        {actionGanjilGenap: actionGanjilGenap},
        dispatch
    );
}
export default connect(
    mapStateToProps,
    matchDispatchTOProps,
)(AppGanjilGenap);