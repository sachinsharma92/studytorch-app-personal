import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Title from '../Typography/Title';
import SubText from '../Typography/SubText';
import { StyleConstants } from '../../styles/style-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TagCustom from '../../common/tagCustom';

interface QusestionCardProps {
  dotHandler?: any,
  subText?: string,
  title?: string
  cardHandler?: () => void;
}

export default function QusestionCard({ dotHandler, subText, title, cardHandler }: QusestionCardProps) {
  return (
    <View style={styles.cardStyle}>
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', width: '100%', paddingVertical: 15 }}>
          <TagCustom tagText='Objective MCQ' />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 20 }}>
          <Title style={styles.title1}>{title}</Title>
          <TouchableOpacity onPress={dotHandler} style={{zIndex:1}}><Icon name="dots-vertical" size={24} /></TouchableOpacity>
        </View>
        <SubText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing  elit fringilla vitae...</SubText>
        <View style={styles.buttonSection}>
          <TouchableOpacity onPress={dotHandler} style={styles.editButton}>
            <Icon name="pencil" size={18} color={StyleConstants.COLOR_PRIMARY} />
          </TouchableOpacity>
          <TouchableOpacity onPress={dotHandler} style={styles.readButton}>
            <Icon name="delete-outline" size={18} color={StyleConstants.COLOR_PRIMARY} />
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  title1: {
    fontSize: 16,
    lineHeight: 22
  },
  subtext: {
    fontSize: 14,
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  buttonSection: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20
  },
  editButton: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center'
  },
  readButton: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  }
})
