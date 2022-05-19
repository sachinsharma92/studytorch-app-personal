import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoPrimary from '../common/logoPrimary'
import SubText from '../components/Typography/SubText'
import Title from '../components/Typography/Title'

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <LogoPrimary/>
            <Title>An App for your Study need you!</Title>
            <SubText>Maybe some text here will help me see it better. Oh God. Oke, let’s do it then. </SubText>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
