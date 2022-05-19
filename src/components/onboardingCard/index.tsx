import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Title from '../Typography/Title';
import SubText from '../Typography/SubText';
import { StyleConstants } from '../../styles/style-constants';

// Svg Images Here


interface OnboardingCardProps {
  imgUrl?: any,
}


export default function OnboardingCard({ imgUrl }: OnboardingCardProps) {

  return (
    <View style={styles.cardStyle}>
      <View style={styles.imgBox}>
        <Image
          style={styles.imgStyle}
          source={imgUrl}
        />
      </View>
      <View style={{ paddingVertical: 50, paddingHorizontal: 20, alignItems: 'center', backgroundColor:'white' }}>
        <Title style={styles.title1}>Welcome to <Title style={[styles.title1, { color: StyleConstants.COLOR_PRIMARY }]}>StudyTorch</Title></Title>
        <SubText style={styles.subtext}>I provide essential stuff for your ui designs every tuesday!</SubText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 20,
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_BORDER,
  },
  title1: {
    fontSize: 26,
    marginBottom: 20
  },
  subtext: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 25
  },
  imgBox: {
    height: 240,
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
})
