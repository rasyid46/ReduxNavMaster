// importing module needed
import React,{Component} from 'react';
import {StyleSheet,View,FlatList,Button,TextInput,ScrollView} from 'react-native';
import { addNumber } from './actions';  // importing fungsi action addNumber yang udah dibuat sebelumnya
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import NumItem from './components/NumItem';

// creating const mapStatetoProps untuk mengubah state global menjadi props
const mapStatetoProps=state=>{
    return{
        numData:state.numList.tempArray
    }
};

// creating const mapDispatchtoProps untuk menggabungkan action&reducers menjadi function add
const mapDispatchtoProps=dispatch=>{
    return bindActionCreators({add:addNumber},dispatch)
};

// creating main class Number
class Number extends Component{
    // inisialisasi state awal
    state={number:''};

    // create function untuk buttonAddHandler agar menambahkan value ke array    
    buttonAddHandler=()=>{
        // kalau kosong lngsung return
        if (this.state.number.trim()==='') {
            return;
        }
        // inisialisasi variabel output
        let output="";

            // kondisi untuk menentukan bilangan
            if(parseInt(this.state.number)<0) {
                output+=" adalah bilangan negatif";
            } else if(parseInt(this.state.number)==0) {
                output+=" adalah bilangan nol";
            } else if(parseInt(this.state.number)%2==1) {
                output+=" adalah bilangan ganjil";
            } else if(parseInt(this.state.number)%2==0) {
                output+=" adalah bilangan genap";
            } else {
                output+=" adalah bukan bilangan";
            }
        
        // jalankan fungsi add
        this.props.add(this.state.number+output);
    };

    // create fungsi textInputChangeHandler untuk memasukkan value ke state
    textInputChangeHandler=value=>{
        this.setState({number:value})
    };

    // create fungsi untuk menampilkan output
    output=()=>{
        return(
            <FlatList
                style={styles.dataList}
                data={this.props.numData}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={input=><NumItem number={input.item.value}/>}
            />
        );
    }

    render(){
        // lihat log
        console.log(this.props.numData);
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.inputCity}
                        placeholder='Masukkan Inputan'
                        placeholderTextColor='white'
                        onChangeText={this.textInputChangeHandler}
                        value={this.state.number}
                    />
                    <Button
                        onPress={this.buttonAddHandler}
                        title='Add'
                    />
                </View>
                <ScrollView style={styles.listContainer}>
                    <View>{this.output()}</View>
                </ScrollView>
            </View>
        );
    }
}


// creating styling
const styles=StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'black',
        color:'white'
    },
    inputContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
    },
    inputCity:{
        width:'90%',
        backgroundColor:'purple',
        padding:10,
        color:'white'
    },
    listContainer:{
        width:'100%',
        backgroundColor:'black',
        height:'93%'
    }
})

// exporting module
export default connect(
    mapStatetoProps,
    mapDispatchtoProps
)(Number);