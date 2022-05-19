import React from 'react'
import { View } from 'react-native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import ProfileScreen from '../screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreenStackNavigator from './HomeScreenStackNavigator';
import { ROUTES } from '../constants/routes';
import { TabBar } from './bottomAnimation/TabBar';


const Tab = createBottomTabNavigator();



export default function BottomTabNavigator() {

    const getIcon = (name: string) => (props: {
        focused: boolean;
        color: string;
        size: number;
    }) => {
        return (<Icon name={name} color={props.color} size={24} />);
    }

    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer >
                <Tab.Navigator tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}>
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
            {useSafeAreaFrame().bottom > 0 && (
                <View
                    style={{
                        height: useSafeAreaFrame().bottom - 5,
                        backgroundColor: "white",
                    }}
                />
            )}
        </View>

    )
}