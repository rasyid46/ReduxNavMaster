import React from 'react';
import allReducers from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux'; //membuat store pada redux bisa dipanggil pada nested component

const store = createStore(allReducers);
import AppGanjilGenap from './AppGanjilGenap';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppGanjilGenap />
      </Provider>
    );
  }
}

export default App;
