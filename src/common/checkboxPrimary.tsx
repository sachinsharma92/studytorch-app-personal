import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

interface CheckboxPrimaryProps {
  onPress?: () => void;
  status?: any;
  label?: string
}

export default function CheckboxPrimary({ onPress, status, label }: CheckboxPrimaryProps) {
  return (
    <TouchableOpacity onPress={onPress} style={{marginBottom: 15, marginLeft: -7}}>
      <View style={{ flexDirection: 'row', }}>
        <Checkbox status={status} color="#5F65F6" uncheckedColor='#ABB1B8' />
        <Text style={{fontFamily: 'Sofia-Pro-Regular', flex: 1, lineHeight: 20, top: 3, fontSize: 13 }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}