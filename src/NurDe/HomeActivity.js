import React from 'react';
import{
    View,
    Text,
    Button,
    TextInput
} from 'react-native';

class HomeActivity extends React.Component{
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#03A9F4',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

    state={angka: 0, hasil: null, hasilPenentuan: null}
    penentuanAngka=() =>{
        let angka= this.state.angka;
        let hasil=0;
        if(parseInt(angka) % 2 === 1){
            hasil= 'Bilangan Ganjil';
        }else{
            hasil = 'Bilangan Genap';
        }
        this.setState({hasilPenentuan:hasil});
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>Jenis Angka</Text>
                <TextInput
                    style={{heigh: 40}}
                    onChangeText={(InputAngka)=> this.setState(
                        {angka: InputAngka})}
                    value={this.state.angka}
                />
                <Button
                    title="Tambah"
                    onPress={() => {
                        this.penentuanAngka()
                }}
                />
                <Button
                    title=""
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
                <Text>{this.state.hasilPenentuan}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    headerText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold',
    },
  });
export default HomeActivity;