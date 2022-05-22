import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StyleConstants } from '../styles/style-constants';
import Title from '../components/Typography/Title';

interface StackImageProps {
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

export default function StackImage({ imageStackHandler}: StackImageProps) {
  return (
    <View style={styles.imageStack}>
    {imageStack.map((item) => (
      <Image
        style={[styles.tinyLogo, {left: item.imgLess}]}
        source={{
          uri: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }}
      />
    ))}
    <TouchableOpacity onPress={imageStackHandler} style={styles.count}><Title style={{color:'white', fontSize: 14,}}>+2</Title></TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
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