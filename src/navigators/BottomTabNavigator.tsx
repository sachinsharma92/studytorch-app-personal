import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreenStackNavigator from './HomeScreenStackNavigator';
import { ROUTES } from '../constants/routes';


const Tab = createBottomTabNavigator();



export default function BottomTabNavigator() {

    const getIcon = (name : string) => (props: {
        focused: boolean;
        color: string;
        size: number;
    }) => {
        return (<Icon name={name} color={props.color} size={24}/>);
    }

    return (
        <NavigationContainer >
            <Tab.Navigator>
                <Tab.Screen 
                name={ROUTES.HOME_STACK_NAVIGATOR}
                component={HomeScreenStackNavigator}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: getIcon('home')
                }}
                 />
                <Tab.Screen name={ROUTES.PROFILE_SCREEN} component={ProfileScreen}
                options={{
                    tabBarIcon: getIcon('account'),
                }}
                 />
            </Tab.Navigator>
        </NavigationContainer>

    )
}