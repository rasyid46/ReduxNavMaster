import React, {Component} from 'react';
import {StyleSheet, View, Text,TextInput,Button,FlatList} from 'react-native';
import {bindActionCreators} from 'redux'; //import component redux
import {connect} from 'react-redux'; //connect React Component to redux Store
//panggil fungsi action yang sudah dibuat sebelum {actionGanjilGenap}
import {actionGanjilGenap} from './actions/index'

class AppGanjilGenap extends Component {

    state = {
        inputNumber:''
    }

    //fungsi untuk menampung nilai state inputNumber
    numberChangeHandler = value => {
        this.setState({
            inputNumber: value
        })
    }

    numberOutput=() => {
        return(
            <FlatList
                data={this.props.listNumberFormReducer.listInputan}
                keyExtractor={(item, index) => index.toString()} 
                renderItem={info => <Text>{info.item.value}</Text>
                }
             />
        );
    }
    prosesSubmit = () => {
        //kirim parameter ke actionGanjilGenap
        let inputanUser = this.state.inputNumber;
        let message =''
        if(inputanUser %2 == 0){
            message = inputanUser + 'Bernilai Genap';
        }else if(inputanUser %2 == 1){
            message = inputanUser + 'Bernilai Ganjil'
        }else{
            message = inputanUser + 'Bernilai bukan angka'
        }
        this.props.actionGanjilGenap(message);
        // data hasil inputan
        console.log('dataInputan');
        let dataInputan = this.props.listNumberFormReducer;
        console.log(dataInputan)
    };
    render()  {
        return(
            <View>
                <Text>AppGanjilGenap</Text>
                <TextInput placeholder='input angka'
                onChangeText= {this.numberChangeHandler}
                value={this.state.inputNumber}
                />

                <Button title='Proses' onPress={this.prosesSubmit} />
                {this.numberOutput()}
        </View>
        );  
    }
}

function mapStateToProps(state) { //mengambil semua data dari file reducer/index.js
    console.log('Data Store Reducers');
    console.log(state);
    return {
        listNumberFormReducer: state
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {actionGanjilGenap: actionGanjilGenap},dispatch,
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppGanjilGenap);