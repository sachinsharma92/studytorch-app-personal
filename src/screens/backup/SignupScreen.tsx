import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ROUTES } from '../../constants/routes'

interface SignupScreenProps {
    navigation: any
}

export default function SignupScreen({navigation}: SignupScreenProps) {

    return (
        <SafeAreaView>
            <Text>SignupScreen</Text>
            <Button onPress={() => {console.log("navigation Called"); navigation.navigate(ROUTES.LOGIN_SCREEN)}}>Login</Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
