import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class HomeActivity extends Component {
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

  render() {
    return (
      <View>
        <Text>Home Activity</Text>
        <Button
          title="Go to Profile Activity"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}
export default HomeActivity;
