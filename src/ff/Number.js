import React,{Component} from 'react';
import {StyleSheet,View,FlatList,Button,TextInput} from 'react-native';
import { addNum } from './actions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import NumItem from './components/NumItem';

const mapStatetoProps=state=>{
    return{
        numData:state.numList.tempArray
    }
};
const mapDispatchtoProps=dispatch=>{
    return bindActionCreators({add:addNum},dispatch)
};

class City extends Component{
    state={number:''};
    buttonAddHandler=()=>{
        if (this.state.number.trim()==='') {
            return;
        }
        let angka=parseInt(this.state.number);
        let hasil="";
        if(angka%2==1){
            hasil+=" adalah bilangan ganjil";
        } else if(angka&2==0){
            hasil+=" adalah bilangan genap";
        }
        this.props.add(this.state.number+hasil);
    };
    textInputChangeHandler=value=>{
        this.setState({number:value})
    };
    output=()=>{
        return(
            <FlatList
                style={styles.dataList}
                data={this.props.cityData}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={input=><NumItem cityName={input.item.value}/>}
            />
        );
    }
    render(){
        console.log(this.props.numData);
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.inputCity}
                        placeholder='Masukkan angka'
                        onChangeText={this.textInputChangeHandler}
                        value={this.state.number}
                    />
                    <Button
                        onPress={this.buttonAddHandler}
                        title='Add'
                    />
                </View>
                <View style={styles.listContainer}>{this.output()}</View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'black',
        color:'white'
    },
    inputContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    },
    inputCity:{
        width:'90%',
        backgroundColor:'white'
    },
    listContainer:{
        width:'100%'
    }
})

export default connect(
    mapStatetoProps,
    mapDispatchtoProps
)(City);