import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants/routes';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import WelcomeScreen from '../screens/welcome';

const AuthStackNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={ROUTES.WELCOME_SCREEN} component={WelcomeScreen} />
                <Stack.Screen name={ROUTES.SIGNUP_SCREEN} component={SignupScreen} />
                <Stack.Screen name={ROUTES.LOGIN_SCREEN} component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthStackNavigator;