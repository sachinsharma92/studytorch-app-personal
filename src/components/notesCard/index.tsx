import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Title from '../Typography/Title';
import SubText from '../Typography/SubText';
import { StyleConstants } from '../../styles/style-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TagCustom from '../../common/tagCustom';
import BottomModal from '../../common/bottomModal';

interface NotesCardProps {
  dotHandler?: any,
  cardHandler?: () => void;
  subText?: string,
  title?: string
}

export default function NotesCard({ dotHandler, cardHandler, subText, title }: NotesCardProps) {
  const [isNotesConfirmModal, setNotesConfirmModal] = useState(false);
  const notesToggleModal = () => {
    setNotesConfirmModal(!isNotesConfirmModal);
  };

  return (
    <>
      <View style={styles.cardStyle}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <Title style={styles.title1}>Heading label</Title>
            <TouchableOpacity onPress={notesToggleModal} style={styles.dotButton}><Icon name="dots-vertical" size={24} /></TouchableOpacity>
          </View>
          <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', width: '100%', paddingVertical: 15 }}>
            <TagCustom tagText='Tag 1' />
          </View>
          <SubText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing  elit fringilla vitae...</SubText>

          <View style={styles.buttonSection}>
            <TouchableOpacity  style={styles.editButton}>
              <Icon name="pencil" size={18} color={StyleConstants.COLOR_PRIMARY} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.readButton}>
              <Title style={{ color: StyleConstants.COLOR_PRIMARY }}>Read More</Title>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Confirm Modal Here */}
      <BottomModal isVisible={isNotesConfirmModal} onBackdropPress={notesToggleModal}>
        <TouchableOpacity style={styles.button}>
          <Icon size={18} color={StyleConstants.COLOR_TEXT_LIGHT} name="pencil" />
          <Title style={styles.buttonTitle}>Edit</Title>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon size={18} color={StyleConstants.COLOR_TEXT_LIGHT} name="delete" />
          <Title style={styles.buttonTitle}>Delete</Title>
        </TouchableOpacity>
      </BottomModal>
    </>
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
