import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from '../screens/Search';
import SerieNavigation from "./SerieNavigation";
  
const Stack = createNativeStackNavigator();
const serieNavigation = SerieNavigation(Stack)

const SearchNavigation = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="SearchScreen" 
            component={SearchScreen}
            options={{
                headerShown: false
              }}
         />
        {serieNavigation}
    </Stack.Navigator>
)

export default SearchNavigation;