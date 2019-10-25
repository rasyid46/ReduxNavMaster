import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AplikasiGanjilGenap from './AplikasiGanjilGenap';

const RootStack = createStackNavigator(
  {
    //The Routes
    Home: {screen: AplikasiGanjilGenap},
  },
  {
    //Default Route
    initialRouteName: 'Home',
  },
);
//create app container
const Container = createAppContainer(RootStack);
export default Container;

