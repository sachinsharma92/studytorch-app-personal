import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoPrimary from '../../common/logoPrimary'
import SubText from '../../components/Typography/SubText'
import Title from '../../components/Typography/Title'
import { StyleConstants } from '../../styles/style-constants'

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: StyleConstants.COLOR_PRIMARY }}>
      <View style={styles.mainContainer}>
        <LogoPrimary />
        <View style={{ marginTop: 50 }}>
          <Title style={styles.title1}>An App for your Study need you!</Title>
          <SubText style={styles.subtext}>Maybe some text here will help me see it better. Oh God. Oke, let’s do it then. </SubText>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: StyleConstants.COLOR_PRIMARY,
    padding: 30,
  },
  title1: {
    fontSize: 40,
    color: 'white',
    marginBottom: 30,
    fontFamily: 'Sofia-Pro-Bold',
  },
  subtext: {
    color:'white'
  }
})
