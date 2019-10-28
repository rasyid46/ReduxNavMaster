import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, FlatList } from 'react-native';
//import komponen redux
import { bindActionsCreators } from 'redux';
import { connect } from 'react-redux'; //connect React Componennt ke Redux Store
//panggil fungsi actions yang sudah dibuat sebelumnya {actionGanjilGenap}
import { actionGanjilGenap } from './actions/index';

class AppGanjilGenap extends Component {
    state = {
        inputNumber: ''
    }

    numberChangeHandler = value => {
        this.setState({
            inputNumber: value
        })
    }

    numberOutput = () => {
        return (
            <FlatList
                data={this.props.listNumberFromReducers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={info =>
                    <Text>{info.item.value}</Text>
                }
            />
        );
    };

    prosesSubmit = () => {
        let inputanUser = this.state.inputNumber
        this.props.actionGanjilGenap(inputanUser);
        let message = ""
        if (inputanUser % 2 == 0) {
            message = inputanUser + 'Bilangan Bernilai Genap';
        }
        else if (inputanUser % 2 == 1) {
            message = inputanUser + 'Bilangan Bernilai Ganjil';
        }
        else {
            message = inputanUser + 'Bukan Bernilai Angka';
        }
        this.props.actionGanjilGenap(message);
        //data hasil inputan
        console.log('dataInputan');
        let dataInputan = this.props.listNumberFromReducers;
        console.log(dataInputan);
        //console.log(this.props.listNumberFromReducers.listInputan)
    };

    render() {
        return (
            <View>
                <Text>Aplikasi Ganjil Genap</Text>
                <TextInput placeholder="Input Angka"
                    onChangeText={this.numberChangeHandler}
                    value={this.state.inputNumber}
                />
                <Button title="Proses" onPress={this.prosesSubmit} />
                {this.numberOutput()}
            </View>
        );
    }
}

//export default AppGanjilGenap;

function mapStateToProps(state) { //mengambil semua data dari file reducers/index.js
    console.log('Data Store Reducers');
    console.log(state);
    return {
        listNumberFromReducers: state.reducerGanjilGenap.listInputan
    };
}

function matchDispatchToProps(dispatch) {
    // return bindActionsCreators(
    //     { actionGanjilGenap: actionGanjilGenap },
    //     dispatch,
    // ) ;
    return {
        actionGanjilGenap: inputUser => {
            dispatch(actionGanjilGenap(inputUser));
        },
    };
};

export default connect(
    mapStateToProps,
    matchDispatchToProps,
)(AppGanjilGenap);