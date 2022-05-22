import React from 'react'
import { TouchableOpacity, StyleSheet, View, Image, StyleProp, ViewStyle } from 'react-native'
import Title from '../../Typography/Title';
import SubText from '../../Typography/SubText';
import { StyleConstants } from '../../../styles/style-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CurveLines from "../../../assets/images/illustration/curve-lines.svg"
import StackImage from '../../../common/stackImage';

interface GroupsCardProps {
  dotHandler?: any,
  subText?: string,
  title?: string,
  bgStyle?: any,
}

export default function GroupsCard({ dotHandler, subText, title, bgStyle }: GroupsCardProps) {

  return (
    <View style={[styles.cardStyle, { backgroundColor: bgStyle }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <View>
          <Title style={styles.title1}>{title}</Title>
          <SubText style={styles.subtext}>{subText}</SubText>
        </View>
        <TouchableOpacity onPress={dotHandler} style={styles.dotButton}><Icon name="dots-vertical" size={24} /></TouchableOpacity>
      </View>

      <StackImage/>

      <CurveLines style={styles.curveLines}/>
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
  curveLines: {
    position:'absolute',
    right: 0,
    top: 0,
    opacity: 0.7
  }
})
