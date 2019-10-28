import React, {Component} from 'react'; 
import { Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Index extends Component {
  render() {
    return (
      <View>
        <Text>Hai</Text>
        <Icon name="rocket" size={30} color="#900" />
      </View>
    );
  }
}

import ScreenContainer from './ff/ScreenContainer';
export default ScreenContainer;
