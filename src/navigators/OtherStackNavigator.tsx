import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants/routes';
import { NavigationContainer } from '@react-navigation/native';
import CollectionDetailScreen from '../screens/collections/details';

const OtherStackNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={ROUTES.COLLECTION_DETAILS_SCREEN} component={CollectionDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default OtherStackNavigator;