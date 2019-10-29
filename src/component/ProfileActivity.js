import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class ProfileActivity extends Component {
  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: '#73C6B6',
    },
  };

  render() {
    return (
      <View style>
        <Text style>Profile Activity</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.popToTop('Home')}
        />

        <Text>Create Nee Profile Screen</Text>
        <Button
          title="Go to new Profile"
          onPress={() => this.props.navigation.push('Profile')}
        />

<Button
          title="GO back"
          onPress={() => this.props.navigation.goBack()}
        />

      </View>
    );
  }
}

export default ProfileActivity;
