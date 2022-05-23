import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../components/Typography/Title';
import SubText from '../components/Typography/SubText';
import ImageDataNot from "../assets/images/study-not-data.svg"

interface EmptyStateProps {
  title?: string,
  subtext?: string,
}

export default function EmptyState({ title, subtext }: EmptyStateProps) {
  return (
    <View style={styles.mainContainer}>
      <View style={{ alignItems: 'center', justifyContent: 'center', }}>
        <ImageDataNot width={130} height={130} />
      </View>
      {title && <Title>{title}</Title>}
      {subtext && <SubText>{subtext}</SubText>}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    fontSize: 18,
    marginBottom: 5
  },
  subtext: {
    fontSize: 14,
  },

})