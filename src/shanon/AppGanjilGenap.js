import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
//import component redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'; //connect React Component ke Redux Store
//panggil fungsi action yang sudah dibuat sebelumnya {actionGanjilGenap}
import {actionGanjilGenap} from './actions/index';

class AppGanjilGenap extends React.Component {
  state = {
    inputNumber: '',
  };
  numberChangeHandler = value => {
    this.setState({
      inputNumber: value,
    });
  };

  numberOutput = () => {
    return (
      <FlatList
        data={this.props.listNumberFromReducer}
        keyExtractor={(item, index) => index.toString()}
        renderItem={info => <Text> {info.item.value} </Text>}
      />
    );
  };

  prosesSubmit = () => {
    //kirim parameter (
    let inputanUser = this.state.inputNumber;
    let message;
    if (parseInt(inputanUser) % 2 === 0) {
      message = 'Bilangan genap';
    } else if (parseInt(inputanUser) % 2 === 1) {
      message = 'Bilangan ganjil';
    } else {
      message = 'Bernilai bukan angka';
    }

    this.props.actionGanjilGenap(message);
    //data hasil inputan
    console.log('datainputan');
    let dataInputan = this.props.listNumberFromReducer;
    console.log(dataInputan);
  };

  render() {
    return (
      <View>
        <Text>AppGanjilGenap</Text>
        <TextInput
          placeholder="input angka"
          onChangeText={this.numberChangeHandler}
          value={this.state.inputNumber}
        />
        <Button title="Proses" onPress={this.prosesSubmit} />
        {this.numberOutput()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  //mengambil semua data dari file reduce/index.js
  console.log('Data store reducer');
  console.log(state);
  return {
    listNumberFromReducer: state.reducerGanjilGenap.listInputan,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({actionGanjilGenap: actionGanjilGenap}, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(AppGanjilGenap);
