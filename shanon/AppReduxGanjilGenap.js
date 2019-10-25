import React, {Component} from 'react';
import allReducers from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AplikasiGanjilGenap from './AplikasiGanjilGenap';
//import {Text, View, Button} from 'react-native';

const store = createStore(allReducers);

export default class AppReduxGanjilGenap extends Component {
  render() {
    return (
      <Provider store={store}>
        <AplikasiGanjilGenap />
      </Provider>
    );
  }
}
