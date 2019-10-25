import React,  { Component } from 'react';
import allReducers from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GanjilGenap from './GanjilGenap';

const store = createStore(allReducers);
export default class AppRedux extends Component{
    render(){
        return(
            <Provider store={store}>
                <GanjilGenap />
            </Provider>
        );
    }
}
