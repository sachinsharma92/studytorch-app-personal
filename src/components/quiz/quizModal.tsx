import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Checkbox, ProgressBar } from 'react-native-paper';
import Modal from "react-native-modal";
import Title from '../Typography/Title';
import { StyleConstants } from '../../styles/style-constants';
import SubText from '../Typography/SubText';
import CheckboxPrimary from '../../common/checkboxPrimary';
import ButtonPrimary from '../../common/buttonPrimary';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface QuizModalProps {
  children?: any;
  isVisible?: any,
  onBackdropPress?: any,
  closeHandler?: () => void
}

const checklistData = [
  {
    labelText: 'Uranus'
  },
  {
    labelText: 'Earth'
  },
  {
    labelText: 'Neptune'
  },
  {
    labelText: 'Pluto'
  },
]

export default function QuizModal({ closeHandler, isVisible, onBackdropPress }: QuizModalProps) {
  return (
    <Modal isVisible={isVisible} style={{ margin: 10, justifyContent: 'center' }} onBackdropPress={onBackdropPress}>
      <View style={{ backgroundColor: 'white', minHeight: 150, borderRadius: 10, padding: 20 }}>
        <TouchableOpacity onPress={closeHandler} style={styles.closeButton}><Icon name="close" size={20}></Icon></TouchableOpacity>
        <Title level={2}>Quiz Name</Title>
        <View style={{ marginTop: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <SubText style={{ color: StyleConstants.COLOR_PRIMARY }}>2 mins 5s</SubText>
            <SubText> | Question 20/20</SubText>
          </View>
          <ProgressBar progress={0.5} color={'#50ABEC'} style={{ borderRadius: 10, marginTop: 10, height: 6 }} />
        </View>

        <View style={{ marginTop: 20 }}>
          <Title level={3}>Name the seventh planet from the sun?</Title>
        </View>

        <View style={styles.checkboxList}>
          {checklistData.map((item) => (
            <CheckboxPrimary label={item.labelText} checkboxText={{ top: 6 }} checkboxStyle={styles.checkboxStyle} />
          ))}
        </View>

        <View style={styles.buttonSection}>
          <ButtonPrimary buttonStyle={{ backgroundColor: StyleConstants.COLOR_SECONDARY }} textStyle={{ color: 'white' }} label="Previus" />
          <ButtonPrimary label="Submit Quiz" />
        </View>
      </View>
    </Modal>
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
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: StyleConstants.COLOR_BORDER,
    paddingTop: 20,
    marginHorizontal: -20,
    paddingHorizontal: 20,
    marginTop: 20
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1
  }
})
