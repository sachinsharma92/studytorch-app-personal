import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Title from '../../Typography/Title';
import SubText from '../../Typography/SubText';
import { StyleConstants } from '../../../styles/style-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FolderIcon from "../../../assets/images/folders/folder1.svg"

interface CallectionCardProps {
  imgUrl?: any,
  subText?: string,
  title?: string
}

export default function CallectionCard({ imgUrl, subText, title }: CallectionCardProps) {
  return (
    <View style={styles.cardStyle}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FolderIcon />
        <View style={{ backgroundColor: 'white', marginLeft: 20 }}>
          <Title style={styles.title1}>{title}</Title>
          <SubText style={styles.subtext}>{subText}</SubText>
        </View>
      </View>
      <TouchableOpacity style={styles.dotButton}><Icon name="dots-vertical" size={24} /></TouchableOpacity>
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
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  title1: {
    fontSize: 16,
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
    backgroundColor: '#FAFAFB',
    borderRadius: 50
  }
})
