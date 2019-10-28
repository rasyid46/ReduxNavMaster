import React, {Component} from 'react';
import allReducers from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux'; // membuat store pada redux bisa di panggil pada mested component
const store = createStore(allReducers) //tempat penyimpanan semua reducers dalam store
import AppGanjilGenap from './AppGanjilGenap';//panggil komponent AppGanjilGenap
class App extends Component{
    render(){
        return(
            <Provider store = {store}>
                <AppGanjilGenap/>
            </Provider>

        )
    }
}
export default App;