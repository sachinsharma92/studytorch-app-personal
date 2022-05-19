import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleConstants } from '../../styles/style-constants'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/userActions';
import ButtonPrimary from '../../common/buttonPrimary';
import Title from '../../components/Typography/Title';
import SubText from '../../components/Typography/SubText';
import InputPrimary from '../../common/inputPrimary';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ROUTES } from '../../constants/routes';

// Svg Images Here


interface LoginScreenProps {
  navigation: any
}


export default function LoginScreen({ navigation }: LoginScreenProps) {
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(login(987654321, '2932'));
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.mainContainer}>
        <View style={styles.head}>
          <Title style={{ fontSize: 35, marginBottom: 20 }}>👋</Title>
          <Title style={styles.title1}>Welcome to StudyTorch!</Title>
          <SubText style={styles.subtext}>Login to your account </SubText>
        </View>

        <View style={styles.formStyle}>
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

          <View style={styles.forgot}>
            <TouchableOpacity onPress={() => { navigation.navigate(ROUTES.RESET_PASSWORD_SCREEN) }}><SubText style={{ color: StyleConstants.COLOR_PRIMARY }}>Forgot Password?</SubText></TouchableOpacity>
          </View>

          <ButtonPrimary buttonStyle={{ marginTop: 30 }} onPress={() => { navigation.navigate(ROUTES.ONBOARDING_SCREEN) }} label="Login" />

          <View style={styles.registerNow}>
            <SubText style={{ textAlign: 'center', marginRight: 5 }}>Don’t have a Account?</SubText>
            <TouchableOpacity onPress={() => { navigation.navigate(ROUTES.SIGNUP_SCREEN) }}><SubText style={{ color: StyleConstants.COLOR_PRIMARY }}>Register Now!</SubText></TouchableOpacity>
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  formStyle: {
    flexGrow: 2
  },
  title1: {
    fontSize: 26,
  },
  subtext: {
    // color: 'white'
  },
  head: {
    marginBottom: 20
  },
  registerNow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  forgot: {
    alignItems: 'flex-end',
    textAlign: 'right',
    marginTop: 10
  }
})
