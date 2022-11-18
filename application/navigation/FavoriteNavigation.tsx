import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FavoriteScreen from '../screens/Favorite';
import SerieNavigation from './SerieNavigation';

const Stack = createNativeStackNavigator();
const serieNavigation = SerieNavigation(Stack);

const FavoriteNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="FavoriteScreen"
      component={FavoriteScreen}
      options={{
        headerShown: false,
      }}
    />
    {serieNavigation}
  </Stack.Navigator>
);

export default FavoriteNavigation;
