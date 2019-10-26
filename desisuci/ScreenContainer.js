import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ReduxActivity from './ReduxActivity';
import DataDiri from './DataDiri';
const RootStack = createStackNavigator(
    {
        //The Routes
        Redux: { screen: ReduxActivity },
        DataDiri: { screen: DataDiri }
    },
    {
        //Default Route
        initialRouteName: 'Redux'
    }
);

const ScreenContainer = createAppContainer(RootStack);
export default ScreenContainer;