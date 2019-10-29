//15
//langsung ke AppGanjilGenap.js
import React, {Component} from 'react';
import semuaReducers from './Reducers/Indeks';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(semuaReducers);

import AppGanjilGenap from './AppGanjilGenap';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppGanjilGenap />
      </Provider>
    );
  }
}

export default App;
