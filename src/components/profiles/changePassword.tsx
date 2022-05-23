import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import Title from '../Typography/Title';
import { StyleConstants } from '../../styles/style-constants';
import ButtonPrimary from '../../common/buttonPrimary';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InputPrimary from '../../common/inputPrimary';

interface ChangePasswordModalProps {
  children?: any;
  isVisible?: any,
  onBackdropPress?: any,
  closeHandler?: () => void,
  cancelHandler?: () => void,
}

const checklistData = [
  {
    labelText: 'Uranus'
  },
  {
    labelText: 'Earth'
  },
  {
    labelText: 'Neptune'
  },
  {
    labelText: 'Pluto'
  },
]

export default function ChangePasswordModal({ closeHandler, isVisible, onBackdropPress, cancelHandler }: ChangePasswordModalProps) {
  return (
    <Modal isVisible={isVisible} style={{ margin: 10, justifyContent: 'center' }} onBackdropPress={onBackdropPress}>
      <View style={{ backgroundColor: 'white', minHeight: 150, borderRadius: 10, overflow: 'hidden', padding: 20, paddingBottom: 0 }}>
        {/* <TouchableOpacity onPress={closeHandler} style={styles.closeButton}><Icon name="close" size={20}></Icon></TouchableOpacity> */}

        <Title level={2}>Change Password</Title>

        <View style={styles.formStyle}>
          <InputPrimary
            label="Current Password"
            placeholder="Enter Password"
            style={{ marginTop: 30 }}
          />

          <InputPrimary
            label="New Password"
            placeholder="Enter Password"
            style={{ marginTop: 30 }}
          />

          <InputPrimary
            label="Confim New Password"
            placeholder="Enter Password"
            style={{ marginTop: 30 }}
          />

        </View>

        <View style={styles.buttonSection}>
          <ButtonPrimary onPress={cancelHandler} buttonStyle={{ backgroundColor: "transparent" }} textStyle={{ color: StyleConstants.COLOR_TEXT }} label="Cancel" />
          <ButtonPrimary label="Done" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_BORDER,
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  title1: {
    fontSize: 18,
    marginBottom: 5
  },
  subtext: {
    fontSize: 14,
  },
  checkboxList: {
    width: '100%',
    paddingHorizontal: 8,
    marginTop: 20
  },
  checkboxStyle: {
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_BORDER,
    height: 50,
    marginBottom: 20,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: -20,
    paddingHorizontal: 20,
    marginTop: 20,
    padding: 10,
    backgroundColor: StyleConstants.COLOR_GRAY_EA
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1
  },
  formStyle: {
    flexGrow: 2
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
