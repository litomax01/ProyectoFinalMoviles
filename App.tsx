import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { StatusBar } from 'react-native';
import { PRIMARY_COLOR } from './src/theme/commons/constants';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={PRIMARY_COLOR} barStyle="light-content" />
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
