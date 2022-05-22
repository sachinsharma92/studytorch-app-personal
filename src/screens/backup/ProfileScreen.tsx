import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/userActions';

export default function ProfileScreen() {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <View>
            <Text>ProfileScreen</Text>
            <Button onPress={() => onLogout()}>Logout</Button>
        </View>
    )
}

const styles = StyleSheet.create({})
