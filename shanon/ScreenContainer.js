import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AppReduxGanjilGenap from './AppReduxGanjilGenap';
import dataDiri from './DataDiri';

const RootStack = createStackNavigator(
  {
    //The Routes
    Home: {screen: AppReduxGanjilGenap},
    Data: {screen: dataDiri},
  },
  {
    //Default Route
    initialRouteName: 'Home',
  },
);
//create app container
const Container = createAppContainer(RootStack);
export default Container;
