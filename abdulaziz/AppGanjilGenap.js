import React, {Component} from 'react';
import {StyleSheet,Button,View,TextInput,Text,FlatList} from 'react-native';
import {connect} from 'react-redux';//connect React Component ke redux store
//diPanggil fungsi action yang sudah di buat sebelumnya{actionGanjilGenap}
import {actionGanjilGenap} from './actions/index'
import { bindActionCreators } from 'redux';

//npm instal
//npm instal redux
//yarn add react redux
class AppGanjilGenap extends Component{
    state = {
        inputNumber : ''
    }
    //fungsi untuk menampung nilai state inputnumber
    numberChangeHandler = value => {
        this.setState({
            inputNumber: value
        })
    }
    numberOutput = () =>{
        return(
            <FlatList data ={this.props.listNumberFromReducers} 
            keyExtractor = {(item,index) => index.toString()}
            renderItem = {info =>
                        <Text>{info.item.value}</Text>
                // <FlatList placeNumber  = {info.item.value}
        }
        />
        )
    }
    prosesSubmit = ()=>{
        //kirim parameter ke actionGanjilGenap
        let inputanUser = this.state.inputNumber
        let message = '';
        if(inputanUser % 2 === 1){
            message = inputanUser + " Bernilai Ganjil"
        }else if (inputanUser % 2 === 0){
            message = inputanUser + " Bernilai Genap"
        }else{
            message = inputanUser + ' bukan angka' 
        }
        this.props.actionGanjilGenap(message)
        // this.props.actionGanjilGenap('1');
        console.log('dataInputan');
        let dataInputan = (this.props.listNumberFromReducers);
        console.log(dataInputan);
    }
    render(){
        return(
            // <Pertama>
        <View> 
            <Text>AppGanjilGenap</Text>
            <TextInput placeholder = " 0 " 
            onChangeText = {this.numberChangeHandler}
            value = { this.state.inputNumber }/>
            <Button title ="Proses" onPress ={this.prosesSubmit}/>
            {this.numberOutput()}
        </View> 
        // </Pertama>
        )
    }
}
function mapStateToProps(state){// mengambil semua data dari file reducers/index.js
console.log('DAta Store Reducer');
console.log(state);
return{
    listNumberFromReducers : state.reducerGanjilGenap.listInputan
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
