import * as React from 'react';
import { View, TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { Checkbox } from 'react-native-paper';

interface CheckboxPrimaryProps {
  onPress?: () => void;
  status?: any;
  label?: string,
  checkboxText?: any,
  checkboxStyle?: StyleProp<ViewStyle>
}

export default function CheckboxPrimary({ onPress, status, label, checkboxText, checkboxStyle }: CheckboxPrimaryProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[{marginBottom: 15, marginLeft: -7}, checkboxStyle]}>
      <View style={{ flexDirection: 'row', }}>
        <Checkbox status={status} color="#5F65F6" uncheckedColor='#ABB1B8' />
        <Text style={[{fontFamily: 'Sofia-Pro-Regular', flex: 1, lineHeight: 20, top: 3, fontSize: 13 }, checkboxText]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}