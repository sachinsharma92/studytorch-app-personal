import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Title from '../../Typography/Title';
import SubText from '../../Typography/SubText';
import { StyleConstants } from '../../../styles/style-constants';

// Svg Images Here


interface HomeInfoCardProps {
  imgUrl?: any,
  subText?: string,
  title?: string
}

export default function HomeInfoCard({ imgUrl, subText, title }: HomeInfoCardProps) {
  return (
    <View style={styles.cardStyle}>
      <View style={styles.imgBox}>
        <Image
          style={styles.imgStyle}
          source={imgUrl}
        />
      </View>
      <View style={{ backgroundColor: 'white', marginTop: 10 }}>
        <Title style={styles.title1}>{title}</Title>
        <SubText style={styles.subtext}>{subText}</SubText>
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
    width: '48%',
    padding: 20,
    marginTop: 20
  },
  title1: {
    fontSize: 26,
  },
  subtext: {
    fontSize: 16,
    lineHeight: 25
  },
  imgBox: {
    height: 80,
    width: 80,
    backgroundColor:StyleConstants.COLOR_GRAY_EA,
    borderRadius: 6
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
})
