import React, { useState } from 'react'
import * as ImagePicker from 'react-native-image-picker';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'
import Title from '../Typography/Title';
import SubText from '../Typography/SubText';
import ImageUpload from '../../common/imageUpload';
import { StyleConstants } from '../../styles/style-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ChangePasswordModal from './changePassword';

interface SecurityCardProps {
  navigation?: any
}

export default function SecurityCard({ navigation }: SecurityCardProps) {

  const [isChangePasswordModal, setChangePasswordModal] = useState(false);
	const changePasswordModal = () => {
		setChangePasswordModal(!isChangePasswordModal);
	};


  return (
    <View style={styles.mainContainer}>
      <View style={[styles.head, { marginBottom: 30, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
        <View>
          <Title style={styles.title1}>Account</Title>
          <SubText style={styles.subtext}>Security</SubText>
        </View>
      </View>

      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View style={{ alignItems: 'flex-start', }}>
          <View style={[styles.head, { flex: 1 }]}>
            <Title level={2}>Password</Title>
            <SubText>Edit your Current Password to protect your personal account</SubText>
          </View>

          <TouchableOpacity style={styles.editPassword} onPress={changePasswordModal}>
            <Icon name="pencil" size={18} color={StyleConstants.COLOR_PRIMARY} />
            <SubText style={{ color: StyleConstants.COLOR_PRIMARY, marginLeft: 5 }}>Edit Password</SubText>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ChangePasswordModal cancelHandler={changePasswordModal} onBackdropPress={changePasswordModal} isVisible={isChangePasswordModal}/>
    </View>
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
  editPassword: {
    borderWidth: 1, 
    borderColor: StyleConstants.COLOR_PRIMARY, 
    paddingHorizontal: 10, 
    paddingVertical: 8, 
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center'
  }
})