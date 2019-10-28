import React, {Component} from 'react';
import {View, Text, Button, TextInput,FlatList,ListItem}from 'react-native';

//import component redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'; //connect React Component ke Redux Store
//panggil function action yg sudah di buat sebelumnya {actionGanjilGenap}
import {actionGanjilGenap} from './actions/index';

class AppGanjilGenap extends Component{
    state = {
        inputNumber : ''
    }
    //fungdi untuk menapung nilai state input number
    numberChangeHandler = value => {
        this.setState({
            inputNumber: value
        })
    }

    numberOutput = () => {
        return(
            <FlatList 
            data={this.props.listNumberFromReducer}
            keyExtractor={(item,index) => index.toString()}
            renderItem={info => <Text>{info.item.value}</Text>}/>
        )
    }

    prosesSubmit = () => {
        // alert('oke');
        //kirim parameter ke actionGanjilGenap
        let inputUser = this.state.inputNumber;
        let message = '';
        if(inputUser % 2 == 0 ){
            message = inputUser + 'Bilangan Genap';
        }else if(inputUser % 2 == 1 ){
            message = inputUser + ' Bilangan Ganjil';
        }else{
            message = inputUser + ' Bukan Angka';
        }
        this.props.actionGanjilGenap(message);
        
    };

    render(){
        return(
            <View>
                <Text>App Ganjil Genap</Text>
                <TextInput placeholder="input angka"
                onChangeText={this.numberChangeHandler}
                value={this.state.inputNumber} />
                
                <Button title="Proses" onPress={this.prosesSubmit}/>
                {this.numberOutput()}
            </View>
        );
    }
}

function mapStateToProps(state){
    console.log('Data Store reducer');
    console.log(state);
    return{
        listNumberFromReducer: state.reducerGanjilGenap.listInputan,
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        actionGanjilGenap: actionGanjilGenap
    },
     dispatch,
    );
}
//export default AppGanjilGenap;
export default connect(
    mapStateToProps,
    matchDispatchToProps,
)(AppGanjilGenap);