import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import ProfileScreen from '../screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreenStackNavigator from './HomeScreenStackNavigator';
import { ROUTES } from '../constants/routes';
import { TabBar } from './bottomAnimation/TabBar';
import { DrawerActions } from '@react-navigation/native';
import CollectionsScreen from '../screens/collections';
import SharedWithMeScreen from '../screens/sharedWithMe';


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
			<Tab.Navigator
				tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
				screenOptions={({ }) => ({ headerShown: false })}
			>
				<Tab.Screen
					name={ROUTES.HOME_STACK_NAVIGATOR}
					component={HomeScreenStackNavigator}
					options={{
						tabBarLabel: "Dashboard",
						tabBarIcon: getIcon('home')
					}}
				/>
				<Tab.Screen
					name={ROUTES.COLLECTIONS_SCREEN}
					component={CollectionsScreen}
					options={{
						tabBarLabel: "Collections",
						tabBarIcon: getIcon('folder-table-outline'),
					}}
				/>
				<Tab.Screen
					name={ROUTES.SHARED_WITH_ME_SCREEN}
					component={SharedWithMeScreen}
					options={{
						tabBarLabel: "Shared",
						tabBarIcon: getIcon('account-group-outline'),
					}}
				/>
					<Tab.Screen
						name={ROUTES.PROFILE_SCREEN}
						component={ProfileScreen}
						options={{
							tabBarLabel: "Profile",
							tabBarIcon: getIcon('account'),
						}}
					/>
			</Tab.Navigator>
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