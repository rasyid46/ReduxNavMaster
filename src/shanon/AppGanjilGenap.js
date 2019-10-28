import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
//import component redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'; //connect React Component ke Redux Store
//panggil fungsi action yang sudah dibuat sebelumnya {actionGanjilGenap}
import {actionGanjilGenap} from './actions/index';

class AppGanjilGenap extends React.Component {
  prosesSubmit = () => {
    alert('ocee');
  };

  render() {
    return (
      <View>
        <Text>AppGanjilGenap</Text>
        <TextInput placeholder="input angka" />
        <Button title="Proses" onPress={this.prosesSubmit} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  //mengambil semua data dari file reduce/index.js
  console.log('Data store reducer');
  console.log(state);
  return {
    listNumberFormReducer: state,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({actionGanjilGenap: actionGanjilGenap}, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(AppGanjilGenap);
