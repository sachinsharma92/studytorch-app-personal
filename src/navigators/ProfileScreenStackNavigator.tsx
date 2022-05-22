import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { ROUTES } from '../constants/routes';
import ProfileScreen from '../screens/profiles';

const ProfileScreenStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.PROFILE_SCREEN} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileScreenStackNavigator;