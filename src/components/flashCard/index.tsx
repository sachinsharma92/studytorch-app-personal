import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Title from '../Typography/Title';
import SubText from '../Typography/SubText';
import { StyleConstants } from '../../styles/style-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FolderIcon from "../../assets/images/folders/folder1.svg"
import TagCustom from '../../common/tagCustom';

interface FlashCardProps {
  dotHandler?: any,
  subText?: string,
  title?: string
  cardHandler?: () => void;
}

export default function FlashCard({ dotHandler, subText, title, cardHandler }: FlashCardProps) {
  return (
    <View style={styles.cardStyle}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 20 }}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Icon name="lightning-bolt-outline" size={20} color={"white"} style={styles.lightIcon} />
            <Title style={styles.title1}>Heading label</Title>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity onPress={dotHandler}>
              <Icon name="open-in-new" size={20} color={StyleConstants.COLOR_TEXT} />
            </TouchableOpacity>
            <TouchableOpacity onPress={dotHandler} style={[styles.dotButton, {marginLeft: 10}]}><Icon name="dots-vertical" size={24} /></TouchableOpacity>
          </View>
        </View>
        <SubText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing elit fringilla vitae... </SubText>
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
  },
  buttonSection: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 30
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
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginLeft: 15,
  },
  lightIcon: {
    backgroundColor: StyleConstants.COLOR_PRIMARY,
    borderRadius: 50,
    padding: 2,
    marginRight: 10
  }
})
