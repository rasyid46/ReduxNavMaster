import React, {Component} from 'react';
import {StyleSheet,View,Text, TextInput, Button, FlatList} from 'react-native';
// import component redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'; //connect react component ke redux store
//panggil fungsi action yang sudah dibuat sebelumnya {actionGanjilGenap}
import {actionGanjilGenap} from './actions/index';

class AppGanjilGenap extends Component{
    state={
        inputNumber:''
    }
    //fungsi untuk menampung nilai state inputNumber
    numberChangeHandler = value =>{
        this.setState({
            inputNumber:value
        })
    }
    numberOutput= () =>{
        return(
            <FlatList
            data= {this.props.listNumberFromReducer}
            keyExtractor= {(item,index) => index.toString()}
            renderItem ={info => 
                <Text>{info.item.value}</Text>
                } 
            />
        );
    }
    prosesSubmit = () =>{
        // kirim parameter ke actionGanjilGenap
        let inputanUser = this.state.inputNumber;
        let message = '';
        ///kondisi untuk menentukan bilang ganjil dan genap
        if(inputanUser % 2 == 0){
            message= inputanUser + '  '+ 'adalah Bilangan Genap';
        } else if (inputanUser % 2 == 1){
            message= inputanUser + '  ' +'adalah Bilangan Ganjil';
        } else{
            message= inputanUser + '  ' +'Bukan Angka';
        }
        this.props.actionGanjilGenap(message);
        //data hasil inputan
        console.log('dataInputan');
        let dataInputan = this.props.listNumberFromReducer;
        console.log(dataInputan)
    }
    render(){
        return(
        <View>
            <Text>AppGanjilGenap</Text>
            <TextInput placeholder= "Input Angka" 
            onChangeText={this.numberChangeHandler}
            value={this.state.inputNumber}
            />
            <Button title="Proses" onPress={this.prosesSubmit}/>
            {this.numberOutput()}
        </View>
        );
    }
}
//export default AppGanjilGenap;
function mapStateToProps(state){ // mengambil semua data dari file reducer/index.js
    console.log('Data Store Reducer');
    console.log(state);
    return{
        listNumberFromReducer:state.reducerGanjilGenap.listInputan,
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