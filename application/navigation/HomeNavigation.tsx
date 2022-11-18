import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import SerieNavigation from "./SerieNavigation";
  
const Stack = createNativeStackNavigator();
const serieNavigation = SerieNavigation(Stack)

const HomeNavigation = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen}
            options={{
                headerShown: false
              }}
         />
        {serieNavigation}
    </Stack.Navigator>
)

export default HomeNavigation;