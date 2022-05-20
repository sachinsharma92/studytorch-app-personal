import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Modal from "react-native-modal";

interface BottomModalProps {
  children?: any;
  isVisible?: any,
  onBackdropPress?: any,
}

export default function BottomModal({ children, isVisible, onBackdropPress }: BottomModalProps) {
  return (
    <Modal isVisible={isVisible} style={{margin: 0, justifyContent:'flex-end'}} onBackdropPress={onBackdropPress}>
      <View style={{ backgroundColor:'white', minHeight: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20 }}>
        {children}
      </View>
    </Modal>
  );
}