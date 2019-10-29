import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class ProfileActivity extends Component {
  render() {
    return (
      <View style>
        <Text style>Profile Activity</Text>
        <Button title="Go to Home"/>
        <Text>Create Nee Profile Screen</Text>
        <Button title="Go to new Profile"/>
        <Button title="GO back"/>
      </View>
    );
  }
}

export default ProfileActivity;
