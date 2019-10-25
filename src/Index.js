import React, {Component} from 'react'; 
import { Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Index extends Component {
  render() {
    return (
      <View>
        <Text>Hai</Text>
        <Icon name="ios-home" size={30} color="#900" />
      </View>
    );
  }
}

import ScreenContainer from './ff/ScreenContainer';
export default ScreenContainer;
//export default Index;
