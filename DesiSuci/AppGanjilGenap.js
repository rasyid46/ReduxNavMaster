import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
//import komponen redux
import { bindActionsCreators } from 'redux';
import { connect } from 'react-redux'; //connect React Componennt ke Redux Store
//panggil fungsi actions yang sudah dibuat sebelumnya {actionGanjilGenap}
import { actionGanjilGenap } from './actions/index';

class AppGanjilGenap extends Component {
    prosesSubmit = () => {
        alert('OKE');
    };

    render() {
        return (
            <View>
                <Text>Aplikasi Ganjil Genap</Text>
                <TextInput placeholder="Input Angka" />
                <Button title="Proses" onPress={this.prosesSubmit} />
            </View>
        );
    }
}

//export default AppGanjilGenap;

function mapStateToProps(state) { //mengambil semua data dari file reducers/index.js
    console.log('Data Store Reducers');
    console.log(state);
    return {
        listNumberFromReducers: state
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