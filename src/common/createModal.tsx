import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import { StyleConstants } from '../styles/style-constants';
import ButtonPrimary from '../common/buttonPrimary';
import InputPrimary from '../common/inputPrimary';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Title from '../components/Typography/Title';
import SubText from '../components/Typography/SubText';

interface ShareCollectionProps {
  children?: any;
  isVisible?: any,
  onBackdropPress?: () => void,
  closeHandler?: () => void,
  mainTitle?: string,
  inputlabel?: string,
  inputPlaceholder?: string,
  buttonText?: string
}

const colorPalate = [
  {
    color: '#EFF2FF'
  },
  {
    color: '#FEE3E1'
  },
  {
    color: '#E3F7FF'
  },
  {
    color: '#FFEDE2'
  },
]

export default function CreateModal({ isVisible, onBackdropPress, closeHandler, mainTitle, inputlabel, inputPlaceholder, buttonText="Save" }: ShareCollectionProps) {

  return (
    <>
      <Modal isVisible={isVisible} style={{ margin: 10, justifyContent: 'center' }} onBackdropPress={onBackdropPress}>
        <View style={{ backgroundColor: 'white', minHeight: 150, borderRadius: 10, padding: 20, overflow: 'hidden', }}>
          <TouchableOpacity onPress={closeHandler} style={styles.closeButton}><Icon name="close" size={20}></Icon></TouchableOpacity>
          <Title level={2}>{mainTitle}</Title>

          <View style={styles.formStyle}>
            <InputPrimary
              label={inputlabel}
              placeholder={inputPlaceholder}
              style={{ marginTop: 30 }}
            />

            <View style={{ marginTop: 20 }}>
              <SubText style={{ color: StyleConstants.COLOR_TEXT, marginRight: 10 }}>Select Color</SubText>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                {colorPalate.map((item) => (
                  <TouchableOpacity style={[styles.colorBox, { backgroundColor: item.color }]} />
                ))}
              </View>
            </View>
          </View>

          <ButtonPrimary buttonStyle={{ minHeight: 45, }} label={buttonText} />
        </View>
      </Modal>
    </>
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
    paddingVertical: 15
  },
  title1: {
    fontSize: 18,
    marginBottom: 5
  },
  subtext: {
    fontSize: 14,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: StyleConstants.COLOR_GRAY_EA,
    paddingVertical: 10,
    marginHorizontal: -20,
    paddingHorizontal: 20,
    marginTop: 20
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 25,
    zIndex: 1
  },
  membersList: {
    paddingVertical: 20
  },
  button: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_GRAY_EA,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    // justifyContent:'center'
  },
  buttonTitle: {
    marginLeft: 10,
    fontSize: 16,
    color: StyleConstants.COLOR_TEXT_LIGHT
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  formStyle: {
    marginBottom: 30
  },
  colorBox: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginRight: 10
  }
})
