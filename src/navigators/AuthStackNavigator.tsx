import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants/routes';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/login';
import SignupScreen from '../screens/singup';
import WelcomeScreen from '../screens/welcome';
import ResetPasswordScreen from '../screens/resetPassword';
import OnboardingScreen from '../screens/onboarding';

const AuthStackNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={ROUTES.WELCOME_SCREEN} component={WelcomeScreen} />
                <Stack.Screen name={ROUTES.SIGNUP_SCREEN} component={SignupScreen} />
                <Stack.Screen name={ROUTES.LOGIN_SCREEN} component={LoginScreen} />
                <Stack.Screen name={ROUTES.RESET_PASSWORD_SCREEN} component={ResetPasswordScreen} />
                <Stack.Screen name={ROUTES.ONBOARDING_SCREEN} component={OnboardingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthStackNavigator;