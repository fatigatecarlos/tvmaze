/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PersonScreen from '../screens/Person';
import SerieNavigation from './SerieNavigation';
import PersonDetailScreen from '../screens/PersonDetail';

const Stack = createNativeStackNavigator();
const serieNavigation = SerieNavigation(Stack);

const headerOptions = {
  title: '',
  headerTransparent: true,
  headerTintColor: '#000',
};

const SearchNavigation = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <Stack.Navigator>
    <Stack.Screen
      name="PersonScreen"
      component={PersonScreen}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="PersonDetail"
      component={PersonDetailScreen}
      options={headerOptions}
    />
    {serieNavigation}
  </Stack.Navigator>
);

export default SearchNavigation;
