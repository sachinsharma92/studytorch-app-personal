import React from 'react'
import { StyleSheet, Text, StyleProp, TextStyle } from 'react-native'
import { StyleConstants } from '../../styles/style-constants'

interface SubTextProps {
    children?: string | Array<string>;
    style?: StyleProp<TextStyle>;
}

export default function SubText({ children, style }: SubTextProps) {
    return (
        <Text style={[styles.info, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    info: {
        color: StyleConstants.COLOR_TEXT_LIGHT,
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Sofia-Pro-Regular',
    },
})
