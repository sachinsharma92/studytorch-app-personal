import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { ROUTES } from '../constants/routes';

const HomeScreenStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreenStackNavigator;