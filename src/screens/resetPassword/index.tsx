import React, { useState } from 'react'
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


interface ResetPasswordProps {
  navigation: any
}


export default function ResetPasswordScreen({ navigation }: ResetPasswordProps) {
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(login(987654321, '2932'));
  }

  const [passwordSent, setPasswordSent] = useState(true)
  const passwordReset = () => {
    setPasswordSent(!passwordSent)
  }



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.mainContainer}>

        {passwordSent ?
          <View>
            <View style={styles.head}>
              <Title style={{ fontSize: 35, marginBottom: 20 }}>🔐</Title>
              <Title style={styles.title1}>Password Reset </Title>
              <SubText style={styles.subtext}>Enter your email and we will send you a reset link</SubText>
            </View>

            <View style={styles.formStyle}>
              <InputPrimary
                label="Registered Email"
                placeholder="Enter your email address"
                style={{ marginTop: 30 }}
              />
              <ButtonPrimary buttonStyle={{ marginTop: 30 }} onPress={passwordReset} label="Reset Password" />
            </View>
          </View>
          :
          <View style={{justifyContent:'center', flex: 1,}}>
            <View style={styles.head}>
              <Title style={{ fontSize: 35, marginBottom: 20 }}>📩</Title>
              <Title style={styles.title1}>Email Sent</Title>
              <SubText style={styles.subtext}>Enter your email and we will send you a reset link</SubText>
            </View>
            <View style={styles.formStyle}>
              <ButtonPrimary onPress={() => { navigation.navigate(ROUTES.LOGIN_SCREEN) }} label="Login" />
            </View>
          </View>}


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
})
