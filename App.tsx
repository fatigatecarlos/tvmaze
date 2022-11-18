/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView, StatusBar } from 'react-native'
import SplashScreen from "react-native-splash-screen"
import BottonNavigation from './application/navigation/BottonNavigation'
import { backgroundColor } from "./application/assets/Colors"

SplashScreen.hide()

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
                backgroundColor={backgroundColor}
            />
            <NavigationContainer >
                <BottonNavigation />
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default App;
