import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleConstants } from '../../styles/style-constants';
import MyProfileCard from '../../components/profiles/myProfile';
import SecurityCard from '../../components/profiles/security';
import Title from '../../components/Typography/Title';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SubText from '../../components/Typography/SubText';
import { BottomNavigation } from 'react-native-paper';

interface ProfileScreenProps {
  navigation: any
}

export default function ProfileScreen({ navigation }: ProfileScreenProps) {

  const SecurityRoute = () => <SecurityCard />;
  const MyProfileRoute = () => <MyProfileCard />;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'myProfile', title: 'My Profile', icon: 'account-tie' },
    { key: 'security', title: 'Security', icon: 'account-lock-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    security: SecurityRoute,
    myProfile: MyProfileRoute,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.headerPrimary}>
        <TouchableOpacity onPress={() => { navigation.goBack(null) }} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="chevron-left" size={22} />
          <Title level={3} style={{ textTransform: 'uppercase' }}>Back</Title>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteBtn}>
          <Icon name="delete-empty-outline" size={18} color={StyleConstants.COLOR_SECONDARY} />
          <SubText style={{ color: StyleConstants.COLOR_SECONDARY }}>Delete Account</SubText>
        </TouchableOpacity>
      </View>

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        style={{ backgroundColor: 'red' }}
        barStyle={{ backgroundColor: '#f5f5f5', borderTopWidth: 1, paddingVertical: 6, borderTopColor: StyleConstants.COLOR_BORDER }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 10,
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
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  deleteBtn: {
    borderWidth: 1, borderColor: StyleConstants.COLOR_SECONDARY, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  editPassword: {
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerPrimary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: StyleConstants.COLOR_BORDER
  }
})