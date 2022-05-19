import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoPrimary from '../../common/logoPrimary'
import SubText from '../../components/Typography/SubText'
import Title from '../../components/Typography/Title'
import { StyleConstants } from '../../styles/style-constants'
import ButtonPrimary from '../../common/buttonPrimary'

// Svg Images Here
import IllustrationImage from "../../assets/images/illustration/image1.svg";
import { ROUTES } from '../../constants/routes'


interface WelcomeScreenProps {
  navigation: any
}

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: StyleConstants.COLOR_PRIMARY }}>
      <View style={styles.mainContainer}>
        <LogoPrimary />
        <View style={{ marginTop: 50 }}>
          <Title style={styles.title1}>An App for your Study need you!</Title>
          <SubText style={styles.subtext}>Maybe some text here will help me see it better. Oh God. Oke, let’s do it then. </SubText>
        </View>

        <View style={styles.buttonSection}>
          <ButtonPrimary
            buttonStyle={{ backgroundColor: 'white', marginBottom: 20 }}
            textStyle={{ color: StyleConstants.COLOR_PRIMARY }}
            label="Login"
            onPress={() => { navigation.navigate(ROUTES.LOGIN_SCREEN) }}
          />
          <ButtonPrimary
            buttonStyle={{ backgroundColor: 'white' }}
            textStyle={{ color: StyleConstants.COLOR_PRIMARY }}
            onPress={() => { navigation.navigate(ROUTES.SIGNUP_SCREEN) }}
            label="Register"
          />
        </View>

        <IllustrationImage style={styles.illustrationStyle} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: StyleConstants.COLOR_PRIMARY,
    padding: 20,
  },
  title1: {
    fontSize: 40,
    color: 'white',
    marginBottom: 30,
  },
  subtext: {
    color: 'white'
  },
  illustrationStyle: {
    position: 'absolute',
    bottom: -170,
    left: 0,
    maxWidth: 400,
    opacity: 0.5
  },
  buttonSection: {
    marginTop: 30,
    zIndex: 1
  }
})
