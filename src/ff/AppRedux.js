import React,{Component} from 'react';
import allReducers from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Number from './Number.js';


const store=createStore(allReducers);

export default class AppRedux extends Component{
    static navigationOptions={
        title:'Redux',
        headerStyle: {
            backgroundColor:'#03a9f4'
        },
        headerTintColor:'#fff',
        headerTitleStyle: {
            fontWeight:'bold'
        }
    };
    render() {
        return(
            <Provider store={store}>
                <Number/>
            </Provider>
        );
    }
}