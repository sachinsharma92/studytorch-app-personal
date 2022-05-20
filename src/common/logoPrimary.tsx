import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import LogoIcon from "../assets/images/logo.svg"
import LogoTheme from "../assets/images/logo-theme.svg"

export default function LogoPrimary(props: any) {
  return (
    <View>
      {props.dark ?
        <LogoTheme />
        :
        <LogoIcon />
      }
    </View>
  )
}

const styles = StyleSheet.create({})
