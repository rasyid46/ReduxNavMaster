import React, {Component} from 'react';
import allReducers from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
const store = createStore(allReducers);
import AppGanjilGenap from './AppGanjilGenap';
class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <AppGanjilGenap />
            </Provider>
        );
    }
}
export default App;