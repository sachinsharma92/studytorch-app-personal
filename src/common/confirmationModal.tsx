import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import { StyleConstants } from '../styles/style-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonPrimary from './buttonPrimary';

interface QuizModalProps {
  children?: any;
  isVisible?: any,
  onBackdropPress?: any,
  closeHandler?: () => void,
  cancelHanlder?: () => void,
  footerShow?: boolean,
  labelYes?: string,
}
export default function ConfirmationModal({ closeHandler, isVisible, onBackdropPress, children, footerShow, cancelHanlder, labelYes='Yes, Delete' }: QuizModalProps) {
  return (
    <Modal isVisible={isVisible} style={{ margin: 10, justifyContent: 'center' }} onBackdropPress={onBackdropPress}>
      <View style={{ backgroundColor: 'white', minHeight: 150, borderRadius: 10, paddingHorizontal: 20, overflow: 'hidden' }}>
        {closeHandler && <TouchableOpacity onPress={closeHandler} style={styles.closeButton}><Icon name="close" size={20}></Icon></TouchableOpacity>}
        <View style={{ paddingVertical: 20 }}>
          {children}
        </View>
        
        {footerShow && <View style={styles.buttonSection}>
          <ButtonPrimary onPress={cancelHanlder} buttonStyle={{ backgroundColor: 'transparent' }} textStyle={{ color: StyleConstants.COLOR_TEXT }} label="Cancel" />
          <ButtonPrimary buttonStyle={{ backgroundColor: StyleConstants.COLOR_SECONDARY, minHeight: 30, }} label={labelYes} />
        </View>}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
    paddingVertical: 10,
    marginHorizontal: -20,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: StyleConstants.COLOR_GRAY_EA
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1
  }
})
