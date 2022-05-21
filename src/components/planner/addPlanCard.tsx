import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Modal from "react-native-modal";
import Title from '../Typography/Title';
import { StyleConstants } from '../../styles/style-constants';
import SubText from '../Typography/SubText';
import ButtonPrimary from '../../common/buttonPrimary';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InputPrimary from '../../common/inputPrimary';
import DatePicker from 'react-native-date-picker'

interface AddPlanCardProps {
  children?: any;
  isVisible?: any,
  onBackdropPress?: any,
  closeHandler?: () => void
}

const colorPalate = [
  {
    color: '#878C92'
  },
  {
    color: '#6153CC'
  },
  {
    color: '#FF705B'
  },
  {
    color: '#FB7E7E'
  },
  {
    color: '#FFB628'
  },
]

export default function AddPlanCard({ closeHandler, isVisible, onBackdropPress }: AddPlanCardProps) {
  const [date, setDate] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)

  return (
    <Modal isVisible={isVisible} style={{ margin: 10, justifyContent: 'center' }} onBackdropPress={onBackdropPress}>
      <View style={{ backgroundColor: 'white', minHeight: 150, borderRadius: 10, overflow: 'hidden' }}>
        <TouchableOpacity onPress={closeHandler} style={styles.closeButton}><Icon name="close" size={20}></Icon></TouchableOpacity>
        <View style={{ padding: 20 }}>
          <Title level={2}>Plan</Title>
          <View style={styles.formStyle}>
            <InputPrimary placeholder="Title" style={{ marginTop: 30 }} />
            <TextInput
              multiline={true}
              numberOfLines={10}
              placeholder="Click to add Description"
              style={styles.textArea}
            />
            <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 10 }}>
              <SubText style={{ color: StyleConstants.COLOR_TEXT, marginRight: 10 }}>Label Color</SubText>
              {colorPalate.map((item) => (
                <TouchableOpacity style={[styles.colorBox, { backgroundColor: item.color }]} />
              ))}
            </View>

            <View>
              <TouchableOpacity onPress={() => setOpen(true)} style={styles.datePicker}>
                <SubText style={{ opacity: 0.6 }}>Select Date</SubText>
                <Icon size={20} name="calendar-month-outline" style={{ opacity: 0.5 }} />
              </TouchableOpacity>
              <DatePicker
                modal
                mode='date'
                open={open}
                date={date}
                onConfirm={(date) => {
                  setOpen(false)
                  setDate(date)
                }}
                onCancel={() => {
                  setOpen(false)
                }}
              />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ width: '49%' }}>
                <TouchableOpacity onPress={() => setOpen(true)} style={styles.datePicker}>
                  <SubText style={{ opacity: 0.6 }}>Select Time</SubText>
                  <Icon size={20} name="clock-outline" style={{ opacity: 0.5 }} />
                </TouchableOpacity>
                <DatePicker
                  modal
                  mode='time'
                  open={open}
                  date={date}
                  onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                  }}
                  onCancel={() => {
                    setOpen(false)
                  }}
                />
              </View>

              <View style={{ height: 100, width: '49%' }}>
                <TouchableOpacity onPress={() => setOpen(true)} style={styles.datePicker}>
                  <SubText style={{ opacity: 0.6 }}>Select Time</SubText>
                  <Icon size={20} name="clock-outline" style={{ opacity: 0.5 }} />
                </TouchableOpacity>
                <DatePicker
                  modal
                  mode='time'
                  open={open}
                  date={date}
                  onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                  }}
                  onCancel={() => {
                    setOpen(false)
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttonSection}>
          <ButtonPrimary buttonStyle={{ marginRight: 20, backgroundColor: 'transparent' }} textStyle={{ color: StyleConstants.COLOR_TEXT }} label="Cancel" />
          <ButtonPrimary label="Add" />
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
    justifyContent: 'flex-end',
    backgroundColor: StyleConstants.COLOR_GRAY_F6,
    padding: 20,
    width: '100%'
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1
  },
  formStyle: {

  },
  textArea: {
    height: 140,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_BORDER,
    borderRadius: 6,
    marginTop: 20,
    padding: 20,
    fontFamily: 'Sofia-Pro-Regular',
  },
  datePicker: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_BORDER,
    borderRadius: 6,
    marginTop: 20,
    height: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
    fontFamily: 'Sofia-Pro-Regular',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorBox: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginLeft: 10
  }
})
