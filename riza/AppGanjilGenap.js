import React, {Component} from 'react';
import {View, Text, Button, TextInput}from 'react-native';

//import component redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'; //connect React Component ke Redux Store
//panggil function action yg sudah di buat sebelumnya {actionGanjilGenap}
import {actionGanjilGenap} from './actions/index';

class AppGanjilGenap extends Component{
    // prosesSubmit = () => {
    //     alert('oke');
    // };

    render(){
        return(
            <View>
                <Text>App Ganjil Genap</Text>
                <TextInput placeholder="input angka"/>
                <Button title="Proses" onPress={this.prosesSubmit}/>
            </View>
        );
    }
}

function mapStateToProps(state){
    console.log('Data Store reducer');
    console.log(state);
    return{
        listNumberFormReducer: state,
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        actionGanjilGenap: actionGanjilGenap
    },
     dispatch,
    );
}
//export default AppGanjilGenap;
export default connect(
    mapStateToProps,
    matchDispatchToProps,
)(AppGanjilGenap);