
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextInput,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SubText from "../components/Typography/SubText";
import Title from "../components/Typography/Title";
import { StyleConstants } from "../styles/style-constants";

interface InputPrimaryProps {
  onPress?: () => void;
  label?: string;
  placeholder?: string,
  keyboardType?: any,
  style?: StyleProp<ViewStyle>,
  infoText?: any,
  inputStyle?: StyleProp<ViewStyle>,
  numberOfLines?: any
  Props?: any,
  multiline?: any
}

export default function InputPrimary({
  onPress,
  label,
  keyboardType,
  inputStyle,
  placeholder,
  style,
  infoText,
  numberOfLines,
  Props,
  multiline
}: InputPrimaryProps) {
  return (
    <View style={style}>
      {label && <Title style={styles.label}>{label}</Title>}
      <TextInput
        style={[styles.input, inputStyle]}
        keyboardType={keyboardType}
        maxLength={10}
        autoFocus={false}
        placeholder={placeholder}
        numberOfLines={numberOfLines}
        multiline={multiline}
        {...Props}
      />
      {infoText && <SubText style={styles.infoText}>{infoText}</SubText>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_GRAY_EA,
    padding: 10,
    borderRadius: StyleConstants.BORDER_RADIUS,
    color: StyleConstants.COLOR_TEXT,
    backgroundColor: 'white',
    fontSize: 14,
    paddingLeft: 20,
    fontFamily: 'Sofia-Pro-Regular',
  },
  label: {
    fontSize: 14,
    lineHeight: 15,
    fontFamily: 'Sofia-Pro-Medium',
    marginBottom: 10,
    color: StyleConstants.COLOR_TEXT,
  },
  infoText: {
    fontSize: 12,
    lineHeight: 15,
    marginTop: 10,
    color: '#718096'
  }
});
