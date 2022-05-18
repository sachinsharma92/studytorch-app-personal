import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { IAppState } from '../redux/reducers/indexReducer'
import AuthStackNavigator from './AuthStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import get from 'lodash/get';

export default function MainSwitchNavigator() {
    const accessToken = useSelector((state: IAppState) => get(state, 'userState.accessToken'));

    return  accessToken ? <BottomTabNavigator/> : <AuthStackNavigator/>
}