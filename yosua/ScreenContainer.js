import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ReduxActivity from './ReduxActivity';
import DataDiriActivity from './DataDiriActivity';
const RootStack = createStackNavigator(
    {
        //The Routes
        Redux: {screen:ReduxActivity},
        DataDiri: {screen:DataDiriActivity}
    },
    {
        //Default Route
        initialRouteName:'Redux'
    }
);

const Container = createAppContainer(RootStack);
export default Container;