import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Title from '../../Typography/Title';
import { StyleConstants } from '../../../styles/style-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckboxPrimary from '../../../common/checkboxPrimary';
import InputPrimary from '../../../common/inputPrimary';
import SubText from '../../Typography/SubText';
import ButtonPrimary from '../../../common/buttonPrimary';
import { ProgressBar, Colors } from 'react-native-paper';

interface CompletedQuizCardProps {
  dotHandler?: () => void,
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

export default function CompletedQuizCard({ dotHandler, nameCount, plushandler }: CompletedQuizCardProps) {
  return (
    <View style={[styles.cardStyle]}>
      <View style={styles.head}>
        <View>
          <Title style={styles.title1}>QUIZ NAME</Title>
          <SubText style={{color: StyleConstants.COLOR_TEXT, fontSize: 16}}>Collection name</SubText>
          <SubText>22nd Sep 2021</SubText>
        </View>
        <TouchableOpacity onPress={dotHandler} style={styles.blueBadge}><SubText style={{ color: '#50ABED', fontSize: 15, lineHeight: 16 }}>Completed</SubText></TouchableOpacity>
      </View>

      <View style={[styles.takeQuizStyle]}>
        <View style={[styles.blueBadge, {borderWidth: 0, borderRadius: 50, paddingHorizontal: 15}]}>
          <SubText style={styles.parentageText}>Score:2</SubText>
        </View>
        <ButtonPrimary buttonStyle={{ minHeight: 40 }} textStyle={{fontSize: 14, lineHeight: 16}} label="Check Solution" />
      </View>
    </View>
  )
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
  formStyle: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20
  },
  takeQuizStyle: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 15,
    marginBottom: 20,
    paddingHorizontal: 20
  },
  blueBadge: {
    borderWidth: 1,
    borderColor: '#50ABED',
    backgroundColor: '#EEF6FE',
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 35,
    display: 'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  parentageText: {
    fontSize: 14,
    lineHeight:18,
    opacity: 1,
    color: '#50ABED'
  }
})
