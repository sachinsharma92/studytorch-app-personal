import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import LogoIcon from "../assets/images/logo.svg"

export default function LogoPrimary() {
  return (
    <View>
      <LogoIcon />
    </View>
  )
}

const styles = StyleSheet.create({
  tinyLogo: {
    height: 200,
    width: 200
  }
})
