import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, } from "react-native";
import ListItem from './components/ListItem';
import { connect } from 'react-redux';
import { addPlace } from './actions';

class GanjilGenap extends Component {
    state = {
        ganjilGenapName: '',
        bilangan: [],
    };

    bilanganSubmitHandler = () => {
        if (this.state.ganjilGenapName.trim() === '') {
            return;
        }

        // let nilai = 0;
        // let nilaiInput = parseInt(this.state.ganjilGenapName);
        // if( nilaiInput % 2 == 0 ){
        //     nilai = nilaiInput + " Genap";
        // }else{
        //     nilai = nilaiInput + " Ganjil";
        // }
        this.props.add(nilai);
    };

    bilanganNameChangeHandler = value => {
        this.setState({
            ganjilGenapName: value,
        });
    };

    bilanganOutput = () => {
        return (
            <FlatList style={styles.listContainer}
                data={this.props.GanjilGenap}
                keyExtractor={(item, index) => index.toString()}
                renderItem={info => <ListItem placeName={info.item.value} />}
            />
        );
    };

    render() {
        console.log('Data Props Reducer');
        console.log(this.props.ganjilGenapName);
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeName="Search Place"
                        style={styles.placeInput}
                        value={this.state.ganjilGenapName}
                        onChangeText={this.bilanganNameChangeHandler}
                    />
                    <Button
                        title="Tambah"
                        style={styles.placeButton}
                        onPress={this.bilanganSubmitHandler}
                    />
                </View>
                <View style={styles.listContainer}>{this.bilanganOutput()}</View>
                <View style={styles.containerButton}>
                    <View style={styles.tombol}>
                        <Button
                            title="Redux"
                            onPress={this.bilanganSubmitHandler}
                        />
                    </View>
                    <View style={styles.tombol1}>
                        <Button
                            title="Data Diri"
                            onPress={this.bilanganSubmitHandler}
                        />    
                    </View>
                </View>
            </View >
        );
    };
}

const styles = StyleSheet.create({
    contianer: {
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    inputContainer: {
        flexDirection: 'column',
        justifyContent: "space-between",
        alignItems: 'center',
        width: '100%',
    },
    placeInput: {
        width: '70%',

    },
    placeButton: {
        width: '30%',
    },
    listContainer: {
        width: '100%',
    },
    tombol1: {
        flexDirection: 'row',
        margin: 20,
        alignItems: "center",
        justifyContent: 'center',
    },
    tombol: {
        flexDirection: 'row',
        margin: 20,
        alignItems: "center",
        justifyContent: 'center',
    },
    containerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }

});

//export default ReduxSaveData

const mapStateToProps = state => {
    return {
        ganjilGenapName: state.listGanjilGenap.places,
    };
};

const mapDispatchToPops = dispatch => {
    return {
        add: name => {
            dispatch(addPlace(name)); //dispatch
            //menghubungkan action menuju reduces
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToPops,
)(GanjilGenap);