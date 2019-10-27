import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class DataDiri extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.content}>
            When the user clicks on a link, the URL is pushed to the browser
            history stack. When the user presses the back button, the browser
            pops the item from the top of the history stack, so the active page
            is now the previously visited page. React Native doesn't have a
            built-in idea of a global history stack like a web browser does --
            this is where React Navigation enters the story.{' '}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={this.ganjilGenap}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Redux</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.ganjilGenap}>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#38a038',
  },
  content: {
    margin: 10,
    // color: "white",
  },
  box: {
    borderWidth: 3,
    // borderColor: "#38a038",
    borderRadius: 5,
    height: 300,
    width: 50,
    // textAlign: "center",
    marginTop: 70,
    marginBottom: 40,
    marginLeft: 40,
    marginRight: 40,
  },
  button: {
    width: 120,
    height: 'auto',
    alignContent: 'center',
    elevation: 5,
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
});

export default DataDiri;
