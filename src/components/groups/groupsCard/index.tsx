import React from 'react'
import { TouchableOpacity, StyleSheet, View, Image, StyleProp, ViewStyle } from 'react-native'
import Title from '../../Typography/Title';
import SubText from '../../Typography/SubText';
import { StyleConstants } from '../../../styles/style-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CurveLines from "../../../assets/images/illustration/curve-lines.svg"

interface GroupsCardProps {
  dotHandler?: any,
  subText?: string,
  title?: string,
  bgStyle?: any,
  imageStackHandler?: () => void,
}

const imageStack = [
  {
    imgLess: 0
  },
  {
    imgLess: -5
  },
  {
    imgLess: -10
  },
  {
    imgLess: -15
  },
  {
    imgLess: -20
  },
]
export default function GroupsCard({ dotHandler, subText, title, bgStyle, imageStackHandler }: GroupsCardProps) {
  return (
    <View style={[styles.cardStyle, { backgroundColor: bgStyle }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <View>
          <Title style={styles.title1}>{title}</Title>
          <SubText style={styles.subtext}>{subText}</SubText>
        </View>
        <TouchableOpacity onPress={dotHandler} style={styles.dotButton}><Icon name="dots-vertical" size={24} /></TouchableOpacity>
      </View>

      <View style={styles.imageStack}>
        {imageStack.map((item) => (
          <Image
            style={[styles.tinyLogo, {left: item.imgLess}]}
            source={{
              uri: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }}
          />
        ))}
        <TouchableOpacity onPress={imageStackHandler} style={styles.count}><Title style={{color:'white', fontSize: 14,}}>+1</Title></TouchableOpacity>
      </View>

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
  imageStack: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 30,
  },
  count: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor:StyleConstants.COLOR_PRIMARY,
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems:'center',
    justifyContent:'center',
    left: -30,
    zIndex: 1
  },
  curveLines: {
    position:'absolute',
    right: 0,
    top: 0,
    opacity: 0.7
  }
})
