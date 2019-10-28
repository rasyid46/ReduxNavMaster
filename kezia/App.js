import React, {Component} from 'react';
import allReducers from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux'; //membuat store pada redux bisa dipanggil pada nested connect
import AppGanjilGenap from './AppGanjilGenap'; //panggil komponent AppGanjilGenap

const store = createStore(allReducers); //tempat penyimpanan semua reducers dalam store

class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <AppGanjilGenap/>
            </Provider>
        )
    }
}
export default App;