import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PagerView from 'react-native-pager-view';
import OnboardingCard from '../../components/onboardingCard';
import { ROUTES } from '../../constants/routes';
import SubText from '../../components/Typography/SubText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/userActions';

interface OnboardingScreenProps {
  navigation: any
}

export default function OnboardingScreen({ navigation }: OnboardingScreenProps) {
  const dispatch = useDispatch();

  const onLogin = () => {
      dispatch(login(987654321, '2932'));
  }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <PagerView style={styles.pagerView} initialPage={0}>
          <View key="1" style={{ justifyContent: 'center' }}>
            <OnboardingCard imgUrl={require('../../assets/images/onboarding/img1.png')} />
          </View>
          <View key="2" style={{ justifyContent: 'center' }}>
            <OnboardingCard imgUrl={require('../../assets/images/onboarding/img2.png')} />
          </View>
          <View key="3" style={{ justifyContent: 'center' }}>
            <OnboardingCard imgUrl={require('../../assets/images/onboarding/img3.png')} />
            <View>
              <TouchableOpacity onPress={() => onLogin()} style={{ alignItems: 'center', top: 20, flexDirection: 'row', justifyContent: 'center' }}>
                <SubText style={{ fontSize: 20, fontFamily: 'Sofia-Pro-Medium' }}>Continue</SubText>
                <Icon name="chevron-right" size={24} color="rgba(0, 19, 37, 0.7)" />
              </TouchableOpacity>
            </View>
          </View>
        </PagerView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2F5FF'
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
  pagerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
