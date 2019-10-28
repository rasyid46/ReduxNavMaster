import React, {Component} from 'react';
import {StyleSheet, View, Text,TextInput,Button} from 'react-native';
import {bindActionCreators} from 'redux'; //import component redux
import {connect} from 'react-redux'; //connect React Component to redux Store
//panggil fungsi action yang sudah dibuat sebelum {actionGanjilGenap}
import {actionGanjiGenap} from './actions/index'

class AppGanjilGenap extends Component {

    prosesSubmit = () => {
        alert('oke');
    }
    render()  {
        return(
            <View>
            <Text>AppGanjilGenap</Text>
            <TextInput placeholder='input angka'/>
            <Button title='Proses' onPress={this.prosesSubmit}/>
        </View>
        );  
    }
}

function mapStateToProps(state) {
    console.log('Data Store Reducers');
    console.log(state);
    return {
        listNumberFormReducer: state
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {actionGanjiGenap: actionGanjiGenap},dispatch,
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppGanjilGenap);