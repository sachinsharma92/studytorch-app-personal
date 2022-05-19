
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Title from "../components/Typography/Title";
import { StyleConstants } from "../styles/style-constants";

interface ButtonPrimaryProps {
  onPress?: () => void;
  label?: string;
  disabled?: boolean;
  buttonIcon?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: any;
  leftIcon?: any;
  leftIconColor?: string;
}

export default function ButtonPrimary({
  onPress,
  label = "Submit",
  disabled = false,
  buttonStyle,
  buttonIcon,
  textStyle,
  leftIcon,
  leftIconColor
}: ButtonPrimaryProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, buttonStyle, buttonIcon === true && styles.buttonArrowStyle]}
    >
      {leftIcon && (
        <Icon
          name={leftIcon}
          size={24}
          color={leftIconColor}
          style={{marginRight: 10}}
        />
      )}
      <Title style={[styles.text, textStyle ]}>{label}</Title>
      {buttonIcon && (
        <Icon
          name="arrow-right"
          size={26}
          color={StyleConstants.COLOR_TEXT}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    backgroundColor: StyleConstants.COLOR_PRIMARY,
    borderRadius: StyleConstants.BORDER_RADIUS,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: '100%',
    minHeight: 50,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Sofia-Pro-Regular',
  },
  buttonArrowStyle: {
    justifyContent: 'space-between'
  }
});
