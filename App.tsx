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
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import {backgroundColor} from './application/assets/Colors';
import BottonNavigation from './application/navigation/BottonNavigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  SplashScreen.hide();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={backgroundColor} />
      <NavigationContainer>
        <BottonNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
