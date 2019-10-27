import React from 'react';
import {
  StyleSheet,
  TextInput,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import ListItem from './component/ListItem';
import {connect} from 'react-redux';
import {addAngka} from './actions';

class AplikasiGanjilGenap extends React.Component {
  state = {bilangan: null, statusBilangan: null};

  ganjilGenap = () => {
    let angka = this.state.bilangan;
    this.setState({bilangan: angka});

    let status;

    // if (this.state.bilangan === '') {
    //   return;
    // } else {
    //   <View style={{flexDirection: 'row', marginTop: 200, marginRight: 15}}>
    //     <TouchableOpacity>
    //       <View style={styles.button}>
    //         <Text style={styles.buttonText}>Redux</Text>
    //       </View>
    //     </TouchableOpacity>

    //     <TouchableOpacity>
    //       <View style={styles.button}>
    //         <Text style={styles.buttonText}>Data Diri</Text>
    //       </View>
    //     </TouchableOpacity>
    //   </View>
    // }

    if (parseInt(angka) % 2 === 1) {
      status = 'Bilangan Ganjil';
    } else {
      status = 'Bilangan Genap';
    }

    // this.setState({statusBilangan: status});
    this.props.add(angka, status);
  };

  output = () => {
    return (
      <View>
        <FlatList
          style={styles.listContainer}
          data={this.props.dataAngka} // kalo ada props berarti ambil dari reducers
          keyExtractor={(item, index) => index.toString()}
          renderItem={info => (
            <View style={styles.listItem}>
              <Text>
                {info.item.angka} adalah {info.item.status}
              </Text>
            </View>
          )}
        />

        {/* <View style={{flexDirection: 'row', marginTop: 300, marginRight: 15}}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Redux</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Data Diri</Text>
            </View>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  };

  inputAngkaChangeHandler = InputAngka => {
    this.setState({
      bilangan: InputAngka,
    });
  };

  render() {
    console.log('Data Props Reducer');
    console.log(this.props.dataAngka);

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Angka"
          value={this.state.bilangan}
          onChangeText={this.inputAngkaChangeHandler}
        />
        <View>
          <TouchableOpacity onPress={this.ganjilGenap}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Hitung Ganjil Genap</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>{this.output()}</View>

        <View style={{flexDirection: 'row', marginTop: 300, marginRight: 15}}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Redux</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Data Diri</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#38a038',
    height: 900,
  },
  listItem: {
    width: 300,
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 30,
    backgroundColor: '#95d895',
  },
  input: {
    width: 200,
    borderWidth: 2,
    marginLeft: 20,
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 8,
  },
  button: {
    width: 150,
    height: 'auto',
    alignContent: 'center',
    // elevation: 5,
    backgroundColor: 'black',
    padding: 20,
    marginRight: 5,
    marginLeft: 19,
    marginBottom: 40,
    justifyContent: 'flex-end',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
  },
  listContainer: {
    width: '100%',
  },
});

const mapStateToProps = data => {
  return {
    // places dapet dari array cityReducers, listCity dapet dari index.js dari folder reducers
    dataAngka: data.listAngka.tempatAngka,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: (angka, status) => {
      dispatch(addAngka(angka, status)); //addCity dari index.js di folder action
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AplikasiGanjilGenap);
