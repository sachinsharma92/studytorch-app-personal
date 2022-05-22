import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Title from '../../Typography/Title';
import SubText from '../../Typography/SubText';
import { StyleConstants } from '../../../styles/style-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FolderIcon from "../../../assets/images/folders/folder1.svg"
import BottomModal from '../../../common/bottomModal';

interface CallectionCardProps {
  dotHandler?: any,
  subText?: string,
  title?: string
  cardHandler?: () => void;
}

export default function CallectionCard({ dotHandler, subText, title, cardHandler }: CallectionCardProps) {
  const [isCollectionModal, setCollectionModal] = useState(false);
  const collectionToggleModal = () => {
    setCollectionModal(!isCollectionModal);
  };

  return (
    <View style={styles.cardStyle}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={cardHandler} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FolderIcon />
          <View style={{ backgroundColor: 'white', marginLeft: 20 }}>
            <Title style={styles.title1}>{title}</Title>
            <SubText style={styles.subtext}>{subText}</SubText>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={collectionToggleModal} style={styles.dotButton}><Icon name="dots-vertical" size={24} /></TouchableOpacity>

      <BottomModal isVisible={isCollectionModal} onBackdropPress={collectionToggleModal}>
        <TouchableOpacity style={styles.button}>
          <Icon size={18} color={StyleConstants.COLOR_TEXT_LIGHT} name="pencil" />
          <Title style={styles.buttonTitle}>Edit</Title>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon size={18} color={StyleConstants.COLOR_TEXT_LIGHT} name="delete" />
          <Title style={styles.buttonTitle}>Delete</Title>
        </TouchableOpacity>
      </BottomModal>
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
  title2: {
    fontSize: 20,
    marginBottom: 5
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  cardSection: {
    flex: 1
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
  indicatorStyle: {
    backgroundColor: StyleConstants.COLOR_PRIMARY,
    borderTopEndRadius: StyleConstants.BORDER_RADIUS,
    borderTopStartRadius: StyleConstants.BORDER_RADIUS,
    height: 4,
  },
  bannerImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
  imgBanner: {
    height: 150,
    backgroundColor: '#eeeeee'
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonOutline: {
    minHeight: 35,
    borderRadius: 50,
    paddingHorizontal: 10,
    marginRight: 5,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_PRIMARY
  }
})
