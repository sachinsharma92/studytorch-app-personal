import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Modal from "react-native-modal";
import Title from '../components/Typography/Title';
import SubText from '../components/Typography/SubText';
import { StyleConstants } from '../styles/style-constants';

interface BottomModalProps {
  children?: any;
  isVisible?: any,
  onBackdropPress?: any,
  topTitle?: string,
}

export default function BottomModal({ children, isVisible, onBackdropPress, topTitle }: BottomModalProps) {
  return (
    <Modal isVisible={isVisible} style={{ margin: 0, justifyContent: 'flex-end' }} onBackdropPress={onBackdropPress}>
      <View style={{ backgroundColor: 'white', minHeight: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20 }}>
        {topTitle && <SubText style={{fontSize: 18, fontFamily: 'Sofia-Pro-Medium', marginBottom: 20, color: StyleConstants.COLOR_TEXT}}>{topTitle}</SubText>}
        {children}
      </View>
    </Modal>
  );
}