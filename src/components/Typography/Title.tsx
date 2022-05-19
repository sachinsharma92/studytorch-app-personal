import React from 'react'
import { StyleSheet, Text, StyleProp, TextStyle, GestureResponderEvent } from 'react-native'
import { StyleConstants } from '../../styles/style-constants'

interface TitleProps {
    level?: 1 | 2 | 3 | 4;
    children?: string | number | Array<string | number> | any;
    style?: StyleProp<TextStyle>;
    numberOfLines?: number;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export default function Title({ children, style, numberOfLines, level = 4, onPress }: TitleProps) {
    return (
        <Text onPress={onPress} numberOfLines={numberOfLines} style={[styles.main, styles[`h${level}`], style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    main: {
        // fontFamily: 'Inter-Bold',
    },
    h1: {
        color: StyleConstants.COLOR_TEXT,
        fontSize: 36,
        lineHeight: 32,
    },
    h2: {
        color: StyleConstants.COLOR_TEXT,
        fontSize: 22
    },
    h3: {
        color: StyleConstants.COLOR_TEXT,
        fontSize: 16,
    },
    h4: {
        color: StyleConstants.COLOR_TEXT,
        fontSize: 12,
    },
})
