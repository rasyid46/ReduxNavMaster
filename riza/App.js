import React, {Component} from 'react';
import allReducers from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux'; //membuat store pda redux bisa dipanggil pada nested component
const store = createStore(allReducers) //tempat penyimpanan semua reducer dalam store
import AppGanjilGenap from './AppGanjilGenap'; //panggil component app ganjil genap

class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <AppGanjilGenap />
            </Provider>
        );
    }
}   
export default App;