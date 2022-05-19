import React from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleConstants } from '../../styles/style-constants'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/userActions';
import ButtonPrimary from '../../common/buttonPrimary';
import Title from '../../components/Typography/Title';
import SubText from '../../components/Typography/SubText';
import InputPrimary from '../../common/inputPrimary';
import { ROUTES } from '../../constants/routes';
import CheckboxPrimary from '../../common/checkboxPrimary';

// Svg Images Here


interface LoginScreenProps {
  navigation: any
}


export default function SingupScreen({ navigation }: LoginScreenProps) {
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(login(987654321, '2932'));
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.mainContainer}>
        <ScrollView style={{ paddingHorizontal: 20, }}>
          <View style={styles.head}>
            <Title style={{ fontSize: 35, marginBottom: 20 }}>👋</Title>
            <Title style={styles.title1}>Create your Account</Title>
            <SubText style={styles.subtext}>It’s free and easy</SubText>
          </View>

          <View style={styles.formStyle}>
            <InputPrimary
              label="Full name"
              placeholder="Enter your name"
              style={{ marginTop: 30 }}
            />

            <InputPrimary
              label="E-mail or phone number"
              placeholder="Type your e-mail or phone number"
              style={{ marginTop: 30 }}
            />

            <InputPrimary
              label="Password"
              placeholder="Type your password"
              style={{ marginTop: 30 }}
            />
            <SubText style={{ opacity: 0.5, marginTop: 5 }}>Must be 8 characters at least</SubText>

            <InputPrimary
              label="Confirm Password"
              placeholder="Confirm Password"
              style={{ marginTop: 30 }}
            />

            <View style={styles.checkbox}>
              <CheckboxPrimary label="By creating an account means you agree to the Terms and Conditions, and our Privacy Policy" />
            </View>

            <ButtonPrimary buttonStyle={{ marginTop: 30 }} onPress={() => onLogin()} label="Login" />

            <View style={styles.registerNow}>
              <SubText style={{ textAlign: 'center', marginRight: 5 }}>Have a Account?</SubText>
              <TouchableOpacity onPress={() => { navigation.navigate(ROUTES.LOGIN_SCREEN) }}><SubText style={{ color: StyleConstants.COLOR_PRIMARY }}>Sign up Now !</SubText></TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  formStyle: {
    // flexGrow: 2
    marginBottom: 30
  },
  title1: {
    fontSize: 26,
  },
  subtext: {
    // color: 'white'
  },
  head: {
    marginBottom: 20,
    marginTop: 30
  },
  registerNow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  checkbox: {
    marginTop: 20,
    flex: 1
  }
})
