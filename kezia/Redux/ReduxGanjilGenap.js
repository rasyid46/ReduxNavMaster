import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native';
import ListItem from './component/ListItem';
import {connect} from 'react-redux';
import {checkGanjilGenap} from './actions';
import {bindActionCreators} from 'redux'

class ReduxGanjilGenap extends Component{
    state = {
        inputAngka: ''
    };

    angkaSubmitHandler = () => {
        if(this.state.inputAngka.trim() == ''){
            return;
        }
        this.props.add(this.state.inputAngka);
    }
    inputAngkaChangeHandler = value => {
        this.setState({
            inputAngka: value
        })
    }
    AngkaOutput = () => {
        return(
            <FlatList
                style={styles.listContainer}
                data={this.props.dataAngka}
                keyExtractor={(index) => index.toString()}
                renderItem={info => <ListItem number={info.item.value} result={info.item.message}/>}
            />
        )
    }

    render(){
        console.log(this.props);
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Input Number"
                        style={styles.numberInput}
                        value={this.state.inputAngka}
                        onChangeText={this.inputAngkaChangeHandler}
                    />
                    <Button
                        title="Add"
                        style={styles.numberButton}
                        onPress={this.angkaSubmitHandler}
                    />
                </View>
                <View style={styles.listContainer}>{this.AngkaOutput()}</View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    inputContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%'
    },
    numberInput:{
        width: '70%',
    },
    numberButton:{
        width: '30%'
    },
    listContainer:{
        width: '100%'
    },
});

const mapStateToProps = state => { 
    return {
        dataAngka: state.dataAngka.angka
    }
};

const mapDispatchToProps = dispatch => { 
    return bindActionCreators( 
        {add: checkGanjilGenap}, 
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxGanjilGenap);