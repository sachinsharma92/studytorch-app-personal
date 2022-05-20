import React from 'react'
import { useSelector } from 'react-redux'
import { IAppState } from '../redux/reducers/indexReducer'
import AuthStackNavigator from './AuthStackNavigator'
import get from 'lodash/get';
import DrawerNavigator from './DrawerNavigator'

export default function MainSwitchNavigator() {
    const accessToken = useSelector((state: IAppState) => get(state, 'userState.accessToken'));
    return accessToken ? <DrawerNavigator /> : <AuthStackNavigator />
}