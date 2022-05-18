import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions';


interface LoginScreenProps {
    navigation: any
}


export default function LoginScreen({}: LoginScreenProps) {

    const dispatch = useDispatch();

    const onLogin = () => {
        dispatch(login(987654321, '2932'));
    }
    

    return (
        <SafeAreaView>
            <Text>LoginScreen</Text>
            <Button onPress={() => onLogin()}>Login</Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
