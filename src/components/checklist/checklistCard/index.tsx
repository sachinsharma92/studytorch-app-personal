import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Title from '../../Typography/Title';
import { StyleConstants } from '../../../styles/style-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckboxPrimary from '../../../common/checkboxPrimary';
import InputPrimary from '../../../common/inputPrimary';

interface ChecklistCardProps {
  dotHandler?:  () => void,
  nameCount?: string,
  plushandler?: () => void,
}

const checklistData = [
  {
    labelText: 'Add prototype device type'
  },
  {
    labelText: 'Do we need a design for the new SE?'
  },
  {
    labelText: 'Link design in JIRA'
  },
  {
    labelText: 'Draw new chevron icon'
  },
  {
    labelText: 'Draw new chevron icon'
  }
]

export default function ChecklistCard({ dotHandler, nameCount, plushandler }: ChecklistCardProps) {
  return (
    <View style={[styles.cardStyle]}>
      <View style={styles.head}>
        <View>
          <Title style={styles.title1}>Name of To Do <Title style={[styles.title1, { color: StyleConstants.COLOR_PRIMARY }]}>({nameCount})</Title></Title>
        </View>
        <TouchableOpacity onPress={dotHandler} style={styles.dotButton}><Icon name="dots-vertical" size={24} /></TouchableOpacity>
      </View>

      <View style={styles.checkboxList}>
        {checklistData.map((item) => (
          <CheckboxPrimary label={item.labelText} checkboxText={{top: 6}} />
        ))}
      </View>

      <View style={styles.formStyle}>
        <InputPrimary
          placeholder="Add to checklist"
        />
        <TouchableOpacity onPress={plushandler} style={styles.plusButton}><Icon name="plus" size={20} color={'white'} /></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 8,
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
  imgStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  dotButton: {
  },
  tinyLogo: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    zIndex: 1,
  },
  imageStack: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 30,
  },
  count: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: StyleConstants.COLOR_PRIMARY,
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    left: -30,
    zIndex: 1
  },
  curveLines: {
    position: 'absolute',
    right: 0,
    top: 0,
    opacity: 0.7
  },
  checkboxList: {
    width: '100%',
    paddingHorizontal: 20
  },
  formStyle: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20
  },
  plusButton: {
    width: 30,
    height: 30,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: StyleConstants.COLOR_SECONDARY,
    position: 'absolute',
    top: 10,
    right: 30
  },
  head: {
    borderBottomWidth: 1,
    borderBottomColor: StyleConstants.COLOR_BORDER,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    width: '100%',
    paddingBottom: 15,
    marginBottom: 20,
    paddingHorizontal: 20
  }
})
