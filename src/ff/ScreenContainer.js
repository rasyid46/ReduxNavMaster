import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator}from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileActivity from './ProfileActivity';
import AppRedux from './redux/AppRedux';

const RootStack = createMaterialBottomTabNavigator(
    {
        //The Routes
        Home: {screen:AppRedux, 
            navigationOptions: {tabBarLabel: 'Redux', 
            tabBarIcon: ({tintColor})=>(
                <View>
                    <Icon size={25} name={"ios-home"} color={tintColor}/>
                </View>
            )}
        },
        Profile: {
            screen:ProfileActivity,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({tintColor}) =>(
                    <View>
                        <Icon size={25} name={"ios-person"} color={tintColor}/>
                    </View>
                ),
                activeColor: '#f60c0d',
                inactiveColor: '#f65a22',
                barStyle: {backgroundColor: '#f69b31'}
            }
        }
    },
    {
        //Default Route
        initialRouteName:'Home'
    }
);

const Container = createAppContainer(RootStack);
export default Container;