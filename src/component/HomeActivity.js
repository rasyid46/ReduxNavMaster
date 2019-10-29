import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class HomeActivity extends Component {
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
