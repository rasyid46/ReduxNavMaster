import {createAppContainer} from 'react-navigation';
import HomeActivity from './HomeActivity';
import DataActivity from './DataActivity';

import React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const RootStack = createMaterialBottomTabNavigator(
    {
      //The Routes
      Redux: {
        screen: HomeActivity,
        navigationOptions: {
          tabBarLabel: 'Redux',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon size={25} name={'ios-redux'} color={tintColor} />
            </View>
          ),
        },
      },
      Data: {
        screen: DataActivity,
        navigationOptions: {
          tabBarLabel: 'Data',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon size={25} name={'ios-data'} color={tintColor} />
            </View>
          ),
          activeColor: '#f60c0d',
          inactiveColor: '#f65a22',
          barStyle: {backgroundColor: '#f69b31'},
        },
      },
    },
    {
      //Default Routes
      initialRoutName: 'Redux',
    },
  );
  // create  app container
  const Container = createAppContainer(RootStack);
  export default Container;