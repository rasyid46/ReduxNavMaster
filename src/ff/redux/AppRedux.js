// importing module
import React,{Component} from 'react';
import allReducers from './reducers/index';
import {createStore} from 'redux';

// membuat store pada redux bisa dipanggil pada nested component
import {Provider} from 'react-redux';

import Number from './Number';

// creating store dengan allReducers
const store=createStore(allReducers);

// exporting class
export default class AppRedux extends Component{
    render() {
        return(
            <Provider store={store}>
                <Number/>
            </Provider>
        );
    }
}