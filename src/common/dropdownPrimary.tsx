
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
import SelectDropdown from "react-native-select-dropdown";

interface DropdownPrimaryProps {
  onPress?: () => void;
  data?: any;
  label?: string,
  placeholder?: string,
  keyboardType?: any,
  style?: StyleProp<ViewStyle>,
  infoText?: any,
  inputStyle?: StyleProp<ViewStyle>,
  defaultButtonText?: any,
  dropdownStyle?: StyleProp<ViewStyle>,
}

export default function DropdownPrimary({ data, style, label, infoText, defaultButtonText, dropdownStyle }: DropdownPrimaryProps) {
  return (
    <View style={style}>
      {label && <Title style={styles.label}>{label}</Title>}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", minWidth: 100 }}>
        <View style={[styles.selectInputStyle, dropdownStyle]}>
          <SelectDropdown
            defaultValue={'hello'}
            data={data}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            defaultButtonText={defaultButtonText}
            renderDropdownIcon={isOpened => {
              return <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={24} />;
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
          />
        </View>
      </View>

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
  },
  dropdown2BtnStyle: {
    height: 45,
    backgroundColor: 'transparent',
    borderRadius: 6,
    flex: 1,
  },
  dropdown2BtnTxtStyle: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Sofia-Pro-Regular',
  },
  selectInputStyle: {
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderColor: StyleConstants.COLOR_BORDER,
    flex: 1,
    height: 45,
  },
});
