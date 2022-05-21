import * as React from 'react';
import { View, TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { Checkbox } from 'react-native-paper';
import SubText from '../components/Typography/SubText';
import { StyleConstants } from '../styles/style-constants';

interface TagCustomProps {
  onPress?: () => void;
  status?: any;
  tagText?: string,
  checkboxText?: any,
  checkboxStyle?: StyleProp<ViewStyle>
}

export default function TagCustom({ onPress, status, tagText, checkboxText, checkboxStyle }: TagCustomProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: 'row', backgroundColor: '#E3ECF7', borderRadius: 50, height: 30, paddingHorizontal: 10, justifyContent:'center' }}>
        <SubText style={{lineHeight: 26, color:StyleConstants.COLOR_TEXT}}>{tagText}</SubText>
      </View>
    </TouchableOpacity>
  );
}