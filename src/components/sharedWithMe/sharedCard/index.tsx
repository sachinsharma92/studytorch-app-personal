import React from 'react'
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import Title from '../../Typography/Title';
import SubText from '../../Typography/SubText';
import { StyleConstants } from '../../../styles/style-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FolderIcon from "../../../assets/images/folders/folder1.svg"

interface SharedCardProps {
  dotHandler?: any,
  subText?: string,
  title?: string,
  sharedBy?: string
}

export default function SharedCard({ dotHandler, subText, title, sharedBy }: SharedCardProps) {
  return (
    <View style={styles.cardStyle}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FolderIcon />
          <View style={{ backgroundColor: 'white', marginLeft: 20 }}>
            <Title style={styles.title1}>{title}</Title>
            <SubText style={styles.subtext}>{subText}</SubText>
          </View>
        </View>
        <TouchableOpacity onPress={dotHandler} style={styles.dotButton}><Icon name="dots-vertical" size={24} /></TouchableOpacity>
      </View>

      <View style={styles.sharedBy}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          }}
        />
        <SubText style={styles.subtext}>{sharedBy}</SubText>
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
  sharedBy: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor:StyleConstants.COLOR_BORDER,
    width:'100%',
    marginTop: 20,
    paddingTop: 15
  },
  tinyLogo: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 15
  },
})
