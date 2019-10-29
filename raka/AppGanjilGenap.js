import React, {Component} from 'react'; //1
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
} from 'react-native'; //1
//17 import component redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'; //connect react component ke redux store
import {actionGanjilGenap} from './actions/Index';
//1
class AppGanjilGenap extends Component {
  //24
  state = {
    inputNumber: '',
  };

  //25
  numberChangeHandler = value => {
    this.setState({
      inputNumber: value,
    });
  };

  //29
  numberOutput = () => {
    return (
      <FlatList
        data={this.props.listNumberFormReducers}
        keyExtractor={(item, indeks) => indeks.toString()}
        renderItem={info => <Text>{info.item.value}</Text>}
      />
    );
  };

  prosesSubmit = () => {
    //30
    let pesan = '';
    //28
    let inputanUser = this.state.inputNumber;
    //31
    if (inputanUser == 0) {
      pesan = 'bilangan 0';
    } else if (inputanUser % 2 == 0) {
      pesan = inputanUser + ' bilangan genap';
    } else if (inputanUser % 2 == 1) {
      pesan = inputanUser + ' bilangan ganjil';
    } else {
      pesan = inputanUser + ' bukan angka';
    }
    //3
   
    //21 panggil
    this.props.actionGanjilGenap(pesan);
    //22
    // console.log(this.props.listNumberFormReducers);
    //23
    let dataInputan = this.props.listNumberFormReducers;
    console.log(dataInputan);
  };

  //1
  render() {
    //2 button dan texinput
    //3 onPress={this.prosesSubmit}
    //4 install redux
    //-npm install  --save redux
    //-yarn add react redux
    //-yarn start
    //5 pindah ke folder Actions
    //26 onChangeText={this.numberChangeHandler}
    //27 value={this.state.inputNumber}
    //31 this.numberOutput()

    return (
      <View>
        <Text>Aplikasi Ganjil Genap</Text>
        <TextInput
          placeholder="input angka"
          onChangeText={this.numberChangeHandler}
          value={this.state.inputNumber}
        />
        {this.numberOutput()}
        <Text/>
        <Button title="proses" onPress={this.prosesSubmit} />
        
      </View>
    );
  }
}

//18
function mapStateToProps(state) {
  //mengambil semua data dari file reducer/indeks.js
  console.log('mengambil data dari store reducers');
  console.log(state);
  return {
    listNumberFormReducers: state.reducerGanjilGenap.listInputan,
  };
}
//19
function matchDispatchToProps(dispatch) {
  return bindActionCreators({actionGanjilGenap: actionGanjilGenap}, dispatch);
}
//export default AppGanjilGenap;
//20
export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(AppGanjilGenap);
