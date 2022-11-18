import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import SeriesNavigation from './HomeNavigation'
import SearchNavigation from "./SearchNavigation";
import FavoriteNavigation from "./FavoriteNavigation";
import PersonNavigation from "./PersonNavigation";

import { activeColor, inactiveColor } from "../assets/Colors";

const Tab = createBottomTabNavigator();

Icon.loadFont();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen 
                name="Series" 
                component={SeriesNavigation} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                    tabBarActiveTintColor: activeColor
                }}
            />
            <Tab.Screen 
                name="People" 
                component={PersonNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="users" size={size} color={color} />
                    ),
                    tabBarActiveTintColor: activeColor,
                    tabBarInactiveTintColor: inactiveColor
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={SearchNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search" size={size} color={color} />
                    ),
                    tabBarActiveTintColor: activeColor,
                    tabBarInactiveTintColor: inactiveColor
                }}
            />
            <Tab.Screen 
                name="Favorite" 
                component={FavoriteNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" size={size} color={color} />
                    ),
                    tabBarActiveTintColor: activeColor,
                    tabBarInactiveTintColor: inactiveColor
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomNavigation;